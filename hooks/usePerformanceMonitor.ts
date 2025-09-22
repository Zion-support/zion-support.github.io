'use client';

import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export const usePerformanceMonitor = () => {
  const metricsRef = useRef<PerformanceMetrics>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metricsRef.current.fcp = entry.startTime;
            }
            break;
          case 'largest-contentful-paint':
            metricsRef.current.lcp = entry.startTime;
            break;
          case 'first-input':
            metricsRef.current.fid = (entry as any).processingStart - entry.startTime;
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              metricsRef.current.cls = (metricsRef.current.cls || 0) + (entry as any).value;
            }
            break;
        }
      }
    });

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['paint'] });
    }

    // TTFB measurement
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    }

    // Send metrics to analytics
    const sendMetrics = () => {
      const metrics = metricsRef.current;
      
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        if (metrics.fcp) {
          window.gtag('event', 'web_vitals', {
            name: 'FCP',
            value: Math.round(metrics.fcp),
            event_category: 'Web Vitals',
          });
        }
        if (metrics.lcp) {
          window.gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(metrics.lcp),
            event_category: 'Web Vitals',
          });
        }
        if (metrics.fid) {
          window.gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(metrics.fid),
            event_category: 'Web Vitals',
          });
        }
        if (metrics.cls) {
          window.gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(metrics.cls * 1000) / 1000,
            event_category: 'Web Vitals',
          });
        }
        if (metrics.ttfb) {
          window.gtag('event', 'web_vitals', {
            name: 'TTFB',
            value: Math.round(metrics.ttfb),
            event_category: 'Web Vitals',
          });
        }
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', metrics);
      }
    };

    // Send metrics after a delay to ensure all metrics are collected
    const timeoutId = setTimeout(sendMetrics, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return metricsRef.current;
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}