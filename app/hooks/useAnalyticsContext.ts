import { useState, useEffect } from 'react';

export const useAnalyticsContext = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
