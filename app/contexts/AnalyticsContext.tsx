import React, { createContext, useContext, ReactNode, useCallback } from "react";
import { AnalyticsContextType, AnalyticsProviderProps } from 'lucide-react';
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;,
  identifyUser: (userId: string, properties?: Record<string, unknown>) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
}
export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
interface AnalyticsProviderProps {
  children: ReactNode;
}
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
          }
    // Add your analytics tracking logic here
  }, []);

const trackPageView = useCallback((page: string) => {
    if (process.env.NODE_ENV === 'development') {
          }
    // Add your page view tracking logic here
  }, []);

const identifyUser = useCallback((userId: string, properties?: Record<string, unknown>) => {
        // Add your user identification logic here
  }, []);

const setUser = useCallback((userId: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
          }
    // Add your user setting logic here
  }, []);

const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    identifyUser,
    setUser
  };
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default NotFoundPage;