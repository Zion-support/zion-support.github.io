import React from 'react';
<<<<<<< HEAD
import { AnalyticsContext } from './AnalyticsContext';
=======
import { AnalyticsContext } from './AnalyticsContextDefinition';
>>>>>>> cursor/fix-errors-and-merge-to-main-3a06

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
