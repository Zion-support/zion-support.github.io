import { useEffect } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';
import { analytics } from '../utils/analytics';

/**
 * Custom hook for performance monitoring
 */
const usePerformance = () => {
  useEffect(() => {
    // Monitor long tasks
    const observer = performanceOptimizer.monitorLongTasks(entries => {
      entries.forEach(entry => {
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