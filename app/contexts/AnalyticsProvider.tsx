import React,{ React Node, useCallback } from 'react';
import { AnalyticsContext, AnalyticsContextType  } from './Analytics Context';

interfaceAnalytics Provider Props {
  children: React Node;
}

export const AnalyticsProvider: React.FC<AnalyticsProv iderProps> = ({ children }) => {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_EN V ==='development') {
      console.warn('Event tracked:', eventName, properties);
    }
    // Add your analytics tracking logic here
  },[]);
  
  const trackPage View = useCallback((pageName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_EN V ==='development') {
      console.warn('Page view tracked:', pageName, properties);
    }
    // Add your page view tracking logic here
  },[]);
  
  const setUser = useCallback((userId: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_EN V ==='development') {
      console.warn('User set:', userId, properties);
    }
    // Add your user identification logic here
  },[]);
  const value: AnalyticsContextTyp e ={
    trackEvent,
    trackPageView,
    setUser};
  return (
    <AnalyticsContext.Provider value ={value}>
      {children}
    </Analytics Context.Provider>
  );
};
