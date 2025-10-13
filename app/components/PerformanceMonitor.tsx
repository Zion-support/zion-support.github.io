import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const formatMetric = (value: number | null): string => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}ms`;
  };

  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          switch (entry.entryType) {
            case 'paint':
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
              }
              break;
            case 'largest-contentful-paint':
              setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
              break;
            case 'first-input': {
              const fidEntry = entry as any;
              setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - entry.startTime }));
              break;
            }
            case 'layout-shift': {
              const clsEntry = entry as any;
              setMetrics(prev => ({ ...prev, cls: clsEntry.value }));
              break;
            }
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }

    // Fallback for TTFB
    const navigationEntries = performance.getEntriesByType('navigation') as any[];
    if (navigationEntries.length > 0) {
      const navEntry = navigationEntries[0];
      setMetrics(prev => ({ 
        ...prev, 
        ttfb: navEntry.responseStart - navEntry.requestStart 
      }));
    }

    return undefined;
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>FCP: {formatMetric(metrics.fcp)}</div>
        <div>LCP: {formatMetric(metrics.lcp)}</div>
        <div>FID: {formatMetric(metrics.fid)}</div>
        <div>CLS: {formatMetric(metrics.cls)}</div>
        <div>TTFB: {formatMetric(metrics.ttfb)}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;