// Advanced caching utilities for better performance

interface CacheItem<T> {
  value: T;
  timestamp: number;
  expiresAt: number;
}

class CacheManager {
  private cache = new Map<string, CacheItem<any>>();
  private maxSize = 100;
  private defaultTTL = 5 * 60 * 1000; // 5 minutes

  set<T>(key: string, value: T, ttl?: number): void {
    const expiresAt = Date.now() + (ttl || this.defaultTTL);
    
    // Remove expired items and enforce max size
    this.cleanup();
    
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      expiresAt
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }
    
    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value as T;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now > item.expiresAt) {
        this.cache.delete(key);
      }
    }
  }

  // Get cache statistics
  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: this.getHitRate()
    };
  }

  private getHitRate(): number {
    // This would need to be implemented with hit/miss tracking
    return 0;
  }
}

export const cacheManager = new CacheManager();

// React hook for caching
export function useCache<T>(key: string, fetcher: () => Promise<T>, ttl?: number) {
  const [data, setData] = React.useState<T | null>(() => cacheManager.get<T>(key));
  const [loading, setLoading] = React.useState(!data);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (data) return;

    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetcher();
        
        if (!cancelled) {
          cacheManager.set(key, result, ttl);
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err as Error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [key, fetcher, ttl, data]);

  return { data, loading, error };
}
