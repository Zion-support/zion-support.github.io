'use client';

import React, { useState, useCallback, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memory: number | null
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  })

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    if (typeof PerformanceObserver === 'undefined') return

    const observers: PerformanceObserver[] = []

    // Measure First Contentful Paint (FCP)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      observers.push(fcpObserver);
    } catch (error) {
      console.warn('Error caught:', error);
    }

    // Measure First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          const fidEntry = entry as PerformanceEntry & { processingStart: number };
          if (fidEntry.processingStart && entry.startTime) {
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - entry.startTime }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      observers.push(fidObserver);
    } catch (error) {
      console.warn('Error caught:', error);
    }

    // Measure Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value || 0;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      observers.push(clsObserver);
    } catch (error) {
      console.warn('Error caught:', error);
    }

    // Measure Time to First Byte (TTFB)
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }
    } catch (error) {
      console.warn('Error caught:', error);
    }

    // Measure Memory Usage
    try {
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
        if (memory) {
          setMetrics(prev => ({ ...prev, memory: memory.usedJSHeapSize }));
        }
      }
    } catch (error) {
      console.warn('Error caught:', error);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return

    const cleanup = measureWebVitals()

    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      measureWebVitals()
    }, 5000)

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [measureWebVitals, enableRealTimeMonitoring]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics)
    }
  }, [metrics, onMetricsUpdate]);

  return (
    <div className="performance-monitor">
      <div className="metrics-display">
        <h3>Performance Metrics</h3>
        <div className="metric">
          <span>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>Memory: {metrics.memory ? `${(metrics.memory / 1024 / 1024).toFixed(2)}MB` : 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;