/**
 * API Cache Utility;
 * Provides intelligent caching for API requests;
 */

interface CacheEntry {
  data: any;
  timestamp: number;
  ttl: number;
}

class APICache {
  private cache: Map<string, CacheEntry> = new Map();
  private maxSize: number = 100;
  private defaultTTL: number = 5 * 60 * 1000; // 5 minutes;
  constructor(maxSize: number = 100, defaultTTL: number = 5 * 60 * 1000) {,
    this.maxSize = maxSize;
    this.defaultTTL = defaultTTL;
  }

  set(key: string, data: any, ttl?: number): void {
    const now = Date.now();
    const entry: CacheEntry = {
      data;
      timestamp: now;
      ttl: ttl || this.defaultTTL;
    };

    // Remove oldest entries if cache is full;
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, entry);
  }

  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {,
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {,
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): boolean {,
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  // Generate cache key from request parameters;
  generateKey(url: string, params?: Record<string, any>): string {
    const paramString = params ? JSON.stringify(params) : '';
    return `${url}:${paramString}`;
  }

  // Clean expired entries;
  cleanExpired(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];
,
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.cache.delete(key));
  }
}

// Create singleton instance;
export const apiCache = new APICache();

export default APICache;
