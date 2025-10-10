'use client'
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
   * Get cached data or fetch if not available
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
    const request = this.createRequest(key, fetcher);
    
    if (this.config.deduplicate) {
      this.pendingRequests.set(key, request);
    }

    try {
      const result = await request.promise;
      this.setCache(key, result);
      return result as T;
    } finally {
      if (this.config.deduplicate) {
        this.pendingRequests.delete(key);
      }
    }
  }

  /**
   * Create a request with retry logic
   */
  private createRequest<T>(key: string, fetcher: () => Promise<T>): PendingRequest<T> {
    const executeWithRetry = async (): Promise<T> => {
      let lastError: Error | null = null;
      
      for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
        try {
          return await fetcher();
        } catch (error) {
          lastError = error as Error;
          
          if (attempt < this.config.maxRetries) {
            const delay = this.config.retryDelay * Math.pow(2, attempt);
            await this.delay(delay);
          }
        }
      }
      
      throw lastError || new Error('Request failed after all retries');
    };

    return {
      promise: executeWithRetry(),
      timestamp: Date.now()
    };
  }

  /**
   * Get data from cache
   */
  private getFromCache<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    if (Date.now() > cached.expiry) {
      this.cache.delete(key);
      return null;
    }

    return cached.data as T;
  }

  /**
   * Set data in cache
   */
  private setCache(key: string, data: any): void {
    this.cache.set(key, {
      data,
      expiry: Date.now() + this.config.ttl
    });
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
   * Get cache statistics
   */
  getStats(): {
    size: number;
    pendingRequests: number;
    config: Required<ApiCacheConfig>;
  } {
    return {
      size: this.cache.size,
      pendingRequests: this.pendingRequests.size,
      config: this.config
    };
  }

  /**
   * Utility delay function
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Create singleton instance
export const apiCache = new ApiCache();

export default ApiCache;