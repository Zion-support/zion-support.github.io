'use client';

import { useEffect, useState, useCallback } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

declare const gtag: (...args: any[]) => void;

interface AnalyticsEvent {
  name: string;
  category: string;
  action?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
}

interface UserBehavior {
  pageViews: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
}

const AnalyticsManager: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [userBehavior, setUserBehavior] = useState<UserBehavior>({
    pageViews: 0, sessionDuration: 0,
    bounceRate: 0, conversionRate: 0,
  });

  // Initialize analytics
  useEffect(() => {
    initializeAnalytics();
    trackPageView();
    startSessionTimer();
    
    return () => {
      endSession();
    };
  }, []);

  const initializeAnalytics = useCallback(() => {
    // Initialize Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title, page_location: window.location.href,
        custom_map: {
          custom_parameter_1: 'user_type', custom_parameter_2: 'session_id',
        }, });
    }

    // Initialize other analytics services
    initializeCustomAnalytics();
    
    setIsInitialized(true);
  }, []);

  const initializeCustomAnalytics = useCallback(() => {
    // Custom analytics initialization
    const sessionId = generateSessionId();
    const userId = getUserId();
    
    // Store session data
    sessionStorage.setItem('analytics_session_id', sessionId);
    sessionStorage.setItem('analytics_user_id', userId);
    sessionStorage.setItem('analytics_start_time', Date.now().toString());
    
    // Track user properties
    trackUserProperties({
      session_id: sessionId, user_id: userId,
      user_agent: navigator.userAgent, screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`, color_depth: screen.colorDepth,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, language: navigator.language,
    });
  }, []);

  const generateSessionId = useCallback(() => {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }, []);

  const getUserId = useCallback(() => {
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  }, []);

  const trackPageView = useCallback(() => {
    const pageData = {
      page_title: document.title, page_location: window.location.href,
      page_path: window.location.pathname, referrer: document.referrer,
      timestamp: new Date().toISOString(), };

    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', pageData);
    }

    // Custom analytics
    sendAnalyticsEvent({
      name: 'page_view', category: 'Navigation',
      action: 'view', label: window.location.pathname,
      custom_parameters: pageData, });

    // Update user behavior
    setUserBehavior(prev => ({
      ...prev, pageViews: prev.pageViews + 1,
    }));
  }, []);

  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (!isInitialized) return;

    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', event.name, {
        event_category: event.category, event_label: event.label,
        value: event.value, ...event.custom_parameters,
      });
    }

    // Custom analytics
    sendAnalyticsEvent(event);
  }, [isInitialized]);

  const sendAnalyticsEvent = useCallback(async (event: AnalyticsEvent) => {
    try {
      const eventData = {
        ...event, timestamp: new Date().toISOString(), session_id: sessionStorage.getItem('analytics_session_id'), user_id: sessionStorage.getItem('analytics_user_id'), page_url: window.location.href,
        user_agent: navigator.userAgent, };

      // Send to custom analytics endpoint
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', },
        body: JSON.stringify(eventData), });
    } catch (error) {
      console.error('Analytics: Failed to send event', error);
    }
  }, []);

  const trackUserProperties = useCallback((properties: Record<string, any>) => {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        custom_map: properties, });
    }

    // Store in custom analytics
    sendAnalyticsEvent({
      name: 'user_properties', category: 'User',
      action: 'identify', custom_parameters: properties,
    });
  }, []);

  const trackPerformance = useCallback((metrics: PerformanceMetrics) => {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        name: 'FCP', value: Math.round(metrics.fcp), event_category: 'Performance',
      });
      gtag('event', 'web_vitals', {
        name: 'LCP', value: Math.round(metrics.lcp), event_category: 'Performance',
      });
      gtag('event', 'web_vitals', {
        name: 'FID', value: Math.round(metrics.fid), event_category: 'Performance',
      });
      gtag('event', 'web_vitals', {
        name: 'CLS', value: Math.round(metrics.cls * 1000), event_category: 'Performance',
      });
    }

    // Custom analytics
    sendAnalyticsEvent({
      name: 'performance_metrics', category: 'Performance',
      action: 'measure', custom_parameters: metrics,
    });
  }, []);

  const trackConversion = useCallback((conversionType: string, value?: number) => {
    trackEvent({
      name: 'conversion', category: 'Conversion',
      action: conversionType, value: value,
    });

    // Update user behavior
    setUserBehavior(prev => ({
      ...prev, conversionRate: prev.conversionRate + 1,
    }));
  }, [trackEvent]);

  const startSessionTimer = useCallback(() => {
    const startTime = Date.now();
    
    const updateSessionDuration = () => {
      const duration = Date.now() - startTime;
      setUserBehavior(prev => ({
        ...prev, sessionDuration: duration,
      }));
    };

    const interval = setInterval(updateSessionDuration, 1000);
    
    // Store interval ID for cleanup
    (window as any).analyticsSessionInterval = interval;
  }, []);

  const endSession = useCallback(() => {
    const interval = (window as any).analyticsSessionInterval;
    if (interval) {
      clearInterval(interval);
    }

    const sessionDuration = Date.now() - parseInt(sessionStorage.getItem('analytics_start_time') || '0');
    
    trackEvent({
      name: 'session_end', category: 'Session',
      action: 'end', value: sessionDuration,
    });
  }, [trackEvent]);

  // Track user interactions
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      const button = target.closest('button');
      
      if (link) {
        trackEvent({
          name: 'link_click', category: 'Interaction',
          action: 'click', label: link.href,
        });
      } else if (button) {
        trackEvent({
          name: 'button_click', category: 'Interaction',
          action: 'click', label: button.textContent || button.className,
        });
      }
    };

    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercent > 0 && scrollPercent % 25 === 0) {
        trackEvent({
          name: 'scroll_depth', category: 'Engagement',
          action: 'scroll', value: scrollPercent,
        });
      }
    };

    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      trackEvent({
        name: 'form_submit', category: 'Conversion',
        action: 'submit', label: form.action || form.className,
      });
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('submit', handleFormSubmit);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, [trackEvent]);

  // Expose analytics functions globally
  useEffect(() => {
    (window as any).analytics = {
      track: trackEvent, trackConversion,
      trackPerformance, trackUserProperties,
    };
  }, [trackEvent, trackConversion, trackPerformance, trackUserProperties]);

  return null; // This component doesn&apos;t render anything'
};

export default AnalyticsManager;