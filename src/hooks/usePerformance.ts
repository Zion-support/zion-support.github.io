import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;

export const usePerformance = () => {
  const measurePerformance = useCallback() => {
    if (typeof window = = 'undefined' || !('performance' in window) {
      return null;
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');

    const metrics: PerformanceMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint: paintEntries.find(entry => entry.name = = 'first-contentful-paint')?.startTime || 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0
    };

    // Measure LCP
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver(list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.largestContentfulPaint = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure FID
      const fidObserver = new PerformanceObserver(list) => {
        const entries = list.getEntries();
        entries.forEach(entry: any) => {
          metrics.firstInputDelay = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Measure CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver(list) => {
        for (const entry of list.getEntries() {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        metrics.cumulativeLayoutShift = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    return metrics;
  }, []);

  const logPerformance = useCallback() => {
    const metrics = measurePerformance();
    if (metrics) {
      console.log('Performance Metrics:', metrics);

      // Send to analytics or monitoring service
      if (process.env.NODE_ENV = = 'production') {
        // Example: Send to analytics
        // analytics.track('performance_metrics', metrics);
      }
  }, [measurePerformance]);

  useEffect() => {
    // Log performance after page load
    const timer = setTimeout(logPerformance, 2000);
    return () => clearTimeout(timer);
  }, [logPerformance]);

  return {
    measurePerformance,
    logPerformance
  };