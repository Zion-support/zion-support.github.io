"use client";

interface AnalyticsEvent {
  name: string;
  category: string;
  action?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface AnalyticsManagerProps {
  trackingId?: string;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
}

const AnalyticsManager: React.FC<AnalyticsManagerProps> = ({
  trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  enablePerformanceTracking = true,
  enableErrorTracking = true,
}) => {
  // Track custom events
  const trackEvent = (event: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.name, {
        event_category: event.category,
        event_action: event.action,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters,
      });
    }
  };

  // Track page views
  const trackPageView = (url: string, title: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: title,
        page_location: url,
      });
    }
  };

  // Track performance metrics
  const trackPerformance = (metrics: PerformanceMetrics) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        fcp: metrics.fcp,
        lcp: metrics.lcp,
        fid: metrics.fid,
        cls: metrics.cls,
        ttfb: metrics.ttfb,
      });
    }
  };

  // Track errors
  const trackError = (error: Error, context?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        context: context || 'unknown',
      });
    }
  };

  return null;
};

// Export functions for external use
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.name, {
      event_category: event.category,
      event_action: event.action,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters,
    });
  }
};

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
      page_title: title,
      page_location: url,
    });
  }
};

export const trackPerformance = (metrics: PerformanceMetrics) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'performance_metrics', {
      event_category: 'Performance',
      fcp: metrics.fcp,
      lcp: metrics.lcp,
      fid: metrics.fid,
      cls: metrics.cls,
      ttfb: metrics.ttfb,
    });
  }
};

export const trackError = (error: Error, context?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      context: context || 'unknown',
    });
  }
};

export default AnalyticsManager;