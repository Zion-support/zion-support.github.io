import { useState, useEffect, useCallback } from 'react',

interface UseApiOptions {
  immediate?: boolean,
  onSuccess?: (data: any) => void,
  onError?: (error: Error) => void
}

interface UseApiResult<T> {
  data: T | null,
  loading: boolean,
  error: Error | null,
  execute: (...args: any[]) => Promise<void>
}

export function useApi<T = any>(
  apiFunction: (...args: any[]) => Promise<T>,
  options: UseApiOptions = {}
): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<Error | null>(null),

  const execute = useCallback(async (...args: any[]) => {
    try {
      setLoading(true),
      setError(null),
      const result = await apiFunction(...args),
      setData(result),
      options.onSuccess?.(result)
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An error occurred'),
      setError(error),
      options.onError?.(error),
    } finally {
      setLoading(false),
    }
  }, [apiFunction, options]),

  useEffect(() => {
    if (options.immediate) {
      execute(),
    }
  }, [execute, options.immediate]),

  return { data, loading, error, execute },
}