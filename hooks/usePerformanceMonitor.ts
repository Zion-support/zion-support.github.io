import { useEffect, useState } from 'react';

interface PerformanceData {
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number;
  firstContentfulPaint: number;
  resourceCount: number;
  totalResourceSize: number;
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
            resourceCount: 0,
            totalResourceSize: 0
          };

          console.log('Page Load Performance:', metrics);
          setPerformanceData(metrics);
        }, 0);
      }
    };

    // Monitor resource loading
    const monitorResources = () => {
      if ('performance' in window) {
        const resources = performance.getEntriesByType('resource');
        const resourceCount = resources.length;
        const totalResourceSize = resources.reduce((total, resource) => {
          const transferSize = (resource as PerformanceResourceTiming).transferSize || 0;
          return total + transferSize;
        }, 0);

        console.log('Resource Performance:', {
          resourceCount,
          totalResourceSize: `${(totalResourceSize / 1024).toFixed(2)} KB`
        });
      }
    };

    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      if ('performance' in window && 'PerformanceObserver' in window) {
        // Monitor Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitor Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('CLS:', entry.value);
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Initialize monitoring
    monitorPageLoad();
    monitorResources();
    monitorWebVitals();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return { performanceData };
};