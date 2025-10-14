import React, { createContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    // Implementation for tracking events
    console.log('Event tracked:', eventName, properties);
  };

  const trackPageView = (pageName: string) => {
    // Implementation for tracking page views
    console.log('Page view tracked:', pageName);
  };

  const setUser = (userId: string, properties?: Record<string, unknown>) => {
    // Implementation for setting user
    console.log('User set:', userId, properties);
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsContext };