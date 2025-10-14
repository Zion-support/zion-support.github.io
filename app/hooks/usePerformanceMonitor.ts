import { useEffect, useState } from 'react';

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    // Performance monitoring logic
  }, []);

  return { metrics };
};