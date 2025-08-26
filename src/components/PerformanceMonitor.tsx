import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    // Only run in production and if PerformanceObserver is available
    if (process.env.NODE_ENV !== 'production' || !('PerformanceObserver' in window)) {
      return;
    }

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fidEntry = entries[entries.length - 1];
      if (fidEntry) {
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Don't render anything if no metrics are available
  if (!Object.values(metrics).some(Boolean)) {
    return null;
  }

  const getScore = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';

    switch (metric) {
      case 'fcp':
        return value < 1800 ? '🟢 Good' : value < 3000 ? '🟡 Needs Improvement' : '🔴 Poor';
      case 'lcp':
        return value < 2500 ? '🟢 Good' : value < 4000 ? '🟡 Needs Improvement' : '🔴 Poor';
      case 'fid':
        return value < 100 ? '🟢 Good' : value < 300 ? '🟡 Needs Improvement' : '🔴 Poor';
      case 'cls':
        return value < 0.1 ? '🟢 Good' : value < 0.25 ? '🟡 Needs Improvement' : '🔴 Poor';
      case 'ttfb':
        return value < 800 ? '🟢 Good' : value < 1800 ? '🟡 Needs Improvement' : '🔴 Poor';
      default:
        return 'N/A';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-zion-blue-dark/90 backdrop-blur-sm border border-zion-blue-light/30 rounded-lg p-4 text-white text-xs max-w-xs z-50">
      <h3 className="font-semibold mb-2 text-zion-cyan">Performance Metrics</h3>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span>{metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}</span>
          <span>{getScore('fcp')}</span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span>{metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}</span>
          <span>{getScore('lcp')}</span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span>{metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}</span>
          <span>{getScore('fid')}</span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span>{metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</span>
          <span>{getScore('cls')}</span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span>{metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}</span>
          <span>{getScore('ttfb')}</span>
        </div>
      </div>
    </div>
  );
}
