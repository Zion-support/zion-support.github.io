import React, { useEffect } from 'react';

// We avoid declaring global window.gtag types here to prevent conflicts

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID
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
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [trackingId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const trackPerformance = () => {
      if (typeof window.gtag !== 'undefined' && 'performance' in window) {
        const perf = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        if (perf) {
          const loadTime = (perf.loadEventEnd || 0) - (perf.fetchStart || 0);
          window.gtag('event', 'page_load_time', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(loadTime)
          });
        }
      }
    };
    window.addEventListener('load', trackPerformance);
    return () => window.removeEventListener('load', trackPerformance);
  }, []);

  return null;
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (url: string, title: string) => {
  const id = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined' && id) {
    window.gtag('config', id, {
      page_title: title,
      page_location: url,
    });
  }
};

export default Analytics;