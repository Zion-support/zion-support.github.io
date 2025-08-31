import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null
  });

  useEffect(() => {
    // First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
            // Send to analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FCP',
                value: Math.round(fcpEntry.startTime)
              });
            }
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FCP observer failed:', e);
      }

      // Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
            // Send to analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'LCP',
                value: Math.round(lastEntry.startTime)
              });
            }
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer failed:', e);
      }

      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            // Send to analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(entry.processingStart - entry.startTime)
              });
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer failed:', e);
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
          // Send to analytics
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000) / 1000
            });
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer failed:', e);
      }
    }

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
      // Send to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'TTFB',
          value: Math.round(ttfb)
        });
      }
    }

    // Load Time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    if (loadTime > 0) {
      setMetrics(prev => ({ ...prev, loadTime }));
      // Send to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'Load Time',
          value: Math.round(loadTime)
        });
      }
    }

    // Log metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, []);

  // Only show in development mode
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
      <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
      <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
      <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
      <div>Load: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}</div>
    </div>
  );
};
