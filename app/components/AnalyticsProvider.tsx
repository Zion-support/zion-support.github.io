<<<<<<< HEAD
import React, { useEffect, ReactNode } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';
interface AnalyticsProviderProps {
=======
<<<<<<< HEAD
'use client;

import React, { createContext, useContext, useEffect } from 'react;

interface AnalyticsContextType {}
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;

  trackPageView: (pageName: string, pagePath: string) => void;

}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);;

export const useAnalytics = () => {;;;

  const context = useContext(AnalyticsContext);;;

<<<<<<< HEAD
  if (!context) {
    throw new Error(useAnalytics must be used within an AnalyticsProvider);

=======
export const useAnalytics = () => {}
  const context = useContext(AnalyticsContext);
  if (!context) {}
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  }

  return context;

};

interface AnalyticsProviderProps {}
>>>>>>> origin/cursor/ad-creation-and-management-f267
  children: ReactNode;
}
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    console.log('Analytics initialized');
  }, []);
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    console.log('Analytics Event:', eventName, properties);
    // Add your analytics tracking logic here
  };
  const trackPageView = (pageName: string, properties?: Record<string, unknown>) => {
    console.log('Page View:', pageName, properties);
    // Add your page view tracking logic here
  };
  const value = {
    trackEvent,
    trackPageView,
  };
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
<<<<<<< HEAD
export default AnalyticsProvider;
=======
=======
import React from 'react';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default AnalyticsProvider;
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
