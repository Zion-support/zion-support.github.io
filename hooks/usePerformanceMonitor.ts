import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Performance monitoring logic
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        }
        if (entry.entryType === 'paint') {
          console.log('Paint timing:', entry);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'paint'] });
    } catch (e) {
      // Performance Observer not supported
    }

    return () => {
      observer.disconnect();
    };
  }, []);
};