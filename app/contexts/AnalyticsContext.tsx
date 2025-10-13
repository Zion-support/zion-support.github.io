'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Analytics tracking implementation
    console.log('Analytics Event:', eventName, properties);
  };

  const trackPageView = (pageName: string) => {
    // Page view tracking implementation
    console.log('Page View:', pageName);
  };

  const setUser = (newUserId: string, properties?: Record<string, any>) => {
    setUserId(newUserId);
    console.log('User Set:', newUserId, properties);
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