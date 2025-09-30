import React, { useEffect, useCallback } from 'react';

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

interface AnalyticsTrackerProps {
  children: React.ReactNode;
  trackingId?: string;
  debug?: boolean;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  children,
  trackingId = 'zion-analytics',
  debug = false
}) => {
  // Track page views
  const trackPageView = useCallback((url: string, title: string) => {
    const event: AnalyticsEvent = {
      event: 'page_view',
      properties: {
        url,
        title,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        timestamp: Date.now()
      }
    };

    if (debug) {
      console.log('Analytics - Page View:', event);
    }

    // In a real application, you would send this to your analytics service
    // Example: gtag('config', trackingId, { page_title: title, page_location: url });
    sendToAnalytics(event);
  }, [debug, trackingId]);

  // Track custom events
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    const event: AnalyticsEvent = {
      event: eventName,
      properties: {
        ...properties,
        timestamp: Date.now()
      }
    };

    if (debug) {
      console.log('Analytics - Event:', event);
    }

    sendToAnalytics(event);
  }, [debug]);

  // Track user interactions
  const trackInteraction = useCallback((element: string, action: string, properties?: Record<string, any>) => {
    trackEvent('interaction', {
      element,
      action,
      ...properties
    });
  }, [trackEvent]);

  // Track performance metrics
  const trackPerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        trackEvent('performance', {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
          memoryUsage: (performance as any).memory?.usedJSHeapSize || 0
        });
      }
    }
  }, [trackEvent]);

  // Track errors
  const trackError = useCallback((error: Error, context?: string) => {
    trackEvent('error', {
      message: error.message,
      stack: error.stack,
      context,
      url: window.location.href,
      userAgent: navigator.userAgent
    });
  }, [trackEvent]);

  // Send data to analytics service
  const sendToAnalytics = useCallback((event: AnalyticsEvent) => {
    // In a real application, you would send this to your analytics service
    // Examples:
    // - Google Analytics: gtag('event', event.event, event.properties);
    // - Mixpanel: mixpanel.track(event.event, event.properties);
    // - Custom API: fetch('/api/analytics', { method: 'POST', body: JSON.stringify(event) });
    
    // For now, we'll just log it
    if (debug) {
      console.log('Sending to analytics:', event);
    }
  }, [debug]);

  // Set up global error tracking
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      trackError(new Error(event.message), 'global_error');
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      trackError(new Error(event.reason), 'unhandled_promise_rejection');
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [trackError]);

  // Track page view on mount
  useEffect(() => {
    trackPageView(window.location.href, document.title);
    trackPerformance();
  }, [trackPageView, trackPerformance]);

  // Track page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      trackEvent('visibility_change', {
        hidden: document.hidden,
        visibilityState: document.visibilityState
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [trackEvent]);

  // Track scroll depth
  useEffect(() => {
    let maxScrollDepth = 0;
    let scrollDepthMarkers = [25, 50, 75, 90, 100];
    let triggeredMarkers: number[] = [];

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollDepth = Math.round((scrollTop / documentHeight) * 100);

      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;

        // Track scroll depth milestones
        scrollDepthMarkers.forEach(marker => {
          if (scrollDepth >= marker && !triggeredMarkers.includes(marker)) {
            triggeredMarkers.push(marker);
            trackEvent('scroll_depth', {
              depth: marker,
              maxDepth: maxScrollDepth
            });
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackEvent]);

  // Expose tracking functions globally for easy access
  useEffect(() => {
    (window as any).analytics = {
      track: trackEvent,
      trackInteraction,
      trackError,
      trackPageView
    };
  }, [trackEvent, trackInteraction, trackError, trackPageView]);

  return <>{children}</>;
};

export default AnalyticsTracker;