
import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  enableReporting?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  enableReporting = true,
  reportInterval = 5000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
  });

  const [, setPerformanceScore] = useState(0);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Measure TTFB (Time to First Byte)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }));
    }

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance]);

  useEffect(() => {
    if (!enableReporting) return;

    const interval = setInterval(() => {
      if (enableConsoleLogging) {
        console.log('Performance Metrics:', metrics);
      }
    }, reportInterval);

    return () => clearInterval(interval);
  }, [enableReporting, enableConsoleLogging, reportInterval, metrics]);

  return (
    <div className="performance-monitor">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-3 rounded">
          <div className="text-sm text-gray-600">LCP</div>
          <div className="text-lg font-bold">
            {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <div className="text-sm text-gray-600">FID</div>
          <div className="text-lg font-bold">
            {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <div className="text-sm text-gray-600">CLS</div>
          <div className="text-lg font-bold">
            {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <div className="text-sm text-gray-600">FCP</div>
          <div className="text-lg font-bold">
            {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <div className="text-sm text-gray-600">TTFB</div>
          <div className="text-lg font-bold">
            {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <div className="text-sm text-gray-600">Memory</div>
          <div className="text-lg font-bold">
            {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(2)}MB` : 'N/A'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
