import React, { createContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (_eventName: string, _properties?: Record<string, unknown>) => {
    // Analytics tracking implementation
    // In production, this would send data to analytics service
    // console.log('Event tracked:', eventName, properties);
  };

  const trackPageView = (_pageName: string, _properties?: Record<string, unknown>) => {
    // Page view tracking implementation
    // In production, this would send data to analytics service
    // console.log('Page view tracked:', pageName, properties);
  };

  const identify = (_userId: string, _traits?: Record<string, unknown>) => {
    // User identification implementation
    // In production, this would send data to analytics service
    // console.log('User identified:', userId, traits);
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