import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
<<<<<<< HEAD
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
=======
  trackPage: (pageName: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-fbe9
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

<<<<<<< HEAD
export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.log('Analytics trackEvent:', eventName, properties);
    // In a real implementation, this would send to analytics service
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    console.log('Analytics trackPageView:', pageName, properties);
    // In a real implementation, this would send to analytics service
=======
interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Mock implementation - in production, this would send to analytics service
    console.log('Analytics Event:', eventName, properties);
  };

  const trackPage = (pageName: string, properties?: Record<string, any>) => {
    // Mock implementation - in production, this would send to analytics service
    console.log('Analytics Page:', pageName, properties);
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    // Mock implementation - in production, this would send to analytics service
    console.log('Analytics Identify:', userId, traits);
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-fbe9
  };

  const value: AnalyticsContextType = {
    trackEvent,
<<<<<<< HEAD
    trackPageView,
=======
    trackPage,
    identify,
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-fbe9
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

<<<<<<< HEAD
export const useAnalytics = () => {
=======
export const useAnalytics = (): AnalyticsContextType => {
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-fbe9
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};