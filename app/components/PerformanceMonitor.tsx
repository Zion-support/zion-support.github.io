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
          setMetrics(prev => ({ ...prev, fid: (entry as PerformanceEventTiming).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
        } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['paint'] });
    }

    // Get TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    return () => {
      observer.disconnect();
    };
  }, [enableReporting]);

  // Report metrics to analytics (if enabled)
  useEffect(() => {
    if (enableReporting && metrics.lcp && metrics.fid && metrics.cls) {
      // Here you would typically send metrics to your analytics service
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics, enableReporting]);

  return (
    <div className={`performance-monitor ${className}`}>
      {children}
      {enableReporting && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 text-xs rounded">
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}</div>
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</div>
        </div>
      )}
    </div>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;