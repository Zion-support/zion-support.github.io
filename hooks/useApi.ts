
import { useState, useEffect, useCallback } from 'react';

interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
}

export const useApi = <T = unknown>(
  apiFunction: (...args: unknown[]) => Promise<T>,
  options: UseApiOptions = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const execute = useCallback(async (...args: unknown[]) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result);
      options.onSuccess?.(result);
      return result} catch (err) {
      setError(err);
      options.onError?.(err);
      throw err} finally {
      setLoading(false)}
  }, [apiFunction, options]);

  useEffect(() => {
    if (options.immediate) {
      execute()}
  }, [execute, options.immediate]);

  return { data, loading, error, execute }};

export default useApi;
