'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
  setUserProperties: (properties: Record<string, any>) => void;
  setGlobalProperties: (properties: Record<string, any>) => void;
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
  const [isInitialized, setIsInitialized] = useState(false);
  const [userProperties, setUserProperties] = useState<Record<string, any>>({});
  const [globalProperties, setGlobalProperties] = useState<Record<string, any>>({});

  useEffect(() => {
    // Initialize analytics
    const initAnalytics = async () => {
      try {
        // Initialize Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
          });
        }

        // Initialize other analytics services
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize analytics:', error);
      }
    };

    initAnalytics();
  }, []);

  const track = (event: string, properties?: Record<string, any>) => {
    if (!isInitialized) return;

    try {
      // Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', event, {
          ...properties,
          ...globalProperties,
        });
      }

      // Custom analytics tracking
      console.log('Analytics Event:', event, { ...properties, ...globalProperties });
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (!isInitialized) return;

    try {
      // Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          user_id: userId,
        });
      }

      // Set user properties
      setUserProperties({ ...userProperties, ...traits });

      // Custom analytics identification
      console.log('User Identified:', userId, traits);
    } catch (error) {
      console.error('Failed to identify user:', error);
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (!isInitialized) return;

    try {
      // Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: name,
          page_location: window.location.href,
          ...properties,
          ...globalProperties,
        });
      }

      // Custom page tracking
      console.log('Page View:', name, { ...properties, ...globalProperties });
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  };

  const setUserPropertiesHandler = (properties: Record<string, any>) => {
    setUserProperties({ ...userProperties, ...properties });
  };

  const setGlobalPropertiesHandler = (properties: Record<string, any>) => {
    setGlobalProperties({ ...globalProperties, ...properties });
  };

  const value: AnalyticsContextType = {
    track,
    identify,
    page,
    setUserProperties: setUserPropertiesHandler,
    setGlobalProperties: setGlobalPropertiesHandler,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}