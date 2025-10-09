'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    // Performance monitoring logic would go here
    if (enableConsoleLogging) {
      console.log('Performance monitoring enabled');
    }
  }, [enableConsoleLogging]);

  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <div className="metrics">
        <div>LCP: {metrics.lcp || 'N/A'}</div>
        <div>FID: {metrics.fid || 'N/A'}</div>
        <div>CLS: {metrics.cls || 'N/A'}</div>
        <div>FCP: {metrics.fcp || 'N/A'}</div>
        <div>TTFB: {metrics.ttfb || 'N/A'}</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
