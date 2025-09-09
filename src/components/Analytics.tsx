import React, { useEffect } from 'react';
import { performanceMonitor } from '../utils/performance';
import { useErrorHandler } from '../utils/errorHandler';

interface AnalyticsProps {
  trackingId?: string;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
  enablePageViewTracking?: boolean;
}

export const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = 'G-XXXXXXXXXX', // Replace with actual tracking ID
  enablePerformanceTracking = true,
  enableErrorTracking = true,
  enablePageViewTracking = true,
}) => {
  const { handleError } = useErrorHandler();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Google Analytics
    if (enablePageViewTracking && trackingId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Track page views
    if (enablePageViewTracking) {
      const trackPageView = () => {
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
          });
        }
      };

      // Track initial page view
      trackPageView();

      // Track route changes (for SPA)
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        setTimeout(trackPageView, 0);
      };

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        setTimeout(trackPageView, 0);
      };

      window.addEventListener('popstate', trackPageView);
    }
  }, [trackingId, enablePageViewTracking]);

  // Track performance metrics
  useEffect(() => {
    if (enablePerformanceTracking && window.gtag) {
      const summary = performanceMonitor.getSummary();
      window.gtag('event', 'performance_metrics', {
        load_time: Math.round(summary.firstContentfulPaint || 0),
        first_contentful_paint: summary.firstContentfulPaint ? Math.round(summary.firstContentfulPaint) : undefined,
        largest_contentful_paint: summary.largestContentfulPaint ? Math.round(summary.largestContentfulPaint) : undefined,
        first_input_delay: summary.firstInputDelay ? Math.round(summary.firstInputDelay) : undefined,
        cumulative_layout_shift: summary.cumulativeLayoutShift ? Math.round(summary.cumulativeLayoutShift * 1000) / 1000 : undefined,
        total_metrics: summary.totalMetrics,
        resource_load_times: summary.resourceLoadTimes,
      });
    }
  }, [enablePerformanceTracking]);

  // Track errors
  useEffect(() => {
    if (enableErrorTracking) {
      const handleGlobalError = (event: ErrorEvent) => {
        handleError(event.error || new Error(event.message));
        if (window.gtag) {
          window.gtag('event', 'error_occurred', {
            error_message: event.message,
            error_filename: event.filename,
            error_lineno: event.lineno,
            error_colno: event.colno,
          });
        }
      };

      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        handleError(new Error(event.reason));
        if (window.gtag) {
          window.gtag('event', 'error_occurred', {
            error_message: event.reason,
            error_type: 'unhandled_promise_rejection',
          });
        }
      };

      window.addEventListener('error', handleGlobalError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);

      return () => {
        window.removeEventListener('error', handleGlobalError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      };
    }
  }, [enableErrorTracking, handleError]);

  return null; // This component doesn't render anything
};

// Declare global gtag function
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default Analytics;