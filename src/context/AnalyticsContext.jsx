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
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [events, setEvents] = useState([]);

  const trackEvent = (eventName, properties = {}) => {
    if (analyticsEnabled) {
      const event = {
        name: eventName,
        properties,
        timestamp: new Date().toISOString()
      };
      setEvents(prev => [...prev, event]);
      
      // Send to analytics service
      console.log('Analytics Event:', event);
    }
  };

  const value = {
    analyticsEnabled,
    setAnalyticsEnabled,
    trackEvent,
    events
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};