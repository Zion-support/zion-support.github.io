import { useState, useEffect } from 'react';

export const usePerformance = () => {
  const [data, setData] = useState<PerformanceEntry[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const measurePerformance = () => {
    setLoading(true);
    try {
      const entries = performance.getEntriesByType('navigation');
      setData(entries);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    measurePerformance();
  }, []);

  return {
    data,
    loading,
    error,
    measurePerformance,
  };
};