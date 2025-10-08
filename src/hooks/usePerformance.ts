import { useEffect } from 'react';

const usePerformance = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.log('Long task detected:', {
              duration: entry.duration,
              name: entry.name,
              startTime: entry.startTime,
            });

            // Track analytics if available
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as unknown as {
                gtag: (command: string, category: string, action: string, label?: string, value?: number) => void;
              }).gtag('event', 'performance', 'long_task', undefined, entry.duration);
            }
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        console.warn('PerformanceObserver not supported for longtask');
      }

      return () => {
        if (observer && typeof observer.disconnect === 'function') {
          observer.disconnect();
        }
      };
    }
  }, []);
};

export default usePerformance;