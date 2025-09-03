import Head from 'next/head';
import React, { useEffect } from 'react';

interface AnalyticsTrackerProps {
  pageName?: string;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ pageName = 'Page' }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const id = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
    if (!id) return;

    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', id, {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  }, [pageName]);

  const id = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  if (!id) return null;

  return (
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}');
          `,
        }}
      />
    </Head>
  );
};

export default AnalyticsTracker;