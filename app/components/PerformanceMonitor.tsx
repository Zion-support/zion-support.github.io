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
  enableReporting?: boolean;
  reportInterval?: number;
  enableConsoleLogging?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableReporting = true,
  reportInterval = 5000,
  enableConsoleLogging = false
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

  const reportMetrics = useCallback((currentMetrics: PerformanceMetrics, score: number) => {
    if (enableConsoleLogging && typeof window !== 'undefined') {
      console.log('Performance Metrics:', currentMetrics);
      console.log('Performance Score:', score);
    }
  }, [enableConsoleLogging]);

  const updateMetrics = useCallback(() => {
    const currentMetrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      memoryUsage: 0,
    };

    // Get Core Web Vitals
    if ('web-vitals' in window) {
      // This would be imported from web-vitals library
      // For now, we'll simulate the metrics
      currentMetrics.lcp = Math.random() * 4000 + 1000;
      currentMetrics.fid = Math.random() * 100 + 10;
      currentMetrics.cls = Math.random() * 0.3;
      currentMetrics.fcp = Math.random() * 2000 + 500;
    }

    // Get memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      currentMetrics.memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit * 100;
    }

    setMetrics(currentMetrics);

    const score = getPerformanceScore(currentMetrics);
    setPerformanceScore(score);

    // Report metrics if enabled
    if (enableReporting) {
      reportMetrics(currentMetrics, score);
    }
  }, [enableReporting, reportMetrics]);

  const getPerformanceScore = (currentMetrics: PerformanceMetrics): number => {
    let score = 100;
    if (currentMetrics.lcp && currentMetrics.lcp > 2500) score -= 15;
    if (currentMetrics.fid && currentMetrics.fid > 100) score -= 20;
    if (currentMetrics.cls && currentMetrics.cls > 0.1) score -= 10;
    return Math.max(0, score);
  };

  useEffect(() => {
    // Initial metrics update
    updateMetrics();

    // Set up interval for periodic updates
    const interval = setInterval(updateMetrics, reportInterval);

    // Set up performance observers
    const setupPerformanceObservers = () => {
      // Observe LCP
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            if (lastEntry) {
              setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch {
          // LCP observer not supported
        }

        // Observe FID
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            if (lastEntry) {
              setMetrics(prev => ({ ...prev, fid: lastEntry.processingStart - lastEntry.startTime }));
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch {
          // FID observer not supported
        }

        // Observe CLS
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch {
          // CLS observer not supported
        }
      }
    };

    setupPerformanceObservers();

    return () => {
      clearInterval(interval);
    };
  }, [updateMetrics, reportInterval]);

  const getScore = () => {
    return getPerformanceScore(metrics);
  };

  const getMetrics = () => {
    return metrics;
  };

  // Expose methods for external use
  React.useImperativeHandle(React.forwardRef(() => null), () => ({
    getScore,
    getMetrics,
    updateMetrics
  }));

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;