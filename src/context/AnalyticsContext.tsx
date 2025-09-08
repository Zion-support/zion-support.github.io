=======
import React, { createContext, useContext, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

<<<<<<< HEAD
export const useAnalytics = (): AnalyticsContextType => {
=======
export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;
    console.log('Analytics Event:', event, properties);
    // In a real app, this would send to analytics service
  };

  const trackPageView = (page: string) => {
    if (!isEnabled) return;
    console.log('Page View:', page);
    // In a real app, this would send to analytics service
  };

  return (
    <AnalyticsContext.Provider value={{ 
      trackEvent, 
      trackPageView, 
      isEnabled, 
      setEnabled: setIsEnabled 
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
=======>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
};