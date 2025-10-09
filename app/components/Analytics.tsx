'use client';

import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
  enableUserInteractionTracking?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = 'G-XXXXXXXXXX',
  enablePerformanceTracking = true,
  enableErrorTracking = true,
  enableUserInteractionTracking = true,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Google Analytics
    const initAnalytics = () => {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true,
        });
      }
    };

    // Track user interactions
    const trackUserInteractions = () => {
      if (!enableUserInteractionTracking) return;

      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          const text = target.textContent?.trim() || '';
          const href = target.getAttribute('href') || '';
          
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
        if (target.href && target.href.startsWith('tel:')) {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'phone_click', {
              event_category: 'engagement',
              event_label: 'phone_number',
              value: target.href
            });
          }
        }
      });

      // Track email clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.href && target.href.startsWith('mailto:')) {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'email_click', {
              event_category: 'engagement',
              event_label: 'email_contact',
              value: target.href
            });
          }
        }
      });
    };

    // Track performance metrics
    const trackPerformanceMetrics = () => {
      if (!enablePerformanceTracking) return;

      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            load_complete: navigation.loadEventEnd - navigation.loadEventStart,
            dom_interactive: navigation.domInteractive - navigation.fetchStart,
            total_load_time: navigation.loadEventEnd - navigation.fetchStart,
          };

          if ((window as any).gtag) {
            (window as any).gtag('event', 'performance_metrics', {
              event_category: 'performance',
              ...metrics
            });
          }
        }
      }
    };

    // Track errors
    const trackErrors = () => {
      if (!enableErrorTracking) return;

      window.addEventListener('error', (e) => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'exception', {
            description: e.message,
            fatal: false,
            custom_map: {
              error_file: e.filename,
              error_line: e.lineno,
              error_column: e.colno
            }
          });
        }
      });

      window.addEventListener('unhandledrejection', (e) => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'exception', {
            description: e.reason?.message || 'Unhandled promise rejection',
            fatal: false,
            custom_map: {
              error_type: 'unhandled_promise_rejection'
            }
          });
        }
      });
    };

    // Initialize analytics
    initAnalytics();
    trackPageView();
    trackUserInteractions();
    trackPerformanceMetrics();
    trackErrors();

    // Track route changes (for SPA behavior)
    const handleRouteChange = () => {
      trackPageView();
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackingId, enablePerformanceTracking, enableErrorTracking, enableUserInteractionTracking]);

  return null; // This component doesn't render anything
};

export default Analytics;