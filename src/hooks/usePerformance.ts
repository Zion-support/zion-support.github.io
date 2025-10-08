import { useEffect } from 'react';

/**
 * Custom hook to monitor performance metrics
 */
export const usePerformance = (): void => {
  useEffect(() => {
    // Performance Observer for monitoring long tasks
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          console.warn('Long task detected:', {
            name: entry.name,
            duration: entry.duration,
            startTime: entry.startTime,
          });
          
          // Track long tasks for analytics if available
          if (typeof window !== 'undefined' && (window as any).analytics) {
            (window as any).analytics.track(
              'long_task',
              'performance',
              'detected',
              undefined,
              entry.duration
            );
          }
        }
      });
    });

    // Observe long tasks
    try {
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // PerformanceObserver may not support longtask on all browsers
      console.warn('PerformanceObserver does not support longtask', e);
    }

    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, []);
};

export default usePerformance;