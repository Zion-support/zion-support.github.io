'use client';

import React, { useEffect, useState, memo } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
  enableReporting?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = memo(({ 
  className = '', 
  children,
  enableReporting = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !enableReporting) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEntry & { processingStart: number };
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (clsEntry.value || 0) }));
          }
        } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });

    return () => observer.disconnect();
  }, [enableReporting]);

  return (
    <div className={className}>
      {children ? children : (
        <div className="hidden">
          {/* Performance metrics are collected in the background */}
          {enableReporting && (
            <div>
              LCP: {metrics.lcp?.toFixed(2)}ms | 
              FID: {metrics.fid?.toFixed(2)}ms | 
              CLS: {metrics.cls?.toFixed(4)} | 
              FCP: {metrics.fcp?.toFixed(2)}ms
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default PerformanceMonitor;
