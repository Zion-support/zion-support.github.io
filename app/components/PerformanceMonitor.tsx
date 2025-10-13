import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

interface PerformanceMonitorProps {
  children: React.ReactNode;
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children, showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          }
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
          }
          if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cls: prev.cls + (entry as any).value }));
          }
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      {children}
      {showDetails && process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg text-xs">
          <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
          <div>FID: {metrics.fid.toFixed(2)}ms</div>
          <div>CLS: {metrics.cls.toFixed(4)}</div>
          <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;
