import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if analytics should be enabled
    const shouldEnable = typeof window !== 'undefined' && 
      !window.location.hostname.includes('localhost') &&
      !window.location.hostname.includes('127.0.0.1');
    
    setIsEnabled(shouldEnable);
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;
    
    try {
      // Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, properties);
      }
      
      // Custom analytics tracking
      console.log('Analytics Event:', { eventName, properties });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;
    
    try {
      // Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: pageName,
          page_location: window.location.href,
          ...properties
        });
      }
      
      // Custom analytics tracking
      console.log('Analytics Page View:', { pageName, properties });
    } catch (error) {
      console.error('Analytics page view error:', error);
    }
  };

  const setUser = (userId: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;
    
    try {
      // Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          user_id: userId,
          custom_map: properties
        });
      }
      
      // Custom analytics tracking
      console.log('Analytics User Set:', { userId, properties });
    } catch (error) {
      console.error('Analytics user setting error:', error);
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
    isEnabled
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsContext };
export default AnalyticsProvider;