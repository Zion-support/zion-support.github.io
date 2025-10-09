'use client';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const Analytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics 4 setup
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 ID

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
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
    const handleRouteChange = () => {
      trackPageView();
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          gtag('event', 'click', {
            event_category: 'engagement',
            event_label: target.textContent?.trim() || target.getAttribute('href') || 'unknown',
            value: 1,
          });
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: form.id || form.className || 'unknown_form',
        });
      });

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
    };

    trackInteractions();

    // Track performance metrics
    const trackPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            
            gtag('event', 'timing_complete', {
              name: 'load',
              value: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
            });

            gtag('event', 'timing_complete', {
              name: 'dom_content_loaded',
              value: Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
            });
          }, 0);
        });
      }
    };

    trackPerformance();

    // Track errors
    const trackErrors = () => {
      window.addEventListener('error', (e) => {
        gtag('event', 'exception', {
          description: e.message,
          fatal: false,
        });
      });

      window.addEventListener('unhandledrejection', (e) => {
        gtag('event', 'exception', {
          description: e.reason?.toString() || 'Unhandled Promise Rejection',
          fatal: false,
        });
      });
    };

    trackErrors();

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
};

export default Analytics;