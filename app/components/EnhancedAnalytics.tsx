'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
  identifyUser: (userId: string, traits?: Record<string, any>) => void;
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
  trackingId?: string;
  enableTracking?: boolean;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  trackingId,
  enableTracking = true
}) => {
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize analytics
  useEffect(() => {
    if (!enableTracking || !trackingId) return;

    // Initialize Google Analytics or other tracking service
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.gtag = window.gtag || function() {
        (window.gtag.q = window.gtag.q || []).push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', trackingId);
      setIsInitialized(true);
    };
  }, [trackingId, enableTracking]);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!enableTracking || !isInitialized) return;

    if (window.gtag) {
      window.gtag('event', eventName, properties);
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    if (!enableTracking || !isInitialized) return;

    if (window.gtag) {
      window.gtag('config', trackingId, {
        page_title: pageName,
        page_location: window.location.href,
        ...properties
      });
    }
  };

  const identifyUser = (userId: string, traits?: Record<string, any>) => {
    if (!enableTracking || !isInitialized) return;

    if (window.gtag) {
      window.gtag('config', trackingId, {
        user_id: userId,
        ...traits
      });
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    identifyUser
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
