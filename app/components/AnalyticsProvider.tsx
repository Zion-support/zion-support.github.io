import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsProviderProps {
  children: ReactNode;
}

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, unknown>) => void;
  trackPage: (page: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (event: string, properties?: Record<string, unknown>) => {
    // Analytics tracking implementation
    console.log('Analytics Event:', event, properties);
  };

  const trackPage = (page: string) => {
    // Page tracking implementation
    console.log('Analytics Page:', page);
  };

  const value = {
    trackEvent,
    trackPage,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};