import React, { createContext, ReactNode, useCallback } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Event tracked:', eventName, properties);
    }
    // Add your analytics tracking logic here
  }, []);

<<<<<<< HEAD
  const trackPageView = useCallback((page: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Page view tracked:', page);
=======
  const trackPageView = useCallback((pageName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Page view tracked:', pageName, properties);
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
    // Add your page view tracking logic here
  }, []);

<<<<<<< HEAD
  const setUser = useCallback((userId: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('User set:', userId, properties);
=======
  const identifyUser = useCallback((userId: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('User identified:', userId, properties);
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
    // Add your user identification logic here
  }, []);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = React.useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};