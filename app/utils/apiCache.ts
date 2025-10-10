// API Cache utilities for managing API responses and caching

interface CacheEntry {
  data: any;
  timestamp: number;
  ttl: number;
}

interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum cache size
  storage?: 'memory' | 'sessionStorage' | 'localStorage';
}

class APICache {
  private cache: Map<string, CacheEntry> = new Map();
  private options: Required<CacheOptions>;

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: options.ttl || 5 * 60 * 1000, // 5 minutes default
      maxSize: options.maxSize || 100,
      storage: options.storage || 'memory'
    };
  }

  set(key: string, data: any, customTtl?: number): void {
    const ttl = customTtl || this.options.ttl;
    const entry: CacheEntry = {
      data,
      timestamp: Date.now(),
      ttl
    };

    // Remove oldest entries if cache is full
    if (this.cache.size >= this.options.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, entry);

    // Store in browser storage if specified
    if (this.options.storage !== 'memory' && typeof window !== 'undefined') {
      try {
        const storage = this.options.storage === 'sessionStorage' 
          ? window.sessionStorage 
          : window.localStorage;
        storage.setItem(`api_cache_${key}`, JSON.stringify(entry));
      } catch (error) {
        console.warn('Failed to store cache in browser storage:', error);
      }
    }
  }

  get(key: string): any | null {
    let entry = this.cache.get(key);

    // Try to get from browser storage if not in memory
    if (!entry && this.options.storage !== 'memory' && typeof window !== 'undefined') {
      try {
        const storage = this.options.storage === 'sessionStorage' 
          ? window.sessionStorage 
          : window.localStorage;
        const stored = storage.getItem(`api_cache_${key}`);
        if (stored) {
          entry = JSON.parse(stored);
          this.cache.set(key, entry);
        }
      } catch (error) {
        console.warn('Failed to retrieve cache from browser storage:', error);
      }
    }

    if (!entry) {
      return null;
    }

    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.delete(key);
      return null;
    }

    return entry.data;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string): void {
    this.cache.delete(key);

    // Remove from browser storage
    if (this.options.storage !== 'memory' && typeof window !== 'undefined') {
      try {
        const storage = this.options.storage === 'sessionStorage' 
          ? window.sessionStorage 
          : window.localStorage;
        storage.removeItem(`api_cache_${key}`);
      } catch (error) {
        console.warn('Failed to remove cache from browser storage:', error);
      }
    }
  }

  clear(): void {
    this.cache.clear();

    // Clear browser storage
    if (this.options.storage !== 'memory' && typeof window !== 'undefined') {
      try {
        const storage = this.options.storage === 'sessionStorage' 
          ? window.sessionStorage 
          : window.localStorage;
        
        // Remove all cache entries
        for (let i = 0; i < storage.length; i++) {
          const key = storage.key(i);
          if (key && key.startsWith('api_cache_')) {
            storage.removeItem(key);
          }
        }
      } catch (error) {
        console.warn('Failed to clear cache from browser storage:', error);
      }
    }
  }

  size(): number {
    return this.cache.size;
  }

  // Clean up expired entries
  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.delete(key);
      }
    }
  }

  // Get cache statistics
  getStats(): { size: number; maxSize: number; hitRate: number } {
    return {
      size: this.cache.size,
      maxSize: this.options.maxSize,
      hitRate: 0 // This would need to be tracked separately
    };
  }
}

// Create a default cache instance
export const apiCache = new APICache();

// Export the class for custom instances
export { APICache, type CacheOptions, type CacheEntry };

// Utility functions
export const createCacheKey = (endpoint: string, params?: Record<string, any>): string => {
  const paramString = params ? JSON.stringify(params) : '';
  return `${endpoint}${paramString ? `_${btoa(paramString)}` : ''}`;
};

export const withCache = async <T>(
  key: string,
  fetcher: () => Promise<T>,
  options?: { ttl?: number }
): Promise<T> => {
  const cached = apiCache.get(key);
  if (cached !== null) {
    return cached;
  }

  const data = await fetcher();
  apiCache.set(key, data, options?.ttl);
  return data;
};

// Auto-cleanup every 5 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    apiCache.cleanup();
  }, 5 * 60 * 1000);
}