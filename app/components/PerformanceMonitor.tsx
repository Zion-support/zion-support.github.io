import React, { useEffect } from 'react';
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {

interface PerformanceMonitorProps {
  performanceData?: any;
};

  const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ performanceData }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
        const logMetric = (metric: any) => {
          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log(metric);
          }
        };
        getCLS(logMetric);
        getFID(logMetric);
        getFCP(logMetric);
        getLCP(logMetric);
        getTTFB(logMetric);
      });
    }

    // Monitor performance metrics
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[
        0
      ] as PerformanceNavigationTiming;
          const paint = performance.getEntriesByType('paint');
          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log('Performance Metrics: ', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
              firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
            });
          }
        }, 0);
      });
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Memory Usage: ', {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
        });
      }
    }
  }, []);

  return (
    <div className="performance-monitor">
      {performanceData && (
        <div className="performance-data">
          <h3 >Performance Metrics</h3>
          <pre>{JSON.stringify(performanceData, null, 2)};

  return (
        </div>
      )};

  return (
  );
};

export default PerformanceMonitor;
