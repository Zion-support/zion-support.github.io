'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
  timestamp: number;
}

interface AnalyticsContextType {
  trackEvent: (event: string, category: string, label?: string, value?: number) => void;
  trackPageView: (page: string) => void;
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

  const trackEvent = (event: string, category: string, label?: string, value?: number) => {
    const newEvent: AnalyticsEvent = {
      event,
      category,
      label,
      value,
      timestamp: Date.now(),
    };

    setEvents(prev => [...prev, newEvent]);

    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', event, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackPageView = (page: string) => {
    trackEvent('page_view', 'navigation', page);
  };

  useEffect(() => {
    // Track initial page view
    trackPageView(window.location.pathname);
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView, events }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;