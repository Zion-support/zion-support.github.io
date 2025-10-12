import { useEffect, useState } from 'react';

interface PerformanceData {
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number;
  firstContentfulPaint: number;
}

export const usePerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);

  useEffect(() => {
    // Monitor page load performance
    const monitorPageLoad = () => {
      if ('performance' in window) {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paint = performance.getEntriesByType('paint');
          
          // Log performance metrics
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          };
          
          console.log('Page Load Performance:', metrics);
          setPerformanceData(metrics);
        }, 0);
      }
    };

    // Monitor resource loading
    const monitorResourceLoading = () => {
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource') {
              console.log('Resource loaded:', {
                name: entry.name,
                duration: entry.duration,
                size: (entry as PerformanceResourceTiming).transferSize || 0
              });
            }
          });
        });
        
        observer.observe({ entryTypes: ['resource'] });
        
        return () => observer.disconnect();
      }
    };

    // Initialize monitoring
    monitorPageLoad();
    const cleanup = monitorResourceLoading();
    
    return cleanup;
  }, []);

  return { performanceData };
};