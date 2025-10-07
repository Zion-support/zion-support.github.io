'use client';

import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const reportWebVitals = (metric: { name: string; value: number }) => {
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
          });
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // FID - First Input Delay
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { processingStart?: number }) => {
            reportWebVitals({
              name: 'FID',
              value: (entry.processingStart || entry.startTime) - entry.startTime,
            });
          });
        }).observe({ entryTypes: ['first-input'] });

        // CLS - Cumulative Layout Shift
        let clsValue = 0;
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
            if (!entry.hadRecentInput && entry.value) {
              clsValue += entry.value;
            }
          });
          reportWebVitals({
            name: 'CLS',
            value: clsValue,
          });
        }).observe({ entryTypes: ['layout-shift'] });

        // FCP - First Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            reportWebVitals({
              name: 'FCP',
              value: entry.startTime,
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
          });
        }
      });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;