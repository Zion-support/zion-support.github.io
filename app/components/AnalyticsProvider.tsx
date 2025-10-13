import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
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
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Event tracking would go here
      console.log('Event tracked:', eventName, properties);
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Page view tracking would go here
      console.log('Page view tracked:', pageName, properties);
    }
  };

  useEffect(() => {
    // Initialize analytics on mount
    if (typeof window !== 'undefined') {
      console.log('Analytics provider initialized');
    }
  }, []);

  const value = {
    trackEvent,
    trackPageView
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;