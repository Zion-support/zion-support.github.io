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
<<<<<<< HEAD
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
=======
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
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
  };

  const value = {
    analytics,
    trackEvent,
<<<<<<< HEAD
    trackPageView,
=======
    events
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};