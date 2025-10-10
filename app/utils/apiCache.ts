// API cache utility

export interface APICacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of cached responses
  storage?: 'memory' | 'localStorage' | 'sessionStorage';
}

export interface CachedResponse {
  data: any;
  timestamp: number;
  ttl: number;
  status: number;
  headers: Record<string, string>;
}

export class APICache {
  private cache: Map<string, CachedResponse> = new Map();
  private options: Required<APICacheOptions>;

  constructor(options: APICacheOptions = {}) {
    this.options = {
      ttl: 5 * 60 * 1000, // 5 minutes
      maxSize: 100,
      storage: 'memory',
      ...options
    };
  }

  /**
   * Cache a response
   */
  set(key: string, response: any, status: number = 200, headers: Record<string, string> = {}, ttl?: number): void {
    const cachedResponse: CachedResponse = {
      data: response,
      timestamp: Date.now(),
      ttl: ttl || this.options.ttl,
      status,
      headers
    };

    this.cache.set(key, cachedResponse);

    // Enforce max size
    if (this.cache.size > this.options.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    // Persist to storage if needed
    if (this.options.storage !== 'memory') {
      this.persistToStorage();
    }
  }

  /**
   * Get a cached response
   */
  get(key: string): CachedResponse | null {
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }

    // Check if expired
    if (this.isExpired(cached)) {
      this.cache.delete(key);
      return null;
    }

    return cached;
  }

  /**
   * Check if a key exists and is not expired
   */
  has(key: string): boolean {
    const cached = this.cache.get(key);
    return cached ? !this.isExpired(cached) : false;
  }

  /**
   * Delete a cached response
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * Clear all cached responses
   */
  clear(): void {
    this.cache.clear();
    
    if (this.options.storage !== 'memory') {
      this.clearStorage();
    }
  }

  /**
   * Generate cache key from request
   */
  generateKey(url: string, method: string = 'GET', body?: any): string {
    const bodyString = body ? JSON.stringify(body) : '';
    return `${method}:${url}:${bodyString}`;
  }

  /**
   * Cache a fetch response
   */
  async cacheFetch(url: string, options: RequestInit = {}): Promise<Response> {
    const key = this.generateKey(url, options.method || 'GET', options.body);
    
    // Check cache first
    const cached = this.get(key);
    if (cached) {
      return new Response(JSON.stringify(cached.data), {
        status: cached.status,
        headers: cached.headers
      });
    }

    // Fetch from network
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      
      // Cache the response
      this.set(key, data, response.status, Object.fromEntries(response.headers.entries()));
      
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get cache statistics
   */
  getStats(): { size: number; maxSize: number; hitRate: number } {
    return {
      size: this.cache.size,
      maxSize: this.options.maxSize,
      hitRate: 0 // Would need to track hits/misses for accurate hit rate
    };
  }

  /**
   * Clean up expired entries
   */
  cleanup(): void {
    const now = Date.now();
    for (const [key, cached] of this.cache.entries()) {
      if (this.isExpired(cached)) {
        this.cache.delete(key);
      }
    }
  }

  private isExpired(cached: CachedResponse): boolean {
    return Date.now() - cached.timestamp > cached.ttl;
  }

  private persistToStorage(): void {
    if (this.options.storage === 'localStorage' || this.options.storage === 'sessionStorage') {
      const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
      const data = Array.from(this.cache.entries());
      storage.setItem('api_cache', JSON.stringify(data));
    }
  }

  private clearStorage(): void {
    if (this.options.storage === 'localStorage') {
      localStorage.removeItem('api_cache');
    } else if (this.options.storage === 'sessionStorage') {
      sessionStorage.removeItem('api_cache');
    }
  }
}

export default APICache;