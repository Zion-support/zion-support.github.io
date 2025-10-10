'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Performance monitoring logic
    const measurePerformance = () => {
      if ('performance' in window) {
        // Measure page load time
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime, 'ms');
        });

        // Measure Core Web Vitals
        if ('web-vitals' in window) {
          // This would be implemented with the web-vitals library
          console.log('Core Web Vitals monitoring enabled');
        }
      }
    };

    measurePerformance();
  }, []);

  return null; // This component doesn't render anything visible
};

export default PerformanceMonitor;
