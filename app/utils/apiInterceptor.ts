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
    request: number;
    response: number;
    error: number;
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