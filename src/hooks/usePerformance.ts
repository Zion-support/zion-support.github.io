import { useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-32a9
import analytics from '../utils/analytics';

export const usePerformance = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        analytics.track(
          'long_task',
          'performance',
          'detected',
          undefined,
          entry.duration
        );
      });
    });
=======
import { analytics } from '../utils/analytics';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-17a6

export const usePerformance = () => {
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
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

      observer.observe({ entryTypes: ['longtask'] });

      return () => {
        if (observer && typeof observer.disconnect === 'function') {
          observer.disconnect();
        }
      };
    }
  }, []);
};

export default usePerformance;