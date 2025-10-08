import { useEffect, useState } from 'react';

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance entry:', entry);
        }
      });
      
      try {
        perfObserver.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
      } catch (e) {
        console.error('Performance observer error:', e);
      }
    }
  }, []);

  return metrics;
};
