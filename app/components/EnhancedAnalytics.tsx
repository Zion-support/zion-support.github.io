<<<<<<< HEAD
<<<<<<< HEAD
'use client'

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void
  identify: (userId: string, traits?: Record<string, unknown>) => void
  page: (name: string, properties?: Record<string, unknown>) => void
}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
)
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}
interface AnalyticsProviderProps {
  children: React.ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.NODE_ENV === 'production') {
        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`
        document.head.appendChild(script)

        ;(window as unknown as { dataLayer: unknown[] }).dataLayer =
          (window as unknown as { dataLayer: unknown[] }).dataLayer || []
        function gtag(...args: unknown[]) {
          ;(window as unknown as { dataLayer: unknown[] }).dataLayer.push(args)
        }
        gtag('js', new Date())
        gtag('config', process.env.REACT_APP_GA_ID)
      }
    }
  }, [])

  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          'event',
          event,
          properties,
        )
      }
      // Custom analytics
      console.log('Analytics Event:', event, properties)
    }
  }

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          'config',
          process.env.REACT_APP_GA_ID,
          {
            user_id: userId,
            custom_map: traits,
          },
        )
      }
      // Custom analytics
      console.log('Analytics Identify:', userId, traits)
    }
  }

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          'config',
          process.env.REACT_APP_GA_ID,
          {
            page_title: name,
            page_location: window.location.href,
            ...properties,
          },
        )
      }
      // Custom analytics
      console.log('Analytics Page:', name, properties)
    }
  }
=======
=======
>>>>>>> origin/main
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
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
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      document.head.appendChild(script);
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID);
        setIsLoaded(true);
      };
    } else {
      setIsLoaded(true);
    }
  }, []);
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (isLoaded && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };
  const trackPageView = (page: string) => {
    if (isLoaded && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: page
      });
    }
  };
<<<<<<< HEAD

  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: name,
          page_location: window.location.href,
          ...properties
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Analytics Page: ', name, properties);
      }
    }
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-f713

  const value: AnalyticsContextType = {
    track,
    identify,
<<<<<<< HEAD
    page,
  }
=======
    page
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-f713

=======
  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView
  };
>>>>>>> origin/main
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}

export default AnalyticsProvider
=======
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-f713
=======
  );
};
>>>>>>> origin/main
