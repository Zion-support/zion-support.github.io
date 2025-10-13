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
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;

    // Import web-vitals dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) => {
        setMetrics(prev => ({ ...prev, cls: metric.value }));
      });

      getFID((metric) => {
        setMetrics(prev => ({ ...prev, fid: metric.value }));
      });

      getFCP((metric) => {
        setMetrics(prev => ({ ...prev, fcp: metric.value }));
      });

      getLCP((metric) => {
        setMetrics(prev => ({ ...prev, lcp: metric.value }));
      });

      getTTFB((metric) => {
        setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      });
    });

    // Monitor performance in development
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance Entry:', entry);
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="mb-2 font-bold text-cyan-400">Performance Metrics</div>
      <div className="space-y-1">
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'Loading...'}</div>
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;