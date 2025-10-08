import { useEffect } from 'react';
import { analytics } from '../utils/analytics';

export const usePerformance = () => {
  useEffect(() => {
    // Monitor performance entries
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure' || entry.entryType === 'navigation') {
          analytics.track(
            'performance_entry',
            'performance',
            entry.entryType,
            undefined,
            entry.duration
          );
        }
      }
    });

    // Observe long tasks if supported
    if ('PerformanceLongTaskTiming' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          analytics.track(
            'long_task',
            'performance',
            'detected',
            undefined,
            entry.duration
          );
        });
      });

      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        console.warn('Long task observation not supported');
      }
    }

    try {
      observer.observe({ entryTypes: ['measure', 'navigation'] });
    } catch (e) {
      console.warn('Performance observation not supported');
    }

    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, []);
};

export default usePerformance;