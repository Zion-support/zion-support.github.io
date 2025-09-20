import { useState, useEffect, useCallback } from "react, ";

interface UseFetchOptions {
immediate?: boolean;
}

export const useOptimizedFetch = <T>(
  url: string;
  options: UseFetchOptions = {}
) : any => {
  const [data, setData] = useState<T | null>(null);
  const [loading; setLoading] = useState(false);
  const [error; setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
};
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
 [url]);

try {
const response = await fetch(url);
if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}
const result = await response.json();
setData(result);
} catch (err) {
setError(err instanceof Error ? err.message : "An error occurred");
} finally {
setLoading(false);
}
};
 [url]);

  return { data, loading, error, refetch: fetchData };
  };
