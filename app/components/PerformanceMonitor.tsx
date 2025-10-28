'use client';

import React, { useEffect, useState, memo } from 'react';

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  target?: Node;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: unknown) => void;
  enableRealTimeMonitoring?: boolean;
  className?: string;
  children?: React.ReactNode;
  enableReporting?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = memo(({ 
  className = '', children, enableReporting = false, enableRealTimeMonitoring = false, onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState({
    fcp: null as number | null,
    lcp: null as number | null,
    fid: null as number | null,
    cls: null as number | null,
    ttfb: null as number | null
  });

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const _fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: _fidEntry.processingStart - _fidEntry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const _clsEntry = entry as LayoutShift;
          if (!_clsEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + _clsEntry.value }));
          }
        } else if (entry.entryType === 'navigation') {
          const _navEntry = entry as any;
          setMetrics(prev => ({ ...prev, ttfb: _navEntry.responseStart - _navEntry.requestStart }));
        }
      }
    });

    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch { /* Handle error */ }

    return () => observer.disconnect();
  }, [enableRealTimeMonitoring]);

  useEffect(() => {
    if (enableReporting && metrics.lcp && metrics.fid && metrics.cls && metrics.fcp) { /* empty */ }
  }, [metrics, enableReporting]);

  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
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

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;
