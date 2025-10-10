'use client';
import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, parameters?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config?: Record<string, any>) => void }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
      gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
      gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        ...parameters
      });
    }
  };

  const value = {
    trackEvent,
    trackPageView
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

// Enhanced Analytics Component
const EnhancedAnalytics: React.FC = () => {
  const { trackEvent, trackPageView } = useAnalytics();

  useEffect(() => {
    // Track page view on mount
    trackPageView(document.title);
  }, [trackPageView]);

  // Track performance metrics
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            trackEvent('page_load_time', {
              load_time: navEntry.loadEventEnd - navEntry.loadEventStart,
              dom_content_loaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              first_paint: navEntry.loadEventEnd - navEntry.fetchStart
            });
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect();
    }
  }, [trackEvent]);

  return null;
};

EnhancedAnalytics.displayName = 'EnhancedAnalytics';

export default EnhancedAnalytics;