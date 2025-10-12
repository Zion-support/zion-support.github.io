import React, { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const reportWebVitals = (metric: any) => {
      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          reportWebVitals({
            name: 'LCP',
            value: entry.startTime,
            id: 'lcp',
          });
        }
        if (entry.entryType === 'first-input') {
          reportWebVitals({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            id: 'fid',
          });
        }
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          reportWebVitals({
            name: 'CLS',
            value: (entry as any).value,
            id: 'cls',
          });
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor other metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        reportWebVitals({
          name: 'TTFB',
          value: navigation.responseStart - navigation.requestStart,
          id: 'ttfb',
        });

        reportWebVitals({
          name: 'FCP',
          value: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          id: 'fcp',
        });
      }
    };

    // Run after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return null;
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default PerformanceMonitor;