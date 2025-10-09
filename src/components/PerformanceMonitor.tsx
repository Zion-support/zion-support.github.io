import React, { useEffect } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measurePerformance = () => {
      const metrics: Partial<PerformanceMetrics> = {};

      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            metrics.fid = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          metrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      }

      // Time to First Byte (TTFB)
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        metrics.ttfb = navigation.responseStart - navigation.requestStart;
      }

      // Report metrics after page load
      window.addEventListener('load', () => {
        setTimeout(() => {
          console.log('Performance Metrics:', metrics);
          
          // Send to analytics if available
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'performance_metrics', {
              event_category: 'performance',
              lcp: metrics.lcp,
              fid: metrics.fid,
              cls: metrics.cls,
              fcp: metrics.fcp,
              ttfb: metrics.ttfb
            });
          }
        }, 1000);
      });
    };

    measurePerformance();
  }, []);

  return null;
};

export default PerformanceMonitor;