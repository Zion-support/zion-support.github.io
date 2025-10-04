import React, { useEffect, useState, useCallback } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
}

interface AnalyticsConfig {
  trackingId?: string;
  enableGoogleAnalytics?: boolean;
  enableGoogleTagManager?: boolean;
  enableCustomAnalytics?: boolean;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
  debugMode?: boolean;
}

interface AdvancedAnalyticsProps {
  config?: AnalyticsConfig;
  onEventTracked?: (event: AnalyticsEvent) => void;
}

// Global declarations are handled in src/types/global.d.ts

const AdvancedAnalytics: React.FC<AdvancedAnalyticsProps> = ({
  config = {},
  onEventTracked
}) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [userSession, setUserSession] = useState({
    sessionId: '',
    startTime: Date.now(),
    pageViews: 0,
    events: 0
  });

  const {
    trackingId = 'G-XXXXXXXXXX',
    enableGoogleAnalytics = true,
    enableGoogleTagManager = false,
    enableCustomAnalytics = true,
    enablePerformanceTracking = true,
    enableErrorTracking = true,
    enableUserBehaviorTracking = true,
    debugMode = process.env.NODE_ENV === 'development'
  } = config;

  // Initialize Google Analytics
  const initializeGoogleAnalytics = useCallback(() => {
    if (!enableGoogleAnalytics || !trackingId) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true
    });

    if (debugMode) {
      console.log('Google Analytics initialized with tracking ID:', trackingId);
    }
  }, [enableGoogleAnalytics, trackingId, debugMode]);

  // Initialize Google Tag Manager
  const initializeGoogleTagManager = useCallback(() => {
    if (!enableGoogleTagManager) return;

    // Load GTM script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${trackingId}');
    `;
    document.head.appendChild(script);

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${trackingId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);

    if (debugMode) {
      console.log('Google Tag Manager initialized');
    }
  }, [enableGoogleTagManager, trackingId, debugMode]);

  // Track custom events
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (!isInitialized) return;

    // Update session data
    setUserSession(prev => ({
      ...prev,
      events: prev.events + 1
    }));

    // Google Analytics tracking
    if (enableGoogleAnalytics && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_map: event.custom_parameters
      });
    }

    // Google Tag Manager tracking
    if (enableGoogleTagManager && window.dataLayer) {
      window.dataLayer.push({
        event: 'custom_event',
        event_category: event.category,
        event_action: event.action,
        event_label: event.label,
        event_value: event.value,
        ...event.custom_parameters
      });
    }

    // Custom analytics tracking
    if (enableCustomAnalytics) {
      const customEvent = {
        ...event,
        timestamp: new Date().toISOString(),
        sessionId: userSession.sessionId,
        pageUrl: window.location.href,
        userAgent: navigator.userAgent
      };

      // In a real application, you would send this to your analytics service
      if (debugMode) {
        console.log('Custom analytics event:', customEvent);
      }
    }

    // Call custom event handler
    if (onEventTracked) {
      onEventTracked(event);
    }
  }, [isInitialized, enableGoogleAnalytics, enableGoogleTagManager, enableCustomAnalytics, userSession.sessionId, onEventTracked, debugMode]);

  // Track page views
  const trackPageView = useCallback((pagePath?: string, pageTitle?: string) => {
    if (!isInitialized) return;

    const path = pagePath || window.location.pathname;
    const title = pageTitle || document.title;

    // Update session data
    setUserSession(prev => ({
      ...prev,
      pageViews: prev.pageViews + 1
    }));

    // Google Analytics page view
    if (enableGoogleAnalytics && window.gtag) {
      window.gtag('config', trackingId, {
        page_path: path,
        page_title: title
      });
    }

    // Custom page view tracking
    if (enableCustomAnalytics) {
      const pageViewEvent = {
        action: 'page_view',
        category: 'navigation',
        label: path,
        custom_parameters: {
          page_title: title,
          referrer: document.referrer,
          timestamp: new Date().toISOString()
        }
      };

      trackEvent(pageViewEvent);
    }
  }, [isInitialized, enableGoogleAnalytics, enableCustomAnalytics, trackingId, trackEvent]);

  // Track performance metrics
  const trackPerformance = useCallback(() => {
    if (!enablePerformanceTracking) return;

    // Track Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS((metric) => {
          trackEvent({
            action: 'web_vital',
            category: 'performance',
            label: 'CLS',
            value: Math.round(metric.value * 1000),
            custom_parameters: { metric: 'CLS', value: metric.value }
          });
        });

        onFCP((metric) => {
          trackEvent({
            action: 'web_vital',
            category: 'performance',
            label: 'FCP',
            value: Math.round(metric.value),
            custom_parameters: { metric: 'FCP', value: metric.value }
          });
        });

        onLCP((metric) => {
          trackEvent({
            action: 'web_vital',
            category: 'performance',
            label: 'LCP',
            value: Math.round(metric.value),
            custom_parameters: { metric: 'LCP', value: metric.value }
          });
        });

        onTTFB((metric) => {
          trackEvent({
            action: 'web_vital',
            category: 'performance',
            label: 'TTFB',
            value: Math.round(metric.value),
            custom_parameters: { metric: 'TTFB', value: metric.value }
          });
        });

        onINP((metric) => {
          trackEvent({
            action: 'web_vital',
            category: 'performance',
            label: 'INP',
            value: Math.round(metric.value),
            custom_parameters: { metric: 'INP', value: metric.value }
          });
        });
      });
    }
  }, [enablePerformanceTracking, trackEvent]);

  // Track user behavior
  const trackUserBehavior = useCallback(() => {
    if (!enableUserBehaviorTracking) return;

    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        if (maxScrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackEvent({
            action: 'scroll_depth',
            category: 'engagement',
            label: `${maxScrollDepth}%`,
            value: maxScrollDepth
          });
        }
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage % 30 === 0 && timeOnPage > 0) { // Track every 30 seconds
        trackEvent({
          action: 'time_on_page',
          category: 'engagement',
          label: `${timeOnPage}s`,
          value: timeOnPage
        });
      }
    };

    // Track clicks on external links
    const trackExternalClicks = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href && !link.href.startsWith(window.location.origin)) {
        trackEvent({
          action: 'external_link_click',
          category: 'engagement',
          label: link.href,
          custom_parameters: { external_url: link.href }
        });
      }
    };

    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    window.addEventListener('beforeunload', trackTimeOnPage);
    document.addEventListener('click', trackExternalClicks);

    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('beforeunload', trackTimeOnPage);
      document.removeEventListener('click', trackExternalClicks);
    };
  }, [enableUserBehaviorTracking, trackEvent]);

  // Track errors
  const trackErrors = useCallback(() => {
    if (!enableErrorTracking) return;

    const trackError = (error: ErrorEvent | PromiseRejectionEvent) => {
      const errorInfo = {
        message: error instanceof ErrorEvent ? error.message : 'Unhandled Promise Rejection',
        filename: error instanceof ErrorEvent ? error.filename : 'unknown',
        lineno: error instanceof ErrorEvent ? error.lineno : 0,
        colno: error instanceof ErrorEvent ? error.colno : 0,
        stack: error instanceof ErrorEvent ? error.error?.stack : 'unknown'
      };

      trackEvent({
        action: 'javascript_error',
        category: 'error',
        label: errorInfo.message,
        custom_parameters: errorInfo
      });
    };

    window.addEventListener('error', trackError);
    window.addEventListener('unhandledrejection', trackError);

    return () => {
      window.removeEventListener('error', trackError);
      window.removeEventListener('unhandledrejection', trackError);
    };
  }, [enableErrorTracking, trackEvent]);

  // Initialize analytics
  useEffect(() => {
    const initializeAnalytics = () => {
      // Generate session ID
      const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setUserSession(prev => ({ ...prev, sessionId }));

      // Initialize services
      initializeGoogleAnalytics();
      initializeGoogleTagManager();

      // Track initial page view
      trackPageView();

      // Set up tracking
      trackPerformance();
      const cleanupUserBehavior = trackUserBehavior();
      const cleanupErrorTracking = trackErrors();

      setIsInitialized(true);

      if (debugMode) {
        console.log('Advanced Analytics initialized');
      }

      return () => {
        cleanupUserBehavior?.();
        cleanupErrorTracking?.();
      };
    };

    const cleanup = initializeAnalytics();
    return cleanup;
  }, [initializeGoogleAnalytics, initializeGoogleTagManager, trackPageView, trackPerformance, trackUserBehavior, trackErrors, debugMode]);

  // Expose tracking functions globally for manual tracking
  useEffect(() => {
    if (isInitialized) {
      (window as Window & { trackEvent?: typeof trackEvent; trackPageView?: typeof trackPageView }).trackEvent = trackEvent;
      (window as Window & { trackEvent?: typeof trackEvent; trackPageView?: typeof trackPageView }).trackPageView = trackPageView;
    }
  }, [isInitialized, trackEvent, trackPageView]);

  return null; // This component doesn't render anything visible
};

export default AdvancedAnalytics;