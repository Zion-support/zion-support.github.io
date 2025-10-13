import React, { useEffect, useCallback } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const CoreWebVitals: React.FC = () => {
  const reportWebVitals = useCallback((data: WebVitalsData) => {
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        metric_name: data.name,
        metric_value: Math.round(data.value),
        metric_delta: Math.round(data.delta),
        metric_id: data.id,
        metric_navigation_type: data.navigationType
      });
    }

    // Send to custom analytics
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('Web Vitals', {
        metric: data.name,
        value: data.value,
        delta: data.delta,
        id: data.id,
        navigationType: data.navigationType
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', data.name, data.value);
    }
  }, []);

  useEffect(() => {
    // Core Web Vitals monitoring
    const measureWebVitals = () => {
      // Measure Largest Contentful Paint (LCP)
      const measureLCP = () => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          reportWebVitals({
            name: 'LCP',
            value: lastEntry.startTime,
            delta: lastEntry.startTime,
            id: 'lcp',
            navigationType: 'navigate'
          });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      };

      // Measure First Input Delay (FID)
      const measureFID = () => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            reportWebVitals({
              name: 'FID',
              value: entry.processingStart - entry.startTime,
              delta: entry.processingStart - entry.startTime,
              id: 'fid',
              navigationType: 'navigate'
            });
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      };

      // Measure Cumulative Layout Shift (CLS)
      const measureCLS = () => {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          reportWebVitals({
            name: 'CLS',
            value: clsValue,
            delta: clsValue,
            id: 'cls',
            navigationType: 'navigate'
          });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      };

      // Measure First Contentful Paint (FCP)
      const measureFCP = () => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              reportWebVitals({
                name: 'FCP',
                value: entry.startTime,
                delta: entry.startTime,
                id: 'fcp',
                navigationType: 'navigate'
              });
            }
          });
        });
        observer.observe({ entryTypes: ['paint'] });
      };

      // Measure Time to First Byte (TTFB)
      const measureTTFB = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const ttfb = navigation.responseStart - navigation.requestStart;
          reportWebVitals({
            name: 'TTFB',
            value: ttfb,
            delta: ttfb,
            id: 'ttfb',
            navigationType: 'navigate'
          });
        }
      };

      // Start measurements
      measureLCP();
      measureFID();
      measureCLS();
      measureFCP();
      measureTTFB();
    };

    // Only run in browser environment
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      measureWebVitals();
    }
  }, [reportWebVitals]);

  return null; // This component doesn't render anything
};

export default CoreWebVitals;