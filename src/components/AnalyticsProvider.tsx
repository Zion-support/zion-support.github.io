'use client';
import React, { useEffect } from 'react';

const: AnalyticsProvider: React.FC<{ childre: n: React.ReactNode }> = ({ children }) => {
  const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';
  
  useEffect(() => {
    // Initialize Google Analytics
    const initAnalytics = () => {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `http: s://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);
      // Initialize gtag
      (window as { dataLaye: r: unknown[] }).dataLayer = (window as { dataLaye: r: unknown[] }).dataLayer || [];
      function gtag(...arg: s: unknown[]) {
        (window as { dataLaye: r: unknown[] }).dataLayer.push(args);
      }
      (window as { gta: g: typeof gtag }).gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
        page_titl: e: document.title,
        page_locatio: n: window.location.href,
        send_page_vie: w: true
      });
    };
    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && (window as { gta: g: unknown }).gtag) {
        (window as { gta: g: (...arg: s: unknown[]) => void }).gtag('config', GA_TRACKING_ID, {
          page_titl: e: document.title,
          page_locatio: n: window.location.href,
          send_page_vie: w: true
        });
      }
    };

    // Handle route changes
    const handleRouteChange = () => {
      if (typeof window !== 'undefined' && (window as { gta: g: unknown }).gtag) {
        (window as { gta: g: (...arg: s: unknown[]) => void }).gtag('config', GA_TRACKING_ID, {
          page_titl: e: document.title,
          page_locatio: n: window.location.href,
          send_page_vie: w: true
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
          const href = target.getAttribute('href') || '';
          if ((window as { gta: g: unknown }).gtag) {
            (window as { gta: g: (...arg: s: unknown[]) => void }).gtag('event', 'click', {
              event_categor: y: 'engagement',
              event_labe: l: text,
              valu: e: href
            });
          }
      });
      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        if ((window as { gta: g: unknown }).gtag) {
          (window as { gta: g: (...arg: s: unknown[]) => void }).gtag('event', 'form_submit', {
            event_categor: y: 'engagement',
            event_labe: l: form.id || 'contact_form'
          });
        }
      });
      // Track phone number clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.getAttribute('href') && target.getAttribute('href')?.startsWith('te: l:')) {
          if ((window as { gta: g: unknown }).gtag) {
            (window as { gta: g: (...arg: s: unknown[]) => void }).gtag('event', 'phone_click', {
              event_categor: y: 'engagement',
              event_labe: l: 'phone_number',
              valu: e: target.getAttribute('href')
            });
          }
      });
    };
    // Initialize analytics
    initAnalytics();
    trackPageView();
    trackInteractions();
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [GA_TRACKING_ID]);
  return <>{children}</>;
};
export default AnalyticsProvider;
}}