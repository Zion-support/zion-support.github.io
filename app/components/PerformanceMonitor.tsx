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
    ttfb: null,
  });

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      // Measure First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Measure Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // Cleanup observers after 10 seconds
      setTimeout(() => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
      }, 10000);
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>
      <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'Loading...'}</div>
      <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>
    </div>
  );
};

export default PerformanceMonitor;