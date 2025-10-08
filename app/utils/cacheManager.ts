/**
 * Cache Manager
 * Provides in-memory and localStorage caching with TTL support
 */

import React from 'react';
import { logger } from './logger';
import { performanceMonitoring } from './performanceMonitoring';

export enum CacheStorage {
  Memory = 'memory',
  LocalStorage = 'localStorage',
  SessionStorage = 'sessionStorage',
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

export class CacheManager {
  private memoryCache: Map<string, CacheEntry<unknown>> = new Map();
  private readonly defaultTTL: number;
  private readonly storage: CacheStorage;
  private cleanupInterval: NodeJS.Timeout | null = null;
  private stats = { hits: 0, misses: 0 };

  constructor(config: CacheConfig = {}) {
    this.defaultTTL = config.defaultTTL || 5 * 60 * 1000; // 5 minutes
    this.storage = config.storage || CacheStorage.Memory;
    this.startCleanup();
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
    if (entry.ttl === Infinity) return false;
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
    options: { ttl?: number } = {}
  ): void {
    const ttl = options.ttl !== undefined ? options.ttl : this.defaultTTL;

    const entry: CacheEntry<T> = {
      value,
      timestamp: Date.now(),
      ttl,
    };

    performanceMonitoring.recordCustomMetric(`cache_set_${key}`, 1, 'count');

    if (this.storage === CacheStorage.Memory) {
      this.memoryCache.set(key, entry);
    } else if (this.storage === CacheStorage.LocalStorage && typeof window !== 'undefined' && window.localStorage) {
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
    } else if (this.storage === CacheStorage.SessionStorage && typeof window !== 'undefined' && window.sessionStorage) {
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
  get<T>(key: string): T | undefined {
    performanceMonitoring.recordCustomMetric(`cache_get_${key}`, 1, 'count');

    let entry: CacheEntry<T> | null = null;

    if (this.storage === CacheStorage.Memory) {
      entry = this.memoryCache.get(key) as CacheEntry<T> | undefined || null;
    } else if (this.storage === CacheStorage.LocalStorage && typeof window !== 'undefined' && window.localStorage) {
      try {
        const item = localStorage.getItem(this.getStorageKey(key));
        if (item) {
          entry = JSON.parse(item) as CacheEntry<T>;
        }
      } catch (error) {
        logger.error('Failed to get localStorage cache', error);
      }
    } else if (this.storage === CacheStorage.SessionStorage && typeof window !== 'undefined' && window.sessionStorage) {
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
      this.stats.misses++;
      performanceMonitoring.recordCustomMetric(`cache_miss_${key}`, 1, 'count');
      return undefined;
    }

    if (this.isExpired(entry)) {
      this.delete(key);
      this.stats.misses++;
      performanceMonitoring.recordCustomMetric(`cache_expired_${key}`, 1, 'count');
      return undefined;
    }

    this.stats.hits++;
    performanceMonitoring.recordCustomMetric(`cache_hit_${key}`, 1, 'count');
    return entry.value;
  }

  /**
   * Check if key exists and is not expired
   */
  has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  /**
   * Delete a cache entry
   */
  delete(key: string): void {
    if (this.storage === CacheStorage.Memory) {
      this.memoryCache.delete(key);
    } else if (this.storage === CacheStorage.LocalStorage && typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(this.getStorageKey(key));
    } else if (this.storage === CacheStorage.SessionStorage && typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem(this.getStorageKey(key));
    }
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    if (this.storage === CacheStorage.Memory) {
      this.memoryCache.clear();
    }

    if (this.storage === CacheStorage.LocalStorage && typeof window !== 'undefined' && window.localStorage) {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('cache_')) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key));
    }

    if (this.storage === CacheStorage.SessionStorage && typeof window !== 'undefined' && window.sessionStorage) {
      const keysToRemove: string[] = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith('cache_')) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => sessionStorage.removeItem(key));
    }

    logger.info('Cache cleared', 'CacheManager', { storage: this.storage });
  }

  /**
   * Get or set with function (handles both sync and async)
   */
  getOrSet<T>(
    key: string,
    fn: () => T | Promise<T>,
    options: { ttl?: number } = {}
  ): T | Promise<T> {
    const cached = this.get<T>(key);

    if (cached !== undefined) {
      return cached;
    }

    const start = performance.now();
    const value = fn();
    const duration = performance.now() - start;

    performanceMonitoring.recordCustomMetric(`cache_compute_${key}`, duration, 'ms');

    // Handle both sync and async values
    if (value instanceof Promise) {
      return value.then(resolvedValue => {
        this.set(key, resolvedValue, options);
        return resolvedValue;
      });
    }

    this.set(key, value, options);
    return value;
  }

  /**
   * Get or set with async function
   */
  async getOrSetAsync<T>(
    key: string,
    fn: () => Promise<T> | T,
    options: { ttl?: number } = {}
  ): Promise<T> {
    const cached = this.get<T>(key);

    if (cached !== undefined) {
      return cached;
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
    fn: (...args: TArgs) => TResult,
    options: { ttl?: number; keyGenerator?: (...args: TArgs) => string } = {}
  ): (...args: TArgs) => TResult {
    const { keyGenerator, ...cacheOptions } = options;

    return (...args: TArgs): TResult => {
      const key = keyGenerator
        ? keyGenerator(...args)
        : `memoize_${fn.name}_${JSON.stringify(args)}`;

      return this.getOrSet(key, () => fn(...args), cacheOptions) as TResult;
    };
  }

  /**
   * Get cache statistics
   */
  getStatistics(): CacheStats {
    const total = this.stats.hits + this.stats.misses;
    return {
      hits: this.stats.hits,
      misses: this.stats.misses,
      hitRate: total > 0 ? this.stats.hits / total : 0,
      count: this.memoryCache.size,
      entries: this.memoryCache.size,
    };
  }

  /**
   * Get cache count
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

export const cacheManager = new CacheManager();
export default CacheManager;
