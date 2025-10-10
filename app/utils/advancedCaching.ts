<<<<<<< HEAD
=======
'use client';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
/**
 * Advanced Caching System
 * High-performance caching with LRU eviction and TTL support
 */

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  storage?: 'memory' | 'localStorage' | 'sessionStorage'
=======
export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  storage?: 'memory' | 'localStorage' | 'sessionStorage';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
  maxSize?: number; // Maximum number of entries
}

export interface CacheEntry<T> {
<<<<<<< HEAD
  value: T
  expiry: number
  hits: number
  lastAccessed: number
}

class AdvancedCache<T = unknown> {
  private cache: Map<string, CacheEntry<T>> = new Map()
  private accessOrder: string[] = []
  private options: Required<CacheOptions>
  private storageKey = 'advanced-cache'
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: options.ttl || 5 * 60 * 1000, // Default 5 minutes
      storage: options.storage || 'memory',
      maxSize: options.maxSize || 100
    };
<<<<<<< HEAD
    // Load from persistent storage if needed
    if (this.options.storage !== 'memory') {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
      this.loadFromStorage();
    }
<<<<<<< HEAD
=======
    
    // Load from persistent storage if needed
    if (this.options.storage !== 'memory') {
      this.loadFromStorage();
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    
    // Setup periodic cleanup
    this.setupCleanup();
  }

  private setupCleanup(): void {
<<<<<<< HEAD
    if (typeof window !== 'undefined') {
      // Clean expired entries every minute
      setInterval(() => {
        this.cleanExpired();
      }, 60 * 1000);
    }
  }

  private loadFromStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const storage = this.getStorage();
      const data = storage?.getItem(this.storageKey);
      if (data) {
        const parsed = JSON.parse(data);
        this.cache = new Map(Object.entries(parsed.cache));
        this.accessOrder = parsed.accessOrder || [];
      }
    } catch (error) {
<<<<<<< HEAD
=======
    // Clean up expired entries every minute
    setInterval(() => {
      this.cleanup();
    }, 60000);
  }

  private loadFromStorage(): void {
    try {
      const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
      const data = storage.getItem(this.storageKey);
      if (data) {
        const parsed = JSON.parse(data);
        this.cache = new Map(parsed.cache || []);
        this.accessOrder = parsed.accessOrder || [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
      }
    } catch (error) {
      console.warn('Failed to load cache from storage:', error);
    }
  }

  private saveToStorage(): void {
<<<<<<< HEAD
    if (typeof window === 'undefined' || this.options.storage === 'memory') return;
    
    try {
=======
      console.warn('Failed to load cache from storage:', error);
    }
  }

  private saveToStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
      const storage = this.getStorage();
      const data = {
        cache: Object.fromEntries(this.cache),
        accessOrder: this.accessOrder
      };
      storage?.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
<<<<<<< HEAD
      }
=======
      console.warn('Failed to save cache to storage:', error);
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
  }

  private getStorage(): Storage | null {
    if (typeof window === 'undefined') return null;
    
    switch (this.options.storage) {
      case 'localStorage':
        return window.localStorage;
      case 'sessionStorage':
        return window.sessionStorage;
      default:
        return null;
    }
  }

  private cleanExpired(): void {
<<<<<<< HEAD
=======
    try {
      const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
      const data = {
        cache: Array.from(this.cache.entries()),
        accessOrder: this.accessOrder
      };
      storage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save cache to storage:', error);
    }
  }

  private cleanup(): void {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    const now = Date.now();
    const expiredKeys: string[] = [];
    
    for (const [key, entry] of this.cache.entries()) {
<<<<<<< HEAD
      if (entry.expiry <= now) {
=======
      if (entry.expiry < now) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
        expiredKeys.push(key);
      }
    }
=======
    const now = Date.now();
    const expiredKeys: string[] = [];
    
    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiry < now) {
        expiredKeys.push(key);
      }
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    
    expiredKeys.forEach(key => {
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
    });
    
<<<<<<< HEAD
<<<<<<< HEAD
    if (expiredKeys.length > 0) {
      this.saveToStorage();
    }
    
    // Update access statistics
    entry.hits++;
    entry.lastAccessed = now;
    this.updateAccessOrder(key);
    
    return entry.value;
=======
    if (expiredKeys.length > 0 && this.options.storage !== 'memory') {
      this.saveToStorage();
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
  }

  private evictLRU(): void {
    if (this.accessOrder.length === 0) return;
    
    const lruKey = this.accessOrder[0];
    this.cache.delete(lruKey);
    this.accessOrder.shift();
<<<<<<< HEAD
=======
    // Enforce max size using LRU
    while (this.cache.size > this.options.maxSize) {
      const oldestKey = this.accessOrder.shift();
      if (oldestKey) {
        this.cache.delete(oldestKey);
      }
    }
    
    if (this.options.storage !== 'memory') {
      this.saveToStorage();
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
  }

  private updateAccessOrder(key: string): void {
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
    this.accessOrder.push(key);
  }

<<<<<<< HEAD
<<<<<<< HEAD
  set(key: string, value: T, customTTL?: number): void {
    const now = Date.now();
    const ttl = customTTL || this.options.ttl;
    
    // Remove existing entry if it exists
=======
  set(key: string, value: T, customTtl?: number): void {
    const ttl = customTtl || this.options.ttl;
    const expiry = Date.now() + ttl;
    
    // Remove if already exists
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    if (this.cache.has(key)) {
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
    }
    
<<<<<<< HEAD
    // Check if we need to evict entries
    while (this.cache.size >= this.options.maxSize) {
      this.evictLRU();
    }
=======
  }

  /**
   * Set a value in the cache
   */
  set(key: string, value: T, ttl?: number): void {
    const now = Date.now();
    const expiry = now + (ttl || this.options.defaultTTL);
    const size = this.calculateSize(value);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
    
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
=======
  set(key: string, value: T, ttl?: number): void {
    const now = Date.now();
    const expiry = now + (ttl || this.options.ttl);
    
    this.cache.set(key, {
      value,
      expiry,
      hits: 0,
      lastAccessed: now
    });
    
    this.updateAccessOrder(key);
    this.cleanup();
    
    if (this.options.storage !== 'memory') {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
=======
    // Check if we need to evict
    if (this.cache.size >= this.options.maxSize) {
      this.evictLRU();
    }
    
    const entry: CacheEntry<T> = {
      value,
      expiry,
      hits: 0,
      lastAccessed: Date.now()
    };
    
    this.cache.set(key, entry);
    this.updateAccessOrder(key);
    
    if (this.options.storage !== 'memory') {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
      this.saveToStorage();
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
=======
  /**
   * Check if a key exists in the cache
   */
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
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
=======
  get(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) {
      return null;
    }
    
    const now = Date.now();
    if (entry.expiry < now) {
=======
  get(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }
    
    // Check if expired
    if (entry.expiry < Date.now()) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
      return null;
    }
    
    // Update access info
    entry.hits++;
<<<<<<< HEAD
    entry.lastAccessed = now;
    this.updateAccessOrder(key);
    
=======
    entry.lastAccessed = Date.now();
    this.updateAccessOrder(key);
    
    if (this.options.storage !== 'memory') {
      this.saveToStorage();
    }
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    return entry.value;
  }

  has(key: string): boolean {
<<<<<<< HEAD
    return this.get(key) !== null;
=======
    const entry = this.cache.get(key);
    
    if (!entry) {
      return false;
    }
    
    // Check if expired
    if (entry.expiry < Date.now()) {
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
      return false;
    }
    
    return true;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
  }

  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
<<<<<<< HEAD
=======
      
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
      if (this.options.storage !== 'memory') {
        this.saveToStorage();
      }
    }
    return deleted;
  }

  clear(): void {
    this.cache.clear();
    this.accessOrder = [];
<<<<<<< HEAD
    if (this.options.storage !== 'memory') {
      const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
      storage.removeItem(this.storageKey);
=======
    
    if (this.options.storage !== 'memory') {
      this.saveToStorage();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    }
  }

  size(): number {
    return this.cache.size;
  }

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
  keys(): string[] {
    return Array.from(this.cache.keys());
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  values(): T[] {
    return Array.from(this.cache.values()).map(entry => entry.value);
  }

  entries(): Array<[string, T]> {
    return Array.from(this.cache.entries()).map(([key, entry]) => [key, entry.value]);
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
  getStats(): {
    size: number;
    maxSize: number;
    hitRate: number;
    oldestEntry: number;
    newestEntry: number;
  } {
    const entries = Array.from(this.cache.values());
    const totalHits = entries.reduce((sum, entry) => sum + entry.hits, 0);
    const hitRate = entries.length > 0 ? totalHits / entries.length : 0;
    
    const timestamps = entries.map(entry => entry.lastAccessed);
    const oldestEntry = timestamps.length > 0 ? Math.min(...timestamps) : 0;
    const newestEntry = timestamps.length > 0 ? Math.max(...timestamps) : 0;
    
    return {
      size: this.cache.size,
      maxSize: this.options.maxSize,
      hitRate,
      oldestEntry,
      newestEntry
<<<<<<< HEAD
=======
  stats(): { hits: number; misses: number; hitRate: number; size: number } {
    let totalHits = 0;
    for (const entry of this.cache.values()) {
      totalHits += entry.hits;
    }
    const size = this.cache.size;
    const hitRate = size > 0 ? totalHits / (totalHits + size) : 0;
    
    return {
      hits: totalHits,
      misses: size,
      hitRate,
      size
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    };
  }
}

<<<<<<< HEAD
// Create singleton instances for different use cases
export const memoryCache = new AdvancedCache({ storage: 'memory' });
<<<<<<< HEAD
export const localStorageCache = new AdvancedCache({ 
  storage: 'localStorage',
  ttl: 30 * 60 * 1000, // 30 minutes
  maxSize: 50
});
export const sessionStorageCache = new AdvancedCache({ 
  storage: 'sessionStorage',
  ttl: 10 * 60 * 1000, // 10 minutes
  maxSize: 25
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
});
=======
export const localStorageCache = new AdvancedCache({ storage: 'localStorage' });
export const sessionStorageCache = new AdvancedCache({ storage: 'sessionStorage' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
=======
// Create singleton instances for common use cases
export const memoryCache = new AdvancedCache({ storage: 'memory' });
export const localStorageCache = new AdvancedCache({ storage: 'localStorage' });
export const sessionStorageCache = new AdvancedCache({ storage: 'sessionStorage' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367

export default AdvancedCache;