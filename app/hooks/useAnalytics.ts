import { useState, useCallback } from 'react';

interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
}

interface AnalyticsState {
  isEnabled: boolean;
  userId?: string;
  sessionId: string;
  pageViews: number;
}

export function useAnalytics() {
  const [state, setState] = useState<AnalyticsState>({
    isEnabled: process.env.NODE_ENV === 'production',
    sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    pageViews: 0,
  });

  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (!state.isEnabled) {
      console.log('[Analytics] Event (disabled):', event);
      return;
    }

    // Send to Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_map: event.properties,
      });
    }

    // Send to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          userId: state.userId,
          sessionId: state.sessionId,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(error => {
        console.error('Analytics tracking failed:', error);
      });
    }
  }, [state.isEnabled, state.userId, state.sessionId]);

  const trackPageView = useCallback((page: string, title?: string) => {
    if (!state.isEnabled) return;

    // Google Analytics page view
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title || document.title,
        page_location: page,
      });
    }

    setState(prev => ({
      ...prev,
      pageViews: prev.pageViews + 1,
    }));

    trackEvent({
      name: 'page_view',
      category: 'Navigation',
      action: 'view',
      label: page,
      properties: {
        title: title || document.title,
        referrer: document.referrer,
      },
    });
  }, [state.isEnabled, trackEvent]);

  const trackUserAction = useCallback((action: string, category: string, label?: string, value?: number) => {
    trackEvent({
      name: 'user_action',
      category,
      action,
      label,
      value,
    });
  }, [trackEvent]);

  const trackError = useCallback((error: Error, context?: string) => {
    trackEvent({
      name: 'error',
      category: 'Error',
      action: 'occurred',
      label: error.message,
      properties: {
        errorName: error.name,
        errorStack: error.stack,
        context,
        url: window.location.href,
      },
    });
  }, [trackEvent]);

  const setUserId = useCallback((userId: string) => {
    setState(prev => ({ ...prev, userId }));
  }, []);

  const enableAnalytics = useCallback(() => {
    setState(prev => ({ ...prev, isEnabled: true }));
  }, []);

  const disableAnalytics = useCallback(() => {
    setState(prev => ({ ...prev, isEnabled: false }));
  }, []);

  return {
    state,
    trackEvent,
    trackPageView,
    trackUserAction,
    trackError,
    setUserId,
    enableAnalytics,
    disableAnalytics,
    isEnabled: state.isEnabled,
    sessionId: state.sessionId,
    pageViews: state.pageViews,
  };
}
