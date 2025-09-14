import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.log('Analytics trackEvent:', eventName, properties);
    // In a real implementation, this would send to analytics service
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    console.log('Analytics trackPageView:', pageName, properties);
    // In a real implementation, this would send to analytics service
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    console.log('Analytics identify:', userId, traits);
    // In a real implementation, this would identify user in analytics service
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
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