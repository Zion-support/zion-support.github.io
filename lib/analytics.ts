// Analytics and performance monitoring utilities

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>
): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, properties as Record<string, unknown>);
  }
}

export function trackPageView(url: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: url });
  }
}

export function measurePerformance():
  | {
      loadTime: number;
      domContentLoaded: number;
      firstPaint: number;
      firstContentfulPaint: number;
    }
  | null {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as
    | PerformanceNavigationTiming
    | undefined;
  if (!navigation) return null;

  const firstPaintEntry = performance.getEntriesByName('first-paint')[0] as
    | PerformanceEntry
    | undefined;
  const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as
    | PerformanceEntry
    | undefined;

  return {
    loadTime: navigation.loadEventEnd - navigation.loadEventStart,
    domContentLoaded:
      navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    firstPaint: firstPaintEntry?.startTime ?? 0,
    firstContentfulPaint: fcpEntry?.startTime ?? 0,
  };
}

export interface WebVitalMetric {
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
      non_interaction: true,
    } as Record<string, unknown>);
  }
}
