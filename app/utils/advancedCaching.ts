/**
 * Advanced Caching System
 * High-performance caching with LRU eviction and TTL support
 */

export interface CacheEntry<T = any> {
  value: T;
  expiry: number;
  accessCount: number;
  lastAccessed: number;
  size: number;
}

export interface CacheOptions {
  maxSize: number;
  defaultTTL: number;
  enableLRU: boolean;
  enableCompression: boolean;
  enablePersistence: boolean;
}

export interface CacheStats {
  hits: number;
  misses: number;
  evictions: number;
  size: number;
  maxSize: number;
  hitRate: number;
  memoryUsage: number;
}

class AdvancedCache<T = any> {
  private cache = new Map<string, CacheEntry<T>>();
  private accessOrder: string[] = [];
  private stats = {
    hits: 0,
    misses: 0,
    evictions: 0,
  };
  private options: CacheOptions;

  constructor(options: Partial<CacheOptions> = {}) {
    this.options = {
      maxSize: 1000,
      defaultTTL: 300000, // 5 minutes
      enableLRU: true,
      enableCompression: false,
      enablePersistence: false,
      ...options,
    };

    if (this.options.enablePersistence) {
      this.loadFromStorage();
    }
  }

  /**
   * Set a value in the cache
   */
  set(key: string, value: T, ttl?: number): void {
    const now = Date.now();
    const expiry = now + (ttl || this.options.defaultTTL);
    const size = this.calculateSize(value);
    
    const entry: CacheEntry<T> = {
      value,
      expiry,
      accessCount: 0,
      lastAccessed: now,
      size,
    };

    // Remove existing entry if it exists
    if (this.cache.has(key)) {
      this.remove(key);
    }

    // Check if we need to evict entries
    this.evictIfNeeded(size);

    this.cache.set(key, entry);
    this.updateAccessOrder(key);

    if (this.options.enablePersistence) {
      this.saveToStorage();
    }
  }

  /**
   * Get a value from the cache
   */
  get(key: string): T | undefined {
    const entry = this.cache.get(key);
    if (!entry) {
      this.stats.misses++;
      return undefined;
    }

    const now = Date.now();
    if (entry.expiry <= now) {
      this.remove(key);
      this.stats.misses++;
      return undefined;
    }

    // Update access information
    entry.accessCount++;
    entry.lastAccessed = now;
    this.updateAccessOrder(key);
    this.stats.hits++;

    return entry.value;
  }

  /**
   * Check if a key exists in the cache
   */
  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;
    
    const now = Date.now();
    if (entry.expiry <= now) {
      this.remove(key);
      return false;
    }

    return true;
  }

  /**
   * Remove a key from the cache
   */
  remove(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    this.cache.delete(key);
    this.removeFromAccessOrder(key);
    return true;
  }

  /**
   * Clear all entries from the cache
   */
  clear(): void {
    this.cache.clear();
    this.accessOrder = [];
    this.stats = { hits: 0, misses: 0, evictions: 0 };
  }

  /**
   * Get cache statistics
   */
  getStats(): CacheStats {
    const totalRequests = this.stats.hits + this.stats.misses;
    const hitRate = totalRequests > 0 ? this.stats.hits / totalRequests : 0;
    const memoryUsage = this.calculateMemoryUsage();

    return {
      hits: this.stats.hits,
      misses: this.stats.misses,
      evictions: this.stats.evictions,
      size: this.cache.size,
      maxSize: this.options.maxSize,
      hitRate,
      memoryUsage,
    };
  }

  /**
   * Get all keys in the cache
   */
  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  /**
   * Get all values in the cache
   */
  values(): T[] {
    return Array.from(this.cache.values()).map(entry => entry.value);
  }

  /**
   * Get cache size
   */
  size(): number {
    return this.cache.size;
  }

  /**
   * Check if cache is full
   */
  isFull(): boolean {
    return this.cache.size >= this.options.maxSize;
  }

  /**
   * Update cache options
   */
  updateOptions(newOptions: Partial<CacheOptions>): void {
    this.options = { ...this.options, ...newOptions };
    
    // If maxSize was reduced, evict excess entries
    if (newOptions.maxSize && newOptions.maxSize < this.cache.size) {
      this.evictToSize(newOptions.maxSize);
    }
  }

  private calculateSize(value: T): number {
    if (this.options.enableCompression) {
      // Rough estimation of compressed size
      return JSON.stringify(value).length * 0.7;
    }
    return JSON.stringify(value).length;
  }

  private calculateMemoryUsage(): number {
    let totalSize = 0;
    for (const entry of this.cache.values()) {
      totalSize += entry.size;
    }
    return totalSize;
  }

  private updateAccessOrder(key: string): void {
    if (!this.options.enableLRU) return;

    // Remove from current position
    this.removeFromAccessOrder(key);
    // Add to end (most recently used)
    this.accessOrder.push(key);
  }

  private removeFromAccessOrder(key: string): void {
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
  }

  private evictIfNeeded(newEntrySize: number): void {
    if (this.cache.size < this.options.maxSize) return;

    // Calculate total size if we add the new entry
    const currentSize = this.calculateMemoryUsage();
    const totalSize = currentSize + newEntrySize;

    // If we're still under the limit, no need to evict
    if (totalSize <= this.options.maxSize * 1000) return; // Assuming 1KB per entry average

    // Evict least recently used entries
    while (this.cache.size >= this.options.maxSize && this.accessOrder.length > 0) {
      const keyToEvict = this.accessOrder[0];
      this.remove(keyToEvict);
      this.stats.evictions++;
    }
  }

  private evictToSize(targetSize: number): void {
    while (this.cache.size > targetSize && this.accessOrder.length > 0) {
      const keyToEvict = this.accessOrder[0];
      this.remove(keyToEvict);
      this.stats.evictions++;
    }
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem('advanced_cache');
      if (stored) {
        const data = JSON.parse(stored);
        this.cache = new Map(data.cache);
        this.accessOrder = data.accessOrder || [];
        this.stats = data.stats || { hits: 0, misses: 0, evictions: 0 };
      }
    } catch (error) {
      console.error('Failed to load cache from storage:', error);
    }
  }

  private saveToStorage(): void {
    try {
      const data = {
        cache: Array.from(this.cache.entries()),
        accessOrder: this.accessOrder,
        stats: this.stats,
      };
      localStorage.setItem('advanced_cache', JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save cache to storage:', error);
    }
  }
}

// Export singleton instances for different use cases
export const memoryCache = new AdvancedCache({
  maxSize: 1000,
  defaultTTL: 300000, // 5 minutes
  enableLRU: true,
  enableCompression: false,
  enablePersistence: false,
});

export const persistentCache = new AdvancedCache({
  maxSize: 500,
  defaultTTL: 3600000, // 1 hour
  enableLRU: true,
  enableCompression: true,
  enablePersistence: true,
});

export const sessionCache = new AdvancedCache({
  maxSize: 200,
  defaultTTL: 1800000, // 30 minutes
  enableLRU: true,
  enableCompression: false,
  enablePersistence: false,
});

export default AdvancedCache;