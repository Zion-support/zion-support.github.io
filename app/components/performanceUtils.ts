interface PerformanceMetrics {
  loadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  firstInputDelay: number | null;
  cumulativeLayoutShift: number | null;
  timeToInteractive: number | null;
  totalBlockingTime: number | null;
}

// Global performance monitoring utilities
export const performanceUtils = {
  clearPerformanceData: (type?: string) => {
    if (type) {
      performance.clearMarks(type);
    } else {
      performance.clearMeasures();
      performance.clearMarks();
    }
  }
};

// Google Analytics integration for performance tracking
export const trackPerformance = (metrics: PerformanceMetrics) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'performance_metrics', {
      load_time: metrics.loadTime,
      fcp: metrics.firstContentfulPaint,
      lcp: metrics.largestContentfulPaint,
      fid: metrics.firstInputDelay,
      cls: metrics.cumulativeLayoutShift,
      tti: metrics.timeToInteractive,
      tbt: metrics.totalBlockingTime
    });
  }
};