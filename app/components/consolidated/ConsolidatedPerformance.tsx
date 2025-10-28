'use client';

import React, { useCallback, useState, useEffect, memo } from 'react';

interface ConsolidatedPerformanceProps {
  className?: string;
}

const ConsolidatedPerformance: React.FC<ConsolidatedPerformanceProps> = memo(({
  className = ''
}) => {
  const [metrics, setMetrics] = useState({
    fcp: null as number | null,
    lcp: null as number | null,
    fid: null as number | null,
    cls: null as number | null,
    ttfb: null as number | null
  });

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure FCP
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
    }

    // Measure LCP
    const lcpEntry = performance.getEntriesByName('largest-contentful-paint')[0];
    if (lcpEntry) {
      setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
    }

    // Measure FID
    const fidEntry = performance.getEntriesByName('first-input')[0];
    if (fidEntry) {
      setMetrics(prev => ({ ...prev, fid: (fidEntry as any).processingStart - fidEntry.startTime }));
    }

    // Measure CLS
    const clsEntry = performance.getEntriesByName('layout-shift')[0];
    if (clsEntry) {
      setMetrics(prev => ({ ...prev, cls: (clsEntry as any).value }));
    }

    // Measure TTFB
    const ttfbEntry = performance.getEntriesByName('navigation')[0];
    if (ttfbEntry) {
      setMetrics(prev => ({ ...prev, ttfb: (ttfbEntry as any).responseStart - (ttfbEntry as any).requestStart }));
    }
  }, []);

  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  return (
    <div className={`consolidated-performance ${className}`}>
      <h3>Performance Metrics</h3>
      <div className="metrics-grid">
        <div className="metric">
          <span>FCP: {metrics.fcp?.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span>LCP: {metrics.lcp?.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span>FID: {metrics.fid?.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span>CLS: {metrics.cls?.toFixed(4)}</span>
        </div>
        <div className="metric">
          <span>TTFB: {metrics.ttfb?.toFixed(2)}ms</span>
        </div>
      </div>
    </div>
  );
});

ConsolidatedPerformance.displayName = 'ConsolidatedPerformance';

export default ConsolidatedPerformance;
