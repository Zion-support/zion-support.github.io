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

  const collectMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      memoryUsage: 0,
    };

    // Collect Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              newMetrics.lcp = entry.startTime;
            } else if (entry.entryType === 'first-input') {
              newMetrics.fid = (entry as any).processingStart - entry.startTime;
            } else if (entry.entryType === 'layout-shift') {
              if (!(entry as any).hadRecentInput) {
                newMetrics.cls = (newMetrics.cls || 0) + (entry as any).value;
              }
            } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              newMetrics.fcp = entry.startTime;
            }
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
      } catch (error) {
        if (enableConsoleLogging) {
          console.warn('Performance monitoring error:', error);
        }
      }
    }

    // Collect memory usage
    if ('memory' in performance) {
      newMetrics.memoryUsage = (performance as any).memory.usedJSHeapSize;
    }

    // Collect TTFB
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
    }

    setMetrics(newMetrics);
    
    if (enableConsoleLogging) {
      console.log('Performance metrics:', newMetrics);
    }
  }, [enableConsoleLogging]);

  useEffect(() => {
    collectMetrics();

    const interval = setInterval(collectMetrics, reportInterval);

    return () => clearInterval(interval);
  }, [collectMetrics, reportInterval]);

  const calculatePerformanceScore = useCallback(() => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > 2500) score -= 25;
    if (metrics.fid && metrics.fid > 100) score -= 25;
    if (metrics.cls && metrics.cls > 0.1) score -= 25;
    if (metrics.fcp && metrics.fcp > 1800) score -= 25;
    
    setPerformanceScore(Math.max(0, score));
    return Math.max(0, score);
  }, [metrics]);

  useEffect(() => {
    calculatePerformanceScore();
  }, [calculatePerformanceScore]);

  return (
    <div className="performance-monitor">
      <div className="metrics-grid">
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
          <span className="metric-label">FCP:</span>
          <span className="metric-value">{metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span className="metric-label">TTFB:</span>
          <span className="metric-value">{metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span className="metric-label">Memory:</span>
          <span className="metric-value">{metrics.memoryUsage ? `${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB` : 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;