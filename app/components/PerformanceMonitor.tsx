'use client';

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
    if (typeof window === 'undefined') return;

    const collectMetrics = () => {
      // Collect Web Vitals
      const newMetrics: PerformanceMetrics = {
        lcp: null,
        fid: null,
        cls: null,
        fcp: null,
        ttfb: null,
        memoryUsage: 0,
      };

      // Get memory usage if available
      if ('memory' in performance) {
        newMetrics.memoryUsage = (performance as any).memory.usedJSHeapSize;
      }

      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
      }

      // Get paint timing
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          newMetrics.fcp = entry.startTime;
        }
      });

      setMetrics(newMetrics);

      // Calculate performance score
      const score = calculatePerformanceScore(newMetrics);
      setPerformanceScore(score);

      if (enableConsoleLogging) {
        console.log('Performance Metrics:', newMetrics);
        console.log('Performance Score:', score);
      }

      if (enableReporting) {
        // In a real application, you would send metrics to an analytics service
        reportMetrics(newMetrics, score);
      }
    };

    // Collect metrics immediately
    collectMetrics();

    // Set up interval for periodic collection
    const interval = setInterval(collectMetrics, reportInterval);

    return () => clearInterval(interval);
  }, [enableConsoleLogging, enableReporting, reportInterval]);

  const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp <= 2500) score -= 0;
      else if (metrics.lcp <= 4000) score -= 20;
      else score -= 40;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid <= 100) score -= 0;
      else if (metrics.fid <= 300) score -= 20;
      else score -= 40;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls <= 0.1) score -= 0;
      else if (metrics.cls <= 0.25) score -= 20;
      else score -= 40;
    }

    return Math.max(0, score);
  };

  const reportMetrics = (metrics: PerformanceMetrics, score: number) => {
    // In a real application, you would send this to an analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        lcp: metrics.lcp,
        fid: metrics.fid,
        cls: metrics.cls,
        fcp: metrics.fcp,
        ttfb: metrics.ttfb,
        memory_usage: metrics.memoryUsage,
        performance_score: score,
      });
    }
  };

  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <div className="metrics-grid">
        <div className="metric">
          <span className="metric-label">LCP:</span>
          <span className="metric-value">
            {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">FID:</span>
          <span className="metric-value">
            {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">CLS:</span>
          <span className="metric-value">
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">FCP:</span>
          <span className="metric-value">
            {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">TTFB:</span>
          <span className="metric-value">
            {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">Memory:</span>
          <span className="metric-value">
            {metrics.memoryUsage ? `${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB` : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;