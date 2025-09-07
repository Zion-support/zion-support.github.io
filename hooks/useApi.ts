'use client';

import { useState, useEffect, useCallback } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface ApiOptions {
  immediate?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

/**
 * Custom hook for making API calls with loading and error states
 */
export function useApi<T = any>(
  url: string,
  options: ApiOptions = {}
): ApiState<T> & {
  refetch: () => Promise<void>;
  mutate: (data: T) => void;
} {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const { immediate = true, onSuccess, onError } = options;

  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      setState({
        data,
        loading: false,
        error: null,
      });
      
      onSuccess?.(data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      
      setState({
        data: null,
        loading: false,
        error: errorMessage,
      });
      
      onError?.(errorMessage);
    }
  }, [url, onSuccess, onError]);

  const mutate = useCallback((data: T) => {
    setState(prev => ({ ...prev, data }));
  }, []);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  return {
    ...state,
    refetch: fetchData,
    mutate,
  };
}

/**
 * Custom hook for making POST requests
 */
export function useApiPost<T = any, R = any>(
  url: string,
  options: ApiOptions = {}
): ApiState<R> & {
  post: (data: T) => Promise<void>;
  mutate: (data: R) => void;
} {
  const [state, setState] = useState<ApiState<R>>({
    data: null,
    loading: false,
    error: null,
  });

  const { onSuccess, onError } = options;

  const post = useCallback(async (data: T) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
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
      
      const result = await response.json();
      
      setState({
        data: result,
        loading: false,
        error: null,
      });
      
      onSuccess?.(result);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      
      setState({
        data: null,
        loading: false,
        error: errorMessage,
      });
      
      onError?.(errorMessage);
    }
  }, [url, onSuccess, onError]);

  const mutate = useCallback((data: R) => {
    setState(prev => ({ ...prev, data }));
  }, []);

  return {
    ...state,
    post,
    mutate,
  };
}