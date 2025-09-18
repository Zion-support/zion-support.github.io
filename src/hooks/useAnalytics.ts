import { useEffect, useCallback, useRef } from 'react';
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}
interface PageView {
  page_title: string;
  page_location: string;
  page_path: string;
  custom_parameters?: Record<string, any>;
}
interface UserProperties {
  user_id?: string;
  session_id?: string;
  custom_properties?: Record<string, any>;
}
export const useAnalytics = () => {
  const sessionIdRef = useRef<string>(generateSessionId());
  const userIdRef = useRef<string | null>(null);
  const isInitializedRef = useRef<boolean>(false);
  // Generate a unique session ID
  function generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  // Initialize analytics
  const initializeAnalytics = useCallback(() => {
    if (isInitializedRef.current) return;
    // Set up user properties
    const storedUserId = localStorage.getItem('analytics_user_id');
    if (storedUserId) {
      userIdRef.current = storedUserId;
    } else {
      const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      userIdRef.current = newUserId;
      localStorage.setItem('analytics_user_id', newUserId);
    }
    // Track page view on initialization
    trackPageView({
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
    isInitializedRef.current = true;
  }, []);
  // Track page views
  const trackPageView = useCallback((pageView: PageView) => {
    const event = {
      event: 'page_view',
      page_title: pageView.page_title,
      page_location: pageView.page_location,
      page_path: pageView.page_path,
      session_id: sessionIdRef.current,
      user_id: userIdRef.current,
      timestamp: new Date().toISOString(),
      custom_parameters: pageView.custom_parameters || {}
    };
    // Send to analytics service
    sendAnalyticsEvent(event);
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Page View:', event);
    }
  }, []);
  // Track custom events
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    const analyticsEvent = {
      event: 'custom_event',
      action: event.action,
      category: event.category,
      label: event.label,
      value: event.value,
      session_id: sessionIdRef.current,
      user_id: userIdRef.current,
      timestamp: new Date().toISOString(),
      custom_parameters: event.custom_parameters || {}
    };
    // Send to analytics service
    sendAnalyticsEvent(analyticsEvent);
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', analyticsEvent);
    }
  }, []);
  // Track user interactions
  const trackInteraction = useCallback((
    element: string,
    action: string,
    details?: Record<string, any>
  ) => {
    trackEvent({
      action: action,
      category: 'user_interaction',
      label: element,
      custom_parameters: {
        element_type: typeof element,
        ...details
      }
    });
  }, [trackEvent]);
  // Track performance metrics
  const trackPerformance = useCallback((metrics: {
    load_time?: number;
    first_contentful_paint?: number;
    largest_contentful_paint?: number;
    first_input_delay?: number;
    cumulative_layout_shift?: number;
  }) => {
    trackEvent({
      action: 'performance_metrics',
      category: 'performance',
      custom_parameters: metrics
    });
  }, [trackEvent]);
  // Track errors
  const trackError = useCallback((error: Error, context?: string) => {
    trackEvent({
      action: 'error_occurred',
      category: 'error',
      label: error.name,
      custom_parameters: {
        error_message: error.message,
        error_stack: error.stack,
        context: context || 'unknown',
        url: window.location.href,
        user_agent: navigator.userAgent
      }
    });
  }, [trackEvent]);
  // Track conversions
  const trackConversion = useCallback((
    conversionType: string,
    value?: number,
    currency?: string
  ) => {
    trackEvent({
      action: 'conversion',
      category: 'conversion',
      label: conversionType,
      value: value,
      custom_parameters: {
        currency: currency || 'USD',
        conversion_type: conversionType
      }
    });
  }, [trackEvent]);
  // Send analytics event to service
  const sendAnalyticsEvent = useCallback((event: any) => {
    // In production, this would send to your analytics service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics, Mixpanel, etc.
      // gtag('event', event.event, event);
      // mixpanel.track(event.event, event);
    }
    // Store locally for debugging
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    events.push(event);
    // Keep only last 100 events
    if (events.length > 100) {
      events.splice(0, events.length - 100);
    }
    localStorage.setItem('analytics_events', JSON.stringify(events));
  }, []);
  // Get analytics data
  const getAnalyticsData = useCallback(() => {
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    return {
      events,
      session_id: sessionIdRef.current,
      user_id: userIdRef.current,
      total_events: events.length
    };
  }, []);
  // Clear analytics data
  const clearAnalyticsData = useCallback(() => {
    localStorage.removeItem('analytics_events');
    localStorage.removeItem('analytics_user_id');
    sessionIdRef.current = generateSessionId();
    userIdRef.current = null;
    isInitializedRef.current = false;
  }, []);
  // Set user properties
  const setUserProperties = useCallback((properties: UserProperties) => {
    if (properties.user_id) {
      userIdRef.current = properties.user_id;
      localStorage.setItem('analytics_user_id', properties.user_id);
    }
    if (properties.custom_properties) {
      localStorage.setItem('analytics_user_properties', JSON.stringify(properties.custom_properties));
    }
  }, []);
  // Initialize on mount
  useEffect(() => {
    initializeAnalytics();
  }, [initializeAnalytics]);
  return {
    trackPageView,
    trackEvent,
    trackInteraction,
    trackPerformance,
    trackError,
    trackConversion,
    getAnalyticsData,
    clearAnalyticsData,
    setUserProperties,
    sessionId: sessionIdRef.current,
    userId: userIdRef.current
  };
};
