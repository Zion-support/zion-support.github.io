"use client";
import React, { useCallback, useEffect, useState } from 'react';

type AnalyticsEvent = {
  name: string;
  category: string;
  action?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
};

type PerformanceMetrics = {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
};

const AnalyticsManager: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initializeAnalytics();
    trackPageView();
    startSessionTimer();
    return () => {
      endSession();
    };
  }, []);

  const initializeAnalytics = useCallback(() => {
    const gtagFn = (window as any).gtag as undefined | ((...args: any[]) => void);
    if (typeof gtagFn === 'function') {
      gtagFn('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
    initializeCustomAnalytics();
    setIsInitialized(true);
  }, []);

  const initializeCustomAnalytics = useCallback(() => {
    const sessionId = generateSessionId();
    const userId = getUserId();
    sessionStorage.setItem('analytics_session_id', sessionId);
    sessionStorage.setItem('analytics_user_id', userId);
    sessionStorage.setItem('analytics_start_time', Date.now().toString());
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
    const pageData = {};
    sendAnalyticsEvent({
      name: 'page_view',
      category: 'Navigation',
      action: 'view',
      label: window.location.pathname,
      custom_parameters: pageData,
    });
  }, []);

  const trackEventFn = useCallback(
    (event: AnalyticsEvent) => {
      if (!isInitialized) return;
      const gtagFn = (window as any).gtag as undefined | ((...args: any[]) => void);
      if (typeof gtagFn === 'function') {
        gtagFn('event', event.name, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          ...event.custom_parameters,
        });
      }
      sendAnalyticsEvent(event);
    },
    [isInitialized]
  );

  const sendAnalyticsEvent = useCallback(async (event: AnalyticsEvent) => {
    try {
      const eventData = { ...event, ts: Date.now() };
      void eventData;
    } catch (err) {
      // no-op
    }
  }, []);

  const trackPerformance = useCallback((metrics: PerformanceMetrics) => {
    sendAnalyticsEvent({ name: 'performance_metrics', category: 'Performance', action: 'measure', custom_parameters: metrics });
  }, [sendAnalyticsEvent]);

  const trackConversion = useCallback(
    (conversionType: string, value?: number) => {
      trackEventFn({ name: 'conversion', category: 'Conversion', action: conversionType, ...(value !== undefined && { value }) });
    },
    [trackEventFn]
  );

  const startSessionTimer = useCallback(() => {
    const updateSessionDuration = () => {
      const start = parseInt(sessionStorage.getItem('analytics_start_time') || '0');
      const duration = Date.now() - start;
      void duration;
    };
    const interval = setInterval(updateSessionDuration, 1000);
    (window as any).analyticsSessionInterval = interval;
  }, []);

  const endSession = useCallback(() => {
    const interval = (window as any).analyticsSessionInterval;
    if (interval) clearInterval(interval);
    const sessionDuration = Date.now() - parseInt(sessionStorage.getItem('analytics_start_time') || '0');
    trackEventFn({ name: 'session_end', category: 'Session', action: 'end', value: sessionDuration });
  }, [trackEventFn]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      const button = target.closest('button');
      if (link) {
        trackEventFn({ name: 'link_click', category: 'Interaction', action: 'click', label: (link as HTMLAnchorElement).href });
      } else if (button) {
        trackEventFn({ name: 'button_click', category: 'Interaction', action: 'click', label: (button as HTMLButtonElement).textContent || (button as HTMLButtonElement).className });
      }
    };

    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > 0 && scrollPercent % 25 === 0) {
        trackEventFn({ name: 'scroll_depth', category: 'Engagement', action: 'scroll', value: scrollPercent });
      }
    };

    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      trackEventFn({ name: 'form_submit', category: 'Form', action: 'submit', label: form.action || form.className });
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('submit', handleFormSubmit);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, [trackEventFn]);

  useEffect(() => {
    (window as any).analytics = {
      track: trackEventFn,
      trackConversion,
      trackPerformance,
    };
  }, [trackEventFn, trackConversion, trackPerformance]);

  return null;
};

export default AnalyticsManager;