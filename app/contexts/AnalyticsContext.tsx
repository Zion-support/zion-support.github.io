import { createContext, useState, useEffect, ReactNode } from 'react';
import { AnalyticsContextType } from './AnalyticsContextTypes';

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Enable analytics
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
    setUserId(newUserId);
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

// Export hook in a separate file to avoid fast refresh warning