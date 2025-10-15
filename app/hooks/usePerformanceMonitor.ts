import { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export const usePerformanceMonitor = () => {
  const metricsRef = useRef<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0
  });

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metricsRef.current.firstContentfulPaint = fcpEntry.startTime;
      }
    });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        metricsRef.current.largestContentfulPaint = lcpEntry.startTime;
      }
    });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        metricsRef.current.firstInputDelay = entry.processingStart - entry.startTime;
      });
    });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          metricsRef.current.cumulativeLayoutShift = clsValue;
        }
      });
    });

    // Time to Interactive (TTI)
    const ttiObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.entryType === 'navigation') {
          metricsRef.current.timeToInteractive = entry.loadEventEnd - entry.fetchStart;
        }
      });
    });

    // Start observing
    fcpObserver.observe({ entryTypes: ['paint'] });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    fidObserver.observe({ entryTypes: ['first-input'] });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    ttiObserver.observe({ entryTypes: ['navigation'] });

    // Cleanup observers after 10 seconds
    setTimeout(() => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      ttiObserver.disconnect();
    }, 10000);
  }, []);

  const logMetrics = useCallback(() => {
    console.log('Performance Metrics:', {
      load_time: metricsRef.current.loadTime,
      first_contentful_paint: metricsRef.current.firstContentfulPaint,
      largest_contentful_paint: metricsRef.current.largestContentfulPaint,
      first_input_delay: metricsRef.current.firstInputDelay,
      cumulative_layout_shift: metricsRef.current.cumulativeLayoutShift,
      time_to_interactive: metricsRef.current.timeToInteractive
    });
  }, []);

  useEffect(() => {
    measurePerformance();

    // Log metrics after 5 seconds
    setTimeout(logMetrics, 5000);

    // Cleanup
    return () => {
      // Cleanup is handled by the setTimeout in measurePerformance
    };
  }, [measurePerformance, logMetrics]);

  return {
    metrics: metricsRef.current
  };
};

export default usePerformanceMonitor;