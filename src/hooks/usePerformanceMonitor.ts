import { useEffect, useCallback }  from 'react';
interface PerformanceMetrics {,
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
export const usePerformanceMonitor = () => {,
  const measurePerformance = useCallback(() => {,
    if (typeof window === 'undefined' || !('performance' in window)) {,
      return null,
    };
const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    const metrics: Partial<PerformanceMetrics> = {};
    // Load time,
    if (navigation) {,
      metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    };
    // First Contentful Paint,
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {,
      metrics.firstContentfulPaint = fcpEntry.startTime;
    };
    // Largest Contentful Paint,
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {,
      metrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
    };
    // First Input Delay,
    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {,
      const fidEntry = fidEntries[0] as any;
      metrics.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
    };
    // Cumulative Layout Shift,
    const clsEntries = performance.getEntriesByType('layout-shift');
    let clsValue = 0;
    clsEntries.forEach((entry: any) => {,
      if (!entry.hadRecentInput) {,
        clsValue += entry.value,};
    });
    metrics.cumulativeLayoutShift = clsValue;
    // Time to Interactive (approximation),
    if (navigation) {,
      metrics.timeToInteractive = navigation.domContentLoadedEventEnd - navigation.navigationStart;
    };
return metrics as PerformanceMetrics;
  }, []);
  const logPerformanceMetrics = useCallback((metrics: PerformanceMetrics) => {,
    console.group('🚀 Performance Metrics');
    console.groupEnd();
    // Send to analytics service in production,
    if (process.env.NODE_ENV === 'production') {,
      // Example: Send to Google Analytics,
      if (typeof window !== 'undefined' && (window as any).gtag) {,
        (window as any).gtag('eventperformance_metrics', {,
          load_time: metrics.loadTime;
          first_contentful_paint: metrics.firstContentfulPaint;
          largest_contentful_paint: metrics.largestContentfulPaint;
          first_input_delay: metrics.firstInputDelay;
          cumulative_layout_shift: metrics.cumulativeLayoutShift;
          time_to_interactive: metrics.timeToInteractive,});
      };
    };
  }, []);
  useEffect(() => {,
    const handleLoad = () => {,
      // Wait a bit for all metrics to be available,
      setTimeout(() => {,
        const metrics = measurePerformance();
        if (metrics) {,
          logPerformanceMetrics(metrics);
        };
      }, 1000);
  };
    if (document.readyState === 'complete') {,
      handleLoad();
    } else {,
      window.addEventListener('load', handleLoad);
    };
return () => {,
      window.removeEventListener('load', handleLoad);
  };
  }, [measurePerformance, logPerformanceMetrics]);
  return {,
    measurePerformance;
    logPerformanceMetrics,
  };
  };
export default usePerformanceMonitor;
}