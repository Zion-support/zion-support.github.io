import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Performance monitoring logic
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance entry:', entry);
      }
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => observer.disconnect();
  }, []);
};
