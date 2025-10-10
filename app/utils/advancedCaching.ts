// Advanced caching utilities for the application

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of entries
  strategy?: 'lru' | 'fifo' | 'lfu'; // Cache eviction strategy
  persist?: boolean; // Whether to persist to localStorage
}

export interface CacheEntry<T = any> {
  data: T;
  timestamp: number;
  ttl: number;
  accessCount: number;
  lastAccessed: number;
}

export class AdvancedCache<T = any> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private maxSize: number;
  private defaultTTL: number;
  private strategy: 'lru' | 'fifo' | 'lfu';
  private persist: boolean;
  private storageKey: string;

  constructor(options: CacheOptions = {}) {
    this.maxSize = options.maxSize || 100;
    this.defaultTTL = options.ttl || 5 * 60 * 1000; // 5 minutes
    this.strategy = options.strategy || 'lru';
    this.persist = options.persist || false;
    this.storageKey = 'advanced-cache';

    if (this.persist && typeof window !== 'undefined') {
      this.loadFromStorage();
    }
  }

  set(key: string, data: T, ttl?: number): void {
    const now = Date.now();
    const entry: CacheEntry<T> = {
      data,
      timestamp: now,
      ttl: ttl || this.defaultTTL,
      accessCount: 0,
      lastAccessed: now
    };

    // Remove oldest entries if cache is full
    if (this.cache.size >= this.maxSize) {
      this.evictEntry();
    }

    this.cache.set(key, entry);

    if (this.persist && typeof window !== 'undefined') {
      this.saveToStorage();
    }
  }

  get(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) {
      return null;
    }

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      if (this.persist && typeof window !== 'undefined') {
        this.saveToStorage();
      }
      return null;
    }

    // Update access statistics
    entry.accessCount++;
    entry.lastAccessed = now;

    return entry.data;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) {
      return false;
    }

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      if (this.persist && typeof window !== 'undefined') {
        this.saveToStorage();
      }
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted && this.persist && typeof window !== 'undefined') {
      this.saveToStorage();
    }
    return deleted;
  }

  clear(): void {
    this.cache.clear();
    if (this.persist && typeof window !== 'undefined') {
      localStorage.removeItem(this.storageKey);
    }
  }

  size(): number {
    return this.cache.size;
  }

  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
      }
    }
    if (this.persist && typeof window !== 'undefined') {
      this.saveToStorage();
    }
  }

  getStats(): {
    size: number;
    maxSize: number;
    hitRate: number;
    memoryUsage: number;
  } {
    let totalAccessCount = 0;
    for (const entry of this.cache.values()) {
      totalAccessCount += entry.accessCount;
    }

    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: 0, // Would need to track hits/misses
      memoryUsage: this.estimateMemoryUsage()
    };
  }

  private evictEntry(): void {
    let keyToEvict: string | null = null;

    switch (this.strategy) {
      case 'lru':
        keyToEvict = this.findLRUKey();
        break;
      case 'fifo':
        keyToEvict = this.findFIFOKey();
        break;
      case 'lfu':
        keyToEvict = this.findLFUKey();
        break;
    }

    if (keyToEvict) {
      this.cache.delete(keyToEvict);
    }
  }

  private findLRUKey(): string | null {
    let oldestKey: string | null = null;
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  private findFIFOKey(): string | null {
    let oldestKey: string | null = null;
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTime) {
        oldestTime = entry.timestamp;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  private findLFUKey(): string | null {
    let leastFrequentKey: string | null = null;
    let leastFrequentCount = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.accessCount < leastFrequentCount) {
        leastFrequentCount = entry.accessCount;
        leastFrequentKey = key;
      }
    }

    return leastFrequentKey;
  }

  private estimateMemoryUsage(): number {
    let totalSize = 0;
    for (const [key, entry] of this.cache.entries()) {
      totalSize += key.length * 2; // 2 bytes per character
      totalSize += JSON.stringify(entry).length * 2;
    }
    return totalSize;
  }

  private saveToStorage(): void {
    try {
      const data = Array.from(this.cache.entries());
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save cache to localStorage:', error);
    }
  }

  private loadFromStorage(): void {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data) {
        const entries = JSON.parse(data);
        this.cache = new Map(entries);
        this.cleanup(); // Remove expired entries
      }
    } catch (error) {
      console.warn('Failed to load cache from localStorage:', error);
    }
  }
}

// Singleton instances for different use cases
export const memoryCache = new AdvancedCache({
  maxSize: 50,
  ttl: 10 * 60 * 1000, // 10 minutes
  strategy: 'lru'
});

export const persistentCache = new AdvancedCache({
  maxSize: 100,
  ttl: 30 * 60 * 1000, // 30 minutes
  strategy: 'lru',
  persist: true
});

export const apiCache = new AdvancedCache({
  maxSize: 200,
  ttl: 5 * 60 * 1000, // 5 minutes
  strategy: 'lfu'
});

// Utility functions
export const createCacheKey = (prefix: string, ...parts: (string | number)[]): string => {
  return `${prefix}:${parts.join(':')}`;
};

export const cacheWithTTL = async <T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl?: number,
  cache: AdvancedCache<T> = memoryCache
): Promise<T> => {
  const cached = cache.get(key);
  if (cached) {
    return cached;
  }

  const data = await fetchFn();
  cache.set(key, data, ttl);
  return data;
};

export const invalidateCachePattern = (pattern: string, cache: AdvancedCache = memoryCache): void => {
  const keys = cache.keys();
  keys.forEach(key => {
    if (key.includes(pattern)) {
      cache.delete(key);
    }
  });
};

export const clearAllCaches = (): void => {
  memoryCache.clear();
  persistentCache.clear();
  apiCache.clear();
};

export const getCacheStats = () => {
  return {
    memory: memoryCache.getStats(),
    persistent: persistentCache.getStats(),
    api: apiCache.getStats()
  };
};

// Auto-cleanup every 5 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    memoryCache.cleanup();
    persistentCache.cleanup();
    apiCache.cleanup();
  }, 5 * 60 * 1000);
}