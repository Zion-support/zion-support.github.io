import { useState, useEffect, useCallback } from 'react';

interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of items in cache
}

class AdvancedCache {
  private cache = new Map<string, CacheItem<any>>();
  private maxSize: number;
  private defaultTTL: number;

  constructor(options: CacheOptions = {}) {
    this.maxSize = options.maxSize || 100;
    this.defaultTTL = options.ttl || 5 * 60 * 1000; // 5 minutes default
  }

  set<T>(key: string, data: T, ttl?: number): void {
    const now = Date.now();
    const expiresAt = now + (ttl || this.defaultTTL);

    // Remove expired items if cache is full
    if (this.cache.size >= this.maxSize) {
      this.cleanup();
    }

    this.cache.set(key, {
      data,
      timestamp: now,
      expiresAt
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if item has expired
    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;

    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  cleanup(): number {
    let cleaned = 0;
    const now = Date.now();

    for (const [key, item] of this.cache.entries()) {
      if (now > item.expiresAt) {
        this.cache.delete(key);
        cleaned++;
      }
    }

    return cleaned;
  }

  getStats(): {
    size: number;
    maxSize: number;
    hitRate: number;
    memoryUsage: number;
  } {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: 0, // This would need to be tracked separately
      memoryUsage: this.calculateMemoryUsage()
    };
  }

  private calculateMemoryUsage(): number {
    let usage = 0;
    for (const [key, item] of this.cache.entries()) {
      usage += key.length * 2; // Approximate string memory usage
      usage += JSON.stringify(item.data).length * 2;
      usage += 100; // Overhead for object structure
    }
    return usage;
  }
}

export function useAdvancedCache<T = any>(options: CacheOptions = {}) {
  const [cache] = useState(() => new AdvancedCache(options));
  const [stats, setStats] = useState(cache.getStats());

  const set = useCallback((key: string, data: T, ttl?: number) => {
    cache.set(key, data, ttl);
    setStats(cache.getStats());
  }, [cache]);

  const get = useCallback((key: string): T | null => {
    return cache.get<T>(key);
  }, [cache]);

  const has = useCallback((key: string): boolean => {
    return cache.has(key);
  }, [cache]);

  const remove = useCallback((key: string): boolean => {
    const deleted = cache.delete(key);
    setStats(cache.getStats());
    return deleted;
  }, [cache]);

  const clear = useCallback(() => {
    cache.clear();
    setStats(cache.getStats());
  }, [cache]);

  const cleanup = useCallback(() => {
    const cleaned = cache.cleanup();
    setStats(cache.getStats());
    return cleaned;
  }, [cache]);

  const getOrSet = useCallback(async (
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number
  ): Promise<T> => {
    const cached = cache.get<T>(key);
    if (cached !== null) {
      return cached;
    }

    const data = await fetcher();
    cache.set(key, data, ttl);
    setStats(cache.getStats());
    return data;
  }, [cache]);

  const getOrSetSync = useCallback((
    key: string,
    factory: () => T,
    ttl?: number
  ): T => {
    const cached = cache.get<T>(key);
    if (cached !== null) {
      return cached;
    }

    const data = factory();
    cache.set(key, data, ttl);
    setStats(cache.getStats());
    return data;
  }, [cache]);

  const invalidatePattern = useCallback((pattern: string) => {
    const regex = new RegExp(pattern);
    const keys = cache.keys();
    let invalidated = 0;

    keys.forEach(key => {
      if (regex.test(key)) {
        cache.delete(key);
        invalidated++;
      }
    });

    if (invalidated > 0) {
      setStats(cache.getStats());
    }

    return invalidated;
  }, [cache]);

  const warmCache = useCallback(async (
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number
  ): Promise<T> => {
    return getOrSet(key, fetcher, ttl);
  }, [getOrSet]);

  // Auto-cleanup expired items every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      cleanup();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [cleanup]);

  return {
    set,
    get,
    has,
    remove,
    clear,
    cleanup,
    getOrSet,
    getOrSetSync,
    invalidatePattern,
    warmCache,
    stats,
    size: cache.size(),
    keys: cache.keys()
  };
}

// Hook for caching API responses
export function useApiCache<T = any>(options: CacheOptions = {}) {
  const cache = useAdvancedCache<T>(options);

  const fetchWithCache = useCallback(async (
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number
  ): Promise<T> => {
    return cache.getOrSet(key, fetcher, ttl);
  }, [cache]);

  const invalidateApiCache = useCallback((pattern: string) => {
    return cache.invalidatePattern(pattern);
  }, [cache]);

  return {
    ...cache,
    fetchWithCache,
    invalidateApiCache
  };
}

// Hook for caching computed values
export function useComputedCache<T = any>(options: CacheOptions = {}) {
  const cache = useAdvancedCache<T>(options);

  const compute = useCallback((
    key: string,
    factory: () => T,
    ttl?: number
  ): T => {
    return cache.getOrSetSync(key, factory, ttl);
  }, [cache]);

  return {
    ...cache,
    compute
  };
}