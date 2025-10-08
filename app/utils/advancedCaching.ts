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
      maxSize: options.maxSize || 100,
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
        cache: Object.fromEntries(this.cache.entries()),
        accessOrder: this.accessOrder,
      };
      storage?.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      }
  }

  private getStorage(): Storage | null {
    if (typeof window === 'undefined') return null;

    if (this.options.storage === 'localStorage') {
      return window.localStorage;
    } else if (this.options.storage === 'sessionStorage') {
      return window.sessionStorage;
    }
    return null;
  }

  public set(key: string, value: T, ttl?: number): void {
    const expiry = Date.now() + (ttl || this.options.ttl);

    // Check if we need to evict
    if (this.cache.size >= this.options.maxSize && !this.cache.has(key)) {
      this.evictLRU();
    }

    this.cache.set(key, {
      value,
      expiry,
      hits: 0,
      lastAccessed: Date.now(),
    });

    // Update access order
    this.updateAccessOrder(key);

    // Save to storage if needed
    if (this.options.storage !== 'memory') {
      this.saveToStorage();
    }
  }

  public get(key: string): T | null {
    const entry = this.cache.get(key);

    if (!entry) {
      return null;
    }

    // Check if expired
    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      this.removeFromAccessOrder(key);
      return null;
    }

    // Update stats
    entry.hits++;
    entry.lastAccessed = Date.now();
    this.updateAccessOrder(key);

    return entry.value;
  }

  public has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    // Check if expired
    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      this.removeFromAccessOrder(key);
      return false;
    }

    return true;
  }

  public delete(key: string): boolean {
    this.removeFromAccessOrder(key);
    return this.cache.delete(key);
  }

  public clear(): void {
    this.cache.clear();
    this.accessOrder = [];

    if (this.options.storage !== 'memory') {
      const storage = this.getStorage();
      storage?.removeItem(this.storageKey);
    }
  }

  private updateAccessOrder(key: string): void {
    // Remove if exists
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

  private evictLRU(): void {
    // Remove least recently used (first in array)
    if (this.accessOrder.length > 0) {
      const lruKey = this.accessOrder[0];
      this.delete(lruKey);
    }
  }

  private cleanExpired(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    this.cache.forEach((entry, key) => {
      if (now > entry.expiry) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.delete(key));

    if (keysToDelete.length > 0 && this.options.storage !== 'memory') {
      this.saveToStorage();
    }
  }

  public getStats(): {
    size: number;
    maxSize: number;
    hitRate: number;
    entries: Array<{
      key: string;
      hits: number;
      age: number;
    }>;
  } {
    const entries: Array<{ key: string; hits: number; age: number }> = [];
    let totalHits = 0;
    const now = Date.now();

    this.cache.forEach((entry, key) => {
      totalHits += entry.hits;
      entries.push({
        key,
        hits: entry.hits,
        age: now - entry.lastAccessed,
      });
    });

    return {
      size: this.cache.size,
      maxSize: this.options.maxSize,
      hitRate: totalHits / Math.max(this.cache.size, 1),
      entries: entries.sort((a, b) => b.hits - a.hits),
    };
  }

  // Utility method for async operations with caching
  public async getOrFetch<R extends T>(
    key: string,
    fetcher: () => Promise<R>,
    ttl?: number
  ): Promise<R> {
    const cached = this.get(key);
    if (cached !== null) {
      return cached as unknown as R;
    }

    const value = await fetcher();
    this.set(key, value, ttl);
    return value;
  }
}

// Export factory function
export function createCache<T = unknown>(options?: CacheOptions): AdvancedCache<T> {
  return new AdvancedCache<T>(options);
}

// Export default cache instance
export const defaultCache = new AdvancedCache();

export default AdvancedCache;
