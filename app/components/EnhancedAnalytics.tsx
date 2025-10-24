'use client'

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, _properties?: Record<string, unknown>) => void
  identify: (_userId: string, _traits?: Record<string, unknown>) => void
  page: (_name: string, _properties?: Record<string, unknown>) => void
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
        // Load Google Analytics script
        const script = document.createElement('script')
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`
        script.async = true
        document.head.appendChild(script)

        // Initialize gtag
        window.gtag = window.gtag || function() {
          (window.gtag.q = window.gtag.q || []).push(arguments)
        }
        window.gtag('js', new Date())
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX')
      }
    }
  }, [])

  const track = (event: string, _properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', event, _properties)
      }

      // Custom analytics
      console.log('Analytics Event:', event, _properties)
    }
  }

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        user_id: userId,
        custom_map: traits
      })
    }
  }

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: name,
        page_location: window.location.href,
        ...properties
      })
    }
  }
  track: (_event: string, _properties?: Record<string, unknown>) => void
  identify: (_userId: string, _traits?: Record<string, unknown>) => void
  page: (_name: string, _properties?: Record<string, unknown>) => void
=======
  track: (event: string, properties?: Record<string, unknown>) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  page: (name: string, properties?: Record<string, unknown>) => void;
>>>>>>> 189aa74f8961d76a83fc82f1935cf4b76f8c7cbf
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
  // Initialize analytics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.NODE_ENV === 'production') {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: unknown[]) {
          window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', process.env.REACT_APP_GA_ID);
      }
    }
  }, []);

  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', event, _properties)
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
         
        console.log('Analytics Event: ', event, properties);
>>>>>>> 189aa74f8961d76a83fc82f1935cf4b76f8c7cbf
      }
    }
  };

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', process.env.REACT_APP_GA_ID, {
>>>>>>> 189aa74f8961d76a83fc82f1935cf4b76f8c7cbf
          user_id: userId,
          custom_map: traits
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
         
        console.log('Analytics Identify: ', userId, traits);
      }
    }
  };

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', process.env.REACT_APP_GA_ID, {
>>>>>>> 189aa74f8961d76a83fc82f1935cf4b76f8c7cbf
          page_title: name,
          page_location: window.location.href,
          ...properties
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
         
        console.log('Analytics Page: ', name, properties);
      }
=======
  const track = (event: string, _properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', event, _properties)
      }

      // Custom analytics
      console.log('Analytics Event:', event, _properties)
    }
  }

  const identify = (_userId: string, _traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', process.env.REACT_APP_GA_ID, {
          user_id: _userId,
          custom_map: _traits
        })
      }

      // Custom analytics
      console.log('Analytics Identify:', _userId, _traits)
    }
  }

  const page = (_name: string, _properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', process.env.REACT_APP_GA_ID, {
          page_title: _name,
          page_location: window.location.href,
          ..._properties
        })
      }

      // Custom analytics
      console.log('Analytics Page:', _name, _properties)
>>>>>>> cursor/fix-errors-and-merge-to-main-d47f
    }
  };

  const value: AnalyticsContextType = {
    track,
    identify,
    page
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
>>>>>>> 189aa74f8961d76a83fc82f1935cf4b76f8c7cbf
}

export default AnalyticsProvider
