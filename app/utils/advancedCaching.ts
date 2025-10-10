/**
 * Advanced Caching System
 * Provides intelligent caching with TTL, LRU eviction, and persistent storage
 */

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  storage?: 'memory' | 'localStorage' | 'sessionStorage';
  maxSize?: number; // Maximum number of entries
}

export interface CacheEntry<T> {</T></<<<T>value</T>: T;
  expiry: number;
  hits: number;
  lastAccessed: number;
}

class AdvancedCache<T = unknown> {</T></<<<T>private</T></<<T>cache</T>: Map<string, CacheEntry<T>> = new Map();</string></<<<string>private</string></<<string>accessOrder</string>: string[] = [];
  private options: Required<CacheOptions>;</CacheOptions></<<<CacheOptions>private</CacheOptions></<<CacheOptions>storageKey</CacheOptions> = 'advanced-cache';

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: options.ttl || 5 * 60 * 1000, // Default 5 minutes
      storage: options.storage || 'memory',
      maxSize: options.maxSize || 100
    };

    // Load from persistent storage if needed
    if (this.options.storage !== 'memory') {
      this.loadFromStorage();
    }

    // Setup periodic cleanup
    this.setupCleanup();
  }

  private setupCleanup(): void {
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
      }
  }

  private saveToStorage(): void {
    if (typeof window === 'undefined' || this.options.storage === 'memory') return;

    try {
      const storage = this.getStorage();
      const data = {
        cache: Object.fromEntries(this.cache),
        accessOrder: this.accessOrder
      };
      storage?.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      }
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
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiry <= now) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => {
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }

    if (expiredKeys.length > 0) {
      this.saveToStorage();
    }

    // Update access statistics
    entry.hits++;
    entry.lastAccessed = now;
    this.updateAccessOrder(key);

    return entry.value;
  }

  private evictLRU(): void {
    if (this.accessOrder.length === 0) return;

    const lruKey = this.accessOrder[0];
    this.cache.delete(lruKey);
    this.accessOrder.shift();
  }

  private updateAccessOrder(key: string): void {
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
    this.accessOrder.push(key);
  }

  set(key: string, value: T, customTTL?: number): void {
    const now = Date.now();
    const ttl = customTTL || this.options.ttl;

    // Remove existing entry if it exists
    if (this.cache.has(key)) {
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
    }

    // Check if we need to evict entries
    while (this.cache.size >= this.options.maxSize) {
      this.evictLRU();
    }

    const entry: CacheEntry<T> = {</T></<<<T>value</T>,
      expiry: now + ttl,
      hits: 0,
      lastAccessed: now
    };

    this.cache.set(key, entry);
    this.updateAccessOrder(key);
    this.saveToStorage();
  }

  get(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    const now = Date.now();
    if (entry.expiry <= now) {
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
      this.saveToStorage();
      return null;
    }

    // Update access statistics
    entry.hits++;
    entry.lastAccessed = now;
    this.updateAccessOrder(key);

    return entry.value;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    const now = Date.now();
    if (entry.expiry <= now) {
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
      this.saveToStorage();
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
      this.saveToStorage();
    }
    return deleted;
  }

  clear(): void {
    this.cache.clear();
    this.accessOrder = [];
    this.saveToStorage();
  }

  size(): number {
    return this.cache.size;
  }

  keys(): string[] {
    return Array.from(this.cache.keys());
  }

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
    };
  }
}

// Create singleton instances for different use cases
export const memoryCache = new AdvancedCache({ storage: 'memory' });
export const localStorageCache = new AdvancedCache({
  storage: 'localStorage',
  ttl: 30 * 60 * 1000, // 30 minutes
  maxSize: 50

export const sessionStorageCache = new AdvancedCache({
  storage: 'sessionStorage',
  ttl: 10 * 60 * 1000, // 10 minutes
  maxSize: 25

export default AdvancedCache;