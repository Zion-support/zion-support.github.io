<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
import React, { useEffect } from 'react';
=======
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
>>>>>>> cursor/analyze-improve-and-deploy-application-30da

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    }, []);

<<<<<<< HEAD
  return <>{children}</>;
<<<<<<< HEAD
};

export default AnalyticsProvider;
=======
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

=======
>>>>>>> cursor/analyze-improve-and-deploy-application-30da
interface AnalyticsProviderProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Track event with Google Analytics or other analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', eventName, properties);
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, properties);
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    // Track page view with Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...properties
      });
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageName, properties);
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Initialize Google Analytics or other analytics service
      console.log('Analytics initialized');
    }
  }, []);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
=======
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  return <>{children}</>;
>>>>>>> cursor/analyze-improve-and-deploy-application-30da
};

export default AnalyticsProvider;
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
=======
};

export default AnalyticsProvider;
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
