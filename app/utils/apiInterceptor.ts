
'use client';


/**

import { apiClient } from './apiClient';

export interface InterceptorConfig {
  request?: (config: RequestInit) => RequestInit | Promise<RequestInit>;
  response?: (response: Response) => Response | Promise<Response>;
  error?: (error: Error) => Error | Promise<Error>;

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


  /**
   * Clear all interceptors
   */
  clear(): void {


    this.requestInterceptors = [];
    this.responseInterceptors = [];
    this.errorInterceptors = [];
  }


}

// Create singleton instance
export const apiInterceptor = new APIInterceptor();


  /**
   * Apply request interceptors
   */
  async applyRequestInterceptors(config: RequestInit): Promise<RequestInit> {
    let modifiedConfig = config;
    
    for (const interceptor of this.requestInterceptors) {
      modifiedConfig = await interceptor(modifiedConfig);

