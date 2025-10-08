import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance entry:', entry);
      }
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.error('Performance observer error:', error);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
      <h3 className="text-sm font-semibold mb-2">Performance Metrics</h3>
      <div className="space-y-1 text-xs">
        {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}
        {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
        {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}
        {metrics.cls && <div>CLS: {metrics.cls.toFixed(3)}</div>}
        {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>}
      </div>
    </div>
  );
};

export default PerformanceMonitor;