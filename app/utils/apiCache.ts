interface CacheEntry {
  data: any;
  timestamp: number;
  ttl: number;
}

class APICache {
  private cache: Map<string, CacheEntry> = new Map();
  private maxSize: number = 100;
  private defaultTTL: number = 5 * 60 * 1000; // 5 minutes

  constructor(maxSize: number = 100, defaultTTL: number = 5 * 60 * 1000) {
    this.maxSize = maxSize;
    this.defaultTTL = defaultTTL;
  }

  set(key: string, data: any, ttl?: number): void {
    const now = Date.now();
    const entry: CacheEntry = {
      data,
      timestamp: now,
      ttl: ttl || this.defaultTTL
    };

    // Remove old entry if it exists
    this.cache.delete(key);

    // Check if we need to evict entries
    if (this.cache.size >= this.maxSize) {
      this.evictOldest();
    }

    this.cache.set(key, entry);
  }

  get(key: string): any | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    const now = Date.now();
    
    // Check if expired
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return false;
    }

    const now = Date.now();
    
    // Check if expired
    if (now - entry.timestamp > entry.ttl) {
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
    this.cleanup();
    return this.cache.size;
  }

  keys(): string[] {
    this.cleanup();
    return Array.from(this.cache.keys());
  }

  private evictOldest(): void {
    let oldestKey = '';
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTime) {
        oldestTime = entry.timestamp;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  private cleanup(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.cache.delete(key));
  }
}

// Create singleton instance
const apiCache = new APICache();

// Utility functions
export function cacheRequest<T>(
  key: string,
  requestFn: () => Promise<T>,
  ttl?: number
): Promise<T> {
  const cached = apiCache.get(key);
  
  if (cached !== null) {
    return Promise.resolve(cached);
  }

  return requestFn().then(data => {
    apiCache.set(key, data, ttl);
    return data;
  });
}

export function cacheGet<T>(key: string): T | null {
  return apiCache.get(key);
}

export function cacheSet<T>(key: string, data: T, ttl?: number): void {
  apiCache.set(key, data, ttl);
}

export function cacheHas(key: string): boolean {
  return apiCache.has(key);
}

export function cacheDelete(key: string): boolean {
  return apiCache.delete(key);
}

export function cacheClear(): void {
  apiCache.clear();
}

export function cacheSize(): number {
  return apiCache.size();
}

export function cacheKeys(): string[] {
  return apiCache.keys();
}

// Create cache key generators
export function createCacheKey(prefix: string, ...parts: (string | number)[]): string {
  return `${prefix}:${parts.join(':')}`;
}

export function createRequestCacheKey(url: string, params?: Record<string, any>): string {
  const paramString = params ? JSON.stringify(params) : '';
  return `request:${url}:${paramString}`;
}

export function createUserCacheKey(userId: string, resource: string): string {
  return `user:${userId}:${resource}`;
}

export function createSessionCacheKey(sessionId: string, resource: string): string {
  return `session:${sessionId}:${resource}`;
}

// Cache middleware for API calls
export function withCache<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  keyGenerator: (...args: Parameters<T>) => string,
  ttl?: number
): T {
  return ((...args: Parameters<T>) => {
    const key = keyGenerator(...args);
    const cached = apiCache.get(key);
    
    if (cached !== null) {
      return Promise.resolve(cached);
    }
    
    return fn(...args).then((result: any) => {
      apiCache.set(key, result, ttl);
      return result;
    });
  }) as T;
}

// Cache decorator for class methods
export function cached(ttl?: number) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
      const key = `${target.constructor.name}:${propertyName}:${JSON.stringify(args)}`;
      const cached = apiCache.get(key);
      
      if (cached !== null) {
        return Promise.resolve(cached);
      }
      
      const result = method.apply(this, args);
      
      if (result instanceof Promise) {
        return result.then((data: any) => {
          apiCache.set(key, data, ttl);
          return data;
        });
      } else {
        apiCache.set(key, result, ttl);
        return result;
      }
    };
  };
}

// Cache statistics
export function getCacheStats(): {
  size: number;
  hitRate: number;
  memoryUsage: number;
} {
  return {
    size: apiCache.size(),
    hitRate: 0, // Would need to track hits/misses
    memoryUsage: JSON.stringify(Array.from(apiCache.cache.entries())).length
  };
}

export default apiCache;