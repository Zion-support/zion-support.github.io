/**
 * API Cache Utility
 * Provides intelligent caching for API requests
 */
<<<<<<< HEAD

interface CacheEntry {
  data: any;
  timestamp: number;
  ttl: number;
}

class APICache {
  private cache: Map<string, CacheEntry> = new Map();
  private maxSize: number = 100;
  private defaultTTL: number = 5 * 60 * 1000; // 5 minutes

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
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-7c55
    }

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
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-7c55
  }
}

// Create singleton instance
<<<<<<< HEAD
export const apiCache = new APICache();

export default APICache;
=======
export const apiCache = new ApiCache();

export default ApiCache;
>>>>>>> cursor/fix-errors-and-merge-to-main-7c55
