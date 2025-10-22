import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export const usePerformanceMonitor = () => {
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return null;
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const metrics: PerformanceMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0
    };

    // Measure LCP
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.largestContentfulPaint = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // Measure FID
    if ('PerformanceObserver' in window) {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          metrics.firstInputDelay = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }

    // Measure CLS
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metrics.cumulativeLayoutShift = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    return metrics;
  }, []);

  const logPerformanceMetrics = useCallback(() => {
    const metrics = measurePerformance();
    if (metrics) {
      console.log('Performance Metrics:', {
        'Load Time': `${metrics.loadTime.toFixed(2)}ms`,
        'First Contentful Paint': `${metrics.firstContentfulPaint.toFixed(2)}ms`,
        'Largest Contentful Paint': `${metrics.largestContentfulPaint.toFixed(2)}ms`,
        'First Input Delay': `${metrics.firstInputDelay.toFixed(2)}ms`,
        'Cumulative Layout Shift': metrics.cumulativeLayoutShift.toFixed(4)
      });
    }
  }, [measurePerformance]);

  useEffect(() => {
    // Log metrics after page load
    const timer = setTimeout(logPerformanceMetrics, 2000);
    return () => clearTimeout(timer);
  }, [logPerformanceMetrics]);

  return {
    measurePerformance,
    logPerformanceMetrics
  };
};
