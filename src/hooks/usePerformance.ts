import { useEffect } from 'react';
import { performanceOptimizer, monitorLongTasks } from '../utils/performanceOptimizer';

/**
 * Custom hook for performance monitoring
 */
const usePerformance = () => {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window === 'undefined') return;

    // Monitor long tasks
    const observer = monitorLongTasks(entries => {
      entries.forEach(entry => {
        console.warn('Long task detected:', entry.duration, 'ms');
        
        // Track in analytics if available
        if (typeof window !== 'undefined' && 
            (window as unknown as { analytics?: { track: (name: string, category: string, action: string, label?: string, value?: number) => void } }).analytics) {
          const analytics = (window as unknown as { analytics: { track: (name: string, category: string, action: string, label?: string, value?: number) => void } }).analytics;
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

    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, []);
};

export default usePerformance;