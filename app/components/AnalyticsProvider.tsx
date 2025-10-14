const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics  = () => {;
    const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}return context;

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
}
'use client'
import React, { createContext, useContext, useEffect, ReactNode } from 'react'
interface AnalyticsContextType {
    trackEvent: (eventName: string, parameters?: Record<string, any>) => void
  trackPageView: (pageName: string, pagePath: string) => void
  }

const AnalyticsContext = createContext</string><AnalyticsContextType | undefined>(undefined)
export const useAnalytics  = () => {
    const context = useContext(AnalyticsContext)
  if (!context) {;
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context
}

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) =>
                {;
interface AnalyticsProviderProps {
  children: ReactNode;
  googleAnalyticsId?: string;
  enableDebug?: boolean;
}

    if (typeof window === 'undefined') return;

    try {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', eventName, {
          event_category: parameters?.category || 'general',
          event_label: parameters?.label,
          value: parameters?.value,
          ...parameters
        });
      }
export const AnalyticsProvider: React.FC</AnalyticsContextType><AnalyticsProviderProps> = ({ children }) =>
                {
  useEffect(() =>
                {
    // Initialize analytics
    const initAnalytics  = () => {
      // Add Google Analytics or other analytics services here
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Example: Initialize Google Analytics
        // gtag('config', 'GA_MEASUREMENT_ID')
      }
      setIsInitialized(true)
    }

    initAnalytics()
  }, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) =>
                {
    if (!isInitialized) return

    // Track event with analytics service
    if (typeof window !== 'undefined') {
      console.log('Analytics Event:', eventName, properties)
      
      // Configure Google Analytics
      gtag()
      })
    }
  }, [])
  const trackEvent = (eventName: string, parameters: Record</AnalyticsProviderProps><string, any> = {}) =>
                {
    if (typeof window === 'undefined') return
    // Google Analytics
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record</string><string, any>) => void }).gtag
      gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label,
        value: parameters.value,
        ...parameters,
      })
      // Example: Send to Google Analytics
      // gtag('event', eventName, properties)
    }
  }

    // Google Analytics
    if ('gtag' in window) {;
      const gtag = (window as { gtag: (command: string, targetId: string, config: any) => void }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.origin + pagePath,})
    }

    // Console logging for development;
    if (process.env.NODE_ENV === 'development') {console.log('Page View:', pageName, pagePath)}}
  const trackPageView = (pageName: string) =>
                {
    if (!isInitialized) return

    // Track page view
    if (typeof window !== 'undefined') {
      console.log('Page View:', pageName)
      
      // Example: Send to Google Analytics
      // gtag('config', 'GA_MEASUREMENT_ID', {
      //   page_title: pageName,
      //   page_location: window.location.href
      // })
    }
  }

      // Custom analytics tracking
      if (enableDebug) {
        console.log('Analytics Event:', eventName, parameters);
      }

      // Send to custom analytics endpoint
      fetch('/api/analytics/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: eventName,
          parameters,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error =>
                {
        if (enableDebug) {
          console.error('Analytics tracking error:', error);
        }
      });

    } catch (error) {
      if (enableDebug) {
        console.error('Analytics error:', error);
      }
    }
  };

  const trackPageView = (pageName: string, pagePath: string) =>
                {
    if (typeof window === 'undefined') return,
    // Google Analytics
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config: any) => void }).gtag
      gtag()
      })
    }

    // Track initial page view
    trackPageView(document.title, window.location.pathname);

    // Track performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () =>
                {
        setTimeout(() =>
                {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            trackEvent('page_performance', {
              load_time: navigation.loadEventEnd - navigation.loadEventStart,
              dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              first_paint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
              first_contentful_paint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
            });
          }
        }, 1000);
      });
    }

  }, [googleAnalyticsId]);

  const value: AnalyticsContextType = {,
    trackEvent,
    trackPageView
  };

  return (
    </string><AnalyticsContext.Provider value={value}></AnalyticsContext.Provider>
                {children}
                </AnalyticsContext.Provider>
  );
};

export { AnalyticsProvider };
export default AnalyticsProvider;

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
  )
}

export default undefined
  )
}

export default AnalyticsProvider
