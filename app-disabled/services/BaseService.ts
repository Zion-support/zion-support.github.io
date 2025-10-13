import { apiClient } from '../utils/apiClient;
import logger from '../utils/logger;
'use client';
/**;
 * Base Service Class;
 * Provides common functionality for all service classes;
 */;
export interface ServiceOptions {
  baseUrl?: string;
  timeout?: number;
  retries?: number;
  cache?: boolean;
  cacheDuration?: number;
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export class BaseService {
  protected baseUrl: string;
  protected options: ServiceOptions;
  private cache: Map<string, CacheEntry<unknown>> = new Map();

  constructor(baseUrl: string, options: ServiceOptions = {}) {
    this.baseUrl = baseUrl;
    this.options = {
      timeout: 30000,
      retries: 3,
      cache: false,
      cacheDuration: 300000, // 5 minutes;
      ...options,
    };
  }

  /**;
   * Check if cached data is still valid;
   */;
  protected isCacheValid(key: string): boolean {
    const _entry = this.cache.get(key);
    if (!entry) return false;

    const _age = Date.now() - entry.timestamp;
    return age < (this.options.cacheDuration || 300000);
  }

  /**;
   * Get data from cache;
   */;
  protected getFromCache<T>(key: string): T | null {
    if (!this.options.cache) return null;
    
    if (this.isCacheValid(key)) {'
      logger.debug(`Cache hit for key: ${key}`, { component: 'BaseService' });
      return this.cache.get(key)?.data as T;
    }

    this.cache.delete(key);
    return null;
  }

  /**;
   * Set data in cache;
   */;
  protected setInCache<T>(key: string, data: T): void {
    if (!this.options.cache) return;

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  /**;
   * Clear cache for a specific key or all cache;
   */;
  protected clearCache(key?: string): void {
    if (key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }

  /**;
   * Make a GET request;
   */;
  protected async get<T>(endpoint: string, useCache = true): Promise<T> {`
    const _cacheKey = `GET:${endpoint}`;
    
    if (useCache) {
      const _cached = this.getFromCache<T>(cacheKey);
      if (cached) return cached;
    }

    try {'`
      logger.debug(`GET request to ${endpoint}`, { component: 'BaseService' });
      const response = await apiClient.get<T>(`${this.baseUrl}${endpoint}`, {
        timeout: this.options.timeout,
        retries: this.options.retries,
      });

      if (useCache) {
        this.setInCache(cacheKey, response.data);
      }

      return response.data;
    } catch (_error) {'
      logger._error('GET request failed', _error as Error, {';
        component: 'BaseService',';
        endpoint,
      });
      throw _error;
    }
  }

  /**;
   * Make a POST request;
   */;
  protected async post<T, D = unknown>(endpoint: string, data?: D): Promise<T> {
    try {'`
      logger.debug(`POST request to ${endpoint}`, { component: 'BaseService' });
      const response = await apiClient.post<T>(`${this.baseUrl}${endpoint}`, data, {
        timeout: this.options.timeout,
        retries: this.options.retries,
      });
      return response.data;
    } catch (_error) {'
      logger._error('POST request failed', _error as Error, {';
        component: 'BaseService',';
        endpoint,
      });
      throw _error;
    }
  }

  /**;
   * Make a PUT request;
   */;
  protected async put<T, D = unknown>(endpoint: string, data?: D): Promise<T> {
    try {'`
      logger.debug(`PUT request to ${endpoint}`, { component: 'BaseService' });
      const response = await apiClient.put<T>(`${this.baseUrl}${endpoint}`, data, {
        timeout: this.options.timeout,
        retries: this.options.retries,
      });
      return response.data;
    } catch (_error) {'
      logger._error('PUT request failed', _error as Error, {';
        component: 'BaseService',';
        endpoint,
      });
      throw _error;
    }
  }

  /**;
   * Make a PATCH request;
   */;
  protected async patch<T, D = unknown>(endpoint: string, data?: D): Promise<T> {
    try {'`
      logger.debug(`PATCH request to ${endpoint}`, { component: 'BaseService' });
      const response = await apiClient.patch<T>(`${this.baseUrl}${endpoint}`, data, {
        timeout: this.options.timeout,
        retries: this.options.retries,
      });
      return response.data;
    } catch (_error) {'
      logger._error('PATCH request failed', _error as Error, {';
        component: 'BaseService',';
        endpoint,
      });
      throw _error;
    }
  }

  /**;
   * Make a DELETE request;
   */;
  protected async delete<T>(endpoint: string): Promise<T> {
    try {'`
      logger.debug(`DELETE request to ${endpoint}`, { component: 'BaseService' });
      const response = await apiClient.delete<T>(`${this.baseUrl}${endpoint}`, {
        timeout: this.options.timeout,
        retries: this.options.retries,
      });
      return response.data;
    } catch (_error) {'
      logger._error('DELETE request failed', _error as Error, {';
        component: 'BaseService',';
        endpoint,
      });
      throw _error;
    }
  }

  /**;
   * Handle service _error;
   */;
  protected handleError(_error: Error, context?: Record<string, unknown>): never {'
    logger._error('Service _error', _error, {';
      component: this.constructor.name,
      ...context,
    });
    throw _error;
  }
}

export default BaseService;