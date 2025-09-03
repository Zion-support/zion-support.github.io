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
  trackingId,
  enablePerformanceTracking = true,
  enableErrorTracking = true
}) => {
  const trackEvent = (event: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.name, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }
  };

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_path: pagePath,
        page_title: pageTitle
      });
    }
  };

  const trackPerformance = (metrics: PerformanceMetrics) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        fcp: metrics.fcp,
        lcp: metrics.lcp,
        fid: metrics.fid,
        cls: metrics.cls,
        ttfb: metrics.ttfb
      });
    }
  };

  const trackError = (error: Error, context?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        context: context || 'unknown'
      });
    }
  };

  return null;
};

export default AnalyticsManager;