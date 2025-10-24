import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  performanceData?: any;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ performanceData }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
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
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paint = performance.getEntriesByType('paint');
=======
          
>>>>>>> dd7fda2613d852773835e2791dbc2d1b243c1cce
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
          <h3>Performance Metrics</h3>
          <pre>{JSON.stringify(performanceData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
=======
export default PerformanceMonitor;
>>>>>>> dd7fda2613d852773835e2791dbc2d1b243c1cce
