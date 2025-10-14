import { useState, useEffect } from 'react';
export const useAnalyticsContext = () => {
  const [data] = useState(null);
  const [loading] = useState(false);
  const [error] = useState(null);

  useEffect(() => {
    // Add your hook logic here
  }, []);

  return {
    data,
    loading,
    error,
    setData,
    setLoading,
    setError,
  };
};
