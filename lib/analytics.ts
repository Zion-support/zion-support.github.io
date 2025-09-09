<<<<<<< HEAD
// Analytics and performance monitoring utilities;
export const trackEvent = (;
  eventName: string,;
  properties?: Record<string, any>;
  properties?: Record<string, string | number | boolean>;
) => {
  if (typeof window !== "undefined" && window.gtag) {";
    window.gtag("event", eventName, properties)}
}
export const trackPageView = (url: string) => {";
  if (typeof window !== "undefined" && window.gtag) {";
    window.gtag("config", "GA_MEASUREMENT_ID", {
      page_path: url})}
}
export const measurePerformance = () => {";
  if (typeof window !== "undefined" && "performance" in window) {
    const navigation = performance.getEntriesByType(";
      "navigation";
    )[0] as PerformanceNavigationTiming;
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,;
      domContentLoaded: navigation.domContentLoadedEventEnd -;
        navigation.domContentLoadedEventStart,;
      firstPaint: ";
        performance.getEntriesByName("first-paint")[0]?.startTime || 0,;
      firstContentfulPaint: ";
        performance.getEntriesByName("first-contentful-paint")[0]?.startTime ||;
        0}
  }
}


// Declare global types
// Declare global types
        navigation.domContentLoadedEventStart,
      first_paint:;
        performance.getEntriesByName ('first - paint')[0]?.start_time || 0, ';
      firstContentfulPaint:;
        performance.getEntriesByName ('first - contentful - paint')[0]?.start_time ||';
        0;,
}}
  return null}
// Web Vitals tracking;
interface WebVitalMetric {
  name: string;
  valu,;
    e: number;
  i,;
    d: string}

export const trackWebVitals = (metric: WebVitalMetric) => {";
  if (typeof window !== "undefined" && window.gtag) {";
    window.gtag("event", metric.name, {
      value: Math.round(metric.value),;
      event_category: "Web Vitals",;
      event_label: metric.id,;
      non_interaction: true})}
}
declare global {
  interface Window {
    gtag: (void) => $3;
    gtag: (;
      command: string,;
      targetId: string,;
      config?: Record<string, unknown>;
    ) => void}
}
=======
// Google Analytics tracking utilities

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

// Measure performance
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded:
        navigation.domContentLoadedEventEnd -
        navigation.domContentLoadedEventStart,
      firstPaint:
        performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint:
        performance.getEntriesByName('first-contentful-paint')[0]?.startTime ||
        0,
    };
  }
  return null;
};

// Web Vitals tracking
interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}

export const trackWebVitals = (metric: WebVitalMetric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
>>>>>>> pr-12866
