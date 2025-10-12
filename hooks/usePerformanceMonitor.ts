import { useState, useEffect } from 'react';

interface PerformanceData {
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number | null;
  firstContentfulPaint: number | null;
}

export const usePerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);

  useEffect(() => {
    // Monitor page load performance
    const monitorPageLoad = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');
            
            // Log performance metrics
            console.log('Page Load Performance:', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
              firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
            });

            setPerformanceData({
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || null,
              firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || null,
            });
          }, 0);
        });
      }
    };

    // Monitor resource loading
    const monitorResourceLoading = () => {
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource') {
              console.log('Resource loaded:', entry.name, entry.duration);
            }
          });
        });
        observer.observe({ entryTypes: ['resource'] });
      }
    };

    // Initialize monitoring
    monitorPageLoad();
    monitorResourceLoading();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return { performanceData };
};