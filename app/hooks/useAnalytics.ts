import { useEffect, useCallback } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  // Track page views
  const trackPageView = useCallback((pagePath: string, pageTitle?: string) => {
    if (typeof window === 'undefined') return;

    // Google Analytics 4
    if ((window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pagePath,
        page_title: pageTitle
      });
    }

    // Custom analytics
    const event = {
      type: 'page_view',
      page: pagePath,
      title: pageTitle || document.title,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    // Store in localStorage for debugging
    if (process.env.NODE_ENV === 'development') {
      try {
        const events = JSON.parse(localStorage.getItem('analyticsEvents') || '[]');
        events.push(event);
        localStorage.setItem('analyticsEvents', JSON.stringify(events.slice(-100))); // Keep last 100 events
      } catch {
        // Ignore localStorage errors
      }
    }
  }, []);

  // Track custom events
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (typeof window === 'undefined') return;

    // Google Analytics 4
    if ((window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value
      });
    }

    // Custom analytics
    const customEvent = {
      type: 'custom_event',
      ...event,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    // Store in localStorage for debugging
    if (process.env.NODE_ENV === 'development') {
      try {
        const events = JSON.parse(localStorage.getItem('analyticsEvents') || '[]');
        events.push(customEvent);
        localStorage.setItem('analyticsEvents', JSON.stringify(events.slice(-100)));
      } catch {
        // Ignore localStorage errors
      }
    }
  }, []);

  // Track performance metrics
  const trackPerformance = useCallback((metrics: any) => {
    if (typeof window === 'undefined') return;

    // Google Analytics 4
    if ((window as any).gtag) {
      Object.entries(metrics).forEach(([key, value]) => {
        (window as any).gtag('event', 'performance_metric', {
          event_category: 'Performance',
          event_label: key,
          value: Math.round(Number(value))
        });
      });
    }
  }, []);

  // Track user interactions
  const trackInteraction = useCallback((element: string, action: string) => {
    trackEvent({
      action,
      category: 'User Interaction',
      label: element
    });
  }, [trackEvent]);

  // Initialize analytics
  useEffect(() => {
    // Track initial page view
    trackPageView(window.location.pathname, document.title);

    // Track route changes
    const handleRouteChange = () => {
      trackPageView(window.location.pathname, document.title);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackPageView]);

  return {
    trackPageView,
    trackEvent,
    trackPerformance,
    trackInteraction
  };
};