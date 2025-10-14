import React, { createContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, unknown>) => {
    // Basic analytics tracking
    console.log('Analytics Event:', event, properties);
    
    // Add your analytics implementation here
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
      (window as unknown as { gtag: (event: string, eventName: string, properties?: Record<string, unknown>) => void }).gtag('event', event, properties);
    }
  };

  useEffect(() => {
    // Initialize analytics
    console.log('Analytics Provider initialized');
  }, []);

  return (
    <AnalyticsContext.Provider value={{ track }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;