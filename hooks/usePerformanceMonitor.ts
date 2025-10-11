import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor performance metrics
    const monitorPerformance = () => {
      // Monitor page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart);
      });

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) {
              console.warn('Slow resource:', resource.name, resource.duration);
            }
          }
        }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    };

    monitorPerformance();
  }, []);
};
