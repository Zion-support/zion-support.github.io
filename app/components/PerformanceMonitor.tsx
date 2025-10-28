'use client';

import React, { useEffect, useState, memo } from 'react';

// Performance API type definitions
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  cancelable: boolean;
  target?: EventTarget;
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
<<<<<<< HEAD
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        } else if (entry.entryType === 'layout-shift' && !(entry as LayoutShift).hadRecentInput) {
          const clsEntry = entry as LayoutShift;
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
=======
          const fidEntry = entry as PerformanceEntry & { processingStart: number };
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!layoutShiftEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (layoutShiftEntry.value || 0) }));
          }
>>>>>>> origin/main
        } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

<<<<<<< HEAD
    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
=======
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });

    // TTFB measurement
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
>>>>>>> origin/main
    }

    return () => {
      observer.disconnect();
    };
  }, [enableReporting]);

<<<<<<< HEAD
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
=======
  return (
    <div className={className}>
      {children}
      {enableReporting && process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs font-mono">
          <div>LCP: {metrics.lcp?.toFixed(2) || 'N/A'}ms</div>
          <div>FID: {metrics.fid?.toFixed(2) || 'N/A'}ms</div>
          <div>CLS: {metrics.cls?.toFixed(4) || 'N/A'}</div>
          <div>FCP: {metrics.fcp?.toFixed(2) || 'N/A'}ms</div>
          <div>TTFB: {metrics.ttfb?.toFixed(2) || 'N/A'}ms</div>
>>>>>>> origin/main
        </div>
      )}
    </div>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;