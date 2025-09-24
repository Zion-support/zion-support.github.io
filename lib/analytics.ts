// Analytics and performance monitoring utilities
export function trackEvent(eventName: string, properties?: Record<string, string | number | boolean>): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, properties);
  }
}

export function trackPageView(url: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: url });
  }
}

export function measurePerformance(): null | {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
} {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (!navigation) return null;
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstPaint: (performance.getEntriesByName('first-paint')[0] as PerformanceEntry | undefined)?.startTime || 0,
      firstContentfulPaint: (performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry | undefined)?.startTime || 0};
  }
  return null;
}

// Web Vitals tracking
interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}

export function trackWebVitals(metric: WebVitalMetric): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true});
  }
}

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}
// legacy duplicated junk removed
