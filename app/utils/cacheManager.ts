'use client'
/**
 * Cache Manager Utility
 * Provides centralized cache management for the application
 */

export interface CacheConfig {
  ttl: number;
  maxSize: number;
  storage: 'memory' | 'localStorage' | 'sessionStorage';
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
  key: string;
}

class CacheManager {
  private caches: Map<string, Map<string, CacheEntry<any>>> = new Map();
  private config: CacheConfig;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      ttl: config.ttl || 5 * 60 * 1000, // 5 minutes default
      maxSize: config.maxSize || 100,
      storage: config.storage || 'memory'
    };
  }

  private getCache(cacheName: string): Map<string, CacheEntry<any>> {
    if (!this.caches.has(cacheName)) {
      this.caches.set(cacheName, new Map());
    }
    return this.caches.get(cacheName)!;
  }

  private isExpired(entry: CacheEntry<any>): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }

  private evictOldest(cacheName: string): void {
    const cache = this.getCache(cacheName);
    if (cache.size >= this.config.maxSize) {
      const oldestKey = cache.keys().next().value;
      if (oldestKey) {
        cache.delete(oldestKey);
      }
    }
  }

  set<T>(cacheName: string, key: string, data: T, ttl?: number): void {
    const cache = this.getCache(cacheName);
    this.evictOldest(cacheName);
    
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.config.ttl,
      key
    };

    cache.set(key, entry);
  }

  get<T>(cacheName: string, key: string): T | null {
    const cache = this.getCache(cacheName);
    const entry = cache.get(key);
    
    if (!entry) {
      return null;
    }

    if (this.isExpired(entry)) {
      cache.delete(key);
      return null;
    }

    return entry.data as T;
  }

  has(cacheName: string, key: string): boolean {
    const cache = this.getCache(cacheName);
    const entry = cache.get(key);
    return entry ? !this.isExpired(entry) : false;
  }

  delete(cacheName: string, key: string): boolean {
    const cache = this.getCache(cacheName);
    return cache.delete(key);
  }

  clear(cacheName?: string): void {
    if (cacheName) {
      const cache = this.getCache(cacheName);
      cache.clear();
    } else {
      this.caches.clear();
    }
  }

  size(cacheName?: string): number {
    if (cacheName) {
      const cache = this.getCache(cacheName);
      return cache.size;
    }
    return Array.from(this.caches.values()).reduce((total, cache) => total + cache.size, 0);
  }

  keys(cacheName?: string): string[] {
    if (cacheName) {
      const cache = this.getCache(cacheName);
      return Array.from(cache.keys());
    }
    return Array.from(this.caches.keys());
  }

  cleanup(): void {
    for (const [cacheName, cache] of this.caches.entries()) {
      const expiredKeys: string[] = [];
      
      for (const [key, entry] of cache.entries()) {
        if (this.isExpired(entry)) {
          expiredKeys.push(key);
        }
      }
      
      expiredKeys.forEach(key => cache.delete(key));
    }
  }
}

// Create singleton instance
export const cacheManager = new CacheManager();

export default CacheManager;