// Advanced caching utilities
interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of items
}

class AdvancedCache<T = unknown> {
  private cache = new Map<string, CacheItem<T>>();
  private maxSize: number;
  private defaultTTL: number;

  constructor(options: CacheOptions = {}) {
    this.maxSize = options.maxSize || 100;
    this.defaultTTL = options.ttl || 5 * 60 * 1000; // 5 minutes default
  }

  set(key: string, data: T, ttl?: number): void {
    // Remove oldest items if cache is full
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.defaultTTL
    });
  }

  get(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    
    if (!item) {
      return false;
    }

    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
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

  // Clean up expired items
  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
      }
    }
  }

  // Get cache statistics
  getStats(): {
    size: number;
    maxSize: number;
    hitRate: number;
    missRate: number;
  } {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: 0, // Would need to track hits/misses
      missRate: 0
    };
  }
}

// Export singleton instances for different data types
export const apiCache = new AdvancedCache<unknown>({ ttl: 5 * 60 * 1000, maxSize: 50 });
export const componentCache = new AdvancedCache<React.ComponentType>({ ttl: 10 * 60 * 1000, maxSize: 20 });
export const dataCache = new AdvancedCache<Record<string, unknown>>({ ttl: 15 * 60 * 1000, maxSize: 100 });

// Utility functions
export const cacheApiResponse = async <T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl?: number
): Promise<T> => {
  const cached = apiCache.get(key);
  if (cached) {
    return cached as T;
  }

  const data = await fetcher();
  apiCache.set(key, data, ttl);
  return data;
};

export const cacheComponent = (key: string, component: React.ComponentType, ttl?: number): void => {
  componentCache.set(key, component, ttl);
};

export const getCachedComponent = (key: string): React.ComponentType | null => {
  return componentCache.get(key);
};

// Cleanup expired items periodically
setInterval(() => {
  apiCache.cleanup();
  componentCache.cleanup();
  dataCache.cleanup();
}, 60 * 1000); // Every minute