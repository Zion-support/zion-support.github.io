
interface ApiState<T> {_data: T | null;
  loading: boolean;
  error: string | null;}

interface UseApiOptions {_immediate?: boolean;}

export function useApi<T>(_apiCall: () => Promise<T>,
  options: UseApiOptions = {}
): ApiState<T> & {_refetch: () => void} {_const [data, _setData] = useState<T | null>(null);
  const [loading, _setLoading] = useState(false);
  const [error, _setError] = useState<string | null>(null);

  const _fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const _result = await apiCall();
      setData(result);} catch (err) {_setError(err instanceof Error ? err.message : 'An error occurred');} finally {_setLoading(false);}
  };

  useEffect__(() => {_if (options.immediate !== false) {
      fetchData();}
  }, []);

  return {_data, _loading, _error, _refetch: fetchData, };
}
