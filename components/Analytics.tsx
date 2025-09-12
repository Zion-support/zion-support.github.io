import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface AnalyticsProps {
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({
  googleAnalyticsId = 'GA_MEASUREMENT_ID',
  googleTagManagerId = 'GTM_ID'
}) => {
  const router = useRouter();

  useEffect(() => {
    // Google Analytics 4
    if (googleAnalyticsId && googleAnalyticsId !== 'GA_MEASUREMENT_ID') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', googleAnalyticsId);

      // Track page views on route changes
      const handleRouteChange = (url: string) => {
        gtag('config', googleAnalyticsId, {
          page_path: url,
        });
      };

      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [googleAnalyticsId, router]);

  return (
    <Head>
      {/* Google Tag Manager */}
      {googleTagManagerId && googleTagManagerId !== 'GTM_ID' && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleTagManagerId}');
            `,
          }}
        />
      )}
    </Head>
  );
};

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

export default Analytics;