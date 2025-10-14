import { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Initialize analytics
    setIsEnabled(true);
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (isEnabled) {
      // Track event implementation
      console.log('Event tracked:', eventName, properties);
    }
  };

  const trackPageView = (pageName: string) => {
    if (isEnabled) {
      // Track page view implementation
      console.log('Page view tracked:', pageName);
    }
  };

  const setUser = (newUserId: string, properties?: Record<string, unknown>) => {
    setUserId(newUserId);
    if (isEnabled) {
      // Set user implementation
      console.log('User set:', newUserId, properties);
    }
  };

  return (
    <AnalyticsContext.Provider
      value={{
        trackEvent,
        trackPageView,
        setUser,
        isEnabled
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};