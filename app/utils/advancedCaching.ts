'use client'
/**
 * Advanced Caching Utility
 * Provides intelligent caching with TTL, LRU eviction, and storage options
 */

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  storage?: 'memory' | 'localStorage' | 'sessionStorage'
  maxSize?: number; // Maximum number of entries
}

export interface CacheEntry<T> {
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
      }
    } catch (error) {
      console.warn('Failed to load cache from storage:', error);
    }
  }

  private saveToStorage(): void {
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
    
    this.cache.set(key, {
      value,
      expiry,
      hits: 0,
      lastAccessed: now
    });
    
    this.updateAccessOrder(key);
    this.cleanup();
    
    if (this.options.storage !== 'memory') {
      this.saveToStorage();
    }
  }

  get(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) {
      return null;
    }
    
    const now = Date.now();
    if (entry.expiry < now) {
      this.cache.delete(key);
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
      return null;
    }
    
    // Update access info
    entry.hits++;
    entry.lastAccessed = now;
    this.updateAccessOrder(key);
    
    return entry.value;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
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
      const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
      storage.removeItem(this.storageKey);
    }
  }

  size(): number {
    return this.cache.size;
  }

  keys(): string[] {
    return Array.from(this.cache.keys());
  }

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
    };
  }
}

// Create singleton instances for different use cases
export const memoryCache = new AdvancedCache({ storage: 'memory' });
export const localStorageCache = new AdvancedCache({ storage: 'localStorage' });
export const sessionStorageCache = new AdvancedCache({ storage: 'sessionStorage' });

export default AdvancedCache;