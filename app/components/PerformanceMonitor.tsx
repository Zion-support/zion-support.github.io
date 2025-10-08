import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cacheHitRate: number;
  renderTime: number;
  bundleSize: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  updateInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  updateInterval = 5000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cacheHitRate: 0,
    renderTime: 0,
    bundleSize: 0
  });
  const [performanceScore, setPerformanceScore] = useState<number>(100);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const getPerformanceMetrics = (): PerformanceMetrics => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      const memory = (performance as any).memory;
      
      return {
        loadTime: navigation?.loadEventEnd ?? 0,
        memoryUsage: memory?.usedJSHeapSize ?? 0,
        cacheHitRate: 0,
        renderTime: navigation?.domContentLoadedEventEnd ?? 0,
        bundleSize: 0
      };
    };

    const getPerformanceScore = (metrics: PerformanceMetrics): number => {
      let score = 100;
      if (metrics.renderTime > 1500) score -= 15;
      if (metrics.loadTime > 3000) score -= 20;
      if (metrics.memoryUsage > 50000000) score -= 15;
      return Math.max(0, score);
    };

    const updateMetrics = () => {
      const currentMetrics = getPerformanceMetrics();
      const score = getPerformanceScore(currentMetrics);
      
      setMetrics(currentMetrics);
      setPerformanceScore(score);
      
      if (enableConsoleLogging) {
        console.group('Performance Metrics');
        console.log('Metrics:', currentMetrics);
        console.log('Score:', score);
        console.groupEnd();
      }
    };

    // Initial update
    updateMetrics();
    
    // Set up interval for real-time monitoring
    const interval = setInterval(updateMetrics, updateInterval);

    // Set up performance observer for more detailed monitoring
    if ('PerformanceObserver' in window) {
      try {
        // LCP - Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // FID - First Input Delay
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        }).observe({ entryTypes: ['first-input'] });

        // CLS - Cumulative Layout Shift
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          console.log('CLS:', clsValue);
        }).observe({ entryTypes: ['layout-shift'] });

        // TTFB - Time to First Byte
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { responseStart?: number; requestStart?: number }) => {
            if (entry.responseStart && entry.requestStart && entry.responseStart > 0) {
              const ttfb = entry.responseStart - entry.requestStart;
              console.log('TTFB:', ttfb);
            }
          });
        }).observe({ entryTypes: ['navigation'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [enableConsoleLogging, updateInterval]);

  // Don't render anything in production
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2">
        <strong>Performance Monitor</strong>
      </div>
      <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
      <div>Score: {performanceScore}/100</div>
    </div>
  );
};

export default PerformanceMonitor;
