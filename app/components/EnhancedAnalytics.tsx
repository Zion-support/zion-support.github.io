'use client';
import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsEvent {
  name: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  trackConversion: (conversionName: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

class AnalyticsService {
  private isInitialized = false;

  init() {
    if (this.isInitialized || typeof window === 'undefined') return;

    // Initialize Google Analytics if available
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config?: any) => void }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Track page load
    this.trackEvent('page_load', {
      category: 'engagement',
      label: window.location.pathname,
      value: Date.now()
    });

    this.isInitialized = true;
  }

  trackEvent(eventName: string, parameters: Record<string, any> = {}) {
    if (typeof window === 'undefined') return;

    // Send to Google Analytics if available
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
      gtag('event', eventName, {
        event_category: parameters.category || 'general',
        event_label: parameters.label,
        value: parameters.value,
        ...parameters
      });
    }

    // Send to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }

    // Store in localStorage for debugging
    try {
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      events.push({
        timestamp: new Date().toISOString(),
        event: eventName,
        parameters
      });
      localStorage.setItem('analytics_events', JSON.stringify(events.slice(-100))); // Keep last 100 events
    } catch (error) {
      console.warn('Failed to store analytics event:', error);
    }
  }

  trackPageView(pageName: string) {
    this.trackEvent('page_view', {
      category: 'navigation',
      label: pageName,
      value: 1
    });
  }

  trackConversion(conversionName: string, value?: number) {
    this.trackEvent('conversion', {
      category: 'conversion',
      label: conversionName,
      value: value || 1
    });
  }
}

const analyticsService = new AnalyticsService();

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    analyticsService.init();
  }, []);

  return (
    <AnalyticsContext.Provider value={{
      trackEvent: analyticsService.trackEvent.bind(analyticsService),
      trackPageView: analyticsService.trackPageView.bind(analyticsService),
      trackConversion: analyticsService.trackConversion.bind(analyticsService)
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsService;