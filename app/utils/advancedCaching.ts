'use client';

/**
 * Advanced Caching Utility
 * Provides intelligent caching with TTL, LRU eviction, and storage options
 */

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
      console.warn('Failed to load cache from storage:', error);
    }
  }

  private saveToStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const storage = this.getStorage();
      const data = {
        cache: Object.fromEntries(this.cache),
        accessOrder: this.accessOrder
      };
      storage?.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save cache to storage:', error);
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
      if (entry.expiry < now) {
        expiredKeys.push(key);
      }
    }
    
    expiredKeys.forEach(key => {
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
    });
    
    if (expiredKeys.length > 0 && this.options.storage !== 'memory') {
      this.saveToStorage();
    }
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

  set(key: string, value: T, customTtl?: number): void {
    const ttl = customTtl || this.options.ttl;
    const expiry = Date.now() + ttl;
    
    // Remove if already exists
    if (this.cache.has(key)) {
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
    }
    
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
      this.saveToStorage();
    }
  }

  get(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }
    
    // Check if expired
    if (entry.expiry < Date.now()) {
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
      return null;
    }
    
    // Update access info
    entry.hits++;
    entry.lastAccessed = Date.now();
    this.updateAccessOrder(key);
    
    if (this.options.storage !== 'memory') {
      this.saveToStorage();
    }
    
    return entry.value;
  }

  has(key: string): boolean {
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
    return this.cache.size;
  }

  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  values(): T[] {
    return Array.from(this.cache.values()).map(entry => entry.value);
  }

  entries(): Array<[string, T]> {
    return Array.from(this.cache.entries()).map(([key, entry]) => [key, entry.value]);
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

// Create singleton instances for common use cases
export const memoryCache = new AdvancedCache({ storage: 'memory' });
export const localStorageCache = new AdvancedCache({ storage: 'localStorage' });
export const sessionStorageCache = new AdvancedCache({ storage: 'sessionStorage' });

export default AdvancedCache;