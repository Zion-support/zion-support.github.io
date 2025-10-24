<<<<<<< HEAD
'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (_eventName: string, _parameters?: Record<string, any>) => void;
  trackPageView: (_pageName: string, _pagePath: string) => void;
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
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.NODE_ENV === 'production') {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`;
        script.async = true;
        document.head.appendChild(script);

        // Initialize gtag
        const gtagFunction = function(...args: any[]) {
          ((window as any).gtag.q = (window as any).gtag.q || []).push(args);
        };
        (window as any).gtag = (window as any).gtag || gtagFunction;
        window.gtag = window.gtag || gtagFunction;
        window.gtag('js', new Date());
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX');
      }
    }
  }, []);

  const trackEvent = (_eventName: string, _parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', _eventName, _parameters);
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', _eventName, _parameters);
      }
    }
  };

  const trackPageView = (_pageName: string, _pagePath: string) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: _pageName,
          page_location: window.location.href,
          page_path: _pagePath
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Page View:', _pageName, _pagePath);
      }
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView
  };

=======
import React, { createContext, useContext, useEffect, ReactNode } from &quot;react&quot
declare global {
  interface Window {
    gtag: (...args: any[]) => void}
}
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void
  trackPageView: (pageName: string) => void}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
)
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error(&quot;useAnalytics must be used within an AnalyticsProvider&quot;)
  }
  return context
}
interface AnalyticsProviderProps {
  children: ReactNode}
exportconstAnalyticsProvider:React.FC<AnalyticsProviderProp s>= ({children}) => {useEffect(() => {
    if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics
      if (process.env.NODE_ENV === &quot;production&quot;) {
        const script = document.createElement(&quot;script&quot;)
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`
        script.async = true
        document.head.appendChild(script)
        window.gtag =
          window.gtag ||
          function (...args: any[]) {
            (window.gtag as any).q = (window.gtag as any).q || []
            (window.gtag as any).q.push(args)
          }
        window.gtag(&quot;js&quot;, new Date())
        window.gtag(&quot;config&quot;, process.env.REACT_APP_GA_MEASUREMENT_ID || &quot;&quot;)
      }
    }
  }, [])
  consttrackEvent= (
    eventName: string
    parameters?: Record<string, unknown>
  ) => {
    if (typeof window !== &quot;undefined&quot; && window.gtag) {
      window.gtag(&quot;event&quot;, eventName, parameters)
    }
  }
  consttrackPageView= (pageName: string) => {if (type of windo w !==&quot;undefined&quot; && windo w.gtag) {
      window.gtag(&quot;config&quot;,&quot;GA_MEASUREMENT_ID&quot;, {
        page_title: pageName,
    page_location: window.location.href})
    }
  }
  constvalue: AnalyticsContextType = {trackEvent
    trackPageView}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
<<<<<<< HEAD
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (..._args: any[]) => void;
  }
}

export default AnalyticsProvider;
=======
  )
}
export default AnalyticsProvider
  )
}
export default AnalyticsProviderPage
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
