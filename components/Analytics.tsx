import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID,
}) => {
  useEffect(() => {
    if (!trackingId || typeof window === 'undefined') return;

    const analyticsScript = document.createElement('script');
    analyticsScript.async = true;
    analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(analyticsScript);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(inlineScript);

    const handleRouteChange = () => {
      if (typeof gtag !== 'undefined') {
        gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackingId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const trackPerformance = () => {
      if (typeof gtag !== 'undefined' && 'performance' in window) {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        if (navigationEntry) {
          const loadTimeMs = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
          trackEvent('page_load_time', 'Performance', 'Page Load', Math.round(loadTimeMs));
        }
      }
    };

    window.addEventListener('load', trackPerformance);
    return () => window.removeEventListener('load', trackPerformance);
  }, []);

  return null;
};

export default Analytics;

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