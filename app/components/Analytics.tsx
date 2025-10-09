'use client';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const Analytics: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined') {
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
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
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

      // Track clicks on external links
      const trackExternalLinks = (event: Event) => {
        const target = event.target as HTMLElement;
        const link = target.closest('a');
        if (link && link.href && !link.href.startsWith(window.location.origin)) {
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'outbound',
              event_label: link.href,
              transport_type: 'beacon',
            });
          }
        }
      };

      document.addEventListener('click', trackExternalLinks);

      // Track form submissions
      const trackFormSubmissions = (event: Event) => {
        const form = event.target as HTMLFormElement;
        if (form.tagName === 'FORM') {
          if (window.gtag) {
            window.gtag('event', 'form_submit', {
              event_category: 'engagement',
              event_label: form.action || 'unknown',
            });
          }
        }
      };

      document.addEventListener('submit', trackFormSubmissions);

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollDepth = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          
          if (window.gtag) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              value: maxScrollDepth,
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth, { passive: true });

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: 'time_on_page',
            value: timeOnPage,
            event_category: 'engagement',
          });
        }
      };

      window.addEventListener('beforeunload', trackTimeOnPage);

      // Cleanup
      return () => {
        document.removeEventListener('click', trackExternalLinks);
        document.removeEventListener('submit', trackFormSubmissions);
        window.removeEventListener('scroll', trackScrollDepth);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      };
    }
  }, []);

  return null;
};

export default Analytics;