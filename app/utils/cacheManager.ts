'use client';

/**
 * Cache Manager
 * Provides in-memory and localStorage caching with TTL support
 */

export enum CacheStorage {
  Memory = 'memory',
  LocalStorage = 'localStorage',
  SessionStorage = 'sessionStorage'
}

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  storage?: CacheStorage;
  compress?: boolean;
}

export interface CacheConfig {
  storage?: CacheStorage;
  defaultTTL?: number;
}

export interface CacheEntry<T> {
  value: T;
  timestamp: number;
  ttl: number;
}

export interface CacheStats {
  hits: number;
  misses: number;
  hitRate: number;
  count: number;
  entries: number;
}

export class CacheManager<T = unknown> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private config: Required<CacheConfig>;
  private stats: CacheStats = {
    hits: 0,
    misses: 0,
    hitRate: 0,
    count: 0,
    entries: 0
  };

  constructor(config: CacheConfig = {}) {
    this.config = {
      storage: config.storage || CacheStorage.Memory,
      defaultTTL: config.defaultTTL || 5 * 60 * 1000 // 5 minutes
    };
  }

  /**
   * Set a value in the cache
   */
  set(key: string, value: T, options?: CacheOptions): void {
    const ttl = options?.ttl || this.config.defaultTTL;
    const entry: CacheEntry<T> = {
      value,
      timestamp: Date.now(),
      ttl
    };

    this.cache.set(key, entry);
    this.stats.entries = this.cache.size;

    // Store in persistent storage if configured
    if (this.config.storage !== CacheStorage.Memory) {
      this.persistToStorage(key, entry);
    }
  }

  /**
   * Get a value from the cache
   */
  get(key: string): T | null {
    const entry = this.cache.get(key);

    if (!entry) {
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

    // Check if expired
    if (this.isExpired(entry)) {
      this.cache.delete(key);
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

    this.stats.hits++;
    this.updateHitRate();
    return entry.value;
  }

  /**
   * Check if a key exists in the cache
   */
  has(key: string): boolean {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return false;
    }

    // Check if expired
    if (this.isExpired(entry)) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  /**
   * Delete a value from the cache
   */
  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.stats.entries = this.cache.size;
      
      // Remove from persistent storage
      if (this.config.storage !== CacheStorage.Memory) {
        this.removeFromStorage(key);
      }
    }
    return deleted;
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
    this.stats.entries = 0;
    this.stats.hits = 0;
    this.stats.misses = 0;
    this.stats.hitRate = 0;

    // Clear persistent storage
    if (this.config.storage !== CacheStorage.Memory) {
      this.clearStorage();
    }
  }

  /**
   * Get all cache keys
   */
  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  /**
   * Get all cache values
   */
  values(): T[] {
    return Array.from(this.cache.values()).map(entry => entry.value);
  }

  /**
   * Get all cache entries
   */
  entries(): Array<[string, T]> {
    return Array.from(this.cache.entries()).map(([key, entry]) => [key, entry.value]);
  }

  /**
   * Get cache statistics
   */
  getStats(): CacheStats {
    return { ...this.stats };
  }

  /**
   * Clean expired entries
   */
  cleanExpired(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, entry] of this.cache.entries()) {
      if (this.isExpired(entry)) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.cache.delete(key));
    this.stats.entries = this.cache.size;
  }

  /**
   * Check if an entry is expired
   */
  private isExpired(entry: CacheEntry<T>): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }

  /**
   * Update hit rate
   */
  private updateHitRate(): void {
    const total = this.stats.hits + this.stats.misses;
    this.stats.hitRate = total > 0 ? this.stats.hits / total : 0;
  }

  /**
   * Persist entry to storage
   */
  private persistToStorage(key: string, entry: CacheEntry<T>): void {
    if (typeof window === 'undefined') return;

    try {
      const storage = this.getStorage();
      if (storage) {
        const data = {
          key,
          entry: {
            value: entry.value,
            timestamp: entry.timestamp,
            ttl: entry.ttl
          }
        };
        storage.setItem(`cache_${key}`, JSON.stringify(data));
      }
    } catch (error) {
      console.warn('Failed to persist to storage:', error);
    }
  }

  /**
   * Remove entry from storage
   */
  private removeFromStorage(key: string): void {
    if (typeof window === 'undefined') return;

    try {
      const storage = this.getStorage();
      if (storage) {
        storage.removeItem(`cache_${key}`);
      }
    } catch (error) {
      console.warn('Failed to remove from storage:', error);
    }
  }

  /**
   * Clear storage
   */
  private clearStorage(): void {
    if (typeof window === 'undefined') return;

    try {
      const storage = this.getStorage();
      if (storage) {
        const keys = Object.keys(storage).filter(key => key.startsWith('cache_'));
        keys.forEach(key => storage.removeItem(key));
      }
    } catch (error) {
      console.warn('Failed to clear storage:', error);
    }
  }

  /**
   * Get storage instance
   */
  private getStorage(): Storage | null {
    if (typeof window === 'undefined') return null;

    switch (this.config.storage) {
      case CacheStorage.LocalStorage:
        return window.localStorage;
      case CacheStorage.SessionStorage:
        return window.sessionStorage;
      default:
        return null;
    }
  }

  /**
   * Load from storage on initialization
   */
  loadFromStorage(): void {
    if (typeof window === 'undefined') return;
    if (this.config.storage === CacheStorage.Memory) return;

    try {
      const storage = this.getStorage();
      if (!storage) return;

      const keys = Object.keys(storage).filter(key => key.startsWith('cache_'));
      
      keys.forEach(key => {
        try {
          const data = JSON.parse(storage.getItem(key) || '{}');
          if (data.key && data.entry) {
            this.cache.set(data.key, data.entry);
          }
        } catch (error) {
          // Remove corrupted entry
          storage.removeItem(key);
        }
      });

      this.stats.entries = this.cache.size;
    } catch (error) {
      console.warn('Failed to load from storage:', error);
    }
  }
}

// Create singleton instances
export const memoryCache = new CacheManager({ storage: CacheStorage.Memory });
export const localStorageCache = new CacheManager({ storage: CacheStorage.LocalStorage });
export const sessionStorageCache = new CacheManager({ storage: CacheStorage.SessionStorage });

export default CacheManager;