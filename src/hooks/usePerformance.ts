import { useEffect } from 'react';
import { PerformanceMonitor } from '../utils/performanceMonitor';

export const usePerformance = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const performanceMonitor = PerformanceMonitor.getInstance();

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        performanceMonitor.recordMetric('long-task', entry.duration);
      });
    });

    observer.observe({ entryTypes: ['longtask'] });

    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, []);
};

export default usePerformance;