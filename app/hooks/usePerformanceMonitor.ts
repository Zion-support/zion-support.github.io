import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Performance monitoring logic
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for(const entry of list.getEntries() {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP: ' entry.startTime);
          } else if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime;
            console.log('FID: ' fid);
          } else if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              console.log('CLS: ' (entry as any).value);
            }
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] };
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        console.log('Performance monitoring not fully supported');
      }
    }
  }, []);
};