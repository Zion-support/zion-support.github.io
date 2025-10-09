'use client';
import React, { useEffect } from 'react';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';
    
    // Initialize Google Analytics
    
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
<<<<<<< HEAD
        const href = target.getAttribute('href');
        if (href && href.startsWith('tel:')) {
=======
<<<<<<< HEAD
        const href = (target as HTMLAnchorElement).href || target.getAttribute('href') || '';
        if (href && href.startsWith('tel:')) {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'phone_click', {
              event_category: 'engagement',
              event_label: 'phone_number',
              value: href
=======
        if ((target as HTMLAnchorElement).href && (target as HTMLAnchorElement).href.startsWith('tel:')) {
>>>>>>> origin/main
          if ((window as { gtag: unknown }).gtag) {
            (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'phone_click', {
              event_category: 'engagement',
              event_label: 'phone_number',
<<<<<<< HEAD
              value: href
=======
              value: (target as HTMLAnchorElement).href
>>>>>>> fa31b9b3cde054d762720c2f5dd59f6a9ac62112
>>>>>>> origin/main
            });
          }
        }
      });
    };
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
    
    // Handle route changes
    const handleRouteChange = () => {
      trackPageView();
    };
    
<<<<<<< HEAD
=======
=======
    // Handle route changes
    const handleRouteChange = () => {
      if ((window as { gtag: unknown }).gtag) {
        (window as { gtag: (...args: unknown[]) => void }).gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      }
    };

>>>>>>> fa31b9b3cde054d762720c2f5dd59f6a9ac62112
>>>>>>> origin/main
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
  
  return { trackEvent };
};

export default AnalyticsProvider;