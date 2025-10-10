// API interceptor utility

export interface InterceptorConfig {
  baseURL?: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

export interface InterceptorRequest {
  url: string;
  method: string;
  headers: Record<string, string>;
  body?: any;
  params?: Record<string, any>;
}

export interface InterceptorResponse {
  data: any;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface InterceptorError {
  message: string;
  status?: number;
  statusText?: string;
  data?: any;
}

export class APIInterceptor {
  private config: Required<InterceptorConfig>;
  private requestInterceptors: Array<(request: InterceptorRequest) => InterceptorRequest> = [];
  private responseInterceptors: Array<(response: InterceptorResponse) => InterceptorResponse> = [];
  private errorInterceptors: Array<(error: InterceptorError) => InterceptorError> = [];

  constructor(config: InterceptorConfig = {}) {
    this.config = {
      baseURL: '',
      timeout: 10000,
      retries: 3,
      retryDelay: 1000,
      ...config
    };
  }

  /**
   * Add request interceptor
   */
  addRequestInterceptor(interceptor: (request: InterceptorRequest) => InterceptorRequest): void {
    this.requestInterceptors.push(interceptor);
  }

  /**
   * Add response interceptor
   */
  addResponseInterceptor(interceptor: (response: InterceptorResponse) => InterceptorResponse): void {
    this.responseInterceptors.push(interceptor);
  }

  /**
   * Add error interceptor
   */
  addErrorInterceptor(interceptor: (error: InterceptorError) => InterceptorError): void {
    this.errorInterceptors.push(interceptor);
  }

  /**
   * Remove request interceptor
   */
  removeRequestInterceptor(interceptor: (request: InterceptorRequest) => InterceptorRequest): void {
    const index = this.requestInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.requestInterceptors.splice(index, 1);
    }
  }

  /**
   * Remove response interceptor
   */
  removeResponseInterceptor(interceptor: (response: InterceptorResponse) => InterceptorResponse): void {
    const index = this.responseInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.responseInterceptors.splice(index, 1);
    }
  }

  /**
   * Remove error interceptor
   */
  removeErrorInterceptor(interceptor: (error: InterceptorError) => InterceptorError): void {
    const index = this.errorInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.errorInterceptors.splice(index, 1);
    }
  }

  /**
   * Intercept and process request
   */
  interceptRequest(request: InterceptorRequest): InterceptorRequest {
    let processedRequest = { ...request };

    this.requestInterceptors.forEach(interceptor => {
      processedRequest = interceptor(processedRequest);
    });

    return processedRequest;
  }

  /**
   * Intercept and process response
   */
  interceptResponse(response: InterceptorResponse): InterceptorResponse {
    let processedResponse = { ...response };

    this.responseInterceptors.forEach(interceptor => {
      processedResponse = interceptor(processedResponse);
    });

    return processedResponse;
  }

  /**
   * Intercept and process error
   */
  interceptError(error: InterceptorError): InterceptorError {
    let processedError = { ...error };

    this.errorInterceptors.forEach(interceptor => {
      processedError = interceptor(processedError);
    });

    return processedError;
  }

  /**
   * Make a request with interceptors
   */
  async request(request: InterceptorRequest): Promise<InterceptorResponse> {
    try {
      // Apply request interceptors
      const processedRequest = this.interceptRequest(request);

      // Make the request
      const response = await this.makeRequest(processedRequest);

      // Apply response interceptors
      return this.interceptResponse(response);
    } catch (error) {
      // Apply error interceptors
      const processedError = this.interceptError(error as InterceptorError);
      throw processedError;
    }
  }

  /**
   * Make the actual request
   */
  private async makeRequest(request: InterceptorRequest): Promise<InterceptorResponse> {
    const url = `${this.config.baseURL}${request.url}`;
    const queryString = request.params ? this.buildQueryString(request.params) : '';
    const fullUrl = `${url}${queryString}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

    try {
      const response = await fetch(fullUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body ? JSON.stringify(request.body) : undefined,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      const headers: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers
      };
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  /**
   * Build query string from parameters
   */
  private buildQueryString(params: Record<string, any>): string {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });

    const queryString = searchParams.toString();
    return queryString ? `?${queryString}` : '';
  }
}

export default APIInterceptor;