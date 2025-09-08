import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export type AnalyticsEventType = 'page_view' | 'click' | 'conversion' | 'custom';

export interface AnalyticsEvent {
  type: AnalyticsEventType;
  path?: string;
  component?: string;
  elementId?: string;
  timestamp: number;
  userId?: string | null;
  metadata?: Record<string, any>;
}

export interface AnalyticsContextType {
  trackEvent: (type: AnalyticsEventType, metadata?: Record<string, any>) => void;
  trackConversion: (conversionType: string, value?: number, metadata?: Record<string, any>) => void;
  pageViews: number;
  lastEvent: AnalyticsEvent | null;
  events: AnalyticsEvent[];
  clearEvents: () => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = (): AnalyticsContextType => {
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
  const [pageViews, setPageViews] = useState(0);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [lastEvent, setLastEvent] = useState<AnalyticsEvent | null>(null);
  const location = useLocation();

  // Track page views
  useEffect(() => {
    const event: AnalyticsEvent = {
      type: 'page_view',
      path: location.pathname,
      timestamp: Date.now(),
    };
    
    setEvents(prev => [...prev, event]);
    setLastEvent(event);
    setPageViews(prev => prev + 1);
  }, [location.pathname]);

  const trackEvent = (type: AnalyticsEventType, metadata?: Record<string, any>) => {
    const event: AnalyticsEvent = {
      type,
      path: location.pathname,
      timestamp: Date.now(),
      metadata,
    };
    
    setEvents(prev => [...prev, event]);
    setLastEvent(event);
  };

  const trackConversion = (conversionType: string, value?: number, metadata?: Record<string, any>) => {
    const event: AnalyticsEvent = {
      type: 'conversion',
      path: location.pathname,
      timestamp: Date.now(),
      metadata: {
        conversionType,
        value,
        ...metadata,
      },
    };
    
    setEvents(prev => [...prev, event]);
    setLastEvent(event);
  };

  const clearEvents = () => {
    setEvents([]);
    setLastEvent(null);
  };

  return (
    <AnalyticsContext.Provider
      value={{
        trackEvent,
        trackConversion,
        pageViews,
        lastEvent,
        events,
        clearEvents,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};