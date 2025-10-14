import { useEffect, useState } from 'react';

export const usePerformanceMonitor = () => {
  const [metrics] = useState({});

  useEffect(() => {
    // Performance monitoring logic
  }, []);

  return { metrics };
};