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

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const fidEntry = entry as any;
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as any;
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
          }
        } else if (entry.entryType === 'navigation') {
          const navEntry = entry as any;
          setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = measurePerformance();
    return cleanup;
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
