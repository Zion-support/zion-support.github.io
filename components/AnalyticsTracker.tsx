import Head from "next/head";
import React, { useEffect } from "react";

interface AnalyticsTrackerProps {
  pageName?: string;
  customEvents?: Array<{
    event: string;
    category: string;
    action: string;
    label?: string;
    value?: number;
  }>;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ 
  pageName,
  customEvents = []
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Track page view
    if (pageName && typeof window.gtag !== 'undefined') {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }

    // Track custom events
    customEvents.forEach(event => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', event.event, {
          event_category: event.category,
          event_action: event.action,
          event_label: event.label,
          value: event.value,
        });
      }
    });
  }, [pageName, customEvents]);

  return (
    <Head>
      <title>{pageName || 'Zion Tech Group'}</title>
    </Head>
  );
};

export default AnalyticsTracker;