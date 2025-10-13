import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [performanceData, setPerformanceData] = useState<any>(null);

  useEffect(() => {
    // Monitor performance metrics
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('Performance Entry:', entry);
      });
    });

    observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setPerformanceData({
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;
