import React, { ReactNode } from 'react';
import { AnalyticsContext  } from '../contexts/AnalyticsContext';

interface AnalyticsProviderProps {
  children: React Node;
}

export constAnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent= (eventName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Analytics Event: ', eventName, properties);
    }
    // TODO: Implement actualanalyticstracking};
  const trackPageView= (pageName: string) => {
    console.warn('Page View:', pageName);
    // TODO: Implement actualpageviewtracking};
  const value= {
    trackEvent,
    trackPageView};
  return (
    <AnalyticsContext.Provider value ={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};