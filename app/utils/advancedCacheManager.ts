/**
 * Advanced Cache Manager
 * Generated: October 8, 2025
 * 
 * Multi-tier caching system with LRU eviction and TTL support
 */

import { logger } from './enhancedLogger';

export interface CacheEntry<T> {
  data: T;
  expiry: number;
  accessCount: number;
  lastAccessed: number;
  size: number;
}

export interface CacheConfig {
  maxSize: number; // Maximum cache size in bytes
  maxItems: number; // Maximum number of items
  defaultTTL: number; // Default time to live in ms
  enableCompression: boolean;
  enableStats: boolean;
}

export class AdvancedCacheManager {
  private cache: Map<string, CacheEntry<any>>;
  private config: CacheConfig;
  private stats: {
    hits: number;
    misses: number;
    evictions: number;
    sets: number;
  };

  constructor(config: Partial<CacheConfig> = {}) {
    this.cache = new Map();
    this.config = {
      maxSize: 10 * 1024 * 1024, // 10 MB
      maxItems: 1000,
      defaultTTL: 3600000, // 1 hour
      enableCompression: false,
      enableStats: true,
      ...config,
    };
    this.stats = {
      hits: 0,
      misses: 0,
      evictions: 0,
      sets: 0,
    };
  }

  /**
   * Set cache entry with TTL
   */
  set<T>(key: string, data: T, ttl?: number): void {
    const expiry = Date.now() + (ttl || this.config.defaultTTL);
    const size = this.estimateSize(data);

    // Check if cache is full
    if (this.cache.size >= this.config.maxItems) {
      this.evictLRU();
    }

    const entry: CacheEntry<T> = {
      data,
      expiry,
      accessCount: 0,
      lastAccessed: Date.now(),
      size,
    };

    this.cache.set(key, entry);
    this.stats.sets++;

    logger.debug('Cache: Set entry', { key, size, ttl });
  }

  /**
   * Get cache entry
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);

    if (!entry) {
      this.stats.misses++;
      return null;
    }

    // Check if expired
    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      this.stats.misses++;
      logger.debug('Cache: Entry expired', { key });
      return null;
    }

    // Update access stats
    entry.accessCount++;
    entry.lastAccessed = Date.now();
    this.stats.hits++;

    logger.debug('Cache: Hit', { key, accessCount: entry.accessCount });
    return entry.data as T;
  }

  /**
   * Check if key exists and is valid
   */
  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;
    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      return false;
    }
    return true;
  }

  /**
   * Delete cache entry
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * Clear all cache
   */
  clear(): void {
    this.cache.clear();
    logger.info('Cache: Cleared all entries');
  }

  /**
   * Evict least recently used entry
   */
  private evictLRU(): void {
    let lruKey: string | null = null;
    let lruTime = Infinity;

    this.cache.forEach((entry, key) => {
      if (entry.lastAccessed < lruTime) {
        lruTime = entry.lastAccessed;
        lruKey = key;
      }
    });

    if (lruKey) {
      this.cache.delete(lruKey);
      this.stats.evictions++;
      logger.debug('Cache: Evicted LRU entry', { key: lruKey });
    }
  }

  /**
   * Estimate data size
   */
  private estimateSize(data: any): number {
    const str = JSON.stringify(data);
    return new Blob([str]).size;
  }

  /**
   * Get cache statistics
   */
  getStats() {
    const hitRate = this.stats.hits / (this.stats.hits + this.stats.misses) || 0;
    const totalSize = Array.from(this.cache.values()).reduce(
      (sum, entry) => sum + entry.size,
      0
    );

    return {
      ...this.stats,
      hitRate: `${(hitRate * 100).toFixed(2)}%`,
      size: this.cache.size,
      totalSize,
      totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
    };
  }

  /**
   * Prune expired entries
   */
  pruneExpired(): number {
    const now = Date.now();
    let prunedCount = 0;

    this.cache.forEach((entry, key) => {
      if (now > entry.expiry) {
        this.cache.delete(key);
        prunedCount++;
      }
    });

    if (prunedCount > 0) {
      logger.info('Cache: Pruned expired entries', { count: prunedCount });
    }

    return prunedCount;
  }

  /**
   * Get or set cache entry
   */
  async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number
  ): Promise<T> {
    const cached = this.get<T>(key);
    if (cached !== null) {
      return cached;
    }

    const data = await fetcher();
    this.set(key, data, ttl);
    return data;
  }

  /**
   * Invalidate cache by pattern
   */
  invalidatePattern(pattern: string): number {
    let invalidated = 0;

    this.cache.forEach((_, key) => {
      if (key.includes(pattern)) {
        this.cache.delete(key);
        invalidated++;
      }
    });

    logger.info('Cache: Invalidated by pattern', { pattern, count: invalidated });
    return invalidated;
  }

  /**
   * Warm up cache with data
   */
  warmUp<T>(entries: Array<{ key: string; data: T; ttl?: number }>): void {
    entries.forEach(({ key, data, ttl }) => {
      this.set(key, data, ttl);
    });

    logger.info('Cache: Warmed up', { count: entries.length });
  }
}

// Export singleton instance
export const cacheManager = new AdvancedCacheManager();

export default cacheManager;
