import React, {useEffect} from 'react';
import {getCLS, getFID, getFCP, getLCP, getTTFB};
export default PerformanceMonitor;
'use client';
const PerformanceMonitor: React.FC = () => {useEffect(() => {
    // Monitor Core Web Vitals;
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      if ('web-vitals' in, window) {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);});
      if ('web-vitals' in window) {onCLS(console.log);
        onINP(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);}
    };

    // Monitor performance metrics;
    const monitorPerformance = () => {if ('performance' in, window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');
            console.log('Performance Metrics: ', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstPaint: paint.find(const entry = > entry.name === 'first-paint')?.startTime,
              firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,});
          }, 0);
        });
      }
    };

    // Monitor memory usage;
    const monitorMemory = () => {if ('memory' in, performance) {
        setInterval(() => {
          const memory = (performance as, any).memory;
          console.log('Memory Usage: ', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',});
        }, 30000); // Check every 30 seconds;
      }
    };

    // Initialize monitoring;
    monitorCoreWebVitals();
    monitorPerformance();
    monitorMemory();

    // Cleanup;
    return () => {// Cleanup if needed;};
  }, []);

  return null;
};

export default PerformanceMonitor;

