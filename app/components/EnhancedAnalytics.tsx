'use client';
import React, { createContext, useContext, useCallback } from 'react';

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const track = useCallback((event: string, parameters?: Record<string, any>) => {
    console.log('Analytics Event:', event, parameters);
  }, []);

  const page = useCallback((pageName: string, parameters?: Record<string, any>) => {
    console.log('Analytics Page:', pageName, parameters);
  }, []);

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    console.log('Analytics Identify:', userId, traits);
  }, []);

  return (
    <AnalyticsContext.Provider value={{ track, page, identify }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
