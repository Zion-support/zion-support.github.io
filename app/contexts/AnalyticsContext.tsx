import React, {  createContext  } from 'react';
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
}
export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Analytics tracking implementation
    console.log('Event tracked:', eventName, properties);
  };

  const trackPageView = (pageName: string) => {
    // Page view tracking implementation
    console.log('Page view tracked:', pageName);
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
>>>>>>> origin/main
