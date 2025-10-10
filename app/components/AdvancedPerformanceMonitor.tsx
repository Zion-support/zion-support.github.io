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

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => ({ ...prev, ...newMetrics }));
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring || typeof window === 'undefined') return;

    // Web Vitals monitoring
    const measureWebVitals = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            updateMetrics({ fcp: fcpEntry.startTime });
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          updateMetrics({ lcp: lastEntry.startTime });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            updateMetrics({ fid: entry.processingStart - entry.startTime });
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          updateMetrics({ cls: clsValue });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte (TTFB)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          updateMetrics({ ttfb: navigationEntry.responseStart - navigationEntry.requestStart });
        }

        // Memory usage
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          updateMetrics({ memory: memory.usedJSHeapSize / 1024 / 1024 }); // Convert to MB
        }

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };

    const cleanup = measureWebVitals();

    return cleanup;
  }, [enableRealTimeMonitoring, updateMetrics]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  return (
    <div className="performance-monitor">
      {enableRealTimeMonitoring && (
        <div className="performance-metrics">
          <h3>Performance Metrics</h3>
          <div className="metrics-grid">
            <div className="metric">
              <span className="metric-label">FCP:</span>
              <span className="metric-value">{metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</span>
            </div>
            <div className="metric">
              <span className="metric-label">LCP:</span>
              <span className="metric-value">{metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}</span>
            </div>
            <div className="metric">
              <span className="metric-label">FID:</span>
              <span className="metric-value">{metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}</span>
            </div>
            <div className="metric">
              <span className="metric-label">CLS:</span>
              <span className="metric-value">{metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}</span>
            </div>
            <div className="metric">
              <span className="metric-label">TTFB:</span>
              <span className="metric-value">{metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}</span>
            </div>
            <div className="metric">
              <span className="metric-label">Memory:</span>
              <span className="metric-value">{metrics.memory ? `${metrics.memory.toFixed(2)}MB` : 'N/A'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;