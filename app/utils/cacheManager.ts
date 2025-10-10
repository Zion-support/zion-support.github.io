'use client'
/**
 * Cache Manager Utility
 * Provides centralized cache management for the application
 */
<<<<<<< HEAD
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
  private stats: CacheStats = {
    hits: 0,
    misses: 0,
    hitRate: 0,
    count: 0,
    entries: 0
  };
  private config: Required<CacheConfig>;

  constructor(config: CacheConfig = {}) {
    this.config = {
      storage: config.storage || CacheStorage.Memory,
      defaultTTL: config.defaultTTL || 5 * 60 * 1000 // 5 minutes
    };
  }

  /**
   * Set a value in the cache
   */
  set(key: string, value: T, ttl?: number): void {
=======

export interface CacheConfig {
  ttl: number;
  maxSize: number;
  storage: 'memory' | 'localStorage' | 'sessionStorage';
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
  key: string;
}

class CacheManager {
  private caches: Map<string, Map<string, CacheEntry<any>>> = new Map();
  private config: CacheConfig;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      ttl: config.ttl || 5 * 60 * 1000, // 5 minutes default
      maxSize: config.maxSize || 100,
      storage: config.storage || 'memory'
    };
  }

  private getCache(cacheName: string): Map<string, CacheEntry<any>> {
    if (!this.caches.has(cacheName)) {
      this.caches.set(cacheName, new Map());
    }
    return this.caches.get(cacheName)!;
  }

  private isExpired(entry: CacheEntry<any>): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }

  private evictOldest(cacheName: string): void {
    const cache = this.getCache(cacheName);
    if (cache.size >= this.config.maxSize) {
      const oldestKey = cache.keys().next().value;
      if (oldestKey) {
        cache.delete(oldestKey);
      }
    }
  }

  set<T>(cacheName: string, key: string, data: T, ttl?: number): void {
    const cache = this.getCache(cacheName);
    this.evictOldest(cacheName);
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
<<<<<<< HEAD
      ttl: ttl || this.config.defaultTTL
    };

    this.cache.set(key, entry);
    this.stats.entries = this.cache.size;

    // Save to persistent storage if needed
    if (this.config.storage !== CacheStorage.Memory) {
      this.saveToStorage();
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

    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      this.stats.misses++;
      this.stats.entries = this.cache.size;
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
=======
      ttl: ttl || this.config.ttl,
      key
    };

    cache.set(key, entry);
  }

  get<T>(cacheName: string, key: string): T | null {
    const cache = this.getCache(cacheName);
    const entry = cache.get(key);
    
    if (!entry) {
      return null;
    }

    if (this.isExpired(entry)) {
      cache.delete(key);
      return null;
    }

    return entry.data as T;
  }

  has(cacheName: string, key: string): boolean {
    const cache = this.getCache(cacheName);
    const entry = cache.get(key);
    return entry ? !this.isExpired(entry) : false;
  }

  delete(cacheName: string, key: string): boolean {
    const cache = this.getCache(cacheName);
    return cache.delete(key);
  }

  clear(cacheName?: string): void {
    if (cacheName) {
      const cache = this.getCache(cacheName);
      cache.clear();
    } else {
      this.caches.clear();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    }

    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      this.stats.entries = this.cache.size;
      return false;
    }

    return true;
  }

<<<<<<< HEAD
  /**
   * Delete a key from the cache
   */
  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.stats.entries = this.cache.size;
      
      // Save to persistent storage if needed
      if (this.config.storage !== CacheStorage.Memory) {
        this.saveToStorage();
      }
    }
    return deleted;
  }

  /**
   * Clear all entries from the cache
   */
  clear(): void {
    this.cache.clear();
    this.stats.entries = 0;
    
    // Clear persistent storage if needed
    if (this.config.storage !== CacheStorage.Memory) {
      this.clearStorage();
    }
  }

  /**
   * Get all keys in the cache
   */
  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  /**
   * Get cache statistics
   */
  getStats(): CacheStats {
    return { ...this.stats };
  }

  /**
   * Get cache size
   */
  size(): number {
    return this.cache.size;
  }

  /**
   * Clean expired entries
   */
  cleanExpired(): number {
    const now = Date.now();
    let cleaned = 0;
    
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
        cleaned++;
      }
    }
    
    this.stats.entries = this.cache.size;
    
    // Save to persistent storage if needed
    if (this.config.storage !== CacheStorage.Memory && cleaned > 0) {
      this.saveToStorage();
    }
    
    return cleaned;
  }

  /**
   * Update hit rate
   */
  private updateHitRate(): void {
    const total = this.stats.hits + this.stats.misses;
    this.stats.hitRate = total > 0 ? this.stats.hits / total : 0;
  }

  /**
   * Save cache to persistent storage
   */
  private saveToStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const storage = this.getStorage();
      if (storage) {
        const data = {
          entries: Object.fromEntries(this.cache),
          stats: this.stats,
          timestamp: Date.now()
        };
        storage.setItem('cache-manager', JSON.stringify(data));
      }
    } catch (error) {
      }
  }

  /**
   * Load cache from persistent storage
   */
  private loadFromStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const storage = this.getStorage();
      if (storage) {
        const data = storage.getItem('cache-manager');
        if (data) {
          const parsed = JSON.parse(data);
          this.cache = new Map(Object.entries(parsed.entries || {}));
          this.stats = { ...this.stats, ...parsed.stats };
        }
      }
    } catch (error) {
      }
  }

  /**
   * Clear persistent storage
   */
  private clearStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const storage = this.getStorage();
      if (storage) {
        storage.removeItem('cache-manager');
      }
    } catch (error) {
      }
  }

  /**
   * Get the appropriate storage object
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
=======
  size(cacheName?: string): number {
    if (cacheName) {
      const cache = this.getCache(cacheName);
      return cache.size;
    }
    return Array.from(this.caches.values()).reduce((total, cache) => total + cache.size, 0);
  }

  keys(cacheName?: string): string[] {
    if (cacheName) {
      const cache = this.getCache(cacheName);
      return Array.from(cache.keys());
    }
    return Array.from(this.caches.keys());
  }

  cleanup(): void {
    for (const [cacheName, cache] of this.caches.entries()) {
      const expiredKeys: string[] = [];
      
      for (const [key, entry] of cache.entries()) {
        if (this.isExpired(entry)) {
          expiredKeys.push(key);
        }
      }
      
      expiredKeys.forEach(key => cache.delete(key));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    }
  }
}

<<<<<<< HEAD
// Create singleton instances for different use cases
export const memoryCache = new CacheManager({ storage: CacheStorage.Memory });
export const localStorageCache = new CacheManager({ 
  storage: CacheStorage.LocalStorage, 
  defaultTTL: 30 * 60 * 1000 // 30 minutes
});
export const sessionStorageCache = new CacheManager({ 
  storage: CacheStorage.SessionStorage, 
  defaultTTL: 60 * 60 * 1000 // 1 hour
});
=======
// Create singleton instance
export const cacheManager = new CacheManager();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2

export default CacheManager;