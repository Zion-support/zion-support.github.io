'use client';
import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
  setUserProperties: (properties: Record<string, any>) => void;
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
  children: ReactNode;
  googleAnalyticsId?: string;
  enableDebug?: boolean;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  googleAnalyticsId,
  enableDebug = false
}) => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window === 'undefined') return;

    if (enableDebug) {
      console.log('Analytics Event:', eventName, parameters);
    }

    // Google Analytics 4
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }

    // Custom analytics tracking
    if (window.analytics) {
      window.analytics.track(eventName, parameters);
    }
  };

  const trackPageView = (pageName: string, pagePath: string) => {
    if (typeof window === 'undefined') return;

    if (enableDebug) {
      console.log('Page View:', pageName, pagePath);
    }

    // Google Analytics 4
    if (window.gtag) {
      window.gtag('config', googleAnalyticsId || 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        page_path: pagePath
      });
    }

    // Custom analytics tracking
    if (window.analytics) {
      window.analytics.page(pageName, {
        path: pagePath,
        url: window.location.href
      });
    }
  };

  const setUserProperties = (properties: Record<string, any>) => {
    if (typeof window === 'undefined') return;

    if (enableDebug) {
      console.log('User Properties:', properties);
    }

    // Google Analytics 4
    if (window.gtag) {
      window.gtag('config', googleAnalyticsId || 'GA_MEASUREMENT_ID', {
        user_properties: properties
      });
    }

    // Custom analytics tracking
    if (window.analytics) {
      window.analytics.identify(properties);
    }
  };

  useEffect(() => {
    // Initialize Google Analytics
    if (googleAnalyticsId && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', googleAnalyticsId);
    }
  }, [googleAnalyticsId]);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUserProperties
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;