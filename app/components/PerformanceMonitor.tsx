'use client';
import React, { useEffect, useState, memo } from 'react';

const PerformanceMonitor: React.FC = memo(() => {
  const [metrics, setMetrics] = useState<{
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
  }>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor performance metrics
    const measurePerformance = () => {
      // Measure FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });

      fcpObserver.observe({ entryTypes: ['paint'] });

      // Measure LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });

      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = (entry as any).processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        });
      });

      fidObserver.observe({ entryTypes: ['first-input'] });

      // Measure CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });

      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    };

    const cleanup = measurePerformance();

    return () => {
      cleanup?.();
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-semibold">Performance Metrics:</div>
      {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}
      {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
      {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}
      {metrics.cls && <div>CLS: {metrics.cls.toFixed(4)}</div>}
    </div>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;