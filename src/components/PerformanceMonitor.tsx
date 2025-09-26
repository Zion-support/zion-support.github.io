import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser and production
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return;
    }

    const sendToAnalytics = (metric: PerformanceMetrics) => {
      // Send to your analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: Math.round(metric.lcp || metric.fid || metric.cls || 0),
          non_interaction: true,
        });
      }
    };

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              sendToAnalytics({ lcp: entry.startTime });
            }
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // First Input Delay
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              sendToAnalytics({ fid: (entry as any).processingStart - entry.startTime });
            }
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      }

      // Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          sendToAnalytics({ cls: clsValue });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Measure First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            sendToAnalytics({ fcp: entry.startTime });
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }

    // Measure Time to First Byte
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            sendToAnalytics({ ttfb: (entry as any).responseStart - (entry as any).requestStart });
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }

    measureWebVitals();
  }, []);

  return null;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}