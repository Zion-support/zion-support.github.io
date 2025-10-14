import React, { createContext, useContext, useEffect, ReactNode } from 'react';

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
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, any>) => {
    // Basic analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties);
    }
    console.log('Analytics track:', event, properties);
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    // Basic user identification
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits,
      });
    }
    console.log('Analytics identify:', userId, traits);
  };

  const page = (name: string, properties?: Record<string, any>) => {
    // Basic page tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: name,
        page_location: window.location.href,
        ...properties,
      });
    }
    console.log('Analytics page:', name, properties);
  };

  useEffect(() => {
    // Initialize analytics on mount
    console.log('AnalyticsProvider initialized');
  }, []);

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

export default AnalyticsProvider;