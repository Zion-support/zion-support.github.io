'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (page: string) => void;
  trackPerformance: (metric: string, value: number) => void;
  trackError: (error: Error, context?: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
  googleAnalyticsId?: string;
  enableDebug?: boolean;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID,
  enableDebug = process.env.NODE_ENV === 'development',
}) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !googleAnalyticsId) return;

    // Initialize Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: unknown[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;

      gtag('js', new Date());
      gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      setIsInitialized(true);
    };

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [googleAnalyticsId]);

  const trackEvent = (event: AnalyticsEvent) => {
    if (!isInitialized || typeof window === 'undefined') return;

    if (enableDebug) {
      // eslint-disable-next-line no-console
      console.log('Analytics Event:', event);
    }

    if ((window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  };

  const trackPageView = (page: string) => {
    if (!isInitialized || typeof window === 'undefined') return;

    if (enableDebug) {
      // eslint-disable-next-line no-console
      console.log('Page View:', page);
    }

    if ((window as any).gtag) {
      (window as any).gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: page,
      });
    }
  };

  const trackPerformance = (metric: string, value: number) => {
    if (!isInitialized || typeof window === 'undefined') return;

    if (enableDebug) {
      // eslint-disable-next-line no-console
      console.log('Performance Metric:', metric, value);
    }

    if ((window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: metric,
        value: Math.round(value),
        non_interaction: true,
      });
    }
  };

  const trackError = (error: Error, context?: string) => {
    if (!isInitialized || typeof window === 'undefined') return;

    if (enableDebug) {
      // eslint-disable-next-line no-console
      console.error('Analytics Error:', error, context);
    }

    if ((window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          context: context || 'unknown',
        },
      });
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackPerformance,
    trackError,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;