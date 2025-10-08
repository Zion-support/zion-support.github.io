import { useEffect } from 'react';
import { analytics } from '../utils/analytics';

const usePerformance = (): void => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor performance metrics
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

    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, []);
};

export default usePerformance;