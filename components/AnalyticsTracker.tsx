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
    if (typeof window !== 'undefined' && window.gtag) {
      // Track page view
      if (pageName) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
          page_title: pageName,
          page_location: window.location.href,
        });
      }

      // Track custom events
      customEvents.forEach((event) => {
        window.gtag('event', event.event, {
          event_category: event.category,
          event_action: event.action,
          event_label: event.label,
          value: event.value,
        });
      });
    }
  }, [pageName, customEvents]);

  return (
    <Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_title: '${pageName || document.title}',
              page_location: window.location.href,
            });
          `,
        }}
      />
    </Head>
  );
};

export default AnalyticsTracker;