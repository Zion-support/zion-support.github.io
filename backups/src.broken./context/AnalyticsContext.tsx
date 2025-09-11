import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
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

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    
    // In a real implementation, you would send this to your analytics service
    // // console.log('Analytics Event:', { eventName, properties, timestamp: new Date().toISOString() });
  };

  const trackPageView = (pageName: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    
    // // console.log('Page View:', { pageName, properties, timestamp: new Date().toISOString() });
  };

  const setUser = (userId: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    
    // // console.log('User Set:', { userId, properties, timestamp: new Date().toISOString() });
  };

  const setEnabled = (enabled: boolean) => {
    setIsEnabled(enabled);
  };

  return (
    <AnalyticsContext.Provider value={{
      trackEvent,
      trackPageView,
      setUser,
      isEnabled,
      setEnabled
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
};