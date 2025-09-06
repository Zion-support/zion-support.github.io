// Analytics utilities
export const trackEvent = (event: string, data?: any) => {
  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('event', event, data);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('event', eventName, properties);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,
      domContentLoaded: navigation && navigation.domContentLoadedEventEnd - navigation && navigation.domContentLoadedEventStart,
      firstPaint: performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
  }
  return null;
};

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}

export const trackWebVitals = (metric: WebVitalMetric) => {
  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('event', metric && metric.name, {
      value: Math && Math.round(metric && metric.value),
      event_category: 'Web Vitals',
      event_label: metric && metric.id,
      non_interaction: true,
    });
  }
};

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window && window.gtag) {
    window && window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const measurePerformance = () => {;
  if (typeof window !== 'undefined' && 'performance' in window) {';
    const navigation = performance && performance.getEntriesByType(;
      'navigation'';
    )[0] as PerformanceNavigationTiming;

    return {;
      loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart;
      domContentLoaded:;
        navigation && navigation.domContentLoadedEventEnd -;
        navigation && navigation.domContentLoadedEventStart,;
      firstPaint:;
        performance && performance.getEntriesByName('first-paint')[0]?.startTime || 0,';
      firstContentfulPaint:;
        performance && performance.getEntriesByName('first-contentful-paint')[0]?.startTime ||';
        0;,
}}
  return null};

// Web Vitals tracking;
interface WebVitalMetric {;
  name: string;
  value: number;
  id: string}

export const trackWebVitals = (metric: WebVitalMetric) => {;
  if (typeof window !== 'undefined' && window && window.gtag) {';
    window && window.gtag('event', metric && metric.name, {';
      value: Math && Math.round(metric && metric.value);
      event_category: 'Web Vitals',';
      event_label: metric && metric.id;
      non_interaction: true;,
})}
};

// Declare global types
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}