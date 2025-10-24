import React, { createContext, useContext, ReactNode } from 'react';
import { analytics } from '../utils/analytics';

interface AnalyticsContextType {
  track: (eventName: string, properties?: Record<string, any>) => void;
  pageView: (pageName: string, properties?: Record<string, any>) => void;
  trackPerformance: (metrics: any) => void;
  trackInteraction: (element: string, action: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const value: AnalyticsContextType = {
    track: analytics.track.bind(analytics),
    pageView: analytics.pageView.bind(analytics),
    trackPerformance: analytics.trackPerformance.bind(analytics),
    trackInteraction: analytics.trackInteraction.bind(analytics),
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};