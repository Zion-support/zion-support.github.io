/**
 * API Interceptor Utility;
 * Provides request/response interceptors for API calls;
 */

interface InterceptorConfig {
  onRequest?: (config: any) => any;
  onResponse?: (response: any) => any;
  onError?: (error: any) => any;
}

class APIInterceptor {
  private requestInterceptors: Array<(config: any) => any> = [];
  private responseInterceptors: Array<(response: any) => any> = [];
  private errorInterceptors: Array<(error: any) => any> = [];

  // Add request interceptor;
  addRequestInterceptor(interceptor: (config: any) => any): void {,
    this.requestInterceptors.push(interceptor);
  }

  // Add response interceptor;
  addResponseInterceptor(interceptor: (response: any) => any): void {,
    this.responseInterceptors.push(interceptor);
  }

  // Add error interceptor;
  addErrorInterceptor(interceptor: (error: any) => any): void {,
    this.errorInterceptors.push(interceptor);
  }

  // Remove request interceptor;
  removeRequestInterceptor(interceptor: (config: any) => any): void {,
    const index = this.requestInterceptors.indexOf(interceptor);
    if (index > -1) {,
      this.requestInterceptors.splice(index, 1);
    }
  }

  // Remove response interceptor;
  removeResponseInterceptor(interceptor: (response: any) => any): void {,
    const index = this.responseInterceptors.indexOf(interceptor);
    if (index > -1) {,
      this.responseInterceptors.splice(index, 1);
    }
  }

  // Remove error interceptor;
  removeErrorInterceptor(interceptor: (error: any) => any): void {,
    const index = this.errorInterceptors.indexOf(interceptor);
    if (index > -1) {,
      this.errorInterceptors.splice(index, 1);
    }
  }

  // Apply request interceptors;
  applyRequestInterceptors(config: any): any {,
    return this.requestInterceptors.reduce((acc, interceptor) => {
      try {
        return interceptor(acc);
      } catch (error) {
        return acc;
      }
    }, config);
  }

  // Apply response interceptors;
  applyResponseInterceptors(response: any): any {,
    return this.responseInterceptors.reduce((acc, interceptor) => {
      try {
        return interceptor(acc);
      } catch (error) {
        return acc;
      }
    }, response);
  }

  // Apply error interceptors;
  applyErrorInterceptors(error: any): any {,
    return this.errorInterceptors.reduce((acc, interceptor) => {
      try {
        return interceptor(acc);
      } catch (interceptorError) {
        return acc;
      }
    }, error);
  }

  // Clear all interceptors;
  clearAll(): void {
    this.requestInterceptors = [];
    this.responseInterceptors = [];
    this.errorInterceptors = [];
  }

  // Get interceptor counts;
  getInterceptorCounts(): {
    request: number,
    response: number,
    error: number,
  } {
    return {
      request: this.requestInterceptors.length;
      response: this.responseInterceptors.length;
      error: this.errorInterceptors.length;
    };
  }
}

// Create singleton instance;
export const apiInterceptor = new APIInterceptor();

export default APIInterceptor;
 * Centralized API request handling with error handling, retry logic, and caching;
 */
// ErrorHandler class definition;
    }
    return ErrorHandler.instance;
  }
  handleNetworkError(erro,
  r: Error, ur)
    }
}
  };
}
}
}
}
  headers: config.headers || {},
      interceptor,
  s: config.interceptors || {}
    };
    this.errorHandler = ErrorHandler.getInstance();
  }
    }
    return APIInterceptor.instance;
  }
  /**
   * Make API request;
   */
  async request<T = unknown>(confi)
      }
    }
    // Check for pending identical requests;
    }
    // Create the request promise;
    const requestPromise = this.executeRequest<T>(fullConfig);
    this.pendingRequests.set(cacheKey, requestPromise as Promise<APIResponse>);
      }
      return response;
    }
  }
  /**
   * Execute the actual request;
   */
  private async executeRequest<T>(confi)
      }
      const url = this.buildURL(finalConfig);
      const,
      };
      const response = await fetch(url, fetchOptions);
      const duration = performance.now() - startTime;
      // Record performance metric;
      performanceMetrics.recordNetworkRequest(url, duration, response.status);
      // Handle non-2xx responses;
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      // Apply response interceptor;
      let finalResponse = response;
      }
      // Parse response data;
      const data = await this.parseResponse<T>(finalResponse);
      };
      }
      // Apply error interceptor;
      }
      throw err;
    }
  }
  /**
   * GET request;
   */
  async get<T = unknown>(ur,
  l: string,
    confi,
  g: Partial<RequestConfig> = {})
  d: 'GET' });
  }
  /**
   * POST request;
   */
  async post<T = unknown>(ur,
  l: string,
    body?: unknown,
    confi,
  g: Partial<RequestConfig> = {})
  d: 'POST', body });
  }
  /**
   * PUT request;
   */
  async put<T = unknown>(ur,
  l: string,
    body?: unknown,
    confi,
  g: Partial<RequestConfig> = {})
  d: 'PUT', body });
  }
  /**
   * DELETE request;
   */
  async delete<T = unknown>(ur,
  l: string,
    confi,
  g: Partial<RequestConfig> = {})
  d: 'DELETE' });
  }
  /**
   * PATCH request;
   */
  async patch<T = unknown>(ur,
  l: string,
    body?: unknown,
    confi,
  g: Partial<RequestConfig> = {})
  d: 'PATCH', body });
  }
  /**
   * Prepare request configuration;
   */
  private prepareRequest(confi)
      },
      timeou,
  t: config.timeout || this.config.timeout,
      retryAttempt,
  s: config.retryAttempts ?? this.config.retryAttempts,
      cach,
  e: config.cache ?? this.config.enableCaching;
    };
  }
  /**
   * Build full URL with query parameters;
   */
  private buildURL(confi)
    let url = config.url.startsWith('http') ? config.url : `${this.config.baseURL}${config.url}`;
      });`
      url += `?${params.toString()}`;
    }
    return url;
  }
  /**
   * Build request headers;
   */
  private buildHeaders(confi)
    });
    return headers;
  }
  /**
   * Create abort signal for timeout;
   */
  private createAbortSignal(timeou)
  }
  /**
   * Parse response based on content type;
   */
  private async parseResponse<T>(respons)
    }
    }
    return (await response.blob()) as T;
  }
  /**
   * Get cache key for request;
   */
  private getCacheKey(confi)
    return `${config.method}:${url}`;
  }
  /**
   * Get response from cache;
   */
  private getFromCache(ke)
    }
    return entry.data as APIResponse;
  }
  /**
   * Set response in cache;
   */
  private setInCache(ke,
  y: string, respons)
    });
  }
  /**
   * Clear cache;
   */
  }
  /**
   * Clear expired cache entries;
   */
      }
    }
  }
  /**
   * Get cache statistics;
   */
    };
  }
  /**
   * Delay helper for retry logic;
   */
  private delay(m)
  }
  /**
   * Update configuration;
   */
  updateConfig(confi)
    this.config = { ...this.config, ...config };
  }
  /**
   * Get current configuration;
   */
    return { ...this.config };
  }
}
// Export singleton instance;
export const apiInterceptor = APIInterceptor.getInstance();
export default APIInterceptor;
`
