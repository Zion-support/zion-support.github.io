'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp: number;
}

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  page: (page: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  events: AnalyticsEvent[];
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
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  const track = (event: string, properties?: Record<string, any>) => {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties,
      timestamp: Date.now()
    };

    setEvents(prev => [...prev, analyticsEvent]);

    // Send to analytics service (Google Analytics, Mixpanel, etc.)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', analyticsEvent);
    }
  };

  const page = (page: string, properties?: Record<string, any>) => {
    track('page_view', { page, ...properties });
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    track('identify', { userId, traits });
  };

  useEffect(() => {
    // Track page view on mount
    page(window.location.pathname);

    // Track page changes
    const handleRouteChange = () => {
      page(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const value: AnalyticsContextType = {
    track,
    page,
    identify,
    events
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;