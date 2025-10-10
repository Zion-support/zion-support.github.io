/**
 * API Cache Utility
<<<<<<< HEAD
 * Provides intelligent caching for API requests
 */

import { memoryCache } from './advancedCaching';

export interface ApiCacheOptions {
  ttl?: number;
  key?: string;
  forceRefresh?: boolean;
  enableCompression?: boolean;
}

export interface CachedResponse<T = any> {
  data: T;
  timestamp: number;
  ttl: number;
  headers?: Record<string, string>;
  status?: number;
}

class ApiCache {
  private cache = memoryCache;
  private defaultTTL = 300000; // 5 minutes

<<<<<<< HEAD
  constructor(maxSize: number = 100, defaultTTL: number = 5 * 60 * 1000) {
    this.maxSize = maxSize;
    this.defaultTTL = defaultTTL;
  }

  set(key: string, data: any, ttl?: number): void {
    const now = Date.now();
    const entry: CacheEntry = {
      data,
      timestamp: now,
      ttl: ttl || this.defaultTTL
    };

    // Remove oldest entries if cache is full
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
=======
  /**
   * Generate cache key for API request
   */
  private generateKey(url: string, options?: RequestInit): string {
    const method = options?.method || 'GET';
    const body = options?.body ? JSON.stringify(options.body) : '';
    return `api_${method}_${btoa(url + body)}`;
  }

  /**
   * Get cached response
   */
  get<T>(url: string, options?: RequestInit): CachedResponse<T> | null {
    const key = this.generateKey(url, options);
    const cached = this.cache.get<CachedResponse<T>>(key);
    
    if (!cached) return null;

    const now = Date.now();
    if (now - cached.timestamp > cached.ttl) {
      this.cache.remove(key);
      return null;
    }

    return cached;
  }

  /**
   * Set cached response
   */
  set<T>(
    url: string, 
    response: T, 
    options?: RequestInit & ApiCacheOptions
  ): void {
    const key = options?.key || this.generateKey(url, options);
    const ttl = options?.ttl || this.defaultTTL;
    
    const entry: CachedResponse<T> = {
      data: response,
      timestamp: Date.now(),
      ttl,
    };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595

    this.cache.set(key, entry);
  }

<<<<<<< HEAD
  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
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

  // Generate cache key from request parameters
  generateKey(url: string, params?: Record<string, any>): string {
    const paramString = params ? JSON.stringify(params) : '';
    return `${url}:${paramString}`;
  }

  // Clean expired entries
  cleanExpired(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.cache.delete(key));
  }
}

// Create singleton instance
export const apiCache = new APICache();

export default APICache;
=======
  /**
   * Clear cache for specific URL pattern
   */
  clearPattern(pattern: string): void {
    const keys = this.cache.keys();
    const regex = new RegExp(pattern);
    
    keys.forEach(key => {
      if (regex.test(key)) {
        this.cache.remove(key);
      }
    });
  }

  /**
   * Clear all API cache
   */
  clear(): void {
    const keys = this.cache.keys();
    keys.forEach(key => {
      if (key.startsWith('api_')) {
        this.cache.remove(key);
      }
    });
  }

  /**
   * Get cache statistics
   */
  getStats() {
    return this.cache.getStats();
  }
}

export const apiCache = new ApiCache();
export default apiCache;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
=======
 * Provides intelligent caching for API responses
 */

export interface CacheConfig {
  ttl: number; // Time to live in milliseconds
  maxSize: number; // Maximum number of entries
  storage: 'memory' | 'localStorage' | 'sessionStorage';
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class APICache {
  private cache: Map<string, CacheEntry<any>> = new Map();
  private config: CacheConfig;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      ttl: config.ttl || 5 * 60 * 1000, // 5 minutes default
      maxSize: config.maxSize || 100,
      storage: config.storage || 'memory'
    };
  }

  private isExpired(entry: CacheEntry<any>): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }

  private evictOldest(): void {
    if (this.cache.size >= this.config.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey) {
        this.cache.delete(oldestKey);
      }
    }
  }

  set<T>(key: string, data: T, ttl?: number): void {
    this.evictOldest();
    
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.config.ttl
    };

    this.cache.set(key, entry);
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    if (this.isExpired(entry)) {
      this.cache.delete(key);
      return null;
    }

    return entry.data as T;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    return entry ? !this.isExpired(entry) : false;
  }

  delete(key: string): boolean {
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
}

// Create singleton instance
export const apiCache = new APICache();

export default APICache;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
