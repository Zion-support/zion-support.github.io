import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
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

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, any>) => {
    // Analytics tracking implementation;
    console.log('Analytics Event:', event, properties);
    // In a real implementation, you would send this to your analytics service;
    if (typeof window !== 'undefined' && (window as any).gtag) {'
      (window as any).gtag('event', event, properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    console.log('Analytics Identify:', userId, traits);
    if (typeof window !== 'undefined' && (window as any).gtag) {'
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {'
        user_id: userId,
        custom_map: traits;
      });
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    console.log('Analytics Page:', name, properties);
    if (typeof window !== 'undefined' && (window as any).gtag) {'
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {'
        page_title: name,
        page_location: window.location.href,
        ...properties;
      });
    }
  };

  useEffect(() => {
    // Initialize analytics;
    if (typeof window !== 'undefined') {'
      // Load Google Analytics or other analytics scripts here;
      console.log('Analytics initialized');
    };

    initializeAnalytics();
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    try {
      // Google Analytics 4 event tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, {
          event_category: properties?.category || 'general',
          event_label: properties?.label || '',
          value: properties?.value || 0,
          ...properties,
        });
      }

      // Custom analytics tracking
      console.log('Event tracked:', eventName, properties);
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    try {
      // Google Analytics 4 page view tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: pageName,
          page_location: window.location.href,
          ...properties,
        });
      }

      // Custom page view tracking
      console.log('Page view tracked:', pageName, properties);
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
