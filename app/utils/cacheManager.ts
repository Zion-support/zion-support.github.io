/**
 * Cache Manager
 * Provides in-memory and localStorage caching with TTL support
 */

import { logger } from './logger';

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  storage?: 'memory' | 'localStorage' | 'sessionStorage';
  compress?: boolean;
}

export interface CacheEntry<T> {
  value: T;
  timestamp: number;
  ttl: number;
}

class CacheManager {
  private static instance: CacheManager;
  private memoryCache: Map<string, CacheEntry<unknown>> = new Map();
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes
  private cleanupInterval: NodeJS.Timeout | null = null;

  private constructor() {
    this.startCleanup();
  }

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  /**
   * Start periodic cleanup of expired entries
   */
  private startCleanup(): void {
    if (typeof window === 'undefined') return;

    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 60 * 1000); // Run every minute
  }

  /**
   * Stop cleanup interval
   */
  stopCleanup(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
  }

  /**
   * Remove expired entries
   */
  private cleanup(): void {
    const now = Date.now();
    
    // Clean memory cache
    for (const [key, entry] of this.memoryCache.entries()) {
      if (this.isExpired(entry, now)) {
        this.memoryCache.delete(key);
      }
    }

    // Clean localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      const keysToRemove: string[] = [];
      
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('cache_')) {
          try {
            const item = localStorage.getItem(key);
            if (item) {
              const entry = JSON.parse(item) as CacheEntry<unknown>;
              if (this.isExpired(entry, now)) {
                keysToRemove.push(key);
              }
            }
          } catch {
            keysToRemove.push(key);
          }
        }
      }

      keysToRemove.forEach(key => localStorage.removeItem(key));
    }

    logger.debug('Cache cleanup completed');
  }

  /**
   * Check if cache entry is expired
   */
  private isExpired(entry: CacheEntry<unknown>, now = Date.now()): boolean {
    return now - entry.timestamp > entry.ttl;
  }

  /**
   * Get storage key with prefix
   */
  private getStorageKey(key: string): string {
    return `cache_${key}`;
  }

  /**
   * Set cache entry
   */
  set<T>(
    key: string,
    value: T,
    options: CacheOptions = {}
  ): void {
    const {
      ttl = this.DEFAULT_TTL,
      storage = 'memory',
    } = options;

    const entry: CacheEntry<T> = {
      value,
      timestamp: Date.now(),
      ttl,
    };

    if (storage === 'memory') {
      this.memoryCache.set(key, entry);
    } else if (storage === 'localStorage' && typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(
          this.getStorageKey(key),
          JSON.stringify(entry)
        );
      } catch (error) {
        logger.error('Failed to set localStorage cache', error);
        // Fallback to memory cache
        this.memoryCache.set(key, entry);
      }
    } else if (storage === 'sessionStorage' && typeof window !== 'undefined' && window.sessionStorage) {
      try {
        sessionStorage.setItem(
          this.getStorageKey(key),
          JSON.stringify(entry)
        );
      } catch (error) {
        logger.error('Failed to set sessionStorage cache', error);
        // Fallback to memory cache
        this.memoryCache.set(key, entry);
      }
    }
  }

  /**
   * Get cache entry
   */
  get<T>(key: string, storage: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'): T | null {
    let entry: CacheEntry<T> | null = null;

    if (storage === 'memory') {
      entry = this.memoryCache.get(key) as CacheEntry<T> | undefined || null;
    } else if (storage === 'localStorage' && typeof window !== 'undefined' && window.localStorage) {
      try {
        const item = localStorage.getItem(this.getStorageKey(key));
        if (item) {
          entry = JSON.parse(item) as CacheEntry<T>;
        }
      } catch (error) {
        logger.error('Failed to get localStorage cache', error);
      }
    } else if (storage === 'sessionStorage' && typeof window !== 'undefined' && window.sessionStorage) {
      try {
        const item = sessionStorage.getItem(this.getStorageKey(key));
        if (item) {
          entry = JSON.parse(item) as CacheEntry<T>;
        }
      } catch (error) {
        logger.error('Failed to get sessionStorage cache', error);
      }
    }

    if (!entry) {
      return null;
    }

    if (this.isExpired(entry)) {
      this.delete(key, storage);
      return null;
    }

    return entry.value;
  }

  /**
   * Check if key exists in cache
   */
  has(key: string, storage: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'): boolean {
    return this.get(key, storage) !== null;
  }

  /**
   * Delete cache entry
   */
  delete(key: string, storage: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'): void {
    if (storage === 'memory') {
      this.memoryCache.delete(key);
    } else if (storage === 'localStorage' && typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(this.getStorageKey(key));
    } else if (storage === 'sessionStorage' && typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem(this.getStorageKey(key));
    }
  }

  /**
   * Clear all cache entries
   */
  clear(storage: 'memory' | 'localStorage' | 'sessionStorage' | 'all' = 'all'): void {
    if (storage === 'memory' || storage === 'all') {
      this.memoryCache.clear();
    }

    if ((storage === 'localStorage' || storage === 'all') && typeof window !== 'undefined' && window.localStorage) {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('cache_')) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key));
    }

    if ((storage === 'sessionStorage' || storage === 'all') && typeof window !== 'undefined' && window.sessionStorage) {
      const keysToRemove: string[] = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith('cache_')) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => sessionStorage.removeItem(key));
    }

    logger.info('Cache cleared', { storage });
  }

  /**
   * Get or set with function
   */
  async getOrSet<T>(
    key: string,
    fn: () => Promise<T> | T,
    options: CacheOptions = {}
  ): Promise<T> {
    const storage = options.storage || 'memory';
    const cached = this.get<T>(key, storage);

    if (cached !== null) {
      return cached;
    }

    const value = await fn();
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
    localStorageSize: number;
    sessionStorageSize: number;
  } {
    let localStorageSize = 0;
    let sessionStorageSize = 0;

    if (typeof window !== 'undefined') {
      if (window.localStorage) {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('cache_')) {
            localStorageSize++;
          }
        }
      }

      if (window.sessionStorage) {
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i);
          if (key && key.startsWith('cache_')) {
            sessionStorageSize++;
          }
        }
      }
    }

    return {
      memorySize: this.memoryCache.size,
      localStorageSize,
      sessionStorageSize,
    };
  }
}

export const cacheManager = CacheManager.getInstance();
export default CacheManager;
