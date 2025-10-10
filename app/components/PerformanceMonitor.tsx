'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorPerformance = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }
    };

    // Monitor resource loading
    const monitorResources = () => {
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

        observer.observe({ entryTypes: ['navigation', 'resource'] });
      }
    };

    monitorPerformance();
    monitorResources();
  }, []);

  return null;
};

export default PerformanceMonitor;