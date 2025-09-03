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
  children: React.ReactNode;
}

const AnalyticsManager: React.FC<AnalyticsManagerProps> = ({ 
  trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  children 
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

  // Track custom events
  const trackEvent = (event: AnalyticsEvent) => {
    if (typeof window.gtag !== 'undefined' && isLoaded) {
      window.gtag('event', event.name, {
        event_category: event.category,
        event_action: event.action,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }
  };

  // Track page views
  const trackPageView = (url: string, title: string) => {
    if (typeof window.gtag !== 'undefined' && isLoaded) {
      window.gtag('config', trackingId, {
        page_title: title,
        page_location: url,
      });
    }
  };

  // Track performance metrics
  const trackPerformance = (metrics: PerformanceMetrics) => {
    if (typeof window.gtag !== 'undefined' && isLoaded) {
      window.gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        first_contentful_paint: metrics.fcp,
        largest_contentful_paint: metrics.lcp,
        first_input_delay: metrics.fid,
        cumulative_layout_shift: metrics.cls,
        time_to_first_byte: metrics.ttfb
      });
    }
  };

  return (
    <AnalyticsContext.Provider value={{
      trackEvent,
      trackPageView,
      trackPerformance,
      isLoaded
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Create context
const AnalyticsContext = React.createContext<{
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (url: string, title: string) => void;
  trackPerformance: (metrics: PerformanceMetrics) => void;
  isLoaded: boolean;
}>({
  trackEvent: () => {},
  trackPageView: () => {},
  trackPerformance: () => {},
  isLoaded: false
});

// Hook to use analytics
export const useAnalytics = () => {
  const context = React.useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsManager');
  }
  return context;
};

export default AnalyticsManager;