<<<<<<< HEAD
import React, { createContext, useContext } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
=======
import React, {  createContext  } from 'react';
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
}
export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
>>>>>>> cursor/fix-errors-and-merge-to-main-9706

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
<<<<<<< HEAD

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
=======
>>>>>>> origin/main
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
