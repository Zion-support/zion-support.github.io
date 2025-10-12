'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if ('web-vitals' in window) {
        // Import web-vitals dynamically
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }
    };

    // Monitor performance metrics
    const monitorPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');
            
            console.log('Performance Metrics:', {
              loadTime: navigation.loadEventEnd - navigation.loadEventStart,
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
              firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
            });
          }, 0);
        });
      }
    };

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory Usage:', {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit,
        });
      }
    };

    // Start monitoring
    monitorCoreWebVitals();
    monitorPerformance();
    monitorMemory();

    // Monitor every 30 seconds
    const interval = setInterval(() => {
      monitorMemory();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default PerformanceMonitor;