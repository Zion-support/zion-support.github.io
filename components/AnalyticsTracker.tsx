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
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("config", "GA_MEASUREMENT_ID", {
          page_title: pageName,
          page_location: window.location.href
        });
      }
    };

    const trackCustomEvents = () => {
      customEvents.forEach(event => {
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", event.event, {
            event_category: event.category,
            event_label: event.label,
            value: event.value
          });
        }
      });
    };

    trackPageView();
    trackCustomEvents();
  }, [pageName, customEvents]);

  return (
    <Head>
      <title>{pageName} - Zion Tech Group</title>
      <meta name="description" content={`${pageName} page - Zion Tech Group`} />
    </Head>
  );
};

export default AnalyticsTracker;