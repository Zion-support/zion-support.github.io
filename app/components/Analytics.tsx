'use client';
import React from 'react';

const Analytics: React.FC = () => {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    // Google Analytics 4
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(gtagScript);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', {
      page_title: document.title,
      page_location: window.location.href
    });

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    };

    // Track initial page view
    trackPageView();

    // Track route changes (for SPA)
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      setTimeout(trackPageView, 100);
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      setTimeout(trackPageView, 100);
    };

    window.addEventListener('popstate', () => {
      setTimeout(trackPageView, 100);
    });

    // Track clicks on phone numbers
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.href.startsWith('tel:')) {
        (window as any).gtag('event', 'phone_click', {
          event_category: 'engagement',
          event_label: target.href
        });
      }
    });

    // Track clicks on email addresses
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.href.startsWith('mailto:')) {
        (window as any).gtag('event', 'email_click', {
          event_category: 'engagement',
          event_label: target.href
        });
      }
    });

  }, []);

  return null;
};

export default Analytics;