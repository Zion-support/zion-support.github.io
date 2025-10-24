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

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

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
      entries.forEach(entry => {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure TTFB (Time to First Byte)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as unknown as { memory: { usedJSHeapSize: number } }).memory;
      setMetrics(prev => ({ ...prev, memory: memory.usedJSHeapSize }));
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (enableRealTimeMonitoring) {
      const cleanup = measurePerformance();
      setIsMonitoring(true);
      
      return cleanup;
    }
  }, [enableRealTimeMonitoring, measurePerformance]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  return (
    <div className="performance-monitor">
      <div className="monitor-header">
        <h3>Performance Monitor</h3>
        <div className={`status-indicator ${isMonitoring ? 'active' : 'inactive'}`}>
          {isMonitoring ? 'Monitoring' : 'Inactive'}
        </div>
      </div>
      
      <div className="metrics-grid">
        <div className="metric-item">
          <span className="metric-label">FCP</span>
          <span className="metric-value">
            {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="metric-item">
          <span className="metric-label">LCP</span>
          <span className="metric-value">
            {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="metric-item">
          <span className="metric-label">FID</span>
          <span className="metric-value">
            {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="metric-item">
          <span className="metric-label">CLS</span>
          <span className="metric-value">
            {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}
          </span>
        </div>
        
        <div className="metric-item">
          <span className="metric-label">TTFB</span>
          <span className="metric-value">
            {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="metric-item">
          <span className="metric-label">Memory</span>
          <span className="metric-value">
            {metrics.memory ? `${(metrics.memory / 1024 / 1024).toFixed(2)}MB` : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;