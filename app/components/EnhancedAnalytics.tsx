'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: any) => void;
  page: (name: string, properties?: any) => void;
  identify: (userId: string, traits?: any) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    console.warn('useAnalytics must be used within an AnalyticsProvider');
    return null;
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
  apiKey?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children, apiKey }) => {
  const track = (event: string, properties?: any) => {
    console.log('Analytics Event:', event, properties);
    // Implement actual analytics tracking here
  };

  const page = (name: string, properties?: any) => {
    console.log('Analytics Page:', name, properties);
    // Implement actual page tracking here
  };

  const identify = (userId: string, traits?: any) => {
    console.log('Analytics Identify:', userId, traits);
    // Implement actual user identification here
  };

  useEffect(() => {
    // Initialize analytics
    if (apiKey) {
      console.log('Analytics initialized with API key:', apiKey);
    }
  }, [apiKey]);

  return (
    <AnalyticsContext.Provider value={{ track, page, identify }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

const EnhancedAnalytics: React.FC = () => {
  const analytics = useAnalytics();

  useEffect(() => {
    if (analytics) {
      analytics.page('Home Page');
    }
  }, [analytics]);

  return null;
};

export default EnhancedAnalytics;