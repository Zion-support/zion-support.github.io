import React, { useEffect, ReactNode } from 'react';

interface PerformanceMonitorProps {
  children: ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Monitor performance metrics
    const monitorPerformance = () => {
      // Monitor Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }

      // Monitor resource loading
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              console.log('Navigation timing:', entry);
            } else if (entry.entryType === 'resource') {
              console.log('Resource timing:', entry);
            }
          }
        });

        observer.observe({ entryTypes: ['navigation', 'resource'] });
      }

      // Monitor memory usage
      if ('memory' in performance) {
        const logMemoryUsage = () => {
          console.log('Memory usage:', {
            used: Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024),
            total: Math.round((performance as any).memory.totalJSHeapSize / 1024 / 1024),
            limit: Math.round((performance as any).memory.jsHeapSizeLimit / 1024 / 1024)
          });
        };

        setInterval(logMemoryUsage, 30000); // Log every 30 seconds
      }
    };

    monitorPerformance();
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;
