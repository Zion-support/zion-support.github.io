// Cache Manager utility for client-side caching

export interface CacheOptions {
  maxSize?: number;
  ttl?: number; // Time to live in milliseconds
  storage?: 'localStorage' | 'sessionStorage' | 'memory';
}

export interface CacheItem<T = any> {
  value: T;
  timestamp: number;
  ttl: number;
}

class CacheManager<T = any> {
  private cache = new Map<string, CacheItem<T>>();
  private options: Required<CacheOptions>;

  constructor(options: CacheOptions = {}) {
    this.options = {
      maxSize: options.maxSize || 100,
      ttl: options.ttl || 5 * 60 * 1000, // 5 minutes default
      storage: options.storage || 'memory',
    };

    this.loadFromStorage();
  }

  // Set a cache item
  set(key: string, value: T, ttl?: number): void {
    const item: CacheItem<T> = {
      value,
      timestamp: Date.now(),
      ttl: ttl || this.options.ttl,
    };

    // Check if cache is full
    if (this.cache.size >= this.options.maxSize) {
      this.evictOldest();
    }

    this.cache.set(key, item);
    this.saveToStorage();
  }

  // Get a cache item
  get(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if item has expired
    if (this.isExpired(item)) {
      this.cache.delete(key);
      this.saveToStorage();
      return null;
    }

    return item.value;
  }

  // Check if a key exists and is not expired
  has(key: string): boolean {
    const item = this.cache.get(key);
    return item ? !this.isExpired(item) : false;
  }

  // Delete a cache item
  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.saveToStorage();
    }
    return deleted;
  }

  // Clear all cache items
  clear(): void {
    this.cache.clear();
    this.saveToStorage();
  }

  // Get cache size
  size(): number {
    return this.cache.size;
  }

  // Get all keys
  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  // Check if item is expired
  private isExpired(item: CacheItem<T>): boolean {
    return Date.now() - item.timestamp > item.ttl;
  }

  // Evict oldest item
  private evictOldest(): void {
    let oldestKey = '';
    let oldestTime = Date.now();

    for (const [key, item] of this.cache.entries()) {
      if (item.timestamp < oldestTime) {
        oldestTime = item.timestamp;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  // Load from storage
  private loadFromStorage(): void {
    if (this.options.storage === 'memory') {
      return;
    }

    try {
      const storage = this.options.storage === 'localStorage' 
        ? localStorage 
        : sessionStorage;
      
      const data = storage.getItem('cache_' + this.constructor.name);
      if (data) {
        const parsed = JSON.parse(data);
        this.cache = new Map(parsed);
      }
    } catch {
      // Error handled
    }
  }

  // Save to storage
  private saveToStorage(): void {
    if (this.options.storage === 'memory') {
      return;
    }

    try {
      const storage = this.options.storage === 'localStorage' 
        ? localStorage 
        : sessionStorage;
      
      const data = JSON.stringify(Array.from(this.cache.entries()));
      storage.setItem('cache_' + this.constructor.name, data);
    } catch {
      // Error handled
    }
  }
}

// Create cache manager instance
const cacheManager = new CacheManager();

export default cacheManager;