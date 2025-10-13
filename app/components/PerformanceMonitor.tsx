import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
          }
        } else if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (e) {
      console.warn('Performance Observer not supported');
    }

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Only show in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4 text-xs text-white z-50">
      <div className="font-bold text-cyan-400 mb-2">Performance Metrics</div>
      <div className="space-y-1">
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}</div>
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;