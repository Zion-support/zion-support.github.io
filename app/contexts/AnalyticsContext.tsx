'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  isEnabled: boolean;
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
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isEnabled] = useState(true);

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (isEnabled && typeof window !== 'undefined') {
      console.log('Analytics Event:', event, properties);
      // Add your analytics tracking logic here
    }
  };

  const trackPageView = (page: string) => {
    if (isEnabled && typeof window !== 'undefined') {
      console.log('Page View:', page);
      // Add your page view tracking logic here
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    isEnabled,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsContext;