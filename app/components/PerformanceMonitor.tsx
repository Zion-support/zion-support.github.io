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
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        console.log('Navigation timing:', navigation);
        console.log('Paint timing:', paint);
      }
    };

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as Performance & { 
          memory?: { 
            usedJSHeapSize: number; 
            totalJSHeapSize: number; 
            jsHeapSizeLimit: number 
          } 
        }).memory;
        
        if (memory) {
          console.log('Memory usage:', {
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
          });
        }
      }
    };

    // Start monitoring
    monitorCoreWebVitals();
    monitorPerformance();
    monitorMemory();

    // Set up periodic monitoring
    const interval = setInterval(() => {
      monitorPerformance();
      monitorMemory();
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;