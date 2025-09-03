import Head from "next/head";
import React, { useEffect } from "react";

interface AnalyticsTrackerProps {
  pageName?: string;
  customEvents?: Array<{
    name: string;
    parameters?: Record<string, any>;
  }>;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ 
  pageName, 
  customEvents = [] 
}) => {
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName || document.title,
        page_location: window.location.href
      });
    }
  }, [pageName]);

  useEffect(() => {
    // Track custom events
    if (typeof window !== 'undefined' && (window as any).gtag && customEvents.length > 0) {
      customEvents.forEach(event => {
        (window as any).gtag('event', event.name, event.parameters || {});
      });
    }
  }, [customEvents]);

  return (
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
        }}
      />
    </Head>
  );
};

export default AnalyticsTracker;