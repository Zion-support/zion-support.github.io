import { useState, useEffect, useCallback } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface AnalyticsConfig {
  trackingId?: string;
  enabled: boolean;
  debug: boolean;
  sampleRate: number;
}

interface AnalyticsState {
  isLoaded: boolean;
  isEnabled: boolean;
  error: string | null;
}

const defaultConfig: AnalyticsConfig = {
  enabled: true,
  debug: process.env.NODE_ENV === 'development',
  sampleRate: 1.0,
};

export function useAnalytics(config: AnalyticsConfig = defaultConfig) {
  const [state, setState] = useState<AnalyticsState>({
    isLoaded: false,
    isEnabled: config.enabled,
    error: null,
  });

  // Initialize analytics
  useEffect(() => {
    if (!config.enabled) return;

    const initializeAnalytics = () => {
      try {
        // Load Google Analytics if tracking ID is provided
        if (config.trackingId && typeof window !== 'undefined') {
          // Load gtag script
          const script = document.createElement('script');
          script.async = true;
          script.src = `https://www.googletagmanager.com/gtag/js?id=${config.trackingId}`;
          document.head.appendChild(script);

          // Initialize gtag
          (window as any).dataLayer = (window as any).dataLayer || [];
          function gtag(...args: any[]) {
            (window as any).dataLayer.push(args);
          }
          (window as any).gtag = gtag;
          gtag('js', new Date());
          gtag('config', config.trackingId, {
            page_title: document.title,
            page_location: window.location.href,
          });

          setState(prev => ({ ...prev, isLoaded: true }));
        } else {
          setState(prev => ({ ...prev, isLoaded: true }));
        }
      } catch (error) {
        setState(prev => ({
          ...prev,
          error: error instanceof Error ? error.message : 'Failed to initialize analytics',
        }));
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeAnalytics);
    } else {
      initializeAnalytics();
    }
  }, [config.trackingId, config.enabled]);

  // Track page view
  const trackPageView = useCallback((pagePath?: string, pageTitle?: string) => {
    if (!state.isLoaded || !state.isEnabled) return;

    try {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', config.trackingId, {
          page_path: pagePath || window.location.pathname,
          page_title: pageTitle || document.title,
        });
      }

      if (config.debug) {
        console.log('[Analytics] Page view tracked:', {
          path: pagePath || window.location.pathname,
          title: pageTitle || document.title,
        });
      }
    } catch (error) {
      console.error('[Analytics] Failed to track page view:', error);
    }
  }, [state.isLoaded, state.isEnabled, config.trackingId, config.debug]);

  // Track custom event
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (!state.isLoaded || !state.isEnabled) return;

    try {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          ...event.custom_parameters,
        });
      }

      if (config.debug) {
        console.log('[Analytics] Event tracked:', event);
      }
    } catch (error) {
      console.error('[Analytics] Failed to track event:', error);
    }
  }, [state.isLoaded, state.isEnabled, config.debug]);

  // Track conversion
  const trackConversion = useCallback((conversionId: string, value?: number, currency: string = 'USD') => {
    if (!state.isLoaded || !state.isEnabled) return;

    try {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: conversionId,
          value: value,
          currency: currency,
        });
      }

      if (config.debug) {
        console.log('[Analytics] Conversion tracked:', { conversionId, value, currency });
      }
    } catch (error) {
      console.error('[Analytics] Failed to track conversion:', error);
    }
  }, [state.isLoaded, state.isEnabled, config.debug]);

  // Track user engagement
  const trackEngagement = useCallback((action: string, element: string, value?: number) => {
    trackEvent({
      action,
      category: 'User Engagement',
      label: element,
      value,
    });
  }, [trackEvent]);

  // Track performance
  const trackPerformance = useCallback((metricName: string, value: number, unit: string = 'ms') => {
    trackEvent({
      action: 'performance_metric',
      category: 'Performance',
      label: metricName,
      value: Math.round(value),
      custom_parameters: {
        metric_unit: unit,
      },
    });
  }, [trackEvent]);

  // Track error
  const trackError = useCallback((error: Error, fatal: boolean = false) => {
    trackEvent({
      action: 'error',
      category: 'Error',
      label: error.message,
      value: fatal ? 1 : 0,
      custom_parameters: {
        error_fatal: fatal,
        error_stack: error.stack,
      },
    });
  }, [trackEvent]);

  return {
    ...state,
    trackPageView,
    trackEvent,
    trackConversion,
    trackEngagement,
    trackPerformance,
    trackError,
  };
}
