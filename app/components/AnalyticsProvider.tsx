import React, { createContext, useContext, ReactNode, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Basic analytics tracking
    console.log('Analytics Event:', eventName, properties);
    
    // In a real implementation, you would send this to your analytics service
    // Example: gtag('event', eventName, properties);
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    console.log('Page View:', pageName, properties);
    
    // In a real implementation, you would send this to your analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_title: pageName });
  };

  useEffect(() => {
    // Initialize analytics on mount
    trackPageView('App Initialized');
  }, []);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsProvider;
