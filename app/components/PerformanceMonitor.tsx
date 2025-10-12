'use client';

import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      }
    };

    // Monitor performance metrics
    const monitorPerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Monitor page load time
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart);
        });

        // Monitor resource loading
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource') {
              console.log('Resource loaded:', entry.name, entry.duration);
            }
          });
        });

        observer.observe({ entryTypes: ['resource'] });
      }
    };

    // Initialize monitoring
    monitorCoreWebVitals();
    monitorPerformance();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceMonitor;