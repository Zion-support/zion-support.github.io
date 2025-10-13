import React, { useEffect } from 'react';

const AdvancedPerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance Entry:', entry.name, entry.value);
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });

      // Measure resource loading times
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            console.log('Resource Load Time:', entry.name, entry.duration);
          }
        }
      });

      resourceObserver.observe({ entryTypes: ['resource'] });

      return () => {
        observer.disconnect();
        resourceObserver.disconnect();
      };
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, []);

  return null;
};

export default AdvancedPerformanceMonitor;