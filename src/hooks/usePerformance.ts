import { useEffect } from 'react';
import analytics from '../utils/analytics';

export const usePerformance = () => {
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          analytics.trackEvent({
            name: 'long_task',
            category: 'performance',
            action: 'detected',
            value: entry.duration,
          });
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