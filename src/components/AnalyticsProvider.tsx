'use client';
import React, { useEffect } from 'react';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';
  
  useEffect(() => {
    // Initialize Google Analytics
    const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';
    
    const initAnalytics = () => {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);
      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: unknown[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    };
    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      }
    };
    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          const text = target.textContent?.trim() || '';
          const href = (target as HTMLAnchorElement).href || target.getAttribute('href') || '';
          if ((window as any).gtag) {
            (window as any).gtag('event', 'click', {
              event_category: 'engagement',
              event_label: text,
              value: href
            });
          }
        }
      });
      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        if ((window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: form.id || 'contact_form'
          });
        }
      });
      // Track phone number clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A') {
          const link = target as HTMLAnchorElement;
          if (link.href && link.href.startsWith('tel:')) {
            if ((window as { gtag: unknown }).gtag) {
              (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'phone_click', {
                event_category: 'engagement',
                event_label: 'phone_number',
                value: link.href
              });
            }
          }
        }
      });
    };
    
    // Handle route changes
    const handleRouteChange = () => {
      trackPageView();
    };
    
    // Initialize analytics
    initAnalytics();
    trackPageView();
    trackInteractions();
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  return <>{children}</>;
};

// Export useAnalytics hook for other components
export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }
  };
  
  const trackPerformance = (metricName: string, value: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        event_category: 'performance',
        event_label: metricName,
        value: value
      });
    }
  };
  
  return { trackEvent, trackPerformance };
};

export default AnalyticsProvider;