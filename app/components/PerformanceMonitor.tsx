'use client'
import React, { useEffect } from 'react'

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Performance monitoring code
    const monitorPerformance = () => {
      // Monitor Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }

      // Monitor resource loading
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            console.log('Performance Entry:', entry);
          });
        });

        observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
      }
    };

    monitorPerformance();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceMonitor;