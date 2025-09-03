"use client";

import React, { useEffect } from "react";

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
}

interface AnalyticsManagerProps {
  trackingId?: string;
  children: React.ReactNode;
}

const AnalyticsManager: React.FC<AnalyticsManagerProps> = ({ 
  trackingId, 
  children 
}) => {
  useEffect(() => {
    if (!trackingId) return;

    // Initialize Google Analytics
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;
    document.head.appendChild(script2);
  }, [trackingId]);

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

  const trackPageView = (pagePath: string) => {
    if (typeof window !== 'undefined' && window.gtag && trackingId) {
      window.gtag('config', trackingId, {
        page_path: pagePath
      });
    }
  };

  const trackPerformance = (metrics: PerformanceMetrics) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        first_contentful_paint: metrics.fcp,
        largest_contentful_paint: metrics.lcp,
        first_input_delay: metrics.fid,
        cumulative_layout_shift: metrics.cls
      });
    }
  };

  return (
    <AnalyticsContext.Provider value={{
      trackEvent,
      trackPageView,
      trackPerformance
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

const AnalyticsContext = React.createContext<{
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (pagePath: string) => void;
  trackPerformance: (metrics: PerformanceMetrics) => void;
}>({
  trackEvent: () => {},
  trackPageView: () => {},
  trackPerformance: () => {}
});

export const useAnalytics = () => React.useContext(AnalyticsContext);

export default AnalyticsManager;