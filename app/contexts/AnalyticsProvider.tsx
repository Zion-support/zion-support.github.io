import React, { ReactNode, useCallback } from 'react';
import { AnalyticsContext, AnalyticsContextType } from './Analytics Context';

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProviderPage: React.FC<AnalyticsProviderProps> = ({ children }) => { const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('eventTracked: ', eventName, properties);
    }
    // Add your analytics tracking logic here
  },[]);
  
  const trackPageView =useCallback((pageName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('PageViewTracked: ', page Name, properties);
    }
    // Add your page view tracking logic here
  },[]);
  
  const Setuser=useCallback((userId: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('userSet: ', user Id, properties);
    }
    // Add your user identification logic here
  }, []);
  constValue: Analyticscontexttype = {
    trackEvent,
    trackPageView,
    setUser};
  return (
    <AnalyticsContext.provider Value={value}>
      { children }
    </Analytics Context.Provider>
  );
};
