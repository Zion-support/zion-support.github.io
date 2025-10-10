'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  navigationType: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    navigationType: 'navigate'
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show in development or when performance monitoring is enabled
    const shouldMonitor = process.env.NODE_ENV === 'development' ||
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          updateMetrics({ lcp: entry.startTime });
        }
        if (entry.entryType === 'first-input') {
          updateMetrics({ fid: entry.processingStart - entry.startTime });
        }
        if (entry.entryType === 'layout-shift') {
          updateMetrics({ cls: (entry as any).value });
        }
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          updateMetrics({ fcp: entry.startTime });
        }
      });
    });

    observer.observe({ 
      entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] 
    });

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetrics({ 
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
        navigationType: navigationEntry.type
      });
    }

    return () => observer.disconnect();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg border border-slate-700 text-xs font-mono z-50">
      <h4 className="text-cyan-400 font-semibold mb-2">Performance Metrics</h4>
      <div className="space-y-1">
        <div>LCP: <span className="text-green-400">{metrics.lcp.toFixed(2)}ms</span></div>
        <div>FID: <span className="text-green-400">{metrics.fid.toFixed(2)}ms</span></div>
        <div>CLS: <span className="text-green-400">{metrics.cls.toFixed(3)}</span></div>
        <div>FCP: <span className="text-green-400">{metrics.fcp.toFixed(2)}ms</span></div>
        <div>TTFB: <span className="text-green-400">{metrics.ttfb.toFixed(2)}ms</span></div>
        <div>Type: <span className="text-blue-400">{metrics.navigationType}</span></div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;