'use client',
,
import { useState, useEffect, useCallback } from 'react',
,
interface ApiState<T> {,
  data: T | null,
  loading: boolean,
  error: string | null,
,}
,
interface UseApiOptions<T = unknown> {,
  immediate?: boolean,
  onSuccess?: (data: T) => void,
  onError?: (error: string) => void,
,}
,
export function useApi<T = unknown>(,
  apiFunction: () => Promise<T>,;
  options: UseApiOptions<T> = {,}
) {,
  const [state, setState] = useState<ApiState<T>>({,
    data: null,;
    loading: false,;
    error: null,;
  }),
,
  const execute = useCallback(async () => {,
    setState(prev => ({ ...prev, loading: true, error: null ,})),
,
    try {,
      const result = await apiFunction(),
      setState({ data: result, loading: false, error: null ,}),
      options.onSuccess?.(result),
      return result,
    } catch (error) {,
      const errorMessage =,
        error instanceof Error ? error.message : 'An error occurred',
      setState({ data: null, loading: false, error: errorMessage ,}),
      options.onError?.(errorMessage),
      throw error,
    }
  }, [apiFunction, options]),
,
  useEffect(() => {,
    if (options.immediate) {,
      execute(),
    }
  }, [execute, options.immediate]),
,
  const reset = useCallback(() => {,
    setState({ data: null, loading: false, error: null ,}),
  }, []),
,
  return {,
    ...state,;
    execute,;
    reset,;
  };
}
,
export function useMutation<T = unknown, P = unknown>(,
  mutationFunction: (params: P) => Promise<T>,;
  options: UseApiOptions<T> = {,}
) {,
  const [state, setState] = useState<ApiState<T>>({,
    data: null,;
    loading: false,;
    error: null,;
  }),
,
  const mutate = useCallback(,
    async (params: P) => {,
      setState(prev => ({ ...prev, loading: true, error: null ,})),
,
      try {,
        const result = await mutationFunction(params),
        setState({ data: result, loading: false, error: null ,}),
        options.onSuccess?.(result),
        return result,
      } catch (error) {,
        const errorMessage =,
          error instanceof Error ? error.message : 'An error occurred',
        setState({ data: null, loading: false, error: errorMessage ,}),
        options.onError?.(errorMessage),
        throw error,
      }
    },;
    [mutationFunction, options],
  ),
,
  const reset = useCallback(() => {,
    setState({ data: null, loading: false, error: null ,}),
  }, []),
,
  return {,
    ...state,;
    mutate,;
    reset,;
  };
}
,