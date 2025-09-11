import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    // Only run in production and if PerformanceObserver is available
    if (
      process.env.NODE_ENV !== 'production' ||
      !('PerformanceObserver' in window)
    ) {
      return;
    }

    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
            break;
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input':
            const fidEntry = entry as any;
            setMetrics(prev => ({
              ...prev,
              fid: (fidEntry.processingStart || 0) - entry.startTime,
            }));
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({
                ...prev,
                cls: (prev.cls || 0) + (entry as any).value,
              }));
            }
            break;
          case 'navigation':
            const navEntry = entry as any;
            setMetrics(prev => ({
              ...prev,
              ttfb:
                (navEntry.responseStart || 0) - (navEntry.requestStart || 0),
            }));
            break;
        }
      }
    });

    // Observe different types of performance entries
    try {
      observer.observe({
        entryTypes: [
          'paint',
          'largest-contentful-paint',
          'first-input',
          'layout-shift',
          'navigation',
        ],
      });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['paint', 'navigation'] });
    }

    return () => observer.disconnect();
  }, []);

  // Log metrics to console in development
  useEffect(() => {
    if (
      process.env.NODE_ENV === 'development' &&
      Object.values(metrics).some(v => v !== null)
    ) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  // Send metrics to analytics in production
  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' &&
      Object.values(metrics).every(v => v !== null)
    ) {
      // Send to analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: Math.round(metrics.lcp || 0),
          custom_map: {
            fcp: metrics.fcp,
            lcp: metrics.lcp,
            fid: metrics.fid,
            cls: metrics.cls,
            ttfb: metrics.ttfb,
          },
        });
      }
    }
  }, [metrics]);

  return null; // This component doesn't render anything
};
