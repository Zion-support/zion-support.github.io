<<<<<<< HEAD
'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string) => void
  trackUser: (userId: string, traits?: Record<string, any>) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Initialize analytics
    const initAnalytics = () => {
      // Add analytics initialization code here
      setIsLoaded(true)
    }

    initAnalytics()
  }, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isLoaded) return

    // Track event with analytics service
    console.log('Analytics Event:', eventName, properties)
    
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties)
    }
  }

  const trackPageView = (pageName: string) => {
    if (!isLoaded) return

    // Track page view
    console.log('Analytics Page View:', pageName)
    
    // Example: Google Analytics 4
=======
'use client';
import React, { createContext, useContext, useCallback } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  trackConversion: (conversionName: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }
  }, []);

  const trackPageView = useCallback((pageName: string) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href
<<<<<<< HEAD
      })
    }
  }

  const trackUser = (userId: string, traits?: Record<string, any>) => {
    if (!isLoaded) return

    // Track user identification
    console.log('Analytics User:', userId, traits)
    
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits
      })
    }
  }
=======
      });
    }
  }, []);

  const trackConversion = useCallback((conversionName: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: conversionName,
        value: value
      });
    }
  }, []);
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
<<<<<<< HEAD
    trackUser
  }
=======
    trackConversion
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
<<<<<<< HEAD
  )
}

export default AnalyticsProvider
=======
  );
};

export default AnalyticsProvider;
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
