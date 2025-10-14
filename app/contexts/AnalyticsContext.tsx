import React, { createContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (_eventName: string, _properties?: Record<string, unknown>) => void;
  trackPageView: (_pageName: string, _properties?: Record<string, unknown>) => void;
  identify: (_userId: string, _traits?: Record<string, unknown>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (_eventName: string, _properties?: Record<string, unknown>) => {
    // Analytics tracking implementation
    };

  const trackPageView = (_pageName: string, _properties?: Record<string, unknown>) => {
    // Page view tracking implementation
    };

  const identify = (_userId: string, _traits?: Record<string, unknown>) => {
    // User identification implementation
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