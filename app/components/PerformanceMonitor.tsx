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

  useEffect(() => {
    const collectMetrics = () => {
      if (typeof window === 'undefined') return;

      // Collect Web Vitals
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || null;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || null;
      
      // Memory usage
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;

      setMetrics(prev => ({
        ...prev,
        fcp,
        lcp,
        memoryUsage,
      }));

      if (enableConsoleLogging) {
        console.log('Performance Metrics:', {
          fcp,
          lcp,
          memoryUsage,
        });
      }
    };

    // Initial collection
    collectMetrics();

    // Set up interval for continuous monitoring
    const interval = setInterval(collectMetrics, reportInterval);

    return () => clearInterval(interval);
  }, [enableConsoleLogging, reportInterval]);

  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <div className="metrics-grid">
        <div className="metric">
          <span className="label">FCP:</span>
          <span className="value">{metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span className="label">LCP:</span>
          <span className="value">{metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span className="label">Memory:</span>
          <span className="value">{metrics.memoryUsage.toFixed(2)}MB</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;