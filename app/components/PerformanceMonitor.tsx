import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor performance metrics
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            // Performance monitoring - could be sent to analytics service
            // console.log('Page load time:', entry.duration);
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint'] });

      return () => {
        observer.disconnect();
      };
    }
    
    return undefined;
  }, []);

  return null;
};

export default PerformanceMonitor;