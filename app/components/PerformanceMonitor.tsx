'use client';
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
    ttfb: null,
  });

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      // Measure Core Web Vitals
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const newMetrics: PerformanceMetrics = {
          lcp: null,
          fid: null,
          cls: null,
          fcp: null,
          ttfb: navigation.responseStart - navigation.requestStart,
        };

        // Measure First Contentful Paint
        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
        if (fcpEntry) {
          newMetrics.fcp = fcpEntry.startTime;
        }

        // Measure Largest Contentful Paint
        const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
        if (lcpEntries.length > 0) {
          newMetrics.lcp = lcpEntries[lcpEntries.length - 1].startTime;
        }

        // Measure Cumulative Layout Shift
        let clsValue = 0;
        const clsEntries = performance.getEntriesByType('layout-shift');
        clsEntries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        newMetrics.cls = clsValue;

        setMetrics(newMetrics);

        // Send metrics to analytics if available
        if ((window as any).gtag) {
          (window as any).gtag('event', 'performance_metrics', {
            event_category: 'Performance',
            event_label: 'Core Web Vitals',
            lcp: newMetrics.lcp,
            fid: newMetrics.fid,
            cls: newMetrics.cls,
            fcp: newMetrics.fcp,
            ttfb: newMetrics.ttfb,
          });
        }
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Only render in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}</div>
      <div>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
      <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</div>
      <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}</div>
    </div>
  );
};

export default PerformanceMonitor;