import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        getCLS((metric) => {
          console.log('CLS:', metric);
          // Send to analytics service
        });
        
        getFID((metric) => {
          console.log('FID:', metric);
          // Send to analytics service
        });
        
        getFCP((metric) => {
          console.log('FCP:', metric);
          // Send to analytics service
        });
        
        getLCP((metric) => {
          console.log('LCP:', metric);
          // Send to analytics service
        });
        
        getTTFB((metric) => {
          console.log('TTFB:', metric);
          // Send to analytics service
        });
      } catch (error) {
        console.log('Web Vitals not available:', error);
      }
    };

    // Monitor resource loading
    const monitorResourceLoading = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Navigation timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart
            });
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
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
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