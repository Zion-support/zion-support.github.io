import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
  memoryUsage: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToFirstByte: 0,
    memoryUsage: 0,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      // Load time measurement
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        setMetrics(prev => ({ ...prev, loadTime }));
      });

      // Web Vitals measurement
      if ('web-vitals' in window) {
        // This would be populated by the WebVitalsTracker component
        // For now, we'll use placeholder values
      }

      // Memory usage measurement
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory && memory.usedJSHeapSize) {
          const memoryUsage = memory.usedJSHeapSize / (1024 * 1024); // Convert to MB
          setMetrics(prev => ({ ...prev, memoryUsage }));
        }
      }

      // Time to First Byte
      if (performance.timing) {
        const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, timeToFirstByte: ttfb }));
      }
    };

    measurePerformance();

    // Log performance metrics to console in development
    const logMetrics = () => {
      console.group('🚀 Performance Metrics');
      console.log('Load Time:', `${metrics.loadTime.toFixed(2)}ms`);
      console.log('First Contentful Paint:', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
      console.log('Largest Contentful Paint:', `${metrics.largestContentfulPaint.toFixed(2)}ms`);
      console.log('First Input Delay:', `${metrics.firstInputDelay.toFixed(2)}ms`);
      console.log('Cumulative Layout Shift:', metrics.cumulativeLayoutShift.toFixed(4));
      console.log('Time to First Byte:', `${metrics.timeToFirstByte.toFixed(2)}ms`);
      console.log('Memory Usage:', `${metrics.memoryUsage.toFixed(2)}MB`);
      console.groupEnd();
    };

    // Log metrics every 5 seconds in development
    const interval = setInterval(logMetrics, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [metrics]);

  // Send metrics to analytics service in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Send metrics to your analytics service
      // Example: Google Analytics, Mixpanel, etc.
      console.log('Performance metrics would be sent to analytics:', metrics);
    }
  }, [metrics]);

  return null;
};

export default AdvancedPerformanceMonitor;