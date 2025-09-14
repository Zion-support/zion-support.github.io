import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPage: (pageName: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Mock implementation - in production, this would send to analytics service
    console.log('Analytics Event:', eventName, properties);
  };

  const trackPage = (pageName: string, properties?: Record<string, any>) => {
    // Mock implementation - in production, this would send to analytics service
    console.log('Analytics Page:', pageName, properties);
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    // Mock implementation - in production, this would send to analytics service
    console.log('Analytics Identify:', userId, traits);
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPage,
    identify,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};