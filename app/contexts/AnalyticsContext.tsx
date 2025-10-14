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
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    // Analytics tracking implementation
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Event tracked:', eventName, properties);
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, unknown>) => {
    // Page view tracking implementation
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Page view tracked:', pageName, properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    // User identification implementation
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('User identified:', userId, traits);
    }
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