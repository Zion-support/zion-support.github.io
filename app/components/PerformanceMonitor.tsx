import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (process.env.NODE_ENV === 'development') {
          console.log('LCP:', lastEntry.startTime);
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            if (process.env.NODE_ENV === 'development') {
              console.log('CLS:', clsValue);
            }
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('FCP:', entry.startTime);
          }
        });
      }).observe({ entryTypes: ['paint'] });
    };

    // Monitor Resource Loading
    const measureResourceTiming = () => {
      window.addEventListener('load', () => {
        const resources = performance.getEntriesByType('resource');
        const totalLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('Total Load Time:', totalLoadTime);
          console.log('Resources Loaded:', resources.length);
        }
      });
    };

    // Monitor Memory Usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const used = memory.usedJSHeapSize / 1024 / 1024; // MB
        const total = memory.totalJSHeapSize / 1024 / 1024; // MB
        const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB
        
        if (process.env.NODE_ENV === 'development') {
          console.log('Memory Usage:', {
            used: `${used.toFixed(2)}MB`,
            total: `${total.toFixed(2)}MB`,
            limit: `${limit.toFixed(2)}MB`,
            percentage: `${((used / limit) * 100).toFixed(2)}%`
          });
        }
      }
    };

    // Initialize monitoring
    measureWebVitals();
    measureResourceTiming();
    measureMemoryUsage();

    // Monitor performance every 30 seconds
    const interval = setInterval(measureMemoryUsage, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
