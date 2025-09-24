import React, { createContext, useContext, useState } from 'react';

const AnalyticsContext = createContext();

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider = ({ children }) => {
  const [analytics, setAnalytics] = useState({
    pageViews: 0,
    events: [],
  });

  const trackEvent = (eventName, properties = {}) => {
    const event = {
      name: eventName,
      properties,
      timestamp: new Date().toISOString(),
    };
    
    setAnalytics(prev => ({
      ...prev,
      events: [...prev.events, event],
    }));
  };

  const trackPageView = (page) => {
    setAnalytics(prev => ({
      ...prev,
      pageViews: prev.pageViews + 1,
    }));
  };

  const value = {
    analytics,
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
