'use client';

import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number;
  INP: number;
  FCP: number;
  LCP: number;
  TTFB: number;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    const trackMetric = (metric: any) => {
      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, metric.value);
      }
    };

    // Measure Core Web Vitals
    onCLS(trackMetric);
    onINP(trackMetric);
    onFCP(trackMetric);
    onLCP(trackMetric);
    onTTFB(trackMetric);

    // Track page load performance
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            totalPageLoad: navigation.loadEventEnd - navigation.fetchStart,
          };

          // Send to analytics
          if ('gtag' in window) {
            const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
            gtag('event', 'page_load_performance', {
              event_category: 'Performance',
              dom_content_loaded: Math.round(metrics.domContentLoaded),
              load_complete: Math.round(metrics.loadComplete),
              total_page_load: Math.round(metrics.totalPageLoad),
            });
          }
        }
      });
    }
  }, []);
};