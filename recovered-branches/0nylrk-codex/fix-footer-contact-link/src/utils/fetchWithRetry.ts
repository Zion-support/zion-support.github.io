/**
 * Fetch utility with retry logic and error handling
 */

export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {
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
      return response;
    } catch (error) {
      lastError = error as Error;
      
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
>>>>>>> cursor/create-and-deploy-new-content-7720
};
>>>>>>> origin/backup-main-20250918-004015

export default fetchWithRetry;