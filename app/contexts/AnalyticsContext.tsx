import { createContext, useState, useEffect } from "react";

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  // const [userId, setUserId] = useState<string | null>(null);
  
  useEffect(() => {
    // if analytics is enabled
    setIsEnabled(true);
  }, []);
  
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    // Track event logic here
    console.log("Analytics Event:", eventName, properties);
  };
  
  const trackPageView = (pageName: string) => {
    // Track page view logic here
    console.log("Page View:", pageName);
  };
  
  const setUser = (newUserId: string, properties?: Record<string, unknown>) => {
    // setUserId(newUserId);
    console.log("User Set:", newUserId, properties);
  };
  
  const value = {
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

export { AnalyticsContext };
