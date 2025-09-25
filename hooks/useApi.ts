import { useCallback, useEffect, useState } from 'react',
export interface UseApiOptions<T = unknown> {
  immediate?: boolean,
  onSuccess?: (data: T) => void,
  onError?: (error: Error) => void}
,
export function useApi<T = unknown>(
  apiFunction: (...args: unknown[]) => Promise<T>,
  options: UseApiOptions<T> = {}
) {
  const [data, setData] = useState<T | null>(null),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<Error | null>(null),
  const execute = useCallback(
    async (...args: unknown[]) => {
      try {
        setLoading(true),
        setError(null),
        const result = await apiFunction(...args),
        setData(result),
        options.onSuccess?.(result),
        return result} catch (err) {
        const normalized = err instanceof Error ? err : new Error(String(err)),
        setError(normalized),
        options.onError?.(normalized),
        throw normalized} finally {
        setLoading(false)}
    },
    [apiFunction, options]),
  useEffect(() => {
    if (options.immediate) {
      execute()}
  }, [execute, options.immediate]),
  return { data, loading, error, execute },
}
,
export default useApi,