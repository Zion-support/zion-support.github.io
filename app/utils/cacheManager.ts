/**
 * Cache Manager Utility
 * Provides intelligent caching strategies for API responses and data
 */

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  refreshInterval?: number; // Auto-refresh interval
  strategy?: 'memory' | 'localStorage' | 'sessionStorage';
  compress?: boolean;
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
  accessCount: number;
  lastAccessed: number;
}

class CacheManager {
  private memoryCache: Map<string, CacheEntry<unknown>> = new Map();
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes
  private readonly MAX_MEMORY_ENTRIES = 100;

  /**
   * Set cache entry
   */
  async set<T>(
    key: string,
    data: T,
    options: CacheOptions = {}
  ): Promise<void> {
    const {
      ttl = this.DEFAULT_TTL,
      strategy = 'memory',
      compress = false,
    } = options;

    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      expiresAt: Date.now() + ttl,
      accessCount: 0,
      lastAccessed: Date.now(),
    };

    switch (strategy) {
      case 'memory':
        this.setMemoryCache(key, entry);
        break;
      case 'localStorage':
        await this.setStorageCache(key, entry, 'localStorage', compress);
        break;
      case 'sessionStorage':
        await this.setStorageCache(key, entry, 'sessionStorage', compress);
        break;
    }
  }

  /**
   * Get cache entry
   */
  async get<T>(
    key: string,
    strategy: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'
  ): Promise<T | null> {
    let entry: CacheEntry<T> | null = null;

    switch (strategy) {
      case 'memory':
        entry = this.getMemoryCache<T>(key);
        break;
      case 'localStorage':
        entry = await this.getStorageCache<T>(key, 'localStorage');
        break;
      case 'sessionStorage':
        entry = await this.getStorageCache<T>(key, 'sessionStorage');
        break;
    }

    if (!entry) {
      return null;
    }

    // Check if expired
    if (Date.now() > entry.expiresAt) {
      await this.delete(key, strategy);
      return null;
    }

    // Update access stats
    entry.accessCount++;
    entry.lastAccessed = Date.now();

    // Update cache with new access stats
    await this.set(key, entry.data, { strategy });

    return entry.data;
  }

  /**
   * Delete cache entry
   */
  async delete(
    key: string,
    strategy: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'
  ): Promise<void> {
    switch (strategy) {
      case 'memory':
        this.memoryCache.delete(key);
        break;
      case 'localStorage':
        if (typeof window !== 'undefined') {
          window.localStorage.removeItem(this.getCacheKey(key));
        }
        break;
      case 'sessionStorage':
        if (typeof window !== 'undefined') {
          window.sessionStorage.removeItem(this.getCacheKey(key));
        }
        break;
    }
  }

  /**
   * Clear all caches
   */
  async clearAll(): Promise<void> {
    this.memoryCache.clear();
    
    if (typeof window !== 'undefined') {
      // Clear only our cache entries
      const prefix = this.getCacheKey('');
      
      // Clear localStorage
      Object.keys(window.localStorage)
        .filter(key => key.startsWith(prefix))
        .forEach(key => window.localStorage.removeItem(key));
      
      // Clear sessionStorage
      Object.keys(window.sessionStorage)
        .filter(key => key.startsWith(prefix))
        .forEach(key => window.sessionStorage.removeItem(key));
    }

    const start = performance.now();
    const value = await fn();
    const duration = performance.now() - start;

    performanceMonitoring.recordCustomMetric(`cache_compute_${key}`, duration, 'ms');

    this.set(key, value, options);
    return value;
  }

  /**
   * Memoize a function with caching
   */
  memoize<TArgs extends unknown[], TResult>(
    fn: (...args: TArgs) => TResult | Promise<TResult>,
    options: CacheOptions & { keyGenerator?: (...args: TArgs) => string } = {}
  ): (...args: TArgs) => Promise<TResult> {
    const { keyGenerator, ...cacheOptions } = options;

    return async (...args: TArgs): Promise<TResult> => {
      const key = keyGenerator
        ? keyGenerator(...args)
        : `memoize_${fn.name}_${JSON.stringify(args)}`;

      return this.getOrSet(key, () => fn(...args), cacheOptions);
    };
  }

  /**
   * Get cache statistics
   */
  getStats(): {
    memorySize: number;
    memoryEntries: Array<{ key: string; size: number; accessCount: number; age: number }>;
    totalSize: number;
  } {
    const entries: Array<{ key: string; size: number; accessCount: number; age: number }> = [];
    let totalSize = 0;

    this.memoryCache.forEach((entry, key) => {
      const size = JSON.stringify(entry.data).length;
      totalSize += size;
      entries.push({
        key,
        size,
        accessCount: entry.accessCount,
        age: Date.now() - entry.timestamp,
      });
    });

    return {
      memorySize: this.memoryCache.size,
      memoryEntries: entries,
      totalSize,
    };
  }

  /**
   * Prefetch and cache data
   */
  async prefetch<T>(
    key: string,
    fetcher: () => Promise<T>,
    options: CacheOptions = {}
  ): Promise<T> {
    const cached = await this.get<T>(key, options.strategy);
    if (cached !== null) {
      return cached;
    }

    const data = await fetcher();
    await this.set(key, data, options);
    return data;
  }

  /**
   * Cache with stale-while-revalidate strategy
   */
  async getWithRevalidate<T>(
    key: string,
    fetcher: () => Promise<T>,
    options: CacheOptions = {}
  ): Promise<T> {
    const cached = await this.get<T>(key, options.strategy);
    
    if (cached !== null) {
      // Return cached data immediately
      // Revalidate in background
      this.revalidateInBackground(key, fetcher, options);
      return cached;
    }

    // No cache, fetch fresh data
    const data = await fetcher();
    await this.set(key, data, options);
    return data;
  }

  /**
   * Private: Revalidate cache in background
   */
  private async revalidateInBackground<T>(
    key: string,
    fetcher: () => Promise<T>,
    options: CacheOptions
  ): Promise<void> {
    try {
      const data = await fetcher();
      await this.set(key, data, options);
    } catch (error) {
      console.error('Background revalidation failed:', error);
    }
  }

  /**
   * Private: Set memory cache
   */
  private setMemoryCache<T>(key: string, entry: CacheEntry<T>): void {
    // Implement LRU eviction if cache is full
    if (this.memoryCache.size >= this.MAX_MEMORY_ENTRIES) {
      const oldestKey = this.findLeastRecentlyUsed();
      if (oldestKey) {
        this.memoryCache.delete(oldestKey);
      }
    }

    this.memoryCache.set(key, entry as CacheEntry<unknown>);
  }

  /**
   * Private: Get memory cache
   */
  private getMemoryCache<T>(key: string): CacheEntry<T> | null {
    const entry = this.memoryCache.get(key);
    return entry ? (entry as CacheEntry<T>) : null;
  }

  /**
   * Private: Set storage cache
   */
  private async setStorageCache<T>(
    key: string,
    entry: CacheEntry<T>,
    storageType: 'localStorage' | 'sessionStorage',
    compress: boolean
  ): Promise<void> {
    if (typeof window === 'undefined') {
      return;
    }

    const storage = storageType === 'localStorage' ? window.localStorage : window.sessionStorage;
    const cacheKey = this.getCacheKey(key);

    try {
      let dataToStore = JSON.stringify(entry);
      
      // Simple compression using native browser API
      if (compress && 'CompressionStream' in window) {
        // In a real implementation, you'd use compression
        // For now, we'll just store as-is
      }

      storage.setItem(cacheKey, dataToStore);
    } catch (error) {
      console.error('Failed to set storage cache:', error);
      // If storage is full, try to clear old entries
      this.clearExpiredStorageEntries(storage);
    }
  }

  /**
   * Private: Get storage cache
   */
  private async getStorageCache<T>(
    key: string,
    storageType: 'localStorage' | 'sessionStorage'
  ): Promise<CacheEntry<T> | null> {
    if (typeof window === 'undefined') {
      return null;
    }

    const storage = storageType === 'localStorage' ? window.localStorage : window.sessionStorage;
    const cacheKey = this.getCacheKey(key);

    try {
      const data = storage.getItem(cacheKey);
      if (!data) {
        return null;
      }

      return JSON.parse(data) as CacheEntry<T>;
    } catch (error) {
      console.error('Failed to get storage cache:', error);
      return null;
    }
  }

  /**
   * Private: Find least recently used key
   */
  private findLeastRecentlyUsed(): string | null {
    let oldestKey: string | null = null;
    let oldestTime = Infinity;

    this.memoryCache.forEach((entry, key) => {
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed;
        oldestKey = key;
      }
    });

    return oldestKey;
  }

  /**
   * Private: Clear expired storage entries
   */
  private clearExpiredStorageEntries(storage: Storage): void {
    const prefix = this.getCacheKey('');
    const now = Date.now();

    Object.keys(storage)
      .filter(key => key.startsWith(prefix))
      .forEach(key => {
        try {
          const data = storage.getItem(key);
          if (data) {
            const entry = JSON.parse(data) as CacheEntry<unknown>;
            if (now > entry.expiresAt) {
              storage.removeItem(key);
            }
          }
        } catch (error) {
          // Invalid entry, remove it
          storage.removeItem(key);
        }
      });
  }

  /**
   * Private: Get cache key with prefix
   */
  private getCacheKey(key: string): string {
    return `zion_cache_${key}`;
  }
}

// Singleton instance
const cacheManager = new CacheManager();

// Export convenience functions
export const setCache = <T>(key: string, data: T, options?: CacheOptions) =>
  cacheManager.set(key, data, options);

export const getCache = <T>(key: string, strategy?: 'memory' | 'localStorage' | 'sessionStorage') =>
  cacheManager.get<T>(key, strategy);

export const deleteCache = (key: string, strategy?: 'memory' | 'localStorage' | 'sessionStorage') =>
  cacheManager.delete(key, strategy);

export const clearAllCache = () =>
  cacheManager.clearAll();

export const prefetchData = <T>(key: string, fetcher: () => Promise<T>, options?: CacheOptions) =>
  cacheManager.prefetch(key, fetcher, options);

export const getCacheWithRevalidate = <T>(
  key: string,
  fetcher: () => Promise<T>,
  options?: CacheOptions
) => cacheManager.getWithRevalidate(key, fetcher, options);

export const getCacheStats = () =>
  cacheManager.getStats();

export default cacheManager;
