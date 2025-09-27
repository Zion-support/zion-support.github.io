import React, { useEffect, useState, useCallback } from 'react';

interface AnalyticsEvent {
  id: string;
  type: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
  url: string;
  userAgent: string;
  metadata?: Record<string, any>;
}

interface UserSession {
  sessionId: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  events: number;
  userId?: string;
}

interface AnalyticsConfig {
  trackingId?: string;
  debug?: boolean;
  userId?: string;
  customDimensions?: Record<string, any>;
}

export const useAdvancedAnalytics = (config: AnalyticsConfig = {}) => {
  const [session, setSession] = useState<UserSession | null>(null);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize analytics session
  useEffect(() => {
    const initializeSession = () => {
      const sessionId = generateSessionId();
      const newSession: UserSession = {
        sessionId,
        startTime: Date.now(),
        lastActivity: Date.now(),
        pageViews: 0,
        events: 0,
        userId: config.userId
      };

      setSession(newSession);
      setIsInitialized(true);

      // Track page view
      trackEvent({
        type: 'page_view',
        category: 'engagement',
        action: 'page_load',
        label: window.location.pathname,
        metadata: {
          referrer: document.referrer,
          timestamp: Date.now()
        }
      });

      if (config.debug) {
        console.log('Analytics initialized:', newSession);
      }
    };

    if (!isInitialized) {
      initializeSession();
    }
  }, [config.debug, config.userId, isInitialized]);

  // Track custom events
  const trackEvent = useCallback((eventData: Partial<AnalyticsEvent>) => {
    if (!session) return;

    const event: AnalyticsEvent = {
      id: generateEventId(),
      timestamp: Date.now(),
      sessionId: session.sessionId,
      userId: config.userId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      ...eventData
    } as AnalyticsEvent;

    setEvents(prev => [...prev, event]);

    // Update session activity
    setSession(prev => prev ? {
      ...prev,
      lastActivity: Date.now(),
      events: prev.events + 1
    } : null);

    // Send to analytics service (implement your preferred service)
    sendToAnalyticsService(event);

    if (config.debug) {
      console.log('Event tracked:', event);
    }
  }, [session, config.userId, config.debug]);

  // Track page views
  const trackPageView = useCallback((page?: string) => {
    const pagePath = page || window.location.pathname;
    
    trackEvent({
      type: 'page_view',
      category: 'navigation',
      action: 'page_view',
      label: pagePath
    });

    setSession(prev => prev ? {
      ...prev,
      pageViews: prev.pageViews + 1
    } : null);
  }, [trackEvent]);

  // Track user interactions
  const trackInteraction = useCallback((
    element: string,
    action: string,
    category: string = 'interaction',
    value?: number
  ) => {
    trackEvent({
      type: 'interaction',
      category,
      action,
      label: element,
      value
    });
  }, [trackEvent]);

  // Track performance metrics
  const trackPerformance = useCallback((metric: string, value: number) => {
    trackEvent({
      type: 'performance',
      category: 'performance',
      action: metric,
      value
    });
  }, [trackEvent]);

  // Track errors
  const trackError = useCallback((error: Error, context?: string) => {
    trackEvent({
      type: 'error',
      category: 'error',
      action: 'error_occurred',
      label: error.message,
      metadata: {
        stack: error.stack,
        context,
        timestamp: Date.now()
      }
    });
  }, [trackEvent]);

  // Get session summary
  const getSessionSummary = useCallback(() => {
    if (!session) return null;

    const duration = Date.now() - session.startTime;
    return {
      ...session,
      duration,
      averageTimePerPage: session.pageViews > 0 ? duration / session.pageViews : 0
    };
  }, [session]);

  // Get events by type
  const getEventsByType = useCallback((type: string) => {
    return events.filter(event => event.type === type);
  }, [events]);

  // Get events by category
  const getEventsByCategory = useCallback((category: string) => {
    return events.filter(event => event.category === category);
  }, [events]);

  return {
    session,
    events,
    isInitialized,
    trackEvent,
    trackPageView,
    trackInteraction,
    trackPerformance,
    trackError,
    getSessionSummary,
    getEventsByType,
    getEventsByCategory
  };
};

// Utility functions
const generateSessionId = (): string => {
  return 'session_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
};

const generateEventId = (): string => {
  return 'event_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
};

const sendToAnalyticsService = (event: AnalyticsEvent) => {
  // Implement your analytics service integration here
  // Examples: Google Analytics, Mixpanel, Amplitude, etc.
  
  // For now, just log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics event:', event);
  }

  // Example: Send to custom analytics endpoint
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(event)
  // }).catch(console.error);
};