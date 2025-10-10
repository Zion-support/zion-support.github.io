'use client';

/**
 * API Cache Utility
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

    this.cache.set(key, entry);
  }

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
interface ApiCacheConfig {
  ttl?: number;
  maxRetries?: number;
  retryDelay?: number;
  deduplicate?: boolean;
}

interface PendingRequest<T> {
  promise: Promise<T>;
  timestamp: number;
}

/**
 * API Cache Manager with request deduplication
 */
export class ApiCache {
  private cache: Map<string, { data: any; expiry: number }> = new Map();
  private pendingRequests: Map<string, PendingRequest<unknown>> = new Map();
  private config: Required<ApiCacheConfig>;

  constructor(config: ApiCacheConfig = {}) {
    this.config = {
      ttl: config.ttl || 5 * 60 * 1000, // 5 minutes
      maxRetries: config.maxRetries || 3,
      retryDelay: config.retryDelay || 1000,
      deduplicate: config.deduplicate !== false
    };
  }

  /**
   * Get cached data or fetch if not cached
   */
  async get<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
    // Check if request is already pending (deduplication)
    if (this.config.deduplicate && this.pendingRequests.has(key)) {
      return this.pendingRequests.get(key)!.promise as Promise<T>;
    }

    // Check cache first
    const cached = this.getFromCache<T>(key);
    if (cached !== null) {
      return cached;
    }

    // Create new request
    const promise = this.fetchWithRetry(key, fetcher);
    
    if (this.config.deduplicate) {
      this.pendingRequests.set(key, {
        promise,
        timestamp: Date.now()
      });
    }

    try {
      const result = await promise;
      return result;
    } finally {
      if (this.config.deduplicate) {
        this.pendingRequests.delete(key);
      }
    }
  }

  /**
   * Get data from cache
   */
  private getFromCache<T>(key: string): T | null {
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }

    // Check if expired
    if (Date.now() > cached.expiry) {
      this.cache.delete(key);
      return null;
    }

    return cached.data as T;
  }

  /**
   * Set data in cache
   */
  private setCache<T>(key: string, data: T, ttl?: number): void {
    const expiry = Date.now() + (ttl || this.config.ttl);
    this.cache.set(key, { data, expiry });
  }

  /**
   * Fetch data with retry logic
   */
  private async fetchWithRetry<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      try {
        const result = await fetcher();
        
        // Cache the successful result
        this.setCache(key, result);
        
        return result;
      } catch (error) {
        lastError = error as Error;
        
        // Don't retry on the last attempt
        if (attempt === this.config.maxRetries) {
          break;
        }

        // Wait before retrying
        await this.delay(this.config.retryDelay * Math.pow(2, attempt));
      }
    }

    throw lastError || new Error('Failed to fetch data');
  }

  /**
   * Delay utility
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Clear cache
   */
  clear(): void {
    this.cache.clear();
    this.pendingRequests.clear();
  }

  /**
   * Remove specific key from cache
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * Check if key exists in cache
   */
  has(key: string): boolean {
    const cached = this.cache.get(key);
    if (!cached) return false;
    
    // Check if expired
    if (Date.now() > cached.expiry) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }

  /**
   * Get cache statistics
   */
  getStats(): {
    size: number;
    pendingRequests: number;
    hitRate: number;
  } {
    const totalRequests = this.cache.size + this.pendingRequests.size;
    const hitRate = totalRequests > 0 ? this.cache.size / totalRequests : 0;

    return {
      size: this.cache.size,
      pendingRequests: this.pendingRequests.size,
      hitRate
    };
  }

  /**
   * Clean expired entries
   */
  cleanExpired(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, cached] of this.cache.entries()) {
      if (now > cached.expiry) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.cache.delete(key));
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
}

// Create singleton instance
export const apiCache = new ApiCache();

export default ApiCache;
