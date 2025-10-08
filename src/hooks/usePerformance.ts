import { useEffect } from 'react';
import { analytics } from '../utils/analytics';

/**
 * Custom hook for performance monitoring
 */
export const usePerformance = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    try {
      // Monitor long tasks
      const observer = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          if (entry.duration > 50) {
            analytics.track(
              'long_task',
              'performance',
              'detected',
              undefined,
              entry.duration
            );
          }
        });
      });

      observer.observe({ type: 'longtask', buffered: true });

      return () => {
        if (observer && typeof observer.disconnect === 'function') {
          observer.disconnect();
        }
      };
    } catch (error) {
      console.warn('Performance monitoring not supported', error);
      return undefined;
    }
  }, []);
};

export default usePerformance;