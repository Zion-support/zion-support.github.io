import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID,
}) => {
  useEffect(() => {
    if (!trackingId || typeof window === 'undefined') return;

    // Load Google Analytics
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
      const w: any = window as any;
      if (typeof w.gtag !== 'undefined') {
        w.gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [trackingId]);

  // Track page performance
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const trackPerformance = () => {
      const w: any = window as any;
      if (typeof w.gtag !== 'undefined' && 'performance' in window) {
        const perf = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        if (perf) {
          const loadTime = Math.round(perf.loadEventEnd - perf.fetchStart);
          w.gtag('event', 'page_load_time', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: loadTime,
          });
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
  const w: any = typeof window !== 'undefined' ? (window as any) : undefined;
  if (w && typeof w.gtag !== 'undefined') {
    w.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

export const trackPageView = (url: string, title: string) => {
  const id = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';
  const w: any = typeof window !== 'undefined' ? (window as any) : undefined;
  if (w && typeof w.gtag !== 'undefined' && id) {
    w.gtag('config', id, {
      page_title: title,
      page_location: url,
    });
  }
};