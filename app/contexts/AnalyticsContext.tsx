import React, { createContext, useContext, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: any) => void;
  trackPageView: (page: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const [analytics, setAnalytics] = useState<any>({});

  const trackEvent = (event: string, properties?: any) => {
    console.log('Analytics Event:', event, properties);
    // Implement actual analytics tracking here
  };

  const trackPageView = (page: string) => {
    console.log('Page View:', page);
    // Implement actual page view tracking here
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsContext };