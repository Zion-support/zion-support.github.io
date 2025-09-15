import React, { createContext, useContext, useState, useEffect } from 'react';

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
    userInteractions: 0,
    conversionEvents: 0,
  });

  const trackEvent = (eventName, properties = {}) => {
    console.log('Analytics Event:', eventName, properties);
    
    // Update analytics state
    setAnalytics(prev => ({
      ...prev,
      userInteractions: prev.userInteractions + 1,
    }));

    // Here you would typically send to your analytics service
    // Example: gtag('event', eventName, properties);
  };

  const trackPageView = (pagePath) => {
    console.log('Page View:', pagePath);
    
    setAnalytics(prev => ({
      ...prev,
      pageViews: prev.pageViews + 1,
    }));

    // Here you would typically send to your analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: pagePath });
  };

  const trackConversion = (conversionType, value = 0) => {
    console.log('Conversion:', conversionType, value);
    
    setAnalytics(prev => ({
      ...prev,
      conversionEvents: prev.conversionEvents + 1,
    }));

    // Here you would typically send to your analytics service
    // Example: gtag('event', 'conversion', { conversion_type: conversionType, value: value });
  };

  const value = {
    analytics,
    trackEvent,
    trackPageView,
    trackConversion,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};