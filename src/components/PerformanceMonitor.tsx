import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const updateMetric = (name: keyof PerformanceMetrics, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }));
      
      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: name,
          value: Math.round(name === 'cls' ? value * 1000 : value)
        });
      }
    };

    // Measure Core Web Vitals
    getCLS(updateMetric.bind(null, 'cls'));
    getFID(updateMetric.bind(null, 'fid'));
    getFCP(updateMetric.bind(null, 'fcp'));
    getLCP(updateMetric.bind(null, 'lcp'));
    getTTFB(updateMetric.bind(null, 'ttfb'));

    // Monitor page load performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'page_load_time', {
              event_category: 'Performance',
              event_label: 'Page Load',
              value: Math.round(loadTime)
            });
          }
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <h4 className="font-bold mb-2">Performance Metrics</h4>
      <div className="space-y-1">
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid}ms` : 'N/A'}</div>
        <div>FCP: {metrics.fcp ? `${metrics.fcp}ms` : 'N/A'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp}ms` : 'N/A'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb}ms` : 'N/A'}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
