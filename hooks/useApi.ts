<<<<<<< HEAD
setLoading(false)}}, [apiFunction, options]); useEffect(() = > {; if (options.immediate) {; execute()}}, [execute, options.immediate]); return { data, loading, error, execute }}}}}};
=======
<<<<<<< HEAD
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
=======
      setLoading(false)};
  }, [apiFunction, options]),
  useEffect(() => {,
    if (options.immediate) {,
      execute()};
  }, [execute, options.immediate]),
  return { data, loading, error, execute }};
};
};
};
};
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
