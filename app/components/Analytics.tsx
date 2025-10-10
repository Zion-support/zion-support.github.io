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
  enableUserBehaviorTracking = true
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics) {
      initializeGoogleAnalytics();
    }

    if (enablePerformanceMonitoring) {
      initializePerformanceMonitoring();
    }

    if (enableErrorTracking) {
      initializeErrorTracking();
    }

    if (enableUserBehaviorTracking) {
      initializeUserBehaviorTracking();
    }
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking]);

  const initializeGoogleAnalytics = () => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  };

  const initializePerformanceMonitoring = () => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  };

  const initializeErrorTracking = () => {
    // Initialize error tracking
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('Global error:', event.error);
      });

      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
      });
    }
  };

  const initializeUserBehaviorTracking = () => {
    // Initialize user behavior tracking
    if (typeof window !== 'undefined') {
      // Track page views
      const trackPageView = () => {
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
          });
        }
      };

      // Track clicks
      const trackClick = (event: Event) => {
        const target = event.target as HTMLElement;
        if (target && target.tagName === 'A') {
          const link = target as HTMLAnchorElement;
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'link',
              event_label: link.href,
            });
          }
        }
      };

      // Track form submissions
      const trackFormSubmission = (event: Event) => {
        const form = event.target as HTMLFormElement;
        if (form && form.tagName === 'FORM') {
          if (window.gtag) {
            window.gtag('event', 'form_submit', {
              event_category: 'form',
              event_label: form.action || 'unknown',
            });
          }
        }
      };

      // Add event listeners
      window.addEventListener('load', trackPageView);
      document.addEventListener('click', trackClick);
      document.addEventListener('submit', trackFormSubmission);

      // Cleanup function
      return () => {
        window.removeEventListener('load', trackPageView);
        document.removeEventListener('click', trackClick);
        document.removeEventListener('submit', trackFormSubmission);
      };
    }
  };

  return null;
};

export default Analytics;