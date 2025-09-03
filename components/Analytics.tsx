import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID }) => {
  useEffect(() => {
    if (!trackingId || typeof window === 'undefined') return;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);} 
      gtag('js', new Date());
      gtag('config', '${trackingId}', { send_page_view: true });
    `;
    document.head.appendChild(script2);

    const handleRouteChange = () => {
      // @ts-ignore
      if (typeof gtag !== 'undefined') {
        // @ts-ignore
        gtag('config', '${trackingId}', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [trackingId]);

  return null;
};

export default Analytics;