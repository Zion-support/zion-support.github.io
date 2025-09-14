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
  customEvents = [],
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Track page view
    if (pageName && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }

    // Track custom events
    customEvents.forEach(({ event, category, action, label, value }) => {
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', event, {
          event_category: category,
          event_action: action,
          event_label: label,
          value: value,
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