<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/backup-main-20250918-004015
/**
 * Fetch utility with retry logic and error handling
 */

<<<<<<< HEAD
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
=======
export interface RetryOptions {
  maxRetries?: number;
  retryDelay?: number;
  retryDelayMultiplier?: number;
  maxRetryDelay?: number;
  retryCondition?: (error: Error, attempt: number) => boolean;
}

export interface FetchOptions extends RequestInit {
  retry?: RetryOptions;
  timeout?: number;
}

const DEFAULT_RETRY_OPTIONS: Required<RetryOptions> = {
  maxRetries: 3,
  retryDelay: 1000,
  retryDelayMultiplier: 2,
  maxRetryDelay: 10000,
  retryCondition: (error: Error) => {
    // Retry on network errors, 5xx server errors, and 429 (rate limit)
    return (
      error.name === 'TypeError' || // Network error
      error.message.includes('fetch') ||
      error.message.includes('network') ||
      error.message.includes('timeout')
    );
  },
};

export class FetchError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string,
    public response?: Response
  ) {
    super(message);
    this.name = 'FetchError';
  }
}

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeout: number
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export async function fetchWithRetry(
  url: string,
  options: FetchOptions = {}
): Promise<Response> {
  const { retry = {}, timeout = 30000, ...fetchOptions } = options;
  const retryOptions = { ...DEFAULT_RETRY_OPTIONS, ...retry };

=======
<<<<<<< HEAD
// Fetch with retry utility for handling network requests with automatic retries

interface FetchWithRetryOptions {
  retries?: number;
  delay?: number;
  backoff?: 'linear' | 'exponential';
  timeout?: number;
}

const defaultOptions: Required<FetchWithRetryOptions> = {
  retries: 3,
  delay: 1000,
  backoff: 'exponential',
  timeout: 10000
};

=======
// Fetch with retry utility for better error handling
interface FetchWithRetryOptions {
  retries?: number;
  delay?: number;
  timeout?: number;
}

>>>>>>> main
export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {
<<<<<<< HEAD
  const { retries, delay, backoff, timeout, ...fetchOptions } = {
    ...defaultOptions,
    ...options
  };

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

=======
  const { retries = 3, delay = 1000, timeout = 10000, ...fetchOptions } = options;
  
>>>>>>> cursor/create-and-deploy-new-content-7720
  let lastError: Error;
  let attempt = 0;

  while (attempt <= retryOptions.maxRetries) {
    try {
      const response = timeout
        ? await fetchWithTimeout(url, fetchOptions, timeout)
        : await fetch(url, fetchOptions);

      if (!response.ok) {
        const error = new FetchError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          response.statusText,
          response
        );

        // Don't retry on client errors (4xx) except 429
        if (response.status >= 400 && response.status < 500 && response.status !== 429) {
          throw error;
        }

        // Check if we should retry this error
        if (attempt === retryOptions.maxRetries || !retryOptions.retryCondition(error, attempt)) {
          throw error;
        }
      } else {
        return response;
      }
<<<<<<< HEAD
    } catch (error) {
      lastError = error as Error;

      // Check if we should retry this error
      if (attempt === retryOptions.maxRetries || !retryOptions.retryCondition(lastError, attempt)) {
=======
      
>>>>>>> main
      return response;
    } catch (error) {
      lastError = error as Error;
      
<<<<<<< HEAD
      // Don't retry on the last attempt
      if (attempt === retries) {
        break;
      }

      // Calculate delay based on backoff strategy
      const currentDelay = backoff === 'exponential' 
        ? delay * Math.pow(2, attempt)
        : delay * (attempt + 1);

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, currentDelay));
    }
  }

  throw lastError || new Error('Fetch failed after all retries');
=======
      if (attempt === retries) {
>>>>>>> cursor/create-and-deploy-new-content-7720
        throw lastError;
      }

      // Calculate delay for next retry
      const delayMs = Math.min(
        retryOptions.retryDelay * Math.pow(retryOptions.retryDelayMultiplier, attempt),
        retryOptions.maxRetryDelay
      );

      await delay(delayMs);
    }

    attempt++;
  }

  throw lastError!;
<<<<<<< HEAD
}

export async function fetchJSON<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const response = await fetchWithRetry(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new FetchError(
      `HTTP ${response.status}: ${response.statusText}`,
      response.status,
      response.statusText,
      response
    );
  }

  try {
    return await response.json();
  } catch (error) {
    throw new FetchError(
      'Failed to parse JSON response',
      response.status,
      response.statusText,
      response
    );
  }
}

export async function fetchText(
  url: string,
  options: FetchOptions = {}
): Promise<string> {
  const response = await fetchWithRetry(url, options);

  if (!response.ok) {
    throw new FetchError(
      `HTTP ${response.status}: ${response.statusText}`,
      response.status,
      response.statusText,
      response
    );
  }

  return response.text();
}

export async function fetchBlob(
  url: string,
  options: FetchOptions = {}
): Promise<Blob> {
  const response = await fetchWithRetry(url, options);

  if (!response.ok) {
    throw new FetchError(
      `HTTP ${response.status}: ${response.statusText}`,
      response.status,
      response.statusText,
      response
    );
  }

  return response.blob();
}

// Convenience functions
export const get = (url: string, options: Omit<FetchOptions, 'method'> = {}): Promise<Response> => {
  return fetchWithRetry(url, { ...options, method: 'GET' });
};

export const post = (url: string, body?: any, options: Omit<FetchOptions, 'method' | 'body'> = {}): Promise<Response> => {
  return fetchWithRetry(url, {
    ...options,
    method: 'POST',
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

export const put = (url: string, body?: any, options: Omit<FetchOptions, 'method' | 'body'> = {}): Promise<Response> => {
  return fetchWithRetry(url, {
    ...options,
    method: 'PUT',
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

export const del = (url: string, options: Omit<FetchOptions, 'method'> = {}): Promise<Response> => {
  return fetchWithRetry(url, { ...options, method: 'DELETE' });
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7720
};
>>>>>>> origin/backup-main-20250918-004015

export default fetchWithRetry;