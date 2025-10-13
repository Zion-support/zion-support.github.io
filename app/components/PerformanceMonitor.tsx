import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const monitorPerformance = () => {
      // Monitor performance metrics
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('Performance entry:', entry);
          }
        });

        observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });

        return () => observer.disconnect();
      }
    };

    const cleanup = monitorPerformance();
    return cleanup;
  }, []);

  return null;
};

export default PerformanceMonitor;
