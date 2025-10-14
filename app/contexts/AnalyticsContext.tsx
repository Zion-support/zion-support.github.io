import React, { createContext, useState, useEffect } from "react";

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  useEffect(() => {
    // if analytics is enabled
    setIsEnabled(true);
  }, []);

  const trackEvent = (_eventName: string, _properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    // Track event logic here
    console.log("Analytics Event:", _eventName, _properties);
  };

  const trackPageView = (_pageName: string) => {
    // Track page view logic here
    console.log("Page View:", _pageName);
  };

  const setUser = (_newUserId: string, _properties?: Record<string, unknown>) => {
    console.log("User Set:", _newUserId, _properties);
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

// Hook to use analytics context
export const useAnalytics = () => {
  const context = React.useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
