'use client';
import React, { useCallback, useMemo } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
      document.head.appendChild(script);

      // Initialize gtag
      (window as Window & typeof globalThis).dataLayer = (window as Window & typeof globalThis).dataLayer || [];
      function gtag(...args: unknown[]) {
        (window as Window & typeof globalThis).dataLayer.push(args);
      }
      (window as Window & typeof globalThis).gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track page views
      const trackPageView = () => {
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      };

      // Track initial page view
      trackPageView();

      // Track navigation changes
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        setTimeout(trackPageView, 0);
      };

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        setTimeout(trackPageView, 0);
      };

      window.addEventListener('popstate', trackPageView);

      return () => {
        window.removeEventListener('popstate', trackPageView);
      };
    }
  }, []);

  return null;
};

export default Analytics;
