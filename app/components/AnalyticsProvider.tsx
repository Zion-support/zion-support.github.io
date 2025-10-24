

'use client';
import React, { createContext, useContext, useEffect } from 'react';

import { createContext, useContext, useEffect} from 'react';
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
interface AnalyticsContextType {trackEvent: (eventName: string, parameters?: Record<string, any   />) => void;
  trackPageView: (pageName: string) => void;}

const AnalyticsContext = createContext<AnalyticsContextType | undefined   />(undefined);
  const context = useContext(AnalyticsContext);
  if (!context) {throw new Error('useAnalytics must be used within an AnalyticsProvider');}
  return context;
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag;
      
      // Configure Google Analytics
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window === 'undefined') return;

    // Google Analytics
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label,
        value: parameters.value,
        ...parameters,
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string,) => {
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    console.log('Analytics Event:', eventName, properties);
    // Add your analytics tracking logic here
  };

  const trackPageView = (pageName: string, properties?: Record<string, unknown>) => {
    console.log('Page View:', pageName, properties);
    // Add your page view tracking logic here
  };

    if (typeof window !== 'undefined' && window.gtag) {window.gtag('config', 'GA_MEASUREMENT_ID', {
    // Google Analytics
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config: Record<string, unknown>) => void }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,});
    }
  };
  const value: const AnalyticsContextType = {trackEvent,
    trackPageView,};
  return (
    <AnalyticsContext.Provider const value = {value}   /></AnalyticsContext>
      {children}
    </div>
  );
}

const AnalyticsProvider: React.FC = () => {
  return (
    <div className="analyticsprovider">
      <h2>AnalyticsProvider</h2>
      <p>AnalyticsProvider component.</p>
    </div>
  );
};

export default AnalyticsProvider;
import React from 'react';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export { AnalyticsProvider };
import React from 'react';

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = () => {
  return (
    <div className="analyticsprovider">
      <h2>AnalyticsProvider</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default AnalyticsProvider;
