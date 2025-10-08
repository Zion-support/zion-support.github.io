import { useEffect } from 'react';

const usePerformance = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'longtask') {
          console.log('Long task detected:', entry.duration);
          // Track long tasks if analytics is available
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', 'long_task', {
              event_category: 'performance',
              event_label: 'detected',
              value: entry.duration
            });
          }
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      console.error('Performance Observer error:', e);
    }

    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, []);
};

export default usePerformance;