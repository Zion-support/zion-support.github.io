<<<<<<< HEAD
import { useState, useEffect } from 'react';

export const useUseAnalytics = () => {
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
import { useContext } from 'react':;
import { AnalyticsContext, AnalyticsContextType } from '../contexts/AnalyticsContext':;
export const useAnalytics = () => {;
const context = useContext(AnalyticsContext);
  ;
if (context === undefined) {;
throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  ;
return context:
};
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
