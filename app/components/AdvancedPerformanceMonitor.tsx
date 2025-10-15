import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null;
  navigation: {
    loadEventEnd: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    loadEventStart: number;
  } | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  logToConsole?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    memory: null,
    navigation: null
  });

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      if (onMetricsUpdate) {
        onMetricsUpdate(updated);
      }
      if (logToConsole) {
        console.log('Performance Metrics:', updated);
      }
      return updated;
    });
  }, [onMetricsUpdate, logToConsole]);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          updateMetrics({ fcp: entry.startTime });
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      updateMetrics({ lcp: lastEntry.startTime });
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = entry.processingStart - entry.startTime;
        updateMetrics({ fid });
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          updateMetrics({ cls: clsValue });
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      updateMetrics({ ttfb });
    }

    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      updateMetrics({
        memory: {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit
        }
      });
    }

    // Navigation timing
    if (performance.timing) {
      const timing = performance.timing;
      updateMetrics({
        navigation: {
          loadEventEnd: timing.loadEventEnd,
          domContentLoadedEventEnd: timing.domContentLoadedEventEnd,
          domContentLoadedEventStart: timing.domContentLoadedEventStart,
          loadEventStart: timing.loadEventStart
        }
      });
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enableRealTimeMonitoring, updateMetrics]);

  return null; // This component doesn't render anything
};

export default AdvancedPerformanceMonitor;