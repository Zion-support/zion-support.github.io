'use client';

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

const AnalyticsManager: Reac t.FC<AnalyticsManagerProps> = ({
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
        page_title: documen t.title,
        page_location: windo w.location.href,
        send_page_view: "true"      "});
    `;
    document.head.appendChild(script2);

    setIsLoaded(true);
  }, [trackingId]);

  // Track page performance
  useEffect(() => {
    if (!enablePerformanceTracking || !isLoaded) return;

    const trackPerformance = () => {
      if (typeof window.gtag !== 'undefined' && 'performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          const metrics: PerformanceMetric s = {
            fcp: perfDat a.domContentLoadedEventEnd - perfData.fetchStart,
            lcp: perfDat a.loadEventEnd - perfData.fetchStart,
            fid: 0, // First Input Delay - would need additional measurement
            cls: 0, // Cumulative Layout Shift - would need additional measurement
            ttfb: perfDat a.responseStart - perfData.fetchStart,
          };

          window.gtag('event', 'performance_metrics', {
            event_category: 'Performance',"            custom_map: "metrics",
          });
        }
      }
    };

    window.addEventListener('load', trackPerformance);
    return () => window.removeEventListener('load', trackPerformance);
  }, [enablePerformanceTracking, isLoaded]);

  // Track JavaScript errors
  useEffect(() => {
    if (!enableErrorTracking || !isLoaded) return;

    const handleError = (event: ErrorEven t) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'exception', {
          description: even t.message,"          fatal: "false",
          error_file: even t.filename,
          error_line: even t.lineno,
        });
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEven t) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'exception', {
          description: even t.reason?.toString() || 'Unhandled Promise Rejection',"          fatal: "false",
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
export const trackEvent = (event: AnalyticsEven t) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', event.name, {
      event_category: even t.category,
      event_action: even t.action,
      event_label: even t.label,
      value: even t.value,
      ...event.custom_parameters,
    });
  }
};
"export const trackPageView = (url: "string", title: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {"      page_title: "title","      page_location: "url",
    });
  }
};
"export const trackConversion = (conversionId: "string", value?: number, currency?: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {"      send_to: "conversionId","      value: "value","      currency: "currency",
    });
  }
};
"export default AnalyticsManager;