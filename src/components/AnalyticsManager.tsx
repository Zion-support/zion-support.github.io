"use client";

import React, { useEffect, useState } from 'react';

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!trackingId || typeof window === 'undefined') return;

    // Load Google Analytics
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

    setIsLoaded(true);
  }, [trackingId]);

  // Performance tracking
  useEffect(() => {
    if (!enablePerformanceTracking || !isLoaded) return;

    const trackPerformance = () => {
      if (typeof (window as any).gtag !== 'undefined' && 'performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          const loadTime = perfData.loadEventEnd - perfData.fetchStart;
          (window as any).gtag('event', 'page_load_time', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(loadTime),
          });
        }
      }
    };

    window.addEventListener('load', trackPerformance);
    return () => window.removeEventListener('load', trackPerformance);
  }, [enablePerformanceTracking, isLoaded]);

  // Error tracking
  useEffect(() => {
    if (!enableErrorTracking || !isLoaded) return;

    const handleError = (event: ErrorEvent) => {
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'exception', {
          description: event.message,
          fatal: false,
        });
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'exception', {
          description: event.reason?.toString() || 'Unhandled promise rejection',
          fatal: false,
        });
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [enableErrorTracking, isLoaded]);

  return null;
};

// Export tracking functions
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('event', event.name, {
      event_category: event.category,
      event_action: event.action,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters,
    });
  }
};

export const trackPageView = (url: string, title: string) => {
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {
      page_title: title,
      page_location: url,
    });
  }
};

export const trackPerformance = (metrics: PerformanceMetrics) => {
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('event', 'performance_metrics', {
      event_category: 'Performance',
      fcp: metrics.fcp,
      lcp: metrics.lcp,
      fid: metrics.fid,
      cls: metrics.cls,
      ttfb: metrics.ttfb,
    });
  }
};

export default AnalyticsManager;