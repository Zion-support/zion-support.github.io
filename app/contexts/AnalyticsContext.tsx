'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
<<<<<<< HEAD
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  isEnabled: boolean;
=======
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
>>>>>>> cursor/fix-errors-and-merge-to-main-bca9
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
<<<<<<< HEAD
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if analytics is enabled
    setIsEnabled(true);
  }, []);

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;
    
    // Track event logic here
    console.log('Analytics Event:', event, properties);
  };

  const trackPageView = (page: string) => {
    if (!isEnabled) return;
    
    // Track page view logic here
    console.log('Page View:', page);
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView, isEnabled }}>
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-bca9
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsContext };