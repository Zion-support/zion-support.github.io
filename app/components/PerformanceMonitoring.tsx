'use client';

import React, { useEffect, memo, useCallback, useState } from 'react';

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
  onMetricsUpdate?: (metrics: any) => void;
  enableRealTimeMonitoring?: boolean;
}

const PerformanceMonitoring: React.FC<PerformanceMonitoringProps> = memo(({
  onMetricsUpdate,
  enableRealTimeMonitoring = true
}) => {
  const [metrics, setMetrics] = useState({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as LayoutShiftEntry;
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
          }
        } else if (entry.entryType === 'navigation') {
          const navEntry = entry as any;
          setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance, enableRealTimeMonitoring]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  return (
    <div className="performance-monitoring">
      <h3>Performance Monitoring</h3>
      <div className="metrics">
        <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
        <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
        <div>FID: {metrics.fid?.toFixed(2)}ms</div>
        <div>CLS: {metrics.cls?.toFixed(4)}</div>
        <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
      </div>
    </div>
  );
});

PerformanceMonitoring.displayName = 'PerformanceMonitoring';

export default PerformanceMonitoring;
