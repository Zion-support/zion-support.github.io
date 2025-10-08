import { useEffect } from 'react';
import { monitorLongTasks } from '../utils/performanceOptimizer';
import { analytics } from '../utils/analytics';

/**
 * Hook for monitoring performance metrics
 */
const usePerformance = (): void => {
  useEffect(() => {
    // Monitor long tasks
    const observer = monitorLongTasks(entries => {
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