'use client';
import React, { createContext, useContext, useEffect, ReactNode } from 'react'
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void
  trackPageView: (pageName: string, pagePath: string) => void
}
const AnalyticsContext;

export const AnalyticsProvider: React.FC</string><AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config?: any) => void }).gtag
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, []);

const trackEvent  = () => {
    if (typeof window === 'undefined') ;

return
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record</AnalyticsProviderProps><string, any>) => void }).gtag
      gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label,
        value: parameters.value,
        ...parameters,
      })
    }
    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters)
    }
  };

const trackPageView  = () => {
    if (typeof window === 'undefined') ;

return
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config: any) => void }).gtag
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.origin + pagePath,
      })
    }
    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageName, pagePath)
    }
  }
  ;

const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };

return (</string>
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
