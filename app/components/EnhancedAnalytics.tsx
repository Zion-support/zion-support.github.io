'use client'

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void
  identify: (userId: string, traits?: Record<string, unknown>) => void
  page: (name: string, properties?: Record<string, unknown>) => void
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
  apiKey?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children, 
  apiKey = process.env.NEXT_PUBLIC_ANALYTICS_API_KEY 
}) => {
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined' && apiKey) {
      // Initialize your analytics service here
      console.log('Analytics initialized with API key:', apiKey);
    }
  }, [apiKey]);

  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Track event with your analytics service
      console.log('Analytics track:', event, properties);
      
      // Example: Google Analytics
      if (window.gtag) {
        window.gtag('event', event, properties);
      }
    }
  };

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Identify user with your analytics service
      console.log('Analytics identify:', userId, traits);
      
      // Example: Google Analytics
      if (window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          user_id: userId,
          custom_map: traits
        });
      }
    }
  };

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Track page view with your analytics service
      console.log('Analytics page:', name, properties);
      
      // Example: Google Analytics
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: name,
          page_location: window.location.href,
          ...properties
        });
      }
    }
  };

  const value: AnalyticsContextType = {
    track,
    identify,
    page
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Hook for tracking custom events
export const useTrackEvent = () => {
  const { track } = useAnalytics();
  
  return (eventName: string, properties?: Record<string, unknown>) => {
    track(eventName, {
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      ...properties
    });
  };
};

// Hook for tracking page views
export const useTrackPageView = () => {
  const { page } = useAnalytics();
  
  return (pageName: string, properties?: Record<string, unknown>) => {
    page(pageName, {
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      ...properties
    });
  };
};

// Component for automatic page tracking
interface AutoPageTrackerProps {
  pageName: string;
  properties?: Record<string, unknown>;
}

export const AutoPageTracker: React.FC<AutoPageTrackerProps> = ({ 
  pageName, 
  properties 
}) => {
  const trackPageView = useTrackPageView();
  
  useEffect(() => {
    trackPageView(pageName, properties);
  }, [pageName, properties, trackPageView]);
  
  return null;
};

// Higher-order component for analytics
export const withAnalytics = <P extends object>(
  Component: React.ComponentType<P>,
  pageName: string,
  properties?: Record<string, unknown>
) => {
  return (props: P) => (
    <>
      <AutoPageTracker pageName={pageName} properties={properties} />
      <Component {...props} />
    </>
  );
};

// Utility functions for common analytics events
export const analytics = {
  // E-commerce events
  trackPurchase: (value: number, currency: string = 'USD', items: any[] = []) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: Date.now().toString(),
        value: value,
        currency: currency,
        items: items
      });
    }
  },
  
  // User engagement events
  trackEngagement: (action: string, category: string, label?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  },
  
  // Form submission events
  trackFormSubmission: (formName: string, success: boolean = true) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        form_name: formName,
        success: success
      });
    }
  },
  
  // Search events
  trackSearch: (searchTerm: string, resultsCount?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'search', {
        search_term: searchTerm,
        results_count: resultsCount
      });
    }
  }
};

export default AnalyticsProvider;