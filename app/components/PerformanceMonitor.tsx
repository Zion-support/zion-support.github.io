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
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Import web-vitals dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) => {
        setMetrics(prev => ({ ...prev, cls: metric.value }));
        // Send to analytics
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',
            value: Math.round(metric.value * 1000),
          });
        }
      });

      getFID((metric) => {
        setMetrics(prev => ({ ...prev, fid: metric.value }));
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FID',
            value: Math.round(metric.value),
          });
        }
      });

      getFCP((metric) => {
        setMetrics(prev => ({ ...prev, fcp: metric.value }));
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FCP',
            value: Math.round(metric.value),
          });
        }
      });

      getLCP((metric) => {
        setMetrics(prev => ({ ...prev, lcp: metric.value }));
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(metric.value),
          });
        }
      });

      getTTFB((metric) => {
        setMetrics(prev => ({ ...prev, ttfb: metric.value }));
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'TTFB',
            value: Math.round(metric.value),
          });
        }
      });
    });

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
        };

        // Log memory usage if it's high
        if (memoryUsage.used > memoryUsage.limit * 0.8) {
          console.warn('High memory usage detected:', memoryUsage);
        }
      }
    };

    // Check memory usage every 30 seconds
    const memoryInterval = setInterval(monitorMemory, 30000);

    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  // Development mode: show performance metrics
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Loading...'}</div>
        <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Loading...'}</div>
        <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Loading...'}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;