import { useEffect, useState } from 'react';
import { analytics } from '../utils/analytics';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Track long tasks
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

  return metrics;
};

export default usePerformance;