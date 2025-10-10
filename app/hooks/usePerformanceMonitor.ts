'use client';
import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measureWebVitals = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Measure LCP (Largest Contentful Paint)
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (lastEntry) {
            console.log('LCP:', lastEntry.startTime);
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        });

        fidObserver.observe({ entryTypes: ['first-input'] });

        // Measure CLS (Cumulative Layout Shift)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          
          console.log('CLS:', clsValue);
        });

        clsObserver.observe({ entryTypes: ['layout-shift'] });

        return () => {
          observer.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };

    const cleanup = measureWebVitals();

    return () => {
      cleanup?.();
    };
  }, []);
};