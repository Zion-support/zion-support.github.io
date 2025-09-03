import React, { useCallback, useEffect, useState } from 'react';

export type AnalyticsEvent = {
  name: string;
  category: string;
  action?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
};

const AnalyticsManager: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  const trackEvent = useCallback((event: AnalyticsEvent) => {
    const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
    if (!isInitialized || typeof gtag === 'undefined') return;
    gtag('event', event.name, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters,
    });
  }, [isInitialized]);

  const trackPageView = useCallback(() => {
    const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
    if (typeof gtag === 'undefined') return;
    gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {
      page_title: document.title,
      page_location: window.location.href,
    });
  }, []);

  useEffect(() => {
    trackPageView();
    setIsInitialized(true);
    const handle = window.setInterval(() => {}, 1000);
    (window as any).analyticsSessionInterval = handle as unknown as number;
    return () => { window.clearInterval(handle); };
  }, [trackPageView]);

  return null;
};

export default AnalyticsManager;