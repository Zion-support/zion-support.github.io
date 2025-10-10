import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, any>) => {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties);
    }
    
    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event, properties);
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: name,
        page_location: window.location.href,
        ...properties
      });
    }
    
    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Page:', name, properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits
      });
    }
    
    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Identify:', userId, traits);
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Track page view
      page(document.title);
    }
  }, []);

  const value: AnalyticsContextType = {
    track,
    page,
    identify
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};