import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');

        const logMetric = (metric: any, type: string) => {
          if (process.env.NODE_ENV === 'development') {

          }
          // Send to analytics service in production
          if (process.env.NODE_ENV === 'production') {
            // Send to analytics service
          }
        };

        getCLS((metric) => logMetric(metric, 'CLS'));
        getFID((metric) => logMetric(metric, 'FID'));
        getFCP((metric) => logMetric(metric, 'FCP'));
        getLCP((metric) => logMetric(metric, 'LCP'));
        getTTFB((metric) => logMetric(metric, 'TTFB'));
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {

        }
      }
    };

    // Monitor resource loading
    const monitorResourceLoading = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            if (process.env.NODE_ENV === 'development') {
              console.log('Navigation timing:', navEntry);
            }
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'resource'] });

      return () => observer.disconnect();
    };

    // Monitor memory usage
    const monitorMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (process.env.NODE_ENV === 'development') {
          console.log('Memory usage:', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
          });
        }
      }
    };

    // Initialize monitoring
    monitorWebVitals();
    const cleanupResource = monitorResourceLoading();
    monitorMemoryUsage();

    // Cleanup on unmount
    return () => {
      cleanupResource();
    };
  }, []);
};