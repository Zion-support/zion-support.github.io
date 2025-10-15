import { useState, useEffect } from 'react';

export const usePerformanceMonitor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Performance monitoring logic here
    const observer = new PerformanceObserver((list) => {
      // Handle performance entries
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    isLoading,
    error,
    setIsLoading,
    setError
  };
};
