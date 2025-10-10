// Advanced caching utility

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of items
  storage?: 'memory' | 'localStorage' | 'sessionStorage';
}

export interface CacheItem<T> {
  value: T;
  timestamp: number;
  ttl: number;
}

export class AdvancedCache<T = any> {
  private cache: Map<string, CacheItem<T>> = new Map();
  private options: Required<CacheOptions>;

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: 5 * 60 * 1000, // 5 minutes
      maxSize: 100,
      storage: 'memory',
      ...options
    };
  }

  /**
   * Set a value in the cache
   */
  set(key: string, value: T, ttl?: number): void {
    const item: CacheItem<T> = {
      value,
      timestamp: Date.now(),
      ttl: ttl || this.options.ttl
    };

    this.cache.set(key, item);

    // Enforce max size
    if (this.cache.size > this.options.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    // Persist to storage if needed
    if (this.options.storage !== 'memory') {
      this.persistToStorage();
    }
  }

  /**
   * Get a value from the cache
   */
  get(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if expired
    if (this.isExpired(item)) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  /**
   * Check if a key exists in the cache
   */
  has(key: string): boolean {
    const item = this.cache.get(key);
    return item ? !this.isExpired(item) : false;
  }

  /**
   * Delete a key from the cache
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
    
    if (this.options.storage !== 'memory') {
      this.clearStorage();
    }
  }

  /**
   * Get cache statistics
   */
  getStats(): { size: number; maxSize: number; hitRate: number } {
    return {
      size: this.cache.size,
      maxSize: this.options.maxSize,
      hitRate: 0 // Would need to track hits/misses for accurate hit rate
    };
  }

  /**
   * Clean up expired entries
   */
  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (this.isExpired(item)) {
        this.cache.delete(key);
      }
    }
  }

  private isExpired(item: CacheItem<T>): boolean {
    return Date.now() - item.timestamp > item.ttl;
  }

  private persistToStorage(): void {
    if (this.options.storage === 'localStorage' || this.options.storage === 'sessionStorage') {
      const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
      const data = Array.from(this.cache.entries());
      storage.setItem('advanced_cache', JSON.stringify(data));
    }
  }

  private clearStorage(): void {
    if (this.options.storage === 'localStorage') {
      localStorage.removeItem('advanced_cache');
    } else if (this.options.storage === 'sessionStorage') {
      sessionStorage.removeItem('advanced_cache');
    }
  }
}

export default AdvancedCache;