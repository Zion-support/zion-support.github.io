'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Performance monitoring code
    const monitorPerformance = () => {
      // Monitor Core Web Vitals
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Monitor Largest Contentful Paint (LCP)
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitor Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value);
            }
          });
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    monitorPerformance();
  }, []);

  return null;
};

export default PerformanceMonitor;