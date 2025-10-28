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
export const clearPerformanceMarks = (type?: string) => {
  if (typeof performance !== 'undefined') {
    if (type) {
      performance.clearMarks(type);
    } else {
      performance.clearMeasures();
      performance.clearMarks();
    }
  }
};

// Google Analytics integration for performance tracking
export const trackPerformanceMetrics = (metrics: PerformanceMetrics) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'performance_metrics', {
      load_time: metrics.loadTime,
      fcp: metrics.firstContentfulPaint,
      lcp: metrics.largestContentfulPaint,
      fid: metrics.firstInputDelay,
      cls: metrics.cumulativeLayoutShift,
      tti: metrics.timeToInteractive,
      tbt: metrics.totalBlockingTime,
    });
  }
};

// Performance observer for Core Web Vitals
export const observeWebVitals = (callback: (metrics: PerformanceMetrics) => void) => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.entryType === 'paint') {
        if (entry.name === 'first-contentful-paint') {
          callback({
            loadTime: null,
            firstContentfulPaint: entry.startTime,
            largestContentfulPaint: null,
            firstInputDelay: null,
            cumulativeLayoutShift: null,
            timeToInteractive: null,
            totalBlockingTime: null,
          });
        }
      }
    });
  });

  observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
  
  return () => observer.disconnect();
};

// Memory usage monitoring
export const getMemoryUsage = (): number | null => {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    return (performance as any).memory.usedJSHeapSize;
  }
  return null;
};

// Performance budget checker
export const checkPerformanceBudget = (metrics: PerformanceMetrics): boolean => {
  const budget = {
    fcp: 1800, // 1.8s
    lcp: 2500, // 2.5s
    fid: 100,  // 100ms
    cls: 0.1,  // 0.1
    tti: 3800, // 3.8s
    tbt: 200,  // 200ms
  };

  return (
    (metrics.firstContentfulPaint === null || metrics.firstContentfulPaint <= budget.fcp) &&
    (metrics.largestContentfulPaint === null || metrics.largestContentfulPaint <= budget.lcp) &&
    (metrics.firstInputDelay === null || metrics.firstInputDelay <= budget.fid) &&
    (metrics.cumulativeLayoutShift === null || metrics.cumulativeLayoutShift <= budget.cls) &&
    (metrics.timeToInteractive === null || metrics.timeToInteractive <= budget.tti) &&
    (metrics.totalBlockingTime === null || metrics.totalBlockingTime <= budget.tbt)
  );
};