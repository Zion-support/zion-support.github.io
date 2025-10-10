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