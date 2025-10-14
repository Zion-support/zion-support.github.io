<<<<<<< HEAD
import { useState, useEffect } from 'react';
export const useUseAnalyticsContext = () => {
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
    // Add your hook methods here
  };
};
=======
import { useAnalytics } from '../contexts/AnalyticsContext':;
export { useAnalytics };
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
