'use client'
import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor performance metrics
    const monitorPerformance = () => {
      if (typeof window === 'undefined') return;

      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', (entry as any).value);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }

      // Cleanup
      return () => {
        observer.disconnect();
      };
    };

    const cleanup = monitorPerformance();
    return cleanup;
  }, []);
};