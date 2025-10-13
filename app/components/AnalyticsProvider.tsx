import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPage: (page: string) => void;
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
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      console.log('Analytics Event:', event, properties);
      // Add your analytics tracking code here
    }
  };

  const trackPage = (page: string) => {
    if (typeof window !== 'undefined') {
      console.log('Analytics Page:', page);
      // Add your page tracking code here
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      console.log('Analytics initialized');
    }
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPage }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
