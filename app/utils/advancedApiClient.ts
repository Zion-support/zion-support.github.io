/**
 * Advanced API Client
 * Generated: October 8, 2025
 * 
 * Comprehensive API client with retry, caching, and error handling
 */

import { logger } from './enhancedLogger';

export interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retries: number;
  retryDelay: number;
  enableCaching: boolean;
  cacheExpiry: number;
  headers?: Record<string, string>;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number;
  timestamp: string;
}

export class AdvancedApiClient {
  private config: ApiConfig;
  private cache: Map<string, { data: any; expiry: number }>;
  private requestQueue: Map<string, Promise<any>>;

  constructor(config: Partial<ApiConfig> = {}) {
    this.config = {
      baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
      timeout: 30000,
      retries: 3,
      retryDelay: 1000,
      enableCaching: true,
      cacheExpiry: 300000, // 5 minutes
      ...config,
    };
    this.cache = new Map();
    this.requestQueue = new Map();
  }

  /**
   * GET request with caching and retry
   */
  async get<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const cacheKey = `GET:${endpoint}`;

    // Check cache
    if (this.config.enableCaching) {
      const cached = this.getCached<T>(cacheKey);
      if (cached) {
        logger.debug('API: Cache hit', { endpoint });
        return cached;
      }
    }

    // Check if request is already in progress
    if (this.requestQueue.has(cacheKey)) {
      logger.debug('API: Request already in progress', { endpoint });
      return this.requestQueue.get(cacheKey);
    }

    // Make request
    const request = this.makeRequest<T>('GET', endpoint, undefined, options);
    this.requestQueue.set(cacheKey, request);

    try {
      const response = await request;
      
      // Cache successful response
      if (response.success && this.config.enableCaching) {
        this.setCached(cacheKey, response);
      }

      return response;
    } finally {
      this.requestQueue.delete(cacheKey);
    }
  }

  /**
   * POST request
   */
  async post<T>(
    endpoint: string,
    data: any,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('POST', endpoint, data, options);
  }

  /**
   * PUT request
   */
  async put<T>(
    endpoint: string,
    data: any,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('PUT', endpoint, data, options);
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('DELETE', endpoint, undefined, options);
  }

  /**
   * Make HTTP request with retry logic
   */
  private async makeRequest<T>(
    method: string,
    endpoint: string,
    data?: any,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.config.baseUrl}${endpoint}`;
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= this.config.retries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...this.config.headers,
            ...options.headers,
          },
          body: data ? JSON.stringify(data) : undefined,
          signal: controller.signal,
          ...options,
        });

        clearTimeout(timeoutId);

        const responseData = await response.json().catch(() => null);

        if (response.ok) {
          logger.info('API: Request successful', {
            method,
            endpoint,
            status: response.status,
          });

          return {
            success: true,
            data: responseData,
            statusCode: response.status,
            timestamp: new Date().toISOString(),
          };
        }

        // Handle HTTP errors
        const error = `HTTP ${response.status}: ${response.statusText}`;
        logger.warn('API: Request failed', {
          method,
          endpoint,
          status: response.status,
          attempt: attempt + 1,
        });

        lastError = new Error(error);

        // Don't retry on 4xx errors (client errors)
        if (response.status >= 400 && response.status < 500) {
          break;
        }
      } catch (error) {
        lastError = error as Error;
        logger.warn('API: Request error', {
          method,
          endpoint,
          error: (error as Error).message,
          attempt: attempt + 1,
        });
      }

      // Wait before retry
      if (attempt < this.config.retries) {
        await this.delay(this.config.retryDelay * (attempt + 1));
      }
    }

    // All retries failed
    logger.error('API: All retries failed', {
      method,
      endpoint,
      error: lastError?.message,
    });

    return {
      success: false,
      error: lastError?.message || 'Request failed',
      statusCode: 0,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Get cached response
   */
  private getCached<T>(key: string): ApiResponse<T> | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    if (Date.now() > cached.expiry) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  /**
   * Set cached response
   */
  private setCached<T>(key: string, response: ApiResponse<T>): void {
    this.cache.set(key, {
      data: response,
      expiry: Date.now() + this.config.cacheExpiry,
    });
  }

  /**
   * Clear cache
   */
  clearCache(pattern?: string): void {
    if (!pattern) {
      this.cache.clear();
      return;
    }

    const keysToDelete: string[] = [];
    this.cache.forEach((_, key) => {
      if (key.includes(pattern)) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach((key) => this.cache.delete(key));
  }

  /**
   * Delay utility
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    };
  }

  /**
   * Update configuration
   */
  updateConfig(config: Partial<ApiConfig>): void {
    this.config = { ...this.config, ...config };
  }
}

// Export singleton instance
export const apiClient = new AdvancedApiClient();

export default apiClient;
