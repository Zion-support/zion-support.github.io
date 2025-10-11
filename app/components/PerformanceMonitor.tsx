'use client'
import React, { useEffect } from 'react'

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Performance monitoring
    const monitorPerformance = () => {
      // Core Web Vitals monitoring
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }

      // Resource timing
      if ('performance' in window && 'getEntriesByType' in window.performance) {
        const resources = window.performance.getEntriesByType('resource');
        console.log('Resource timing:', resources);
      }

      // Navigation timing
      if ('performance' in window && 'getEntriesByType' in window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log('Navigation timing:', {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            totalTime: navigation.loadEventEnd - navigation.fetchStart
          });
        }
      }
    };

    // Monitor performance after page load
    if (document.readyState === 'complete') {
      monitorPerformance();
    } else {
      window.addEventListener('load', monitorPerformance);
    }

    // Monitor performance periodically
    const interval = setInterval(monitorPerformance, 30000); // Every 30 seconds

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', monitorPerformance);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;