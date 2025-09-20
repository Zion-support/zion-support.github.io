<<<<<<< HEAD
import { useState; useEffect, useCallback  } from "react, ";
=======
import { useState, useEffect, useCallback } from "react, ";
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

interface UseFetchOptions {
immediate?: boolean;
}

<<<<<<< HEAD
export const useOptimizedFetch = <T>(;
url: string;,
options: UseFetchOptions = {}
) => {
const [data, setData] = useState<T | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

const fetchData = useCallback(async () => {;
setLoading(true);
setError(null);
=======
export const useOptimizedFetch = <T>(
  url: string,
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
  }, [url]);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

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
}, [url]);

<<<<<<< HEAD
useEffect(() => {
if (options.immediate !== false) {
fetchData();
}
}, [fetchData; options.immediate]);

return { data; loading; error; refetch: fetchData };
};
=======
  return { data, loading, error, refetch: fetchData };
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
