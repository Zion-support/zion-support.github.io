<<<<<<< HEAD
<<<<<<< HEAD
      setLoading(false)};
;
  return { data, loading, error, execute }};
};
};
};
};
=======

interface ApiState<T> {data: T | null;
  loading: boolean,
  error: string | null}

interface UseApiOptions {immediate?: boolean}

export function useApi<T>(apiCall: () => Promise<T>,
  options: UseApiOptions = {}
): ApiState<T> & {refetch: () => void} {const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiCall();
      setData(result)} catch (err) {setError(err instanceof Error ? err.message : 'An error occurred')} finally {setLoading(false)}
  };

  useEffect_(() => {if (options.immediate !== false) {
      fetchData()}
  }, []);

  return {data, loading, error, refetch: fetchData }
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
import { useState, useEffect } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>(url: string, options?: RequestInit) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : 'An error occurred',
        });
      }
    };

    fetchData();
  }, [url, JSON.stringify(options)]);

  return state;
}
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
