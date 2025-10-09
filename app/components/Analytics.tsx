'use client';

import React, { useEffect } from 'react';


interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId = 'G-XXXXXXXXXX' }) => {
  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && trackingId) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer?.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', trackingId, {
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

      // Track route changes (for SPA)
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

      // Track performance metrics
      const trackPerformance = () => {
        if ('performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          gtag('event', 'timing_complete', {
            name: 'load',
            value: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          });

          gtag('event', 'timing_complete', {
            name: 'dom_content_loaded',
            value: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
          });
        }
      };

      // Track performance after page load
      if (document.readyState === 'complete') {
        trackPerformance();
      } else {
        window.addEventListener('load', trackPerformance);
      }

      // Track scroll depth
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: `${scrollPercent}%`,
            value: scrollPercent,
          });
        }
      };

      window.addEventListener('scroll', trackScroll, { passive: true });

      // Track clicks on important elements
      const trackClicks = (event: Event) => {
        const target = event.target as HTMLElement;
        const link = target.closest('a');
        
        if (link) {
          gtag('event', 'click', {
            event_category: 'engagement',
            event_label: link.href,
            value: 1,
          });
        }
      };

      document.addEventListener('click', trackClicks);

      // Cleanup
      return () => {
        window.removeEventListener('popstate', trackPageView);
        window.removeEventListener('load', trackPerformance);
        window.removeEventListener('scroll', trackScroll);
        document.removeEventListener('click', trackClicks);
      };
    }
  }, [trackingId]);

  return null;
};

// Extend Window interface for TypeScript
export default Analytics;