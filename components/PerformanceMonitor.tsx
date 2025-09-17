import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  memory?: {
    used: number;
    total: number;
    limit: number;
  };
  resourceCount?: number;
}

interface PerformanceMonitorProps {
  onPerformanceData?: (data: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show in development or for admin users
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    const measurePerformance = () => {
      const performanceData: PerformanceMetrics = {
        // Core Web Vitals
        fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
        lcp: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime,
        fid: performance.getEntriesByType('first-input')[0]?.processingStart,
        cls: performance.getEntriesByType('layout-shift').reduce((acc, entry) => acc + (entry as any).value, 0),
        ttfb: performance.getEntriesByType('navigation')[0]?.responseStart,

        // Resource timing
        resourceCount: window.performance.getEntriesByType('resource').length,
        // Memory usage (if available)
        memory: (window.performance as Performance & { memory?: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory ? {
          used: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.usedJSHeapSize,
          total: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.totalJSHeapSize,
          limit: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.jsHeapSizeLimit
        } : undefined
      };

      if (onPerformanceData) {
        onPerformanceData(performanceData);
      }

      // Log performance data in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Performance Metrics:', performanceData);
      }

      setMetrics(performanceData);
    };

    // Measure performance after a delay to allow for initial render
    const timeoutId = setTimeout(measurePerformance, 1000);

    // Also measure on visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        measurePerformance();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [onPerformanceData]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs font-mono">
      <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
      <div>FID: {metrics.fid?.toFixed(2)}ms</div>
      <div>CLS: {metrics.cls?.toFixed(4)}</div>
      <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
      {metrics.memory && (
        <div>Memory: {Math.round(metrics.memory.used / 1024 / 1024)}MB</div>
      )}
      <div>Resources: {metrics.resourceCount}</div>
    </div>
  );
};

export default PerformanceMonitor;