import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  name: string;
  value: number;
  delta: number;
  id: string;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitals monitoring
    getCLS((metric: PerformanceMetrics) => {
      console.log('CLS:', metric);
      // Send to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000)
        });
      }
    });

    getFID((metric: PerformanceMetrics) => {
      console.log('FID:', metric);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FID',
          value: Math.round(metric.value)
        });
      }
    });

    getFCP((metric: PerformanceMetrics) => {
      console.log('FCP:', metric);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FCP',
          value: Math.round(metric.value)
        });
      }
    });

    getLCP((metric: PerformanceMetrics) => {
      console.log('LCP:', metric);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'LCP',
          value: Math.round(metric.value)
        });
      }
    });

    getTTFB((metric: PerformanceMetrics) => {
      console.log('TTFB:', metric);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'TTFB',
          value: Math.round(metric.value)
        });
      }
    });

    // Additional performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            domInteractive: navEntry.domInteractive - navEntry.navigationStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}