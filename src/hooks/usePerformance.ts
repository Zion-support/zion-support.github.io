import { useEffect } from 'react';

interface PerformanceEntry {
  duration: number;
  name?: string;
  startTime?: number;
  entryType?: string;
}

// Mock analytics object for tracking
const analytics = {
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Track:', { event, category, action, label, value });
    }
  }
};

const usePerformance = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: PerformanceEntry) => {
        if (entry.duration > 50) {
          analytics.track(
            'long_task',
            'performance',
            'detected',
            entry.name,
            entry.duration
          );
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['measure', 'navigation'] });
    } catch (error) {
      console.error('Performance observer error:', error);
    }

    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, []);
};

export default usePerformance;