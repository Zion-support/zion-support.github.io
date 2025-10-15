import { useState, useEffect, useCallback } from 'react';

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

interface AnalyticsState {
  isInitialized: boolean;
  events: AnalyticsEvent[];
  sessionId: string;
}

export function useAnalytics() {
  const [state, setState] = useState<AnalyticsState>({
    isInitialized: false,
    events: [],
    sessionId: ''
  });

  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      timestamp: Date.now()
    };

    setState(prev => ({
      ...prev,
      events: [...prev.events, event]
    }));

    // Send to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as { gtag: (command: string, eventName: string, parameters?: Record<string, any>) => void }).gtag('event', eventName, properties);
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', event);
    }
  }, []);

  const trackPageView = useCallback((pageName: string, pageUrl: string) => {
    trackEvent('page_view', {
      page_name: pageName,
      page_url: pageUrl
    });
  }, [trackEvent]);

  useEffect(() => {
    // Initialize analytics
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    setState(prev => ({
      ...prev,
      isInitialized: true,
      sessionId
    }));

    // Track initial page view
    trackPageView(document.title, window.location.href);
  }, [trackPageView]);

  return { 
    state, 
    trackEvent, 
    trackPageView,
    isInitialized: state.isInitialized 
  };
}
