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
  pageName = "Home",
  customEvents = []
}) => {
  useEffect(() => {
    const trackPageView = () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", process.env.NEXT_PUBLIC_GA_TRACKING_ID || "", {
          page_title: pageName,
          page_location: window.location.href,
        });
      }
    };

    // Track page view on mount
    trackPageView();

    // Track custom events
    customEvents.forEach((event) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", event.event, {
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
      <title>{pageName}</title>
    </Head>
  );
};

export default AnalyticsTracker;