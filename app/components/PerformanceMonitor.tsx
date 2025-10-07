'use client';

import React, { useEffect } from 'react';

// Performance metrics interface (currently unused but available for future use)
// interface PerformanceMetrics {
//   lcp?: number;
//   fid?: number;
//   cls?: number;
//   fcp?: number;
//   ttfb?: number;
// }

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const reportWebVitals = (metric: { name: string; value: number; id: string }) => {
      // Send to analytics service
      if (typeof window !== 'undefined' && (window as { gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag) {
        (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: metric.name,
          value: Math.round(metric.value),
          non_interaction: true,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Web Vital:', metric);
      }
    };

    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // LCP - Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          reportWebVitals({
            name: 'LCP',
            value: lastEntry.startTime,
            id: lastEntry.entryType,
          });
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // FID - First Input Delay
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEventTiming) => {
            reportWebVitals({
              name: 'FID',
              value: (entry.processingStart || entry.startTime) - entry.startTime,
              id: entry.entryType,
            });
          });
        }).observe({ entryTypes: ['first-input'] });

        // CLS - Cumulative Layout Shift
        let clsValue = 0;
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: LayoutShift) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          reportWebVitals({
            name: 'CLS',
            value: clsValue,
            id: 'cls',
          });
        }).observe({ entryTypes: ['layout-shift'] });

        // FCP - First Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            reportWebVitals({
              name: 'FCP',
              value: entry.startTime,
              id: entry.entryType,
            });
          });
        }).observe({ entryTypes: ['paint'] });

      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('Performance monitoring not supported:', error);
      }
    }

    // Monitor page load performance
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const ttfb = navigation.responseStart - navigation.requestStart;
          reportWebVitals({
            name: 'TTFB',
            value: ttfb,
            id: 'ttfb',
          });
        }
      });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;