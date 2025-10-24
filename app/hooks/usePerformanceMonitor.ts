import { useEffect, useState } from 'react';

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            setMetrics(prev => ({
              ...prev,
              [entry.name]: entry.startTime
            }));
          }
        });
      });

      observer.observe({ entryTypes: ['paint'] });

      return () => observer.disconnect();
    }
  }, []);

  return metrics;
};
