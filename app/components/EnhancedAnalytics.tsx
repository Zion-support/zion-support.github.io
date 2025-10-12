'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize analytics when component mounts
    const initAnalytics = () => {
      // Add your analytics initialization code here
      // Example: Google Analytics, Mixpanel, etc.
      console.log('Analytics initialized');
      setIsInitialized(true);
    };

    initAnalytics();
  }, []);

  const track = (event: string, properties?: Record<string, any>) => {
    if (!isInitialized) return;
    
    // Track custom events (placeholder for actual analytics implementation)
    console.log('Analytics Event:', event, properties);
    
    // Here you would integrate with your analytics service
    // Example: gtag('event', event, properties);
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (!isInitialized) return;
    
    // Identify user (placeholder for actual analytics implementation)
    console.log('Analytics Identify:', userId, traits);
    
    // Here you would integrate with your analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { user_id: userId });
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (!isInitialized) return;
    
    // Track page view (placeholder for actual analytics implementation)
    console.log('Analytics Page View:', name, properties);
    
    // Here you would integrate with your analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: name });
  };

  const value: AnalyticsContextType = {
    track,
    identify,
    page,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};