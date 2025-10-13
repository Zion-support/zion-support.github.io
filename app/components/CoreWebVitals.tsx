import React, { useEffect } from 'react';

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            console.log(`Paint: ${entry.name} - ${entry.startTime}ms`);
          }
          if (entry.entryType === 'navigation') {
            console.log(`Navigation: ${entry.duration}ms`);
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'navigation'] });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return null;
};

export default CoreWebVitals;