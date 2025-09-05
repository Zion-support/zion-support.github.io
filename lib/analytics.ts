// Analytics utilities for tracking user interactions and performance

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer: any[];
  }
}

export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
  }
  return null;
};

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

export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || window.location.pathname,
  });
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    page_location: window.location.href,
  });
};

export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
    page_location: window.location.href,
  });
};

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: Math.round(depth),
    page_location: window.location.href,
  });
};

export const trackTimeOnPage = (timeInSeconds: number) => {
  trackEvent('time_on_page', {
    time_in_seconds: timeInSeconds,
    page_location: window.location.href,
  });
};