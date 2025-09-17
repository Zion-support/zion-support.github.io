/**
 * Fetch utility with retry logic and error handling
 */

export interface FetchOptions extends RequestInit {
  retries?: number;
  retryDelay?: number;
  timeout?: number;
  retryCondition?: (response: Response) => boolean;
}

export interface FetchResult<T = any> {
  data: T;
  response: Response;
  success: boolean;
  error?: string;
  retryCount: number;
}

class FetchWithRetry {
  private defaultOptions: FetchOptions = {
    retries: 3,
    retryDelay: 1000,
    timeout: 10000,
    retryCondition: (response: Response) => !response.ok
  };

  async fetch<T = any>(
    url: string,
    options: FetchOptions = {}
  ): Promise<FetchResult<T>> {
    const config = { ...this.defaultOptions, ...options };
    let lastError: Error | null = null;
    let retryCount = 0;

    for (let attempt = 0; attempt <= (config.retries || 3); attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), config.timeout || 10000);

        const response = await fetch(url, {
          ...config,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (config.retryCondition && config.retryCondition(response)) {
          if (attempt < (config.retries || 3)) {
            retryCount++;
            await this.delay(config.retryDelay || 1000);
            continue;
          }
        }

        const data = await response.json();
        
        return {
          data,
          response,
          success: true,
          retryCount,
        };
      } catch (error) {
        lastError = error as Error;
        retryCount++;

        if (attempt < (config.retries || 3)) {
          await this.delay(config.retryDelay || 1000);
        }
      }
    }

    return {
      data: null as any,
      response: new Response(),
      success: false,
      error: lastError?.message || 'Unknown error',
      retryCount,
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

const fetchWithRetry = new FetchWithRetry();

export default fetchWithRetry;