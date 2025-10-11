'use client';
import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const metrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null
    };

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                metrics.fcp = entry.startTime;
                reportMetric('FCP', entry.startTime);
              }
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('FCP observer not supported');
        }

        // Largest Contentful Paint
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              metrics.lcp = lastEntry.startTime;
              reportMetric('LCP', lastEntry.startTime);
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observer not supported');
        }

        // First Input Delay
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              const fidEntry = entry as PerformanceEventTiming;
              metrics.fid = fidEntry.processingStart - fidEntry.startTime;
              reportMetric('FID', metrics.fid);
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observer not supported');
        }

        // Cumulative Layout Shift
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
                metrics.cls = clsValue;
                reportMetric('CLS', clsValue);
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observer not supported');
        }
      }
    };

    const reportMetric = (name: string, value: number) => {
      // Report to Google Analytics if available
      if ('gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'web_vitals', {
          metric_name: name,
          metric_value: Math.round(value),
          metric_rating: getMetricRating(name, value)
        });
      }

      // Report to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Performance Metric - ${name}:`, value);
      }
    };

    const getMetricRating = (name: string, value: number): string => {
      const thresholds: Record<string, { good: number; needsImprovement: number }> = {
        'LCP': { good: 2500, needsImprovement: 4000 },
        'FID': { good: 100, needsImprovement: 300 },
        'CLS': { good: 0.1, needsImprovement: 0.25 },
        'FCP': { good: 1800, needsImprovement: 3000 }
      };

      const threshold = thresholds[name];
      if (!threshold) return 'unknown';

      if (value <= threshold.good) return 'good';
      if (value <= threshold.needsImprovement) return 'needs-improvement';
      return 'poor';
    };

    // Track page load time
    const trackPageLoad = () => {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        reportMetric('Page Load Time', loadTime);
      });
    };

    trackWebVitals();
    trackPageLoad();

    // Cleanup function
    return () => {
      // Cleanup observers if needed
    };
  }, []);
};