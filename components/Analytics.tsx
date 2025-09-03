import React, { useEffect } from 'react';
// Declare gtag to satisfy TypeScript during build
declare const gtag: any;

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID,
}) => {
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
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    const handleRouteChange = () => {
      if (typeof gtag !== 'undefined') {
        gtag('config', trackingId, {
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

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (url: string, title: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {
      page_title: title,
      page_location: url,
    });
  }
};

export default Analytics;