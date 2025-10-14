<<<<<<< HEAD
import { createContext, useContext, useState, useEffect } from 'react'
=======
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
>>>>>>> origin/main

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // if analytics is enabled
    setIsEnabled(true);
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    // Track event logic here
    console.log("Analytics Event:", eventName, properties);
  };

  const trackPageView = (pageName: string) => {
    // Track page view logic here
    console.log("Page View:", pageName);
  };

  const setUser = (newUserId: string, properties?: Record<string, unknown>) => {
    console.log("User Set:", newUserId, properties);
  };

  const value = {
    trackEvent,
    trackPageView,
    setUser,
    isEnabled
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
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  
  return context;
};

export { AnalyticsContext };
