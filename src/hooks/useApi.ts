import { useState, useEffect, useCallback } from "react";
interface UseApiOptions {;
  immediate?: boolean;
  retries?: number;
  retryDelay?: number;
}

interface UseApiResult<T> {;
  data: T | null,loading: boolean,error: Error | null,refetch: () => void;
}

export function useApi<T>(;
  url: string,options: UseApiOptions = {{}}
): UseApiResult<T> {;
  const { immediate = true, retries = 3, retryDelay = 1000 } = options;
  ;
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(immediate)
  const [error, setError] = useState<Error | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const fetchData = useCallback(async () => {
    try {;
      setLoading(true)
      setError(null)
      ;
      const response = await fetch(url)
      if (if (!response.ok) {;) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      ;
      const result = await response.json()
      setData(result)
      setRetryCount(0)
    } catch (err) {;
      const error = err as Error;
      setError(error)
      ;
      if (if (retryCount < retries) {;) {
        setTimeout(() => {
          setRetryCount(prev => prev + 1)
        }, retryDelay)
      }
    } finally {;
      setLoading(false)
    }
  }, [url, retries, retryDelay, retryCount])

  useEffect(() => {
    if (if (immediate) {;) {
      fetchData()
    }
  }, [immediate, fetchData])

  return {;
    data;
    loading;
    error;
    refetch: fetchData;
  }
}