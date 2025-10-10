'use client';
import React, { createContext, useContext } from 'react';

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, parameters?: Record<string, any>) => {
    console.log('Analytics track:', event, parameters);
  };

  const page = (pageName: string, parameters?: Record<string, any>) => {
    console.log('Analytics page:', pageName, parameters);
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    console.log('Analytics identify:', userId, traits);
  };

  return (
    <AnalyticsContext.Provider value={{ track, page, identify }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
