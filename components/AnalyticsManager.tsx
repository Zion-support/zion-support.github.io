"use client";

import React, { useEffect, useState } from 'react';

// Declare gtag function for TypeScript
declare const gtag: (...args: any[]) => void;

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
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!trackingId || typeof window === 'undefined') return;

    // Initialize Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    setIsInitialized(true);
  }, [trackingId]);

  // Track custom events
  const trackEvent = (event: AnalyticsEvent) => {
    if (!isInitialized || typeof gtag === 'undefined') return;

    gtag('event', event.name, {
      event_category: event.category,
      event_action: event.action,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters,
    });
  };

  // Track page views
  const trackPageView = (url: string, title: string) => {
    if (!isInitialized || typeof gtag === 'undefined') return;

    gtag('config', trackingId, {
      page_title: title,
      page_location: url,
    });
  };

  // Track performance metrics
  useEffect(() => {
    if (!enablePerformanceTracking || typeof window === 'undefined') return;

    const trackPerformance = () => {
      if (typeof gtag === 'undefined' || !('performance' in window)) return;

      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {
        const metrics: PerformanceMetrics = {
          fcp: perfData.loadEventEnd - perfData.fetchStart,
          lcp: perfData.loadEventEnd - perfData.fetchStart,
          fid: 0, // First Input Delay - would need additional measurement
          cls: 0, // Cumulative Layout Shift - would need additional measurement
          ttfb: perfData.responseStart - perfData.fetchStart,
        };

        trackEvent({
          name: 'performance_metrics',
          category: 'Performance',
          custom_parameters: metrics,
        });
      }
    };

    window.addEventListener('load', trackPerformance);
    return () => window.removeEventListener('load', trackPerformance);
  }, [enablePerformanceTracking]);

  // Track errors
  useEffect(() => {
    if (!enableErrorTracking || typeof window === 'undefined') return;

    const handleError = (event: ErrorEvent) => {
      trackEvent({
        name: 'javascript_error',
        category: 'Error',
        action: 'Error',
        label: event.message,
        custom_parameters: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      trackEvent({
        name: 'unhandled_promise_rejection',
        category: 'Error',
        action: 'Promise Rejection',
        label: event.reason?.toString() || 'Unknown error',
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [enableErrorTracking]);

  return null;
};

// Export tracking functions
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof gtag === 'undefined') return;

  gtag('event', event.name, {
    event_category: event.category,
    event_action: event.action,
    event_label: event.label,
    value: event.value,
    ...event.custom_parameters,
  });
};

export const trackPageView = (url: string, title: string, trackingId?: string) => {
  if (typeof gtag === 'undefined') return;

  gtag('config', trackingId || process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {
    page_title: title,
    page_location: url,
  });
};

export default AnalyticsManager;