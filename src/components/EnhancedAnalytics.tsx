import React, { useEffect, useCallback } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface PageView {
  page_title: string;
  page_location: string;
  page_path: string;
  content_group1?: string;
  content_group2?: string;
}

export function EnhancedAnalytics() {
  // Initialize analytics
  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }

    // Custom analytics initialization
    initializeAnalytics();
  }, []);

  const initializeAnalytics = useCallback(() => {
    // Create analytics object if it doesn't exist
    if (!window.analytics) {
      window.analytics = {
        track: (event: AnalyticsEvent) => {
          console.log('Analytics Event:', event);
          
          // Send to Google Analytics
          if (window.gtag) {
            window.gtag('event', event.action, {
              event_category: event.category,
              event_label: event.label,
              value: event.value,
              ...event.custom_parameters
            });
          }
          
          // Send to custom analytics endpoint
          sendToCustomAnalytics(event);
        },
        
        page: (pageView: PageView) => {
          console.log('Page View:', pageView);
          
          // Send to Google Analytics
          if (window.gtag) {
            window.gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: pageView.page_title,
              page_location: pageView.page_location,
              page_path: pageView.page_path,
            });
          }
          
          // Send to custom analytics
          sendToCustomAnalytics({
            action: 'page_view',
            category: 'navigation',
            custom_parameters: pageView
          });
        }
      };
    }
  }, []);

  const sendToCustomAnalytics = useCallback(async (event: AnalyticsEvent) => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          referrer: document.referrer,
          url: window.location.href,
          session_id: getSessionId()
        })
      });
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  }, []);

  const getSessionId = useCallback(() => {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }, []);

  return null; // This component doesn't render anything
}

// Hook for tracking events
export function useAnalytics() {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (window.analytics) {
      window.analytics.track(event);
    }
  }, []);

  const trackPageView = useCallback((pageView: PageView) => {
    if (window.analytics) {
      window.analytics.page(pageView);
    }
  }, []);

  const trackConversion = useCallback((conversionData: {
    conversion_id: string;
    value: number;
    currency?: string;
    label?: string;
  }) => {
    trackEvent({
      action: 'conversion',
      category: 'business',
      label: conversionData.label,
      value: conversionData.value,
      custom_parameters: {
        conversion_id: conversionData.conversion_id,
        currency: conversionData.currency || 'USD'
      }
    });
  }, [trackEvent]);

  const trackError = useCallback((error: Error, context?: string) => {
    trackEvent({
      action: 'error',
      category: 'technical',
      label: context || 'unknown',
      custom_parameters: {
        error_message: error.message,
        error_stack: error.stack,
        error_name: error.name
      }
    });
  }, [trackEvent]);

  const trackPerformance = useCallback((metrics: {
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
  }) => {
    trackEvent({
      action: 'performance_metrics',
      category: 'technical',
      custom_parameters: metrics
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    trackError,
    trackPerformance
  };
}

// Component for tracking specific interactions
export function AnalyticsTracker({ 
  event, 
  children, 
  onClick 
}: {
  event: AnalyticsEvent;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const { trackEvent } = useAnalytics();

  const handleClick = useCallback(() => {
    trackEvent(event);
    if (onClick) {
      onClick();
    }
  }, [event, trackEvent, onClick]);

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
}

// Performance monitoring component
export function PerformanceTracker() {
  const { trackPerformance } = useAnalytics();

  useEffect(() => {
    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {
      // FCP
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            trackPerformance({ fcp: entry.startTime });
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          trackPerformance({ lcp: lastEntry.startTime });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            trackPerformance({ fid: entry.processingStart - entry.startTime });
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        trackPerformance({ cls: clsValue });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, [trackPerformance]);

  return null;
}

// Declare global analytics interface
declare global {
  interface Window {
    analytics: {
      track: (event: AnalyticsEvent) => void;
      page: (pageView: PageView) => void;
    };
    gtag: (...args: any[]) => void;
  }
}

export default EnhancedAnalytics;