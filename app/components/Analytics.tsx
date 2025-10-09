'use client';
import React, { useEffect } from 'react';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const Analytics: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Google Analytics 4 with enhanced configuration
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
        script.onerror = () => {
          console.warn('Failed to load Google Analytics script');
        };
        document.head.appendChild(script);

        // Initialize gtag with proper typing
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;
        
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX', {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true,
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          cookie_flags: 'SameSite=None;Secure'
        });

        // Enhanced page view tracking
        const trackPageView = () => {
          gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
            page_referrer: document.referrer,
            custom_map: {
              'custom_parameter_1': 'zion_tech_group'
            }
          });
        };

        // Track initial page view
        trackPageView();

        // Track performance metrics
        if ('performance' in window) {
          window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            if (navigation) {
              // Track Core Web Vitals
              gtag('event', 'timing_complete', {
                name: 'load_time',
                value: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
                event_category: 'Performance'
              });

              gtag('event', 'timing_complete', {
                name: 'dom_content_loaded',
                value: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
                event_category: 'Performance'
              });

              gtag('event', 'timing_complete', {
                name: 'first_byte',
                value: Math.round(navigation.responseStart - navigation.requestStart),
                event_category: 'Performance'
              });
            }
          });
        }

        // Track user interactions
        const trackInteraction = (event: Event) => {
          const target = event.target as HTMLElement;
          if (target.tagName === 'A' || target.tagName === 'BUTTON') {
            gtag('event', 'click', {
              event_category: 'User Interaction',
              event_label: target.textContent?.trim() || target.getAttribute('aria-label') || 'Unknown',
              value: 1
            });
          }
        };

        // Track navigation changes with enhanced error handling
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function(...args) {
          originalPushState.apply(history, args);
          setTimeout(() => {
            try {
              trackPageView();
            } catch (error) {
              console.warn('Error tracking page view:', error);
            }
          }, 0);
        };

        history.replaceState = function(...args) {
          originalReplaceState.apply(history, args);
          setTimeout(() => {
            try {
              trackPageView();
            } catch (error) {
              console.warn('Error tracking page view:', error);
            }
          }, 0);
        };

        // Add event listeners
        window.addEventListener('popstate', trackPageView);
        document.addEventListener('click', trackInteraction);

        // Track errors
        window.addEventListener('error', (event) => {
          gtag('event', 'exception', {
            description: event.error?.message || 'Unknown error',
            fatal: false
          });
        });

        // Track unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
          gtag('event', 'exception', {
            description: event.reason?.message || 'Unhandled promise rejection',
            fatal: false
          });
        });

        return () => {
          window.removeEventListener('popstate', trackPageView);
          document.removeEventListener('click', trackInteraction);
        };
      } catch (error) {
        console.warn('Analytics initialization failed:', error);
      }
    }
  }, []);

  return null;
};

export default Analytics;
