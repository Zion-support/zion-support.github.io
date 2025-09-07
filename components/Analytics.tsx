<<<<<<< HEAD
import React from 'react';
=======
'use client';

import React, { useEffect } from 'react';
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834

interface AnalyticsProps {
  trackingId: string;
}

<<<<<<< HEAD
const Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}');
          `,
        }}
      />
    </>
  );
};

export default Analytics;
=======
export default function Analytics({ trackingId }: AnalyticsProps) {
  useEffect(() => {
    // Load Google Analytics
    if (typeof window !== 'undefined' && trackingId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track page views
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [trackingId]);

  return null;
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
