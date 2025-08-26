import React, { useEffect } from 'react';

export const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime);
          // Send to analytics service
          // analytics.track('lcp', { value: lastEntry.startTime });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
          // Send to analytics service
          // analytics.track('fid', { value: entry.processingStart - entry.startTime });
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
            console.log('CLS:', clsValue);
            // Send to analytics service
            // analytics.track('cls', { value: clsValue });
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Monitor page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            ttfb: navigation.responseStart - navigation.requestStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
            loadComplete: navigation.loadEventEnd - navigation.navigationStart,
          };

          console.log('Performance Metrics:', metrics);
          
          // Send to analytics service
          // analytics.track('page_performance', metrics);
        }
      }, 0);
    });

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory Usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576 * 100) / 100 + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1048576 * 100) / 100 + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1048576 * 100) / 100 + ' MB',
      });
    }

    return () => {
      // Cleanup observers
      if ('PerformanceObserver' in window) {
        // PerformanceObserver cleanup is automatic
      }
    };
  }, []);

  return null; // This component doesn't render anything
};
