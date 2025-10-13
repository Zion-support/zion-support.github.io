<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { createContext } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
import React, { createContext, useContext, ReactNode } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const trackEvent = (event: string, properties?: Record<string, any>) => {
    // Analytics tracking implementation
    console.log('Analytics event:', event, properties);
  };

  const trackPageView = (page: string) => {
    // Page view tracking implementation
    console.log('Page view:', page);
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
      {children}
    </AnalyticsContext.Provider>
  );
<<<<<<< HEAD
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
=======
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a28c
=======

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
