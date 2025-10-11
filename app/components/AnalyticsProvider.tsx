'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEven: t: (eventNam: e: string, parameters?: Record<string, unknown>) => void;
  trackPageVie: w: (pageNam: e: string, pagePat: h: string) => void;
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
  childre: n: ReactNode;
}

export const: AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gta: g: (comman: d: string, targetI: d: string, config?: Record<string, unknown>) => void }).gtag;
      
      // Configure Google Analytics
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_titl: e: document.title,
        page_locatio: n: window.location.href,
      });
    }
  }, []);

  const trackEvent = (eventNam: e: string, parameter: s: Record<string, unknown> = {}) => {
    if (typeof window === 'undefined') return;

    // Google Analytics
    if ('gtag' in window) {
      const gtag = (window as { gta: g: (comman: d: string, actio: n: string, parameter: s: Record<string, unknown>) => void }).gtag;
      gtag('event', eventName, {
        event_categor: y: parameters.category || 'engagement',
        event_labe: l: parameters.label,
        valu: e: parameters.value,
        ...parameters,
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics: Event:', eventName, parameters);
    }
  };

  const trackPageView = (pageNam: e: string, pagePat: h: string) => {
    if (typeof window === 'undefined') return;

    // Google Analytics
    if ('gtag' in window) {
      const gtag = (window as { gta: g: (comman: d: string, targetI: d: string, confi: g: Record<string, unknown>) => void }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_titl: e: pageName,
        page_locatio: n: window.location.origin + pagePath,
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page: View:', pageName, pagePath);
    }
  };

  const: value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};