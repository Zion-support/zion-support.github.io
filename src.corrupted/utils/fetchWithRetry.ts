// Fetch with retry utility
interface FetchWithRetryOptions {
  retries?: number;
  delay?: number;
  backoff?: number;
  timeout?: number;
}

export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {
  const {
    retries = 3,
    delay = 1000,
    backoff = 2,
    timeout = 10000,
    ...fetchOptions
  } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        return response;
      }

      // If it's a client error (4xx), don't retry
      if (response.status >= 400 && response.status < 500) {
        throw new Error(`Client error: ${response.status} ${response.statusText}`);
      }

      // For server errors (5xx), throw to trigger retry
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    } catch (error) {
      lastError = error as Error;

      // Don't retry on abort or client errors
      if (error instanceof Error && 
          (error.name === 'AbortError' || error.message.includes('Client error'))) {
        throw error;
      }

      // If this was the last attempt, throw the error
      if (attempt === retries) {
        throw lastError;
      }

      // Wait before retrying with exponential backoff
      const waitTime = delay * Math.pow(backoff, attempt);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }

  throw lastError || new Error('Fetch failed after all retries');
};

export default fetchWithRetry;