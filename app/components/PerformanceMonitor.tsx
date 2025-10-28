'use client';

import React, { useEffect, useState, memo } from 'react';

// Performance API types
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: LayoutShiftAttribution[];
}

interface LayoutShiftAttribution {
  node?: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}

// Web API type declarations
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
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as LayoutShift;
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
          }
        } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [enableReporting]);

  // Report metrics (in a real app, you'd send this to analytics)
  useEffect(() => {
    if (enableReporting && metrics.lcp && metrics.fid && metrics.cls && metrics.fcp) {
      console.log('Core Web Vitals:', metrics);
    }
  }, [metrics, enableReporting]);

  return (
    <div className={className}>
      {children}
      {enableReporting && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
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