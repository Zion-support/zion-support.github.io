'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  // Measure First Contentful Paint (FCP)
  const measureFCP = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      });
    });

    observer.observe({ entryTypes: ['paint'] });
    return () => observer.disconnect();
  }, []);

  // Measure Largest Contentful Paint (LCP)
  const measureLCP = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    return () => observer.disconnect();
  }, []);

  // Measure First Input Delay (FID)
  const measureFID = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as any;
        if (fidEntry.processingStart && entry.startTime) {
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - entry.startTime }));
        }
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
    return () => observer.disconnect();
  }, []);

  // Measure Cumulative Layout Shift (CLS)
  const measureCLS = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const layoutShiftEntry = entry as any;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });

    observer.observe({ entryTypes: ['layout-shift'] });
    return () => observer.disconnect();
  }, []);

  // Measure Time to First Byte (TTFB)
  const measureTTFB = useCallback(() => {
    if (typeof window === 'undefined' || !performance.timing) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const ttfb = navigation.responseStart - navigation.fetchStart;
    setMetrics(prev => ({ ...prev, ttfb }));
  }, []);

  // Measure Memory Usage
  const measureMemory = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    setMetrics(prev => ({ ...prev, memory: memoryUsage }));
  }, []);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;

    setIsMonitoring(true);
    const cleanupFunctions = [
      measureFCP(),
      measureLCP(),
      measureFID(),
      measureCLS(),
    ].filter(Boolean);

    measureTTFB();
    measureMemory();

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup?.());
      setIsMonitoring(false);
    };
  }, [isMonitoring, measureFCP, measureLCP, measureFID, measureCLS, measureTTFB, measureMemory]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Reset metrics
  const resetMetrics = useCallback(() => {
    setMetrics({
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
      memory: null,
    });
  }, []);

  // Effect to start monitoring on mount
  useEffect(() => {
    if (enableRealTimeMonitoring) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [enableRealTimeMonitoring, startMonitoring]);

  // Effect to call onMetricsUpdate when metrics change
  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Effect to measure memory periodically
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const interval = setInterval(measureMemory, 1000);
    return () => clearInterval(interval);
  }, [enableRealTimeMonitoring, measureMemory]);

  return (
    <div className="performance-monitor">
      <div className="monitor-controls">
        <button
          onClick={isMonitoring ? stopMonitoring : startMonitoring}
          className="monitor-button"
        >
          {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
        </button>
        <button onClick={resetMetrics} className="reset-button">
          Reset Metrics
        </button>
      </div>

      <div className="metrics-display">
        <h3>Performance Metrics</h3>
        <div className="metrics-grid">
          <div className="metric-item">
            <span className="metric-label">FCP:</span>
            <span className="metric-value">
              {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">LCP:</span>
            <span className="metric-value">
              {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">FID:</span>
            <span className="metric-value">
              {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">CLS:</span>
            <span className="metric-value">
              {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">TTFB:</span>
            <span className="metric-value">
              {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">Memory:</span>
            <span className="metric-value">
              {metrics.memory ? `${metrics.memory.toFixed(2)}MB` : 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;