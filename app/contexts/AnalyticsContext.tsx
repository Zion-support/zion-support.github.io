import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;
    
    // Simple console logging for now
    console.log('Analytics Event:', eventName, properties);
    
    // In a real app, you would send this to your analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties);
    }
  };

  const trackPageView = (pageName: string) => {
    if (!isEnabled) return;
    
    console.log('Page View:', pageName);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  useEffect(() => {
    // Initialize analytics
    trackPageView('Home');
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView, isEnabled }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsContext };