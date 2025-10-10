import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const observeLCP = () => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
      };

      // First Input Delay (FID)
      const observeFID = () => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              console.log('FID:', entry.processingStart - entry.startTime);
            });
          });
          observer.observe({ entryTypes: ['first-input'] });
        }
      };

      // Cumulative Layout Shift (CLS)
      const observeCLS = () => {
        if ('PerformanceObserver' in window) {
          let clsValue = 0;
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log('CLS:', clsValue);
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        }
      };

      observeLCP();
      observeFID();
      observeCLS();
    };

    // Monitor Resource Loading
    const monitorResourceLoading = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.duration > 1000) { // Log slow resources
              console.warn('Slow resource:', entry.name, entry.duration);
            }
          });
        });
        observer.observe({ entryTypes: ['resource'] });
      }
    };

    // Monitor Long Tasks
    const monitorLongTasks = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.warn('Long task detected:', entry.duration);
          });
        });
        observer.observe({ entryTypes: ['longtask'] });
      }
    };

    // Initialize monitoring
    monitorCoreWebVitals();
    monitorResourceLoading();
    monitorLongTasks();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);
};
