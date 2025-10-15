import React, { createContext, useContext, ReactNode } from "react"

export interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
  identifyUser: (userId: string, properties?: Record<string, unknown>) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    // Implement analytics tracking
    console.log('Analytics Event:', eventName, properties);
  };

  const trackPageView = (pageName: string, properties?: Record<string, unknown>) => {
    // Implement page view tracking
    console.log('Page View:', pageName, properties);
  };

  const setUser = (userId: string, properties?: Record<string, unknown>) => {
    // Implement user setting
    console.log('Set User:', userId, properties);
  };

  const identifyUser = (userId: string, properties?: Record<string, unknown>) => {
    // Implement user identification
    console.log('Identify User:', userId, properties);
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
    identifyUser
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
