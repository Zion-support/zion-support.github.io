import { useState, useEffect, useCallback } from 'react;


}

interface UseApiOptions {
  immediate?: boolean;
}

  options: UseApiOptions = {}
): ApiState<T> & { refetch: () => void } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : An error occurred');
    } finally {
      setLoading(false);
    }

    if (options.immediate !== false) {
      fetchData();
    }
  }, [fetchData, options.immediate]);


