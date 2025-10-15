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
  content_group1?: string;
  content_group2?: string;
}

interface UserProperties {
  user_id?: string;
  session_id?: string;
  custom_parameters?: Record<string, any>;
}

interface AnalyticsConfig {
  enableGoogleAnalytics: boolean;
  enableCustomAnalytics: boolean;
  enablePageViews: boolean;
  enableUserTracking: boolean;
  enableEcommerce: boolean;
  enablePerformanceTracking: boolean;
  sampleRate: number;
  debugMode: boolean;
}

const defaultConfig: AnalyticsConfig = {
  enableGoogleAnalytics: true,
  enableCustomAnalytics: true,
  enablePageViews: true,
  enableUserTracking: true,
  enableEcommerce: true,
  enablePerformanceTracking: true,
  sampleRate: 1.0,
  debugMode: process.env.NODE_ENV === 'development',
};

export const useAnalytics = (config: Partial<AnalyticsConfig> = {}) => {
  const configRef = useRef({ ...defaultConfig, ...config });
  const sessionIdRef = useRef(generateSessionId());
  const userIdRef = useRef(getUserId());
  const pageViewCountRef = useRef(0);

  // Generate unique session ID
  function generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Get or create user ID
  function getUserId(): string {
    if (typeof window === 'undefined') return 'unknown';
    
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  }

  // Initialize Google Analytics
  const initializeGoogleAnalytics = useCallback(() => {
    if (!configRef.current.enableGoogleAnalytics || typeof window === 'undefined') return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        dimension1: 'user_id',
        dimension2: 'session_id',
      },
    });

    // Set user properties
    if (configRef.current.enableUserTracking) {
      gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
        user_id: userIdRef.current,
        custom_map: {
          dimension1: userIdRef.current,
          dimension2: sessionIdRef.current,
        },
      });
    }
  }, []);

  // Track page view
  const trackPageView = useCallback((pageData?: Partial<PageView>) => {
    if (!configRef.current.enablePageViews) return;

    const pageView: PageView = {
      page_title: pageData?.page_title || document.title,
      page_location: pageData?.page_location || window.location.href,
      page_path: pageData?.page_path || window.location.pathname,
      content_group1: pageData?.content_group1 || 'Website',
      content_group2: pageData?.content_group2 || 'Page',
    };

    pageViewCountRef.current++;

    // Google Analytics
    if (configRef.current.enableGoogleAnalytics && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageView.page_title,
        page_location: pageView.page_location,
        page_path: pageView.page_path,
        content_group1: pageView.content_group1,
        content_group2: pageView.content_group2,
        custom_map: {
          dimension1: userIdRef.current,
          dimension2: sessionIdRef.current,
        },
      });
    }

    // Custom Analytics
    if (configRef.current.enableCustomAnalytics) {
      sendCustomEvent('page_view', 'Navigation', pageView.page_title, pageViewCountRef.current, pageView);
    }

    if (configRef.current.debugMode) {
      console.log('[Analytics] Page View:', pageView);
    }
  }, []);

  // Track custom event
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (Math.random() > configRef.current.sampleRate) return;

    // Google Analytics
    if (configRef.current.enableGoogleAnalytics && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameters: event.custom_parameters,
        custom_map: {
          dimension1: userIdRef.current,
          dimension2: sessionIdRef.current,
        },
      });
    }

    // Custom Analytics
    if (configRef.current.enableCustomAnalytics) {
      sendCustomEvent(event.action, event.category, event.label, event.value, event.custom_parameters);
    }

    if (configRef.current.debugMode) {
      console.log('[Analytics] Event:', event);
    }
  }, []);

  // Track ecommerce event
  const trackEcommerce = useCallback((eventName: string, ecommerceData: any) => {
    if (!configRef.current.enableEcommerce) return;

    // Google Analytics Enhanced Ecommerce
    if (configRef.current.enableGoogleAnalytics && window.gtag) {
      window.gtag('event', eventName, {
        ecommerce: ecommerceData,
        custom_map: {
          dimension1: userIdRef.current,
          dimension2: sessionIdRef.current,
        },
      });
    }

    // Custom Analytics
    if (configRef.current.enableCustomAnalytics) {
      sendCustomEvent(eventName, 'Ecommerce', undefined, undefined, ecommerceData);
    }

    if (configRef.current.debugMode) {
      console.log('[Analytics] Ecommerce:', eventName, ecommerceData);
    }
  }, []);

  // Track user engagement
  const trackEngagement = useCallback((action: string, value?: number, label?: string) => {
    trackEvent({
      action,
      category: 'Engagement',
      label,
      value,
      custom_parameters: {
        timestamp: Date.now(),
        page_url: window.location.href,
        user_id: userIdRef.current,
        session_id: sessionIdRef.current,
      },
    });
  }, [trackEvent]);

  // Track performance metrics
  const trackPerformance = useCallback((metricName: string, value: number, additionalData?: Record<string, any>) => {
    if (!configRef.current.enablePerformanceTracking) return;

    trackEvent({
      action: metricName,
      category: 'Performance',
      label: 'Web Vitals',
      value: Math.round(value),
      custom_parameters: {
        ...additionalData,
        timestamp: Date.now(),
        page_url: window.location.href,
      },
    });
  }, [trackEvent]);

  // Send custom event to analytics endpoint
  const sendCustomEvent = useCallback(async (action: string, category: string, label?: string, value?: number, customParameters?: Record<string, any>) => {
    if (process.env.NODE_ENV !== 'production') return;

    try {
      await fetch('/api/analytics/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action,
          category,
          label,
          value,
          custom_parameters: customParameters,
          user_id: userIdRef.current,
          session_id: sessionIdRef.current,
          timestamp: Date.now(),
          page_url: window.location.href,
          user_agent: navigator.userAgent,
        }),
      });
    } catch (error) {
      if (configRef.current.debugMode) {
        console.warn('[Analytics] Failed to send custom event:', error);
      }
    }
  }, []);

  // Set user properties
  const setUserProperties = useCallback((properties: UserProperties) => {
    if (!configRef.current.enableUserTracking) return;

    // Update user ID if provided
    if (properties.user_id && properties.user_id !== userIdRef.current) {
      userIdRef.current = properties.user_id;
      localStorage.setItem('analytics_user_id', properties.user_id);
    }

    // Google Analytics user properties
    if (configRef.current.enableGoogleAnalytics && window.gtag) {
      window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
        user_id: userIdRef.current,
        custom_map: {
          dimension1: userIdRef.current,
          dimension2: sessionIdRef.current,
          ...properties.custom_parameters,
        },
      });
    }

    if (configRef.current.debugMode) {
      console.log('[Analytics] User Properties Set:', properties);
    }
  }, []);

  // Initialize analytics
  useEffect(() => {
    initializeGoogleAnalytics();
    
    // Track initial page view
    if (configRef.current.enablePageViews) {
      trackPageView();
    }

    // Track session start
    trackEvent({
      action: 'session_start',
      category: 'Session',
      label: 'User Session',
      custom_parameters: {
        session_id: sessionIdRef.current,
        user_id: userIdRef.current,
        timestamp: Date.now(),
      },
    });
  }, [initializeGoogleAnalytics, trackPageView, trackEvent]);

  // Track page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        trackEvent({
          action: 'page_visible',
          category: 'Engagement',
          label: 'Page Visibility',
        });
      } else {
        trackEvent({
          action: 'page_hidden',
          category: 'Engagement',
          label: 'Page Visibility',
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [trackEvent]);

  return {
    trackPageView,
    trackEvent,
    trackEcommerce,
    trackEngagement,
    trackPerformance,
    setUserProperties,
    sessionId: sessionIdRef.current,
    userId: userIdRef.current,
  };
};