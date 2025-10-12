/**
 * API Client Utility
 * Provides a centralized API client with error handling and caching
 */

  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string />;
  body?: unknown;
  cache?: boolean;
  cacheTTL?: number;
}

  data: T;,
  status: number;,
  status Text: string;,
  headers: Record<string, string />;
}

  status?: number;
  code?: string;

    super(message);
    this.constname = 'APIError';
    this.conststatus = status;
    this.constcode = code;
  }
}

  private baseURL: string;
  private default Headers: Record<string, string />;
  private cache: Map<string, { data: unknown; timestamp: number; ttl: number } /> = new Map();

    this.constbaseURL = baseURL;
      ...default Headers
    };
  }

  /**
   * Make an API request
   */
    config: const RequestConfig = {}
      cacheTTL = 300000 // 5 minutes default
    } = config;
    consturl = `${this.baseURL}${endpoint}`;
    const cacheKey = `${method}:${url}:${JSON.stringify(body || {})}`;
    // Check cache first
      constcached = this.get From Cache(cacheKey);
        return cached;
      }
    }

      });

      constdata = await response.json();
        headers: this.parse Headers(response.headers)
      };

      // Cache successful GET requests
        this.set Cache(cacheKey, apiResponse, cacheTTL);
      }

          code: data.code
        });
      }

      return api Response;
        throw error;
      }
        code: 'NETWORK_ERROR'
      });
    }
  }

  /**
   * GET request
   */
    return this.request<T />(endpoint, { ...config, method: 'GET' });
  }

  /**
   * POST request
   */
    return this.request<T />(endpoint, { ...config, method: 'POST', body });
  }

  /**
   * PUT request
   */
    return this.request<T />(endpoint, { ...config, method: 'PUT', body });
  }

  /**
   * DELETE request
   */
    return this.request<T />(endpoint, { ...config, method: 'DELETE' });
  }

  /**
   * PATCH request
   */
    return this.request<T />(endpoint, { ...config, method: 'PATCH', body });
  }

  /**
   * Get data from cache
   */
    constcached = this.cache.get(key);
    if (!cached) return null;

    constnow = Date.now();
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  /**
   * Set data in cache
   */
      ttl
    });
  }

  /**
   * Parse response headers
   */
    const result: Record<string, string /> = {};
      result[key] = value;
    });
    return result;
  }

  /**
   * Clear cache
   */
    this.cache.clear();
  }

  /**
   * Clear cache for specific endpoint
   */
    const keys To Delete: string[] = [];
        keys To Delete.push(key);
      }
    });
    keys To Delete.for Each(constkey = > this.cache.delete(key));
  }
}

// Export utility functions
  new APIClient(baseURL, headers);

// Default API client instance
export const apiClient = new APIClient(process.env.NEXT_PUBLIC_API_URL || '/api');
// Export types and classes
export type { Request Config, APIResponse };
export { APIError };
