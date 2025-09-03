"use client";

import React, { useEffect, useState } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
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
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  };

  // Track page views
  const trackPageView = (url: string, title: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', trackingId, {
        page_title: title,
        page_location: url,
      });
    }
  };

  // Track performance metrics
  const trackPerformance = (metric: string, value: number) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'performance_metric', {
        event_category: 'Performance',
        event_label: metric,
        value: Math.round(value),
      });
    }
  };

  // Provide analytics context to children
  const analyticsContext = {
    trackEvent,
    trackPageView,
    trackPerformance,
    isLoaded,
  };

  return (
    <div data-analytics-loaded={isLoaded}>
      {children}
    </div>
  );
};

export default AnalyticsManager;