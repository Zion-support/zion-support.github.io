
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
