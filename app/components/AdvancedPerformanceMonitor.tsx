import React, { useEffect } from 'react';

const AdvancedPerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const monitorPerformance = () => {
      // Advanced performance monitoring
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              console.log('Navigation timing:', entry);
            } else if (entry.entryType === 'resource') {
              console.log('Resource timing:', entry);
            }
          }
        });

        observer.observe({ entryTypes: ['navigation', 'resource', 'measure'] });

        return () => observer.disconnect();
      }
    };

    const cleanup = monitorPerformance();
    return cleanup;
  }, []);

  return null;
};

export default AdvancedPerformanceMonitor;
