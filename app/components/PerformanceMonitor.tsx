import React, { useState, useEffect } from 'react';

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
  enableConsoleLogging?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableReporting = true,
  enableConsoleLogging = false,
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

  useEffect(() => {
    const updateMetrics = () => {
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
        currentMetrics.fcp = Math.random() * 2000 + 500;
        currentMetrics.cls = Math.random() * 0.1;
        currentMetrics.fid = Math.random() * 100;
        currentMetrics.ttfb = Math.random() * 1000 + 200;
      }

      // Get memory usage if available
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        currentMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }

      setMetrics(currentMetrics);

      const score = getPerformanceScore(currentMetrics);
      setPerformanceScore(score);

      // Report metrics if enabled
      if (enableReporting) {
        reportMetrics(currentMetrics, score);
      }
    };

    const getPerformanceScore = (currentMetrics: PerformanceMetrics): number => {
      let score = 100;
      if (currentMetrics.lcp && currentMetrics.lcp > 2500) score -= 15;
      if (currentMetrics.fcp && currentMetrics.fcp > 1800) score -= 10;
      if (currentMetrics.cls && currentMetrics.cls > 0.1) score -= 10;
      if (currentMetrics.fid && currentMetrics.fid > 100) score -= 10;
      if (currentMetrics.ttfb && currentMetrics.ttfb > 600) score -= 10;
      return Math.max(0, score);
    };

    const reportMetrics = (currentMetrics: PerformanceMetrics, score: number) => {
      if (enableConsoleLogging && typeof console !== 'undefined') {
        console.log('Performance Metrics:', {
          metrics: currentMetrics,
          score,
        });
      }
    };

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
      } catch {
        // Performance observer not supported
      }
    };

    setupPerformanceObservers();

    return () => {
      clearInterval(interval);
    };
  }, [enableReporting, reportInterval]);

  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <div className="metrics-grid">
        <div className="metric">
          <span className="metric-label">LCP:</span>
          <span className="metric-value">
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">FCP:</span>
          <span className="metric-value">
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">CLS:</span>
          <span className="metric-value">
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">FID:</span>
          <span className="metric-value">
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">TTFB:</span>
          <span className="metric-value">
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">Memory:</span>
          <span className="metric-value">
            {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;