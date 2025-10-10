'use client';

import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    console.warn('useAnalytics must be used within an AnalyticsProvider');
    return null;
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
  trackingId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  trackingId = 'G-XXXXXXXXXX'
}) => {
  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.gtag) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.gtag = function() {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [trackingId]);

  const track = useCallback((event: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, parameters);
    }
  }, []);

  const page = useCallback((pageName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: pageName,
        page_location: window.location.href,
        ...parameters
      });
    }
  }, [trackingId]);

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        user_id: userId,
        custom_map: traits
      });
    }
  }, [trackingId]);

  const value: AnalyticsContextType = {
    track,
    page,
    identify
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Hook for page tracking
export const usePageTracking = (pageName: string, pagePath: string) => {
  const analytics = useAnalytics();

  useEffect(() => {
    if (analytics) {
      analytics.page(pageName, {
        page_path: pagePath,
        page_title: pageName
      });
    }
  }, [analytics, pageName, pagePath]);
};

// Hook for event tracking
export const useEventTracking = () => {
  const analytics = useAnalytics();

  const trackButtonClick = useCallback((buttonName: string, location: string) => {
    if (analytics) {
      analytics.track('button_click', {
        button_name: buttonName,
        location: location,
        timestamp: new Date().toISOString()
      });
    }
  }, [analytics]);

  const trackPhoneClick = useCallback(() => {
    if (analytics) {
      analytics.track('phone_click', {
        timestamp: new Date().toISOString()
      });
    }
  }, [analytics]);

  const trackEmailClick = useCallback(() => {
    if (analytics) {
      analytics.track('email_click', {
        timestamp: new Date().toISOString()
      });
    }
  }, [analytics]);

  const trackServiceView = useCallback((serviceName: string) => {
    if (analytics) {
      analytics.track('service_view', {
        service_name: serviceName,
        timestamp: new Date().toISOString()
      });
    }
  }, [analytics]);

  return {
    trackButtonClick,
    trackPhoneClick,
    trackEmailClick,
    trackServiceView
  };
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}