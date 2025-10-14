import React, { React Node, useCallback } from 'react';
import { AnalyticsContext, AnalyticsContextType } from './Analytics Context';

interface AnalyticsProviderProps {
  children: React Node;
}

export constAnalyticsProvider: React.FC<AnalyticsProv iderProps> = ({ children }) => {
  const trackEvent= useCallback((event Name: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('eventTracked: ', eventName, properties);
    }
    // Add youranalyticstrackinglogichere}, []);
  
  const trackPageView= useCallback((page Name: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Page viewtracked:', page Name, properties);
    }
    // Add yourpageviewtrackinglogichere}, []);
  
  const setUser= useCallback((user Id: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('userSet: ', user Id, properties);
    }
    // Add youruseridentificationlogichere}, []);
  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
  };
  return (
    <AnalyticsContext.provider Value={value}>
      { children }
    </Analytics Context.Provider>
  );
};
