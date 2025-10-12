'use client';
import { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
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
  useEffect(() => {
    // Initialize analytics
    const initAnalytics = () => {
      console.log('Analytics initialized');
    };

    initAnalytics();
  }, []);

  const track = (event: string, properties?: Record<string, any>) => {
    console.log('Analytics track:', event, properties);
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    console.log('Analytics identify:', userId, traits);
  };

  const page = (name: string, properties?: Record<string, any>) => {
    console.log('Analytics page:', name, properties);
  };

  const value: AnalyticsContextType = {
    track,
    identify,
    page,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};