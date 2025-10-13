import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, any>) => {
    // Analytics tracking implementation
    if (typeof console !== 'undefined') {
      console.log('Analytics Event:', event, properties);
    }
    
    // In a real implementation, you would send this to your analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof console !== 'undefined') {
      console.log('Analytics Identify:', userId, traits);
    }
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits;
});
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof console !== 'undefined') {
      console.log('Analytics Page:', name, properties);
    }
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: name,
        page_location: window.location.href,
        ...properties;
});
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Load Google Analytics or other analytics scripts here
      console.log('Analytics initialized');
    }
  }, []);

  const value: AnalyticsContextType = {
    track,
    identify,
    page;
};

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>;
);
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsProvider;