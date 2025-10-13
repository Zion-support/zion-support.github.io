'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
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
  const [user, setUserState] = useState<string | null>(null);

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    console.log('Analytics Event:', { event, properties, user });
    // Add your analytics tracking logic here
  };

  const trackPageView = (page: string) => {
    console.log('Page View:', { page, user });
    // Add your page view tracking logic here
  };

  const setUser = (userId: string, properties?: Record<string, any>) => {
    setUserState(userId);
    console.log('User Set:', { userId, properties });
    // Add your user tracking logic here
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

export default AnalyticsContext;