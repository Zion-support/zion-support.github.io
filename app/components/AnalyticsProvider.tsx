'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: React.ReactNode;
  enabled?: boolean;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children, 
  enabled = true 
}) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;
    
    // Track event logic here
    console.log('Analytics Event:', event, properties);
    
    // You can integrate with Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, properties);
    }
  };

  const trackPageView = (page: string) => {
    if (!isEnabled) return;
    
    console.log('Page View:', page);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page,
      });
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (enabled) {
      setIsEnabled(true);
    }
  }, [enabled]);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    isEnabled
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};