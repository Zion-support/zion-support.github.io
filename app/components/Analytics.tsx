'use client';
import React, { useEffect } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics 4 setup
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
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
      let currentPath = window.location.pathname;
      const observer = new MutationObserver(() => {
        if (window.location.pathname !== currentPath) {
          currentPath = window.location.pathname;
          trackPageView();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // Track clicks on important elements
      const trackClick = (event: Event) => {
        const target = event.target as HTMLElement;
        const link = target.closest('a');
        
        if (link) {
          const href = link.getAttribute('href');
          const text = link.textContent?.trim();
          
          gtag('event', 'click', {
            event_category: 'engagement',
            event_label: text || href,
            value: href
          });
        }
      };

      document.addEventListener('click', trackClick);

      return () => {
        observer.disconnect();
        document.removeEventListener('click', trackClick);
      };
    }
  }, []);

  return null;
};

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default Analytics;