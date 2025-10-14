import React from 'react';
import { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, any>) => {
    // Analytics tracking implementation
    console.log('Analytics track:', event, properties);
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    // User identification implementation
    console.log('Analytics identify:', userId, traits);
  };

  const page = (name: string, properties?: Record<string, any>) => {
    // Page tracking implementation
    console.log('Analytics page:', name, properties);
  };

  return (
    <AnalyticsContext.Provider value={{ track, identify, page }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;