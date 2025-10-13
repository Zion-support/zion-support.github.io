import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance entry:', entry);
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });

      // Monitor long tasks
      if ('PerformanceObserver' in window) {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.warn('Long task detected:', entry);
          }
        });

        try {
          longTaskObserver.observe({ entryTypes: ['longtask'] });
        } catch (e) {
          // Long task observer not supported
        }
      }

      return () => {
        observer.disconnect();
        if (longTaskObserver) {
          longTaskObserver.disconnect();
        }
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;