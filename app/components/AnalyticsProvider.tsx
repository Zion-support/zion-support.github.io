import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: any) => void;
  identify: (userId: string, traits?: any) => void;
  page: (name: string, properties?: any) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: any) => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event, properties);
    }
  };

  const identify = (userId: string, traits?: any) => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.log('Analytics Identify:', userId, traits);
    }
  };

  const page = (name: string, properties?: any) => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.log('Analytics Page:', name, properties);
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      console.log('Analytics initialized');
    }
  }, []);

  return (
    <AnalyticsContext.Provider value={{ track, identify, page }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsProvider;