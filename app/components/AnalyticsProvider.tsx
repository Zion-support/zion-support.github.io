'use client';
import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (page: string, title?: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
  setUserProperties: (properties: Record<string, any>) => void;
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
  googleAnalyticsId?: string;
  enableDebugMode?: boolean;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  googleAnalyticsId = 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  enableDebugMode = false
}) => {
  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window === 'undefined' || !googleAnalyticsId) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', googleAnalyticsId, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: false // We'll handle page views manually
    });

    return () => {
      // Cleanup if needed
    };
  }, [googleAnalyticsId]);

  // Track custom event
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (typeof window === 'undefined') return;

    if (enableDebugMode) {
      console.log('Analytics Event:', event);
    }

    // Google Analytics 4
    if ('gtag' in window) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }

    // Custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error => {
        if (enableDebugMode) {
          console.warn('Failed to send analytics event:', error);
        }
      });
    }
  }, [enableDebugMode]);

  // Track page view
  const trackPageView = useCallback((page: string, title?: string) => {
    if (typeof window === 'undefined') return;

    const pageTitle = title || document.title;
    const pageLocation = window.location.href;

    if (enableDebugMode) {
      console.log('Page View:', { page, title: pageTitle, location: pageLocation });
    }

    // Google Analytics 4
    if ('gtag' in window) {
      (window as any).gtag('config', googleAnalyticsId, {
        page_title: pageTitle,
        page_location: pageLocation
      });
    }

    // Custom analytics
    trackEvent({
      action: 'page_view',
      category: 'navigation',
      label: page,
      custom_parameters: {
        page_title: pageTitle,
        page_location: pageLocation
      }
    });
  }, [googleAnalyticsId, trackEvent, enableDebugMode]);

  // Track conversion
  const trackConversion = useCallback((conversionId: string, value?: number) => {
    trackEvent({
      action: 'conversion',
      category: 'business',
      label: conversionId,
      value: value,
      custom_parameters: {
        conversion_id: conversionId
      }
    });
  }, [trackEvent]);

  // Set user properties
  const setUserProperties = useCallback((properties: Record<string, any>) => {
    if (typeof window === 'undefined') return;

    if ('gtag' in window) {
      (window as any).gtag('config', googleAnalyticsId, {
        user_properties: properties
      });
    }
  }, [googleAnalyticsId]);

  // Track performance metrics
  useEffect(() => {
    const trackPerformance = () => {
      if (typeof window === 'undefined') return;

      // Web Vitals
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          trackEvent({
            action: 'web_vital',
            category: 'performance',
            label: 'CLS',
            value: Math.round(metric.value * 1000),
            custom_parameters: {
              metric_name: 'CLS',
              metric_value: metric.value,
              metric_rating: metric.rating
            }
          });
        });

        getFID((metric) => {
          trackEvent({
            action: 'web_vital',
            category: 'performance',
            label: 'FID',
            value: Math.round(metric.value),
            custom_parameters: {
              metric_name: 'FID',
              metric_value: metric.value,
              metric_rating: metric.rating
            }
          });
        });

        getFCP((metric) => {
          trackEvent({
            action: 'web_vital',
            category: 'performance',
            label: 'FCP',
            value: Math.round(metric.value),
            custom_parameters: {
              metric_name: 'FCP',
              metric_value: metric.value,
              metric_rating: metric.rating
            }
          });
        });

        getLCP((metric) => {
          trackEvent({
            action: 'web_vital',
            category: 'performance',
            label: 'LCP',
            value: Math.round(metric.value),
            custom_parameters: {
              metric_name: 'LCP',
              metric_value: metric.value,
              metric_rating: metric.rating
            }
          });
        });

        getTTFB((metric) => {
          trackEvent({
            action: 'web_vital',
            category: 'performance',
            label: 'TTFB',
            value: Math.round(metric.value),
            custom_parameters: {
              metric_name: 'TTFB',
              metric_value: metric.value,
              metric_rating: metric.rating
            }
          });
        });
      });
    };

    // Track performance after page load
    window.addEventListener('load', () => {
      setTimeout(trackPerformance, 2000);
    });
  }, [trackEvent]);

  // Track errors
  useEffect(() => {
    const trackError = (error: ErrorEvent) => {
      trackEvent({
        action: 'error',
        category: 'javascript',
        label: error.message,
        custom_parameters: {
          error_message: error.message,
          error_filename: error.filename,
          error_lineno: error.lineno,
          error_colno: error.colno
        }
      });
    };

    window.addEventListener('error', trackError);
    window.addEventListener('unhandledrejection', (event) => {
      trackEvent({
        action: 'error',
        category: 'javascript',
        label: 'Unhandled Promise Rejection',
        custom_parameters: {
          error_message: event.reason?.message || 'Unknown error',
          error_stack: event.reason?.stack
        }
      });
    });

    return () => {
      window.removeEventListener('error', trackError);
    };
  }, [trackEvent]);

  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion,
    setUserProperties
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;