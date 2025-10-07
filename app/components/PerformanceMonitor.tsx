'use client';

import React, { useEffect } from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const reportWebVitals = (metric: { name: string; value: number }) => {
=======
// Performance metrics interface (currently unused but available for future use)
// interface PerformanceMetrics {
//   lcp?: number;
//   fid?: number;
//   cls?: number;
//   fcp?: number;
//   ttfb?: number;
// }
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-85f5

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const reportWebVitals = (metric: { name: string; value: number; id: string }) => {
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-3b5f
      // Send to analytics service
      if (typeof window !== 'undefined' && (window as { gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag) {
        (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'web_vitals', {
=======
      // Send to analytics service
      if (typeof window !== 'undefined' && (window as { gtag?: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag) {
        (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', 'web_vitals', {
>>>>>>> cursor/fix-errors-and-merge-to-main-85f5
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
<<<<<<< HEAD
<<<<<<< HEAD
          entries.forEach((entry: PerformanceEntry & { processingStart?: number }) => {
=======
          entries.forEach((entry: PerformanceEventTiming) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-3b5f
=======
          entries.forEach((entry: PerformanceEntry & { processingStart?: number }) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-85f5
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
<<<<<<< HEAD
<<<<<<< HEAD
          entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
            if (!entry.hadRecentInput && entry.value) {
=======
          entries.forEach((entry: LayoutShift) => {
=======
          entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-85f5
            if (!entry.hadRecentInput) {
>>>>>>> cursor/fix-errors-and-merge-to-main-3b5f
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