import { useState, useEffect, ReactNode } from 'react';
import { AnalyticsContext, AnalyticsContextType } from './AnalyticsContextDefinition';

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if analytics is enabled
    setIsEnabled(true);
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    // Track event logic here
    console.log('Analytics Event:', eventName, properties);
  };

  const trackPageView = (pageName: string) => {
    if (!isEnabled) return;
    // Track page view logic here
    console.log('Page View:', pageName);
  };

  const setUser = (newUserId: string, properties?: Record<string, unknown>) => {
    
    console.log('User Set:', newUserId, properties);
  };

  const value: AnalyticsContextType = {
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

