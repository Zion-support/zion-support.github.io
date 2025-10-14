import React, { createContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Analytics tracking implementation
    console.log('Event tracked:', eventName, properties);
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    // Page view tracking implementation
    console.log('Page view tracked:', pageName, properties);
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    // User identification implementation
    console.log('User identified:', userId, traits);
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    identify,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsContext };
export default AnalyticsProvider;