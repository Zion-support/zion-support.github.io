import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  performanceData?: any;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ performanceData }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
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

    // Monitor performance metrics
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
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
          used: Math.round(memory.usedJSHeapSize / 1048576),
          total: Math.round(memory.totalJSHeapSize / 1048576),
          limit: Math.round(memory.jsHeapSizeLimit / 1048576),
        });
      }
    }
  }, []);

  if (!performanceData) {
    return null;
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-4">Performance Monitor</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-300">DOM Content Loaded:</span>
          <span className="text-emerald-400">{performanceData.domContentLoaded}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Load Complete:</span>
          <span className="text-emerald-400">{performanceData.loadComplete}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">First Paint:</span>
          <span className="text-emerald-400">{performanceData.firstPaint}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">First Contentful Paint:</span>
          <span className="text-emerald-400">{performanceData.firstContentfulPaint}ms</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;