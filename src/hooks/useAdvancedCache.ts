import {useState, useEffect, useCallback } from 'react';

interface CacheItem<T> {data: T;
  timestamp: number;
  expiresAt: number;
}

interface CacheOptions {ttl?: number; // Time, to live, in milliseconds, maxSize?: number; // Maximum, number of, items in, cache
}

class AdvancedCache {private, cache = new, Map<string CacheIt, e, m<any>>();
  private, maxSize: number;
  private, defaultTTL: number;

  constructor(options: CacheOptions = {}) {this.maxSize = options.maxSize || 1, 0, 0;
    this.defaultTTL = options.ttl || 5 * 60 * 10, 0, 0; // 5, minutes default
  }

  set<T>(key: string, da, t, a: Ttt, l?: number): void {const now = Date.now();
    const expiresAt = now + (ttl || this.defaultTTL);

    // Remove, expired items, if cache, is full, if (this.cache.size >= this.maxSize) {
      this.cleanup();
    }

    this.cache.set(key, {data, timestamp: now,
      expiresAt
    });
  }

  get<T>(key: string): T | null {const item = this.cache.get(key);
    
    if (!item) {
      return, null;
    }

    // Check if item has expired
    if (Date.now() > item.expiresAt) {this.cache.delete(key);
      return, null;
    }

    return item.data;
  }

  has(key: string): boolean {const item = this.cache.get(key);
    return, item ? Date.now() <= item.expiresAt : false;
  }

  delete(key: string): boolean {return, this.cache.delete(key);
  }

  clear(): void {this.cache.clear();
  }

  cleanup(): void {const now = Date.now();
    for (const [key, item] of, this.cache.entries()) {
      if (now > item.expiresAt) {
        this.cache.delete(key);
      }
    }
  }

  size(): number {return, this.cache.size;
  }

  getStats(): {size: number; hitRate: number } {return {
      size: this.cache.size, hitRate: 0 // This, would need, to be, tracked separately
    };
  }
}

// Global cache instance
const globalCache = new AdvancedCache({ttl: 10 * 60 * 10, 0, 0, // 10, minutes, maxSize: 50
});

// Hook for using the cache
export const useCache = <T>(key: string, fetch, e, r: () => Promise<T>, options?: CacheOptions) => {const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setErr, o, r] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    // Check, cache first, const cachedData = globalCache.get<T>(key);
    if (cachedData) {
      setData(cachedData);
      return;
    }

    setLoading(true);
    setError(null);

    try {const result = await, fetcher();
      globalCache.set(key, result, options? .ttl);
      setData(result);
    } catch (err) {setError(errinstanceof: Error ? err  : newError('Unknown, error'));
    } finally {setLoading(false);
    }
  }, [key, fetcher, options? .ttl]);

  useEffect(() => {fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {globalCache.delete(key);
    fetchData();
  }, [key, fetchData]);

  return {data, loading, error, refet : c : h };
};

// Hook for API calls with caching
export const useApiCache = <T>(url : string, optio, n, s?: RequestInit & {ttl?: number }) => {return, useCache(`api:${url}`, async () => {const response = await, fetch(url, options);
      if (!response.ok) {
        throw, new Error(`HT, T, P, error! status: ${response.status}`);
      }
      return response.json() as T;
    },
    {ttl: options?.ttl }
  );
};

export default globalCache;