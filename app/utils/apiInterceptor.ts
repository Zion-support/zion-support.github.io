'use client'
/**
 * API Interceptor Utility
 * Provides request/response interceptors for API calls
 */

export interface InterceptorConfig {
  onRequest?: (config: any) => any;
  onResponse?: (response: any) => any;
  onError?: (error: any) => any;
}

class APIInterceptor {
  private requestInterceptors: Array<(config: any) => any> = [];
  private responseInterceptors: Array<(response: any) => any> = [];
  private errorInterceptors: Array<(error: any) => any> = [];

  addRequestInterceptor(interceptor: (config: any) => any): void {
    this.requestInterceptors.push(interceptor);
  }

  addResponseInterceptor(interceptor: (response: any) => any): void {
    this.responseInterceptors.push(interceptor);
  }

  addErrorInterceptor(interceptor: (error: any) => any): void {
    this.errorInterceptors.push(interceptor);
  }

  removeRequestInterceptor(interceptor: (config: any) => any): void {
    const index = this.requestInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.requestInterceptors.splice(index, 1);
    }
  }

  removeResponseInterceptor(interceptor: (response: any) => any): void {
    const index = this.responseInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.responseInterceptors.splice(index, 1);
    }
  }

  removeErrorInterceptor(interceptor: (error: any) => any): void {
    const index = this.errorInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.errorInterceptors.splice(index, 1);
    }
  }

  interceptRequest(config: any): any {
    let modifiedConfig = config;
    
    for (const interceptor of this.requestInterceptors) {
      try {
        modifiedConfig = interceptor(modifiedConfig);
      } catch (error) {
        console.error('Request interceptor error:', error);
      }
    }
    
    return modifiedConfig;
  }

  interceptResponse(response: any): any {
    let modifiedResponse = response;
    
    for (const interceptor of this.responseInterceptors) {
      try {
        modifiedResponse = interceptor(modifiedResponse);
      } catch (error) {
        console.error('Response interceptor error:', error);
      }
    }
    
    return modifiedResponse;
  }

  interceptError(error: any): any {
    let modifiedError = error;
    
    for (const interceptor of this.errorInterceptors) {
      try {
        modifiedError = interceptor(modifiedError);
      } catch (interceptorError) {
        console.error('Error interceptor error:', interceptorError);
      }
    }
    
    return modifiedError;
  }

  clear(): void {
    this.requestInterceptors = [];
    this.responseInterceptors = [];
    this.errorInterceptors = [];
  }
}

// Create singleton instance
export const apiInterceptor = new APIInterceptor();

export default APIInterceptor;