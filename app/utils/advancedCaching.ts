'use client'
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
    if (typeof window === 'undefined' || this.options.storage === 'memory') return;
    
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
    });
    
    if (expiredKeys.length > 0) {
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

  set(key: string, value: T, ttl?: number): void {
    const now = Date.now();
    const expiry = now + (ttl || this.options.ttl);
    
    // Remove existing entry if it exists
    if (this.cache.has(key)) {
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
    }
    
    // Check if we need to evict entries
    while (this.cache.size >= this.options.maxSize) {
      this.evictLRU();
    }
    
    this.cache.set(key, {
      value,
      expiry,
      hits: 0,
      lastAccessed: now
    });
    
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
    oldestEntry: number | null;
    newestEntry: number | null;
  } {
    const now = Date.now();
    let totalHits = 0;
    let oldestTime = Infinity;
    let newestTime = -Infinity;
    
    for (const entry of this.cache.values()) {
      totalHits += entry.hits;
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed;
      }
      if (entry.lastAccessed > newestTime) {
        newestTime = entry.lastAccessed;
      }
    }
    
    const hitRate = this.cache.size > 0 ? totalHits / this.cache.size : 0;
    
    return {
      size: this.cache.size,
      maxSize: this.options.maxSize,
      hitRate: Math.round(hitRate * 100) / 100,
      oldestEntry: oldestTime === Infinity ? null : oldestTime,
      newestEntry: newestTime === -Infinity ? null : newestTime
    };
  }
}

// Create singleton instances for different use cases
export const memoryCache = new AdvancedCache({ storage: 'memory' });
export const localStorageCache = new AdvancedCache({ 
  storage: 'localStorage', 
  ttl: 30 * 60 * 1000, // 30 minutes
  maxSize: 50 
});
export const sessionStorageCache = new AdvancedCache({ 
  storage: 'sessionStorage', 
  ttl: 60 * 60 * 1000, // 1 hour
  maxSize: 100 
});

export default AdvancedCache;