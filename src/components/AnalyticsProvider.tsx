'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, pagePath?: string) => void;
  setUserId: (userId: string) => void;
  setUserProperties: (properties: Record<string, unknown>) => void;
}

interface AnalyticsProviderProps {
  children: ReactNode;
  trackingId?: string;
  enableDebug?: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  trackingId = 'G-XXXXXXXXXX',
  enableDebug = false,
}) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Google Analytics
    if (trackingId && trackingId !== 'G-XXXXXXXXXX') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      setIsInitialized(true);
    }
  }, [trackingId]);

  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (enableDebug) {
      console.log('Analytics Event:', eventName, parameters);
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string, pagePath?: string) => {
    if (enableDebug) {
      console.log('Analytics Page View:', pageName, pagePath);
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', trackingId, {
        page_title: pageName,
        page_location: pagePath || window.location.href,
      });
    }
  };

  const setUserId = (userId: string) => {
    if (enableDebug) {
      console.log('Analytics User ID:', userId);
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', trackingId, {
        user_id: userId,
      });
    }
  };

  const setUserProperties = (properties: Record<string, unknown>) => {
    if (enableDebug) {
      console.log('Analytics User Properties:', properties);
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', trackingId, {
        custom_map: properties,
      });
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUserId,
    setUserProperties,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;