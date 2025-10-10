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
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', trackingId);
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
  const { page } = useAnalytics() || { page: () => {} };

  useEffect(() => {
    page(pageName, { page_path: pagePath });
  }, [page, pageName, pagePath]);
};

// Hook for event tracking
export const useEventTracking = () => {
  const { track } = useAnalytics() || { track: () => {} };

  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    track('button_click', {
      button_name: buttonName,
      location: location || 'unknown'
    });
  }, [track]);

  const trackPhoneClick = useCallback((phoneNumber: string) => {
    track('phone_click', {
      phone_number: phoneNumber
    });
  }, [track]);

  const trackEmailClick = useCallback((emailAddress: string) => {
    track('email_click', {
      email_address: emailAddress
    });
  }, [track]);

  const trackServiceView = useCallback((serviceName: string) => {
    track('service_view', {
      service_name: serviceName
    });
  }, [track]);

  return {
    trackButtonClick,
    trackPhoneClick,
    trackEmailClick,
    trackServiceView
  };
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}