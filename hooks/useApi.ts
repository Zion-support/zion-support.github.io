import { useState, useEffect, useCallback } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiOptions {
  immediate?: boolean;
  retryCount?: number;
  retryDelay?: number;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

interface UseApiReturn<T> extends ApiState<T> {
  execute: (...args: any[]) => Promise<void>;
  reset: () => void;
  retry: () => Promise<void>;
}

export function useApi<T = any>(
  apiFunction: (...args: any[]) => Promise<T>,
  options: UseApiOptions = {}
): UseApiReturn<T> {
  const {
    immediate = false,
    retryCount = 3,
    retryDelay = 1000,
    onSuccess,
    onError
  } = options;

  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null
  });

  const [lastArgs, setLastArgs] = useState<any[]>([]);

  const execute = useCallback(async (...args: any[]) => {
    setLastArgs(args);
    setState(prev => ({ ...prev, loading: true, error: null }));

    let attempts = 0;
    const maxAttempts = retryCount + 1;

    while (attempts < maxAttempts) {
      try {
        const result = await apiFunction(...args);
        setState({
          data: result,
          loading: false,
          error: null
        });
        
        if (onSuccess) {
          onSuccess(result);
        }
        return;
      } catch (error) {
        attempts++;
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        
        if (attempts >= maxAttempts) {
          setState({
            data: null,
            loading: false,
            error: errorMessage
          });
          
          if (onError) {
            onError(errorMessage);
          }
          return;
        }
        
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, retryDelay * attempts));
      }
    }
  }, [apiFunction, retryCount, retryDelay, onSuccess, onError]);

  const retry = useCallback(async () => {
    if (lastArgs.length > 0) {
      await execute(...lastArgs);
    }
  }, [execute, lastArgs]);

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null
    });
  }, []);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate, execute]);

  return {
    ...state,
    execute,
    reset,
    retry
  };
}

// Specialized hook for GET requests
export function useGet<T = any>(
  url: string,
  options: UseApiOptions = {}
) {
  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as Promise<T>;
  }, [url]);

  return useApi(fetchData, options);
}

// Specialized hook for POST requests
export function usePost<T = any>(
  url: string,
  options: UseApiOptions = {}
) {
  const postData = useCallback(async (data: any) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json() as Promise<T>;
  }, [url]);

  return useApi(postData, options);
}