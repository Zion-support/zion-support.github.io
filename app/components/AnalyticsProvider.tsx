import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (_event: string, _properties?: Record<string, unknown>) => void;
  trackPageView: (_page: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (_event: string, _properties?: Record<string, unknown>) => {
    // Analytics tracking implementation
    console.log('Analytics Event:', _event, _properties);
  };

  const trackPageView = (_page: string) => {
    // Page view tracking implementation
    console.log('Page View:', _page);
  };

  const value = {
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
