import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
  identifyUser: (userId: string, properties?: Record<string, unknown>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
      if (process.env.NODE_ENV === 'development') {
      console.warn('Event tracked: ', eventName, properties);
    }
    // Add your analytics tracking logic here
  };
  const trackPageView = (pageName: string) => {
    console.log('Page View:', pageName);
    // TODO: Implement actual page view tracking
  };

  const identifyUser = (userId: string, properties?: Record<string, unknown>) => {
      if (process.env.NODE_ENV === 'development') {
      console.warn('User identified: ', userId, properties);
    }
    // Add your user identification logic here
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    identifyUser,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
    if (context === undefined) {
    throw new Error(',useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsProvider;