'use client';
import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    const reportMetric = (name: string, value: number) => {
      // Send to analytics
      if ('gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: name,
          value: Math.round(name === 'CLS' ? value * 1000 : value),
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Performance Metric - ${name}:`, value);
      }
    };

    // LCP - Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      reportMetric('LCP', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        reportMetric('FID', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      reportMetric('CLS', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP - First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          reportMetric('FCP', entry.startTime);
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // TTFB - Time to First Byte
    const ttfbObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          reportMetric('TTFB', entry.responseStart - entry.requestStart);
        }
      });
    });
    ttfbObserver.observe({ entryTypes: ['navigation'] });

    // Cleanup
    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
      ttfbObserver.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;