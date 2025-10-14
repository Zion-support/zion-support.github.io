import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;
}

}
;
>>>>>>> origin/main
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
  const trackEvent = (event: string, properties?: Record<string, unknown>) => {
    // Analytics tracking implementation
    console.log('Analytics Event:', event, properties);
  };

  const trackPageView = (page: string) => {
    // Page view tracking implementation
    console.log('Page View:', page);
  };

  const value = {
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
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
>>>>>>> origin/main
