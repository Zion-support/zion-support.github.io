<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}
=======
import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Monitor Core Web Vitals
<<<<<<< HEAD
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
=======
    getCLS((metric) => {
      console.log('CLS:', metric);
      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000),
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        return observer;
      }
<<<<<<< HEAD
      return null;
    };

    const measureFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
        return observer;
      }
      return null;
    };

    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        return observer;
      }
      return null;
    };

    const measureFCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          });
        });
        observer.observe({ entryTypes: ['paint'] });
        return observer;
      }
      return null;
    };

    const measureTTFB = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.entryType === 'navigation') {
              setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
            }
          });
        });
        observer.observe({ entryTypes: ['navigation'] });
        return observer;
      }
      return null;
    };

    // Start monitoring
    const observers = [
      measureLCP(),
      measureFID(),
      measureCLS(),
      measureFCP(),
      measureTTFB()
    ].filter(Boolean);

    // Log metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance metrics:', metrics);
    }
=======
    });

    getFID((metric) => {
      console.log('FID:', metric);
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FID',
          value: Math.round(metric.value),
        });
      }
    });

    getFCP((metric) => {
      console.log('FCP:', metric);
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FCP',
          value: Math.round(metric.value),
        });
      }
    });

    getLCP((metric) => {
      console.log('LCP:', metric);
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'LCP',
          value: Math.round(metric.value),
        });
      }
    });

    getTTFB((metric) => {
      console.log('TTFB:', metric);
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'TTFB',
          value: Math.round(metric.value),
        });
      }
    });
  }, []);
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4

    // Cleanup
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [metrics]);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;