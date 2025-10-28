'use client';

import React, { useEffect, memo, useCallback } from 'react';

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  target?: Node;
}

interface PerformanceMonitoringProps {
  onMetricsUpdate?: (metrics: unknown) => void;
  enableRealTimeMonitoring?: boolean;
  className?: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PerformanceMonitoring: React.FC<PerformanceMonitoringProps> = memo(({ 
  onMetricsUpdate, 
  enableRealTimeMonitoring = false, 
  className = '' 
}) => {
  const [metrics, setMetrics] = React.useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return () => {};

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        }
        if (entry.entryType === 'first-input') {
          const firstInput = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: firstInput.processingStart - firstInput.startTime }));
        }
        if (entry.entryType === 'layout-shift') {
          const layoutShift = entry as LayoutShiftEntry;
          setMetrics(prev => ({ ...prev, cls: layoutShift.value }));
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);

  // Monitor resource performance
  const monitorResourcePerformance = useCallback(() => {
    if (typeof window === 'undefined') return () => {};

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setMetrics(prev => ({ 
            ...prev, 
            fcp: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            ttfb: navEntry.responseStart - navEntry.requestStart
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => observer.disconnect();
  }, []);

  // Monitor memory usage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      }
    };

    checkMemory();
    const interval = setInterval(checkMemory, 5000);
    return () => clearInterval(interval);
  }, []);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return () => {};

    const cleanup1 = monitorCoreWebVitals();
    const cleanup2 = monitorResourcePerformance();

    return () => {
      cleanup1();
      cleanup2();
    };
  }, [monitorCoreWebVitals, monitorResourcePerformance]);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const cleanup = measurePerformance();
    return cleanup;
  }, [enableRealTimeMonitoring, measurePerformance]);

  // Update metrics callback
  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  return (
    <div className={`performance-monitoring ${className}`}>
      {/* Performance monitoring component - no visible UI */}
    </div>
  );
});

PerformanceMonitoring.displayName = 'PerformanceMonitoring';

export default PerformanceMonitoring;
