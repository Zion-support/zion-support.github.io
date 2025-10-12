'use client';
import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Performance monitoring logic
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance entry:', entry);
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });

      return () => {
        observer.disconnect();
      };
    }
  }, []);
};
