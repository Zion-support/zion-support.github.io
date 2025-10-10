import React, { useEffect } from 'react';

interface AnalyticsProps {
  enableGoogleAnalytics?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Google Analytics 4 setup
    if (enableGoogleAnalytics) {
      const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual tracking ID
      
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
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

      // Track scroll depth
      let maxScroll = 0;
      const trackScrollDepth = () => {
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

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        gtag('event', 'timing_complete', {
          name: 'time_on_page',
          value: timeOnPage,
        });
      };

      // Track clicks
      const trackClicks = (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          gtag('event', 'click', {
            event_category: 'engagement',
            event_label: target.textContent || target.getAttribute('aria-label') || 'unknown',
            value: 1,
          });
        }
      };

      // Track form submissions
      const trackFormSubmissions = (event: Event) => {
        const form = event.target as HTMLFormElement;
        gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: form.id || form.className || 'unknown_form',
          value: 1,
        });
      };

      // Add event listeners
      window.addEventListener('scroll', trackScrollDepth);
      window.addEventListener('beforeunload', trackTimeOnPage);
      document.addEventListener('click', trackClicks);
      document.addEventListener('submit', trackFormSubmissions);

      // Initial page view
      trackPageView();

      // Cleanup
      return () => {
        window.removeEventListener('scroll', trackScrollDepth);
        window.removeEventListener('beforeunload', trackTimeOnPage);
        document.removeEventListener('click', trackClicks);
        document.removeEventListener('submit', trackFormSubmissions);
      };
    }

    // Performance monitoring
    if (enablePerformanceMonitoring && 'performance' in window) {
      const trackPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            request: navigation.responseStart - navigation.requestStart,
            response: navigation.responseEnd - navigation.responseStart,
            dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            load: navigation.loadEventEnd - navigation.loadEventStart,
            total: navigation.loadEventEnd - navigation.navigationStart,
          };

          console.log('Performance Metrics:', metrics);
        }
      };

      window.addEventListener('load', trackPerformance);
      return () => window.removeEventListener('load', trackPerformance);
    }

    // Error tracking
    if (enableErrorTracking) {
      const trackError = (error: ErrorEvent) => {
        console.error('Error tracked:', error);
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: error.message,
            fatal: false,
          });
        }
      };

      window.addEventListener('error', trackError);
      return () => window.removeEventListener('error', trackError);
    }

    // User behavior tracking
    if (enableUserBehaviorTracking) {
      const trackUserBehavior = () => {
        const behavior = {
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
          userAgent: navigator.userAgent,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };

        console.log('User Behavior:', behavior);
      };

      trackUserBehavior();
    }
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking]);

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