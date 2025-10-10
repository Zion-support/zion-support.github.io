import { useEffect, useCallback } from 'react';

export const usePerformanceMonitor = () => {
  const trackPerformance = useCallback((metric: string, value: number) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track custom metrics
      performance.mark(`${metric}-${Date.now()}`);
    }
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Track page load time
      const loadTime = performance.now();
      trackPerformance('page-load', loadTime);

      // Track Core Web Vitals
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.entryType === 'paint') {
                trackPerformance(entry.name, entry.startTime);
              }
            });
          });
          observer.observe({ entryTypes: ['paint'] });
        } catch (error) {
          // Silently handle errors
        }
      }
    }
  }, [trackPerformance]);

  return {
    trackPerformance
  };
};