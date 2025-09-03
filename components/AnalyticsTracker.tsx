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
  customEvents 
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Track page view
      if (pageName) {
        window.gtag('event', 'page_view', {
          page_title: pageName,
          page_location: window.location.href
        });
      }

      // Track custom events
      if (customEvents) {
        customEvents.forEach(event => {
          window.gtag('event', event.event, {
            event_category: event.category,
            event_label: event.label,
            value: event.value
          });
        });
      }
    }
  }, [pageName, customEvents]);

  return (
    <Head>
      <title>{pageName || 'Zion Tech Group'}</title>
      <meta name="description" content="Zion Tech Group - Advanced Technology Solutions" />
    </Head>
  );
};

export default AnalyticsTracker;