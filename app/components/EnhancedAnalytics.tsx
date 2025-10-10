'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsEvent {
  name: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

class AnalyticsService {
  private isInitialized = false;

  init() {
    if (this.isInitialized) return;
    
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      this.isInitialized = true;
    }
  }

  trackEvent(eventName: string, parameters: Record<string, any> = {}) {
    if (typeof window === 'undefined') return;

    // Google Analytics 4
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
      gtag('event', eventName, parameters);
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }
  }

  trackPageView(pageName: string, pagePath: string) {
    this.trackEvent('page_view', {
      page_title: pageName,
      page_location: pagePath
    });
  }

  trackConversion(conversionId: string, value?: number) {
    this.trackEvent('conversion', {
      conversion_id: conversionId,
      value: value
    });
  }

  private sendToAnalytics = (metric: any) => {
    this.trackEvent(metric.name, {
      category: 'performance',
      value: Math.round(metric.value),
      label: metric.id
    });
  };
}

const analyticsService = new AnalyticsService();

const AnalyticsContext = createContext<{
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
}>({
  trackEvent: () => {},
  trackPageView: () => {},
  trackConversion: () => {}
});

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    analyticsService.init();
  }, []);

  const contextValue = {
    trackEvent: analyticsService.trackEvent.bind(analyticsService),
    trackPageView: analyticsService.trackPageView.bind(analyticsService),
    trackConversion: analyticsService.trackConversion.bind(analyticsService)
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
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

export default AnalyticsService;