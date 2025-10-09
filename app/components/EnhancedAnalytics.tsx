'use client';
import React, { useEffect, useCallback } from 'react';

interface EnhancedAnalyticsProps {
  trackingId?: string;
  enablePageViews?: boolean;
  enableUserInteractions?: boolean;
  enablePerformance?: boolean;
  enableErrors?: boolean;
  enableCustomEvents?: boolean;
  debug?: boolean;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-XXXXXXXXXX',
  enablePageViews = true,
  enableUserInteractions = true,
  enablePerformance = true,
  enableErrors = true,
  enableCustomEvents = true,
  debug = false
}) => {
  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && trackingId) {
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
        send_page_view: enablePageViews
      });

      if (debug) {
        console.log('Google Analytics initialized with tracking ID:', trackingId);
      }
    }
  }, [trackingId, enablePageViews, debug]);

  // Track page views
  useEffect(() => {
    if (enablePageViews && typeof window !== 'undefined' && 'gtag' in window) {
      const trackPageView = () => {
        (window as any).gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      };

      // Track initial page view
      trackPageView();

      // Track page views on route changes (for SPA)
      const handleRouteChange = () => {
        trackPageView();
      };

      // Listen for popstate events (back/forward navigation)
      window.addEventListener('popstate', handleRouteChange);

      // Listen for pushstate/replacestate (programmatic navigation)
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        setTimeout(handleRouteChange, 0);
      };

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        setTimeout(handleRouteChange, 0);
      };

      return () => {
        window.removeEventListener('popstate', handleRouteChange);
        history.pushState = originalPushState;
        history.replaceState = originalReplaceState;
      };
    }
  }, [enablePageViews]);

  // Track user interactions
  useEffect(() => {
    if (enableUserInteractions && typeof window !== 'undefined') {
      const trackClick = (event: Event) => {
        const target = event.target as HTMLElement;
        const element = target.closest('a, button, [role="button"]');
        
        if (element) {
          const tagName = element.tagName.toLowerCase();
          const text = element.textContent?.trim() || '';
          const href = element.getAttribute('href') || '';
          const id = element.getAttribute('id') || '';
          const className = element.getAttribute('class') || '';

          (window as any).gtag('event', 'click', {
            event_category: 'User Interaction',
            event_label: `${tagName}: ${text || href || id || className}`,
            value: 1
          });
        }
      };

      const trackFormSubmit = (event: Event) => {
        const form = event.target as HTMLFormElement;
        const formName = form.getAttribute('name') || form.getAttribute('id') || 'unknown';
        
        (window as any).gtag('event', 'form_submit', {
          event_category: 'User Interaction',
          event_label: `Form: ${formName}`,
          value: 1
        });
      };

      const trackScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );

        // Track scroll milestones
        const milestones = [25, 50, 75, 90, 100];
        milestones.forEach(milestone => {
          if (scrollPercent >= milestone && scrollPercent < milestone + 5) {
            (window as any).gtag('event', 'scroll', {
              event_category: 'User Interaction',
              event_label: `${milestone}% scrolled`,
              value: milestone
            });
          }
        });
      };

      // Throttle scroll tracking
      let scrollTimeout: NodeJS.Timeout;
      const throttledScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(trackScroll, 100);
      };

      document.addEventListener('click', trackClick);
      document.addEventListener('submit', trackFormSubmit);
      window.addEventListener('scroll', throttledScroll);

      return () => {
        document.removeEventListener('click', trackClick);
        document.removeEventListener('submit', trackFormSubmit);
        window.removeEventListener('scroll', throttledScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, [enableUserInteractions]);

  // Track performance metrics
  useEffect(() => {
    if (enablePerformance && typeof window !== 'undefined' && 'performance' in window) {
      const trackPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            load_complete: navigation.loadEventEnd - navigation.loadEventStart,
            total_time: navigation.loadEventEnd - navigation.fetchStart,
            dns_lookup: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp_connection: navigation.connectEnd - navigation.connectStart,
            request_response: navigation.responseEnd - navigation.requestStart,
            dom_processing: navigation.domComplete - navigation.domLoading
          };

          Object.entries(metrics).forEach(([key, value]) => {
            (window as any).gtag('event', 'timing_complete', {
              name: key,
              value: Math.round(value)
            });
          });
        }
      };

      // Track performance after page load
      if (document.readyState === 'complete') {
        trackPerformance();
      } else {
        window.addEventListener('load', trackPerformance);
      }
    }
  }, [enablePerformance]);

  // Track errors
  useEffect(() => {
    if (enableErrors && typeof window !== 'undefined') {
      const trackError = (event: ErrorEvent) => {
        (window as any).gtag('event', 'exception', {
          description: event.message,
          fatal: false,
          error_file: event.filename,
          error_line: event.lineno,
          error_column: event.colno
        });
      };

      const trackUnhandledRejection = (event: PromiseRejectionEvent) => {
        (window as any).gtag('event', 'exception', {
          description: event.reason?.toString() || 'Unhandled Promise Rejection',
          fatal: false
        });
      };

      window.addEventListener('error', trackError);
      window.addEventListener('unhandledrejection', trackUnhandledRejection);

      return () => {
        window.removeEventListener('error', trackError);
        window.removeEventListener('unhandledrejection', trackUnhandledRejection);
      };
    }
  }, [enableErrors]);

  // Custom event tracking function
  const trackEvent = useCallback((eventName: string, parameters: Record<string, any> = {}) => {
    if (enableCustomEvents && typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', eventName, {
        event_category: parameters.category || 'Custom Event',
        event_label: parameters.label || eventName,
        value: parameters.value || 1,
        ...parameters
      });

      if (debug) {
        console.log('Custom event tracked:', eventName, parameters);
      }
    }
  }, [enableCustomEvents, debug]);

  // Expose tracking functions globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).trackEvent = trackEvent;
      (window as any).gtag = (window as any).gtag || (() => {});
    }
  }, [trackEvent]);

  // Track specific business events
  const trackPhoneClick = useCallback(() => {
    trackEvent('phone_click', {
      category: 'Contact',
      label: 'Phone Number Clicked',
      value: 1
    });
  }, [trackEvent]);

  const trackEmailClick = useCallback(() => {
    trackEvent('email_click', {
      category: 'Contact',
      label: 'Email Address Clicked',
      value: 1
    });
  }, [trackEvent]);

  const trackServiceClick = useCallback((serviceName: string) => {
    trackEvent('service_click', {
      category: 'Services',
      label: serviceName,
      value: 1
    });
  }, [trackEvent]);

  const trackFormStart = useCallback((formName: string) => {
    trackEvent('form_start', {
      category: 'Forms',
      label: formName,
      value: 1
    });
  }, [trackEvent]);

  const trackFormComplete = useCallback((formName: string) => {
    trackEvent('form_complete', {
      category: 'Forms',
      label: formName,
      value: 1
    });
  }, [trackEvent]);

  // Expose business tracking functions
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).trackPhoneClick = trackPhoneClick;
      (window as any).trackEmailClick = trackEmailClick;
      (window as any).trackServiceClick = trackServiceClick;
      (window as any).trackFormStart = trackFormStart;
      (window as any).trackFormComplete = trackFormComplete;
    }
  }, [trackPhoneClick, trackEmailClick, trackServiceClick, trackFormStart, trackFormComplete]);

  return null;
};

export default EnhancedAnalytics;