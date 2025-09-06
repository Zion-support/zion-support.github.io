import { useState, useEffect, useCallback } from 'react';

interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: any) => void, onError?: (error: Error) => void,
}

interface UseApiResult<T> {
  data: T | null, loading: boolean,
  error: Error | null, execute: (...args: any[]) => Promise<void>,
}

export function useApi<T = any>(
  apiFunction: (...args: any[]) => Promise<T>,
  options: UseApiOptions = {}
): UseApiResult<T> {
interface UseApiOptions<T = unknown> {
  immediate?: boolean;
  onSuccess?: (data: T) => void, onError?: (error: Error) => void,
}

export const useApi = <T = unknown>(
  apiFunction: (...args: unknown[]) => Promise<T>,
  options: UseApiOptions<T> = {}
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (...args: unknown[]) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result);
      options.onSuccess?.(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      options.onError?.(error);
      throw error;
      setLoading(false);
    }
  }, [apiFunction, options]);

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
  }, [execute, options.immediate]);

  return { data, loading, error, execute };
};

export default useApi;
interface ApiState<T> {
  data: T | null, loading: boolean,
  error: string | null,
}

interface UseApiOptions {
  immediate?: boolean;
}

export function useApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions = {}
): ApiState<T> & { refetch: () => void } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
    const result = await apiCall(),
    setData(result)
  } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  useEffect(() => {
    if (options.immediate !== false) {
      fetchData();
    }
  }, [fetchData, options.immediate]);


    fetchData();
  }, [url, options]);

  return state;

}
