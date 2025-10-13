'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsContext };