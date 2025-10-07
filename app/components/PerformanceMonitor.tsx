import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            const newMetrics = { fcp: entry.startTime };
            setMetrics(newMetrics);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);

  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono">
      <div className="font-bold mb-2">Performance Metrics</div>
      {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}
      {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
      {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}
      {metrics.cls && <div>CLS: {metrics.cls.toFixed(4)}</div>}
      {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>}
    </div>
  );
}
