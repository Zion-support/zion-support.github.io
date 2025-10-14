import { createContext, useContext, useState, useEffect } from "react";

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Enable analytics in production
    setIsEnabled(process.env.NODE_ENV === "production");
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;

    // Track event with analytics service
    console.log("Analytics Event:", { eventName, properties, userId });
    
    // Here you would integrate with your analytics service
    // e.g., Google Analytics, Mixpanel, etc.
  };

  const trackPageView = (pageName: string) => {
    if (!isEnabled) return;

    // Track page view
    console.log("Page View:", { pageName, userId });
    
    // Here you would integrate with your analytics service
  };

  const setUser = (newUserId: string, properties?: Record<string, unknown>) => {
    setUserId(newUserId);
    
    if (isEnabled) {
      console.log("User Set:", { userId: newUserId, properties });
      
      // Here you would integrate with your analytics service
    }
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

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
  }
  return context;
};