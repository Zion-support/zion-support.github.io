import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const startTime = performance.now();

    const measurePerformance = () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;

      // Get render time
      const renderTime = performance.getEntriesByType('measure').reduce((acc, entry) => {
        return acc + entry.duration;
      }, 0);

      // Get memory usage if available
      const memoryUsage = (performance as any).memory?.usedJSHeapSize;

      const performanceMetrics: PerformanceMetrics = {
        loadTime,
        renderTime,
        memoryUsage,
      };

      setMetrics(performanceMetrics);

      // Log performance metrics
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', performanceMetrics);
      }

      // Send to analytics in production
      if (process.env.NODE_ENV === 'production') {
        // Send to your analytics service
        console.log('Production Performance:', performanceMetrics);
      }
    };

    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 1000);

    // Monitor for performance issues
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'measure'] });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;