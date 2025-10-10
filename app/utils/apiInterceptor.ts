/**
<<<<<<< HEAD
 * API Interceptor
 * Intercepts and modifies API requests and responses
 */

<<<<<<< HEAD
interface InterceptorConfig {
  onRequest?: (config: any) => any;
  onResponse?: (response: any) => any;
  onError?: (error: any) => any;
=======
import { apiClient } from './apiClient';

export interface InterceptorConfig {
  request?: (config: RequestInit) => RequestInit | Promise<RequestInit>;
  response?: (response: Response) => Response | Promise<Response>;
  error?: (error: Error) => Error | Promise<Error>;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
}

class ApiInterceptor {
  private requestInterceptors: Array<(config: RequestInit) => RequestInit | Promise<RequestInit>> = [];
  private responseInterceptors: Array<(response: Response) => Response | Promise<Response>> = [];
  private errorInterceptors: Array<(error: Error) => Error | Promise<Error>> = [];

  /**
   * Add request interceptor
   */
  addRequestInterceptor(interceptor: (config: RequestInit) => RequestInit | Promise<RequestInit>): void {
    this.requestInterceptors.push(interceptor);
  }

  /**
   * Add response interceptor
   */
  addResponseInterceptor(interceptor: (response: Response) => Response | Promise<Response>): void {
    this.responseInterceptors.push(interceptor);
  }

  /**
   * Add error interceptor
   */
  addErrorInterceptor(interceptor: (error: Error) => Error | Promise<Error>): void {
    this.errorInterceptors.push(interceptor);
  }

  /**
   * Remove request interceptor
   */
  removeRequestInterceptor(interceptor: (config: RequestInit) => RequestInit | Promise<RequestInit>): void {
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    const index = this.requestInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.requestInterceptors.splice(index, 1);
    }
  }

<<<<<<< HEAD
  /**
   * Remove response interceptor
   */
  removeResponseInterceptor(interceptor: (response: Response) => Response | Promise<Response>): void {
=======
  removeResponseInterceptor(interceptor: (response: any) => any): void {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    const index = this.responseInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.responseInterceptors.splice(index, 1);
    }
  }

<<<<<<< HEAD
  /**
   * Remove error interceptor
   */
  removeErrorInterceptor(interceptor: (error: Error) => Error | Promise<Error>): void {
=======
  removeErrorInterceptor(interceptor: (error: any) => any): void {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    const index = this.errorInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.errorInterceptors.splice(index, 1);
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
  // Apply request interceptors
  applyRequestInterceptors(config: any): any {
    return this.requestInterceptors.reduce((acc, interceptor) => {
      try {
        return interceptor(acc);
      } catch (error) {
        return acc;
      }
    }, config);
  }

  // Apply response interceptors
  applyResponseInterceptors(response: any): any {
    return this.responseInterceptors.reduce((acc, interceptor) => {
      try {
        return interceptor(acc);
      } catch (error) {
        return acc;
      }
    }, response);
  }

  // Apply error interceptors
  applyErrorInterceptors(error: any): any {
    return this.errorInterceptors.reduce((acc, interceptor) => {
      try {
        return interceptor(acc);
      } catch (interceptorError) {
        return acc;
      }
    }, error);
  }

  // Clear all interceptors
  clearAll(): void {
=======
  /**
   * Clear all interceptors
   */
  clear(): void {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    this.requestInterceptors = [];
    this.responseInterceptors = [];
    this.errorInterceptors = [];
  }
<<<<<<< HEAD

<<<<<<< HEAD
  // Get interceptor counts
  getInterceptorCounts(): {
    request: number;
    response: number;
    error: number;
  } {
    return {
      request: this.requestInterceptors.length,
      response: this.responseInterceptors.length,
      error: this.errorInterceptors.length
    };
  }
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
}

// Create singleton instance
export const apiInterceptor = new APIInterceptor();

<<<<<<< HEAD
export default APIInterceptor;
=======
  /**
   * Apply request interceptors
   */
  async applyRequestInterceptors(config: RequestInit): Promise<RequestInit> {
    let modifiedConfig = config;
    
    for (const interceptor of this.requestInterceptors) {
      modifiedConfig = await interceptor(modifiedConfig);
    }
    
    return modifiedConfig;
  }

  /**
   * Apply response interceptors
   */
  async applyResponseInterceptors(response: Response): Promise<Response> {
    let modifiedResponse = response;
    
    for (const interceptor of this.responseInterceptors) {
      modifiedResponse = await interceptor(modifiedResponse);
    }
    
    return modifiedResponse;
  }

  /**
   * Apply error interceptors
   */
  async applyErrorInterceptors(error: Error): Promise<Error> {
    let modifiedError = error;
    
    for (const interceptor of this.errorInterceptors) {
      modifiedError = await interceptor(modifiedError);
    }
    
    return modifiedError;
  }
}

export const apiInterceptor = new ApiInterceptor();
export default apiInterceptor;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
=======
export default APIInterceptor;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
