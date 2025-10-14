import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
>>>>>>> origin/main
}
;
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

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Track event with Google Analytics or other analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', eventName, properties);
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, properties);
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    // Track page view with Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...properties
      });
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Page View:', pageName, properties);
    }
  };

  useEffect(() => {
    // Initialize analytics on mount
    if (typeof window !== 'undefined') {
      // Initialize Google Analytics or other analytics service
      console.log('Analytics initialized');
    }
  }, []);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView
  };

  return (
    <AnalyticsContext.Provider value={value}>
>>>>>>> origin/main
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
    // Analytics tracking implementation
    console.log('Analytics Event:', event, properties)";
    // In a real implementation, you would send this to your analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {'
      (window as any).gtag('event', event, properties)"}"
  }
  const identify = (userId: string, traits?: Record<string, any>) => {
    console.log('Analytics Identify:', userId, traits)";
    if (typeof window !== 'undefined' && (window as any).gtag) {'
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {'
        user_id: userId,
        custom_map: traits
      }
  const page = (name: string, properties?: Record<string, any>) => {console.log('Analytics Page:', name, properties)";
    if (typeof window !== 'undefined' && (window as any).gtag) {'
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {'
        page_title: name,
        page_location: window.location.href,
        ...properties
    // Analytics tracking implementation';
    console.log('Analytics Event:', event, properties)";
    // In a real implementation, you would send this to your analytics service';
    if (typeof window !== 'undefined' && (window as any).gtag) {'
      (window as any).gtag('event', event, properties)}'
    }
  const identify = (userId: string, traits?: Record<string, any>) => {''
    console.log('Analytics Identify:', userId, traits)';
    if (typeof window !== 'undefined' && (window as any).gtag) {'
      (window as any).gtag('config', 'GA_MEASUREMENT_ID", {"
        user_id: userId,
        custom_map: traits}
      }
  const page = (name: string, properties?: Record<string, any>) => {''
    console.log('Analytics Page:', name, properties)';
    if (typeof window !== 'undefined' && (window as any).gtag) {'
      (window as any).gtag('config', 'GA_MEASUREMENT_ID", {"
        page_title: name,
        page_location: window.location.href,
        ...properties}
      }
  useEffect(() => {// Initialize analytics
    if (typeof window !== 'undefined') {'
      // Load Google Analytics or other analytics scripts here
      console.log('Analytics initialized')";
    // Initialize analytics';
    if (typeof window !== 'undefined") {"
      // Load Google Analytics or other analytics scripts here';
      console.log('Analytics initialized')}'
    }
  }, [])
  const value: AnalyticsContextType = {track,
    identify,
    page}
    page
    page;}
    page
  };

>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
=======
>>>>>>> origin/main
