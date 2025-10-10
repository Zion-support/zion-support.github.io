'use client';

/**
 * API Caching Utility
 * Provides caching, deduplication, and retry logic for API calls
 */

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
}

// Create singleton instance
export const apiCache = new ApiCache();

export default ApiCache;