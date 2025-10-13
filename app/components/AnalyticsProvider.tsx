import React, { useEffect, ReactNode } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';
interface AnalyticsProviderProps {
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
export default AnalyticsProvider;