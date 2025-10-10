export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  storage?: 'memory' | 'localStorage' | 'sessionStorage';
  maxSize?: number; // Maximum number of entries
}

export interface CacheEntry<T> {
  value: T;
  expiry: number;
  hits: number;
  lastAccessed: number;
}

class AdvancedCache<T = unknown> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private accessOrder: string[] = [];
  private options: Required<CacheOptions>;
  private storageKey = 'advanced-cache';

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: 5 * 60 * 1000, // 5 minutes default
      storage: 'memory',
      maxSize: 1000,
      ...options
    };

    if (this.options.storage !== 'memory') {
      this.loadFromStorage();
    }
  }

  set(key: string, value: T, ttl?: number): void {
    const now = Date.now();
    const expiry = now + (ttl || this.options.ttl);

    // Remove old entry if it exists
    this.delete(key);

    // Check if we need to evict entries
    if (this.cache.size >= this.options.maxSize) {
      this.evictLRU();
    }

    const entry: CacheEntry<T> = {
      value,
      expiry,
      hits: 0,
      lastAccessed: now
    };

    this.cache.set(key, entry);
    this.accessOrder.push(key);

    if (this.options.storage !== 'memory') {
      this.saveToStorage();
    }
  }

  get(key: string): T | undefined {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return undefined;
    }

    const now = Date.now();
    
    // Check if expired
    if (now > entry.expiry) {
      this.delete(key);
      return undefined;
    }

    // Update access info
    entry.hits++;
    entry.lastAccessed = now;
    this.updateAccessOrder(key);

    return entry.value;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return false;
    }

    const now = Date.now();
    
    // Check if expired
    if (now > entry.expiry) {
      this.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    
    if (deleted) {
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
      
      if (this.options.storage !== 'memory') {
        this.saveToStorage();
      }
    }

    return deleted;
  }

  clear(): void {
    this.cache.clear();
    this.accessOrder = [];
    
    if (this.options.storage !== 'memory') {
      this.saveToStorage();
    }
  }

  size(): number {
    this.cleanup();
    return this.cache.size;
  }

  keys(): string[] {
    this.cleanup();
    return Array.from(this.cache.keys());
  }

  values(): T[] {
    this.cleanup();
    return Array.from(this.cache.values()).map(entry => entry.value);
  }

  entries(): Array<[string, T]> {
    this.cleanup();
    return Array.from(this.cache.entries()).map(([key, entry]) => [key, entry.value]);
  }

  getStats(): {
    size: number;
    hitRate: number;
    totalHits: number;
    averageHits: number;
  } {
    this.cleanup();
    
    const entries = Array.from(this.cache.values());
    const totalHits = entries.reduce((sum, entry) => sum + entry.hits, 0);
    const averageHits = entries.length > 0 ? totalHits / entries.length : 0;
    
    return {
      size: this.cache.size,
      hitRate: totalHits > 0 ? totalHits / (totalHits + this.cache.size) : 0,
      totalHits,
      averageHits
    };
  }

  private updateAccessOrder(key: string): void {
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
    this.accessOrder.push(key);
  }

  private evictLRU(): void {
    if (this.accessOrder.length === 0) return;
    
    const oldestKey = this.accessOrder[0];
    this.delete(oldestKey);
  }

  private cleanup(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiry) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.delete(key));
  }

  private saveToStorage(): void {
    if (this.options.storage === 'memory') return;

    const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
    const data = {
      cache: Array.from(this.cache.entries()),
      accessOrder: this.accessOrder,
      options: this.options
    };

    try {
      storage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save cache to storage:', error);
    }
  }

  private loadFromStorage(): void {
    if (this.options.storage === 'memory') return;

    const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
    
    try {
      const data = storage.getItem(this.storageKey);
      if (data) {
        const parsed = JSON.parse(data);
        this.cache = new Map(parsed.cache);
        this.accessOrder = parsed.accessOrder;
      }
    } catch (error) {
      console.warn('Failed to load cache from storage:', error);
    }
  }
}

// Create singleton instances for different use cases
export const memoryCache = new AdvancedCache({ storage: 'memory' });
export const localStorageCache = new AdvancedCache({ storage: 'localStorage' });
export const sessionStorageCache = new AdvancedCache({ storage: 'sessionStorage' });

// Utility functions
export function createCache<T>(options?: CacheOptions): AdvancedCache<T> {
  return new AdvancedCache<T>(options);
}

export function withCache<T extends (...args: any[]) => any>(
  fn: T,
  keyGenerator: (...args: Parameters<T>) => string,
  options?: CacheOptions
): T {
  const cache = new AdvancedCache(options);
  
  return ((...args: Parameters<T>) => {
    const key = keyGenerator(...args);
    const cached = cache.get(key);
    
    if (cached !== undefined) {
      return cached;
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  options?: CacheOptions
): T {
  const cache = new AdvancedCache(options);
  
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    const cached = cache.get(key);
    
    if (cached !== undefined) {
      return cached;
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

export function createAsyncCache<T>(
  options?: CacheOptions
): {
  get: (key: string) => Promise<T | undefined>;
  set: (key: string, value: T, ttl?: number) => Promise<void>;
  has: (key: string) => Promise<boolean>;
  delete: (key: string) => Promise<boolean>;
  clear: () => Promise<void>;
} {
  const cache = new AdvancedCache<T>(options);
  
  return {
    get: async (key: string) => cache.get(key),
    set: async (key: string, value: T, ttl?: number) => cache.set(key, value, ttl),
    has: async (key: string) => cache.has(key),
    delete: async (key: string) => cache.delete(key),
    clear: async () => cache.clear()
  };
}

export function createCacheMiddleware<T>(
  options?: CacheOptions
): (key: string, fn: () => T | Promise<T>) => T | Promise<T> {
  const cache = new AdvancedCache<T>(options);
  
  return (key: string, fn: () => T | Promise<T>) => {
    const cached = cache.get(key);
    
    if (cached !== undefined) {
      return cached;
    }
    
    const result = fn();
    
    if (result instanceof Promise) {
      return result.then(value => {
        cache.set(key, value);
        return value;
      });
    } else {
      cache.set(key, result);
      return result;
    }
  };
}

export default AdvancedCache;