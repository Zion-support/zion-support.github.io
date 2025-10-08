export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  inp?: number; // Interaction to Next Paint
}

export const reportWebVitals = (metric: PerformanceMetrics) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

export const measurePerformance = (): PerformanceMetrics => {
  const metrics: PerformanceMetrics = {};

  if (typeof window !== 'undefined' && window.performance) {
    const perfData = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (perfData) {
      metrics.ttfb = perfData.responseStart - perfData.requestStart;
    }

    // Get paint metrics
    const paintEntries = window.performance.getEntriesByType('paint');
    paintEntries.forEach((entry) => {
      if (entry.name === 'first-contentful-paint') {
        metrics.fcp = entry.startTime;
      }
    });
  }

  return metrics;
};

// Performance monitoring utilities
export const logPerformance = (label: string, startTime: number) => {
  if (typeof window !== 'undefined' && window.performance) {
    const duration = performance.now() - startTime;
    console.log(`[Performance] ${label}: ${duration.toFixed(2)}ms`);
  }
};

export const startPerformanceTimer = (): number => {
  return typeof window !== 'undefined' && window.performance ? performance.now() : Date.now();
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}