import React, { useEffect, useCallback, useRef } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  url: string;
  userAgent: string;
  sessionId: string;
}

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
}

interface UserInteraction {
  type: 'click' | 'scroll' | 'navigation' | 'form_submit' | 'error';
  element: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

export function AnalyticsMonitor() {
  const eventsRef = useRef<AnalyticsEvent[]>([]);
  const metricsRef = useRef<PerformanceMetric[]>([]);
  const interactionsRef = useRef<UserInteraction[]>([]);
  const sessionIdRef = useRef<string>('');

  // Generate unique session ID
  useEffect(() => {
    sessionIdRef.current = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  // Track custom events
  const trackEvent = useCallback((event: string, category: string, action: string, label?: string, value?: number) => {
    const analyticsEvent: AnalyticsEvent = {
      event,
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      sessionId: sessionIdRef.current
    };

    eventsRef.current.push(analyticsEvent);

    // Send to analytics service (e.g., Google Analytics, custom endpoint)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', analyticsEvent);
    }
  }, []);

  // Track performance metrics
  const trackPerformance = useCallback((name: string, value: number, unit: string = 'ms') => {
    const metric: PerformanceMetric = {
      name,
      value,
      unit,
      timestamp: Date.now()
    };

    metricsRef.current.push(metric);

    // Send to performance monitoring service
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.metrics.increment(name, value);
    }
  }, []);

  // Track user interactions
  const trackInteraction = useCallback((type: UserInteraction['type'], element: string, metadata?: Record<string, any>) => {
    const interaction: UserInteraction = {
      type,
      element,
      timestamp: Date.now(),
      metadata
    };

    interactionsRef.current.push(interaction);
  }, []);

  // Monitor page performance
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // Monitor navigation timing
      const navigationObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            trackPerformance('TTFB', navEntry.responseStart - navEntry.requestStart);
            trackPerformance('DOMContentLoaded', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart);
            trackPerformance('LoadComplete', navEntry.loadEventEnd - navEntry.loadEventStart);
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.initiatorType === 'img' || resourceEntry.initiatorType === 'script') {
              trackPerformance(`${resourceEntry.initiatorType}_load_time`, resourceEntry.duration);
            }
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });

      return () => {
        navigationObserver.disconnect();
        resourceObserver.disconnect();
      };
    }
  }, [trackPerformance]);

  // Monitor user interactions
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const element = target.tagName.toLowerCase() + (target.id ? `#${target.id}` : '') + (target.className ? `.${target.className.split(' ')[0]}` : '');
      
      trackInteraction('click', element, {
        x: e.clientX,
        y: e.clientY,
        button: e.button
      });
    };

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target === document || target === document.documentElement || target === document.body) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollPercentage = Math.round((scrollTop / (scrollHeight - window.innerHeight)) * 100);
        
        trackInteraction('scroll', 'page', { scrollPercentage });
      }
    };

    const handleFormSubmit = (e: Event) => {
      const target = e.target as HTMLFormElement;
      trackInteraction('form_submit', target.action || 'unknown_form');
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('submit', handleFormSubmit);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, [trackInteraction]);

  // Monitor errors
  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      trackInteraction('error', 'javascript_error', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno
      });

      // Track error in analytics
      trackEvent('error', 'javascript', 'runtime_error', e.message);
    };

    const handleUnhandledRejection = (e: PromiseRejectionEvent) => {
      trackInteraction('error', 'unhandled_promise_rejection', {
        reason: e.reason
      });

      trackEvent('error', 'promise', 'unhandled_rejection', e.reason?.toString());
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [trackEvent, trackInteraction]);

  // Monitor route changes
  useEffect(() => {
    const handleRouteChange = () => {
      trackEvent('navigation', 'page_view', 'route_change', window.location.pathname);
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);

    // Track initial page view
    trackEvent('navigation', 'page_view', 'initial_load', window.location.pathname);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackEvent]);

  // Monitor user engagement
  useEffect(() => {
    let startTime = Date.now();
    let isActive = true;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const sessionDuration = Date.now() - startTime;
        trackPerformance('session_duration', sessionDuration);
        isActive = false;
      } else {
        startTime = Date.now();
        isActive = true;
      }
    };

    const handleBeforeUnload = () => {
      if (isActive) {
        const sessionDuration = Date.now() - startTime;
        trackPerformance('session_duration', sessionDuration);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [trackPerformance]);

  // Expose tracking functions globally for use in other components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).analytics = {
        trackEvent,
        trackPerformance,
        trackInteraction,
        getEvents: () => eventsRef.current,
        getMetrics: () => metricsRef.current,
        getInteractions: () => interactionsRef.current
      };
    }
  }, [trackEvent, trackPerformance, trackInteraction]);

  // Send analytics data periodically (every 30 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (eventsRef.current.length > 0 || metricsRef.current.length > 0 || interactionsRef.current.length > 0) {
        // Send data to analytics endpoint
        sendAnalyticsData();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const sendAnalyticsData = async () => {
    try {
      const data = {
        sessionId: sessionIdRef.current,
        events: eventsRef.current,
        metrics: metricsRef.current,
        interactions: interactionsRef.current,
        timestamp: Date.now()
      };

      // Send to your analytics endpoint
      if (process.env.REACT_APP_ANALYTICS_ENDPOINT) {
        await fetch(process.env.REACT_APP_ANALYTICS_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      }

      // Clear sent data
      eventsRef.current = [];
      metricsRef.current = [];
      interactionsRef.current = [];
    } catch (error) {
      console.warn('Failed to send analytics data:', error);
    }
  };

  // This component doesn't render anything
  return null;
}

// Hook for functional components to use analytics
export function useAnalytics() {
  const trackEvent = useCallback((event: string, category: string, action: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.trackEvent(event, category, action, label, value);
    }
  }, []);

  const trackPerformance = useCallback((name: string, value: number, unit?: string) => {
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.trackPerformance(name, value, unit);
    }
  }, []);

  const trackInteraction = useCallback((type: UserInteraction['type'], element: string, metadata?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.trackInteraction(type, element, metadata);
    }
  }, []);

  return { trackEvent, trackPerformance, trackInteraction };
}