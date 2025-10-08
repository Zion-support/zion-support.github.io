import { useEffect } from 'react';
import { PerformanceMonitor } from '../utils/performanceMonitor';

export const usePerformance = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const performanceMonitor = PerformanceMonitor.getInstance();

<<<<<<< HEAD
    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
=======
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cd0d
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
