'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
          if (entry.entryType === 'paint') {
            console.log('Paint timing:', entry);
          }
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry);
          }
        }
      });

      observer.observe({ 
        entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] 
      });

      // Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }
    }

    // Memory usage monitoring
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const logMemoryUsage = () => {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      };

      // Log memory usage every 30 seconds
      const interval = setInterval(logMemoryUsage, 30000);
      return () => clearInterval(interval);
    }
  }, []);

  return null;
};

export default PerformanceMonitor;