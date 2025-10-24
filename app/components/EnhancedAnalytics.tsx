<<<<<<< HEAD
<<<<<<< HEAD
'use client'

import React, { createContext, useContext, useEffect } from 'react'

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
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
        document.head.appendChild(script)

        ;(window as unknown as { dataLayer: unknown[] }).dataLayer =
          (window as unknown as { dataLayer: unknown[] }).dataLayer || []
        function gtag(...args: unknown[]) {
          ;(window as unknown as { dataLayer: unknown[] }).dataLayer.push(args)
        }
        gtag('js', new Date())
        gtag('config', process.env.NEXT_PUBLIC_GA_ID)
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
          process.env.NEXT_PUBLIC_GA_ID,
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
          process.env.NEXT_PUBLIC_GA_ID,
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
<<<<<<< HEAD
=======
>>>>>>> 1c3bcb5bf864
'use client';

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (_event: string, _properties?: Record<string, unknown>) => void;
  identify: (_userId: string, _traits?: Record<string, unknown>) => void;
  page: (_name: string, _properties?: Record<string, unknown>) => void;
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
        const gtagFunction = function(..._args: unknown[]) {
          ((window as unknown as { gtag: { q?: unknown[] } }).gtag.q = (window as unknown as { gtag: { q?: unknown[] } }).gtag.q || []).push(args);
        };
        (window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag = (window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag || gtagFunction;
        window.gtag = window.gtag || gtagFunction;
        window.gtag('js', new Date());
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX');
      }
    }
  }, []);

  const track = (_event: string, _properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', _event, _properties);
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', _event, _properties);
      }
    }
  };

  const identify = (_userId: string, _traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
          user_id: _userId,
          custom_map: _traits
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Identify:', _userId, _traits);
      }
    }
  };

  const page = (_name: string, _properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag('event', 'page_view', {
          page_title: _name,
          page_location: window.location.href,
          ..._properties
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Page:', _name, _properties);
      }
    }
  };
<<<<<<< HEAD
>>>>>>> main
=======
=======
'use client'

import React, { createContext, useContext, useEffect } from 'react'

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
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
        document.head.appendChild(script)

        ;(window as unknown as { dataLayer: unknown[] }).dataLayer =
          (window as unknown as { dataLayer: unknown[] }).dataLayer || []
        function gtag(...args: unknown[]) {
          ;(window as unknown as { dataLayer: unknown[] }).dataLayer.push(args)
        }
        gtag('js', new Date())
        gtag('config', process.env.NEXT_PUBLIC_GA_ID)
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
          process.env.NEXT_PUBLIC_GA_ID,
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
          process.env.NEXT_PUBLIC_GA_ID,
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
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864

  const value: AnalyticsContextType = {
    track,
    identify,
<<<<<<< HEAD
<<<<<<< HEAD
    page,
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider
=======
    page
  };
=======
"use client";
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
=======
    page
  };
=======
    page,
  }
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1c3bcb5bf864
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
<<<<<<< HEAD
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (..._args: unknown[]) => void;
  }
}

export default AnalyticsProvider;
=======
<<<<<<< HEAD
    <div>
      <h1>EnhancedAnalytics</h1>
      <p>This component is under construction.</p>
    </div>
  );
};

export default EnhancedAnalytics;
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
>>>>>>> main
=======
  )
}

export default AnalyticsProvider
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
