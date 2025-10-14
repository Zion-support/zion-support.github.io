import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Enable analytics in production or when explicitly enabled
    setIsEnabled(process.env.NODE_ENV === 'production' || process.env.REACT_APP_ANALYTICS_ENABLED === 'true');
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    
    // Track event logic here
    console.log('Analytics Event:', eventName, properties);
    
    // You can integrate with Google Analytics, Mixpanel, etc. here
    // Example: gtag('event', eventName, properties);
  };

  const trackPageView = (pageName: string) => {
    if (!isEnabled) return;
    
    // Track page view logic here
    console.log('Page View:', pageName);
    
    // You can integrate with Google Analytics here
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_title: pageName });
  };

  const setUser = (newUserId: string, properties?: Record<string, unknown>) => {
    setUserId(newUserId);
    console.log('User Set:', newUserId, properties);
    
    // You can integrate with analytics services here
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { user_id: newUserId });
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

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsContext;