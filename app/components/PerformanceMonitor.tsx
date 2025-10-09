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
    ttfb: null
  });

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const measurePerformance = () => {
      // Measure First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      }

      // Measure Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Measure First Input Delay
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            }
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Measure Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Measure Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
        }));
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Send metrics to analytics (if available)
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        
        if (metrics.fcp) gtag('event', 'web_vitals', { name: 'FCP', value: Math.round(metrics.fcp) });
        if (metrics.lcp) gtag('event', 'web_vitals', { name: 'LCP', value: Math.round(metrics.lcp) });
        if (metrics.fid) gtag('event', 'web_vitals', { name: 'FID', value: Math.round(metrics.fid) });
        if (metrics.cls) gtag('event', 'web_vitals', { name: 'CLS', value: Math.round(metrics.cls * 1000) });
        if (metrics.ttfb) gtag('event', 'web_vitals', { name: 'TTFB', value: Math.round(metrics.ttfb) });
      }
    };

    // Send metrics after a delay to ensure all are collected
    const timeoutId = setTimeout(sendMetrics, 5000);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('load', measurePerformance);
    };
  }, [metrics]);

  // Don't render anything visible
  return null;
};

export default PerformanceMonitor;
