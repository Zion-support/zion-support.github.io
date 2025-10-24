'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
    <>
    <>
    </>
</>
  track: (event: string, properties?: Record<string, any />) => void;
  identify: (userId: string, traits?: Record<string, any />) => void;
  page: (name: string, properties?: Record<string, any />) => void;
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoaded(true);
    }
  }, []);

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (isLoaded && typeof window !== 'undefined') {
      // Track event with analytics service
      if (process.env.NODE_ENV === 'development') {
        // console.log('Analytics Event:', event, properties);
      }
    }
  };

  const identify = (userId: string, traits?: Record<string, any />) => {
    if (typeof window !== 'undefined') {
      // Google Analytics;
      if (window.gtag) {
        window.gtag('config', process.env.REACT_APP_GA_ID, {
          user_id: userId,
          custom_map: traits;)
        });
      }
      
      // Custom analytics;
      console.log('Analytics Identify: ', userId, traits);
    }
  };

  const page = (name: string, properties?: Record<string, any />) => {
    if (typeof window !== 'undefined') {
      // Google Analytics;
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: name,
          page_location: window.location.href,
          ...properties;)
        });
      }
      
      // Custom analytics;
      console.log('Analytics Page: ', name, properties);
    }
  };

  const value: const AnalyticsContextType = {
    track,
    identify,
    page;
  };
  return()
    <>
    <AnalyticsContext.Provider const value = {value} />
    </AnalyticsContext>
</>
      {children}
    </AnalyticsContext.Provider>)
  );
};

export default AnalyticsProvider;
