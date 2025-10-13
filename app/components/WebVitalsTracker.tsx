import React, { useEffect } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: WebVitalsData) => {
      // Send to Google Analytics or other analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: metric.name,
          metric_value: Math.round(metric.value),
          metric_delta: Math.round(metric.delta),
          metric_id: metric.id,
          metric_navigation_type: metric.navigationType
        });
      }

      // Send to custom analytics
      if (typeof window !== 'undefined' && (window as any).analytics) {
        (window as any).analytics.track('Web Vitals', {
          metric: metric.name,
          value: metric.value,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric.name, metric.value);
      }
    };

    // Measure Web Vitals
    const measureWebVitals = () => {
      // Measure Largest Contentful Paint (LCP)
      const measureLCP = () => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          sendToAnalytics({
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
            sendToAnalytics({
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
          sendToAnalytics({
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
              sendToAnalytics({
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
          sendToAnalytics({
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
  }, []);

  return null; // This component doesn't render anything
};

export default WebVitalsTracker;