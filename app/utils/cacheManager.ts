'use client';

/**
 * Cache Manager Utility
 * Provides centralized cache management for the application
 */
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
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
<<<<<<< HEAD
=======
  private config: Required<CacheConfig>;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
  private stats: CacheStats = {
    hits: 0,
    misses: 0,
    hitRate: 0,
    count: 0,
    entries: 0
  };
<<<<<<< HEAD
  private config: Required<CacheConfig>;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367

  constructor(config: CacheConfig = {}) {
    this.config = {
      storage: config.storage || CacheStorage.Memory,
      defaultTTL: config.defaultTTL || 5 * 60 * 1000 // 5 minutes
    };
  }

  /**
   * Set a value in the cache
   */
<<<<<<< HEAD
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
=======
  set(key: string, value: T, options?: CacheOptions): void {
    const ttl = options?.ttl || this.config.defaultTTL;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
<<<<<<< HEAD
<<<<<<< HEAD
      ttl: ttl || this.config.defaultTTL
=======
      ttl
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    };

    this.cache.set(key, entry);
    this.stats.entries = this.cache.size;

<<<<<<< HEAD
    // Save to persistent storage if needed
    if (this.config.storage !== CacheStorage.Memory) {
      this.saveToStorage();
=======
    // Store in persistent storage if configured
    if (this.config.storage !== CacheStorage.Memory) {
      this.persistToStorage(key, entry);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    }
  }

  /**
   * Get a value from the cache
   */
  get(key: string): T | null {
    const entry = this.cache.get(key);
<<<<<<< HEAD
    
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    if (!entry) {
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

<<<<<<< HEAD
    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      this.stats.misses++;
      this.stats.entries = this.cache.size;
=======
    // Check if expired
    if (this.isExpired(entry)) {
      this.cache.delete(key);
      this.stats.misses++;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
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
<<<<<<< HEAD
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
=======
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
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
<<<<<<< HEAD
    
    // Clear persistent storage if needed
=======
    this.stats.hits = 0;
    this.stats.misses = 0;
    this.stats.hitRate = 0;

    // Clear persistent storage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    if (this.config.storage !== CacheStorage.Memory) {
      this.clearStorage();
    }
  }

  /**
<<<<<<< HEAD
   * Get all keys in the cache
   */
  keys(): string[] {
    return Array.from(this.cache.keys());
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
  }

  /**
   * Get cache statistics
   */
  getStats(): CacheStats {
    return { ...this.stats };
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
      }
    } catch (error) {
      console.warn('Failed to remove from storage:', error);
    }
<<<<<<< HEAD
    
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
    
=======
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    switch (this.config.storage) {
      case CacheStorage.LocalStorage:
        return window.localStorage;
      case CacheStorage.SessionStorage:
        return window.sessionStorage;
      default:
        return null;
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    }
  }
}

<<<<<<< HEAD
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
=======
// Create singleton instances
export const memoryCache = new CacheManager({ storage: CacheStorage.Memory });
export const localStorageCache = new CacheManager({ storage: CacheStorage.LocalStorage });
export const sessionStorageCache = new CacheManager({ storage: CacheStorage.SessionStorage });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367

export default CacheManager;