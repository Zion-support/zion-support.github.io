import React, { useEffect, useState, memo } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMetrics: React.FC = memo(() => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  useEffect(() => {
    const updateMetric = (name: keyof PerformanceMetrics, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }));
    };

    // Measure Core Web Vitals
    getCLS((metric) => updateMetric('cls', metric.value));
    getFID((metric) => updateMetric('fid', metric.value));
    getFCP((metric) => updateMetric('fcp', metric.value));
    getLCP((metric) => updateMetric('lcp', metric.value));
    getTTFB((metric) => updateMetric('ttfb', metric.value));

    // Additional performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <h4 className="font-bold mb-2">Performance Metrics</h4>
      <div className="space-y-1">
        <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
        <div>FID: {metrics.fid?.toFixed(1) || 'N/A'}ms</div>
        <div>FCP: {metrics.fcp?.toFixed(1) || 'N/A'}ms</div>
        <div>LCP: {metrics.lcp?.toFixed(1) || 'N/A'}ms</div>
        <div>TTFB: {metrics.ttfb?.toFixed(1) || 'N/A'}ms</div>
      </div>
    </div>
  );
});

PerformanceMetrics.displayName = 'PerformanceMetrics';

export default PerformanceMetrics;