interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of items
  storage?: 'localStorage' | 'sessionStorage' | 'memory';
}

interface CacheItem<T> {
  value: T;
  timestamp: number;
  ttl: number;
}

class CacheManager {
  private cache = new Map<string, CacheItem<any>>();
  private options: Required<CacheOptions>;

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: 5 * 60 * 1000, // 5 minutes
      maxSize: 100,
      storage: 'memory',
      ...options,
    };

    this.loadFromStorage();
  }

  // Set a value in cache
  set<T>(key: string, value: T, ttl?: number): void {
    const item: CacheItem<T> = {
      value,
      timestamp: Date.now(),
      ttl: ttl || this.options.ttl,
    };

    this.cache.set(key, item);
    this.enforceMaxSize();
    this.saveToStorage();
  }

  // Get a value from cache
  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      this.saveToStorage();
      return null;
    }

    return item.value;
  }

  // Check if key exists in cache
  has(key: string): boolean {
    return this.get(key) !== null;
  }

  // Delete a value from cache
  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.saveToStorage();
    }
    return deleted;
  }

  // Clear all cache
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

  // Enforce maximum cache size
  private enforceMaxSize(): void {
    if (this.cache.size > this.options.maxSize) {
      const entries = Array.from(this.cache.entries());
      entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
      
      const toDelete = entries.slice(0, this.cache.size - this.options.maxSize);
      toDelete.forEach(([key]) => this.cache.delete(key));
    }
  }

  // Save cache to storage
  private saveToStorage(): void {
    if (typeof window === 'undefined' || this.options.storage === 'memory') {
      return;
    }

    try {
      const storage = this.options.storage === 'localStorage' 
        ? localStorage 
        : sessionStorage;
      
      const data = JSON.stringify(Array.from(this.cache.entries()));
      storage.setItem('cache', data);
    } catch (error) {
      console.warn('Failed to save cache to storage:', error);
    }
  }

  // Load cache from storage
  private loadFromStorage(): void {
    if (typeof window === 'undefined' || this.options.storage === 'memory') {
      return;
    }

    try {
      const storage = this.options.storage === 'localStorage' 
        ? localStorage 
        : sessionStorage;
      
      const data = storage.getItem('cache');
      if (data) {
        const parsed = JSON.parse(data);
        this.cache = new Map(parsed);
      }
    } catch (error) {
      console.warn('Failed to load cache from storage:', error);
    }
  }
}

// Export singleton instance
export const cacheManager = new CacheManager();
export default cacheManager;