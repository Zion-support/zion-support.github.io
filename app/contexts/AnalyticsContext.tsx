<<<<<<< HEAD
import { createContext, useContext, useState, useEffect } from 'react'
<<<<<<< HEAD
'use client''
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
=======
'use client'
interface AnalyticsContextType { trackEvent: (eventName: string, properties?: Record<string, any>) => void
>>>>>>> origin/main
  trackPageView: (pageName: string) => void
  setUser: (userId: string, properties?: Record<string, any>) => void
  isEnabled: boolean }
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)
<<<<<<< HEAD
{ createContext, useContext, useState, useEffect } from 'react';
"use client"
interface AnalyticsContextType {trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
  isEnabled: boolean}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)
=======
{ createContext, useContext, useState, useEffect } from 'react';'
'use client';
interface AnalyticsContextType { trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
  isEnabled: boolean; }
=======
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
  isEnabled: boolean;
>>>>>>> origin/main
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
<<<<<<< HEAD
>>>>>>> origin/main
const  ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  useEffect(() => {
    // if analytics is enabled
    setIsEnabled(true)}, [])
    // if analytics is enabled;
    setIsEnabled(true);}
<<<<<<< HEAD
  }, [])
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {if (!isEnabled) return;
    // Track event logic here;
    console.log('Analytics Event:', eventName, properties)"}"
  const trackPageView = (pageName: string) => {if (!isEnabled) return;
    // Track page view logic here;
    console.log('Page View:', pageName)"}"
  const setUser = (newUserId: string, properties?: Record<string, any>) => {setUserId(newUserId)
    console.log('User Set:', newUserId, properties)"}"
    if (!isEnabled) return
    // Track event logic here
    console.log('Analytics Event:', eventName, properties)}'
  const trackPageView = (pageName: string) => {
    if (!isEnabled) return
    // Track page view logic here
    console.log('Page View:', pageName)}'
  const setUser = (newUserId: string, properties?: Record<string, any>) => {
    setUserId(newUserId)
    console.log('User Set:', newUserId, properties)}'
    // Track event logic here';
    console.log('Analytics Event:', eventName, properties);}'
  }
  const trackPageView = (pageName: string) => {if (!isEnabled) return;
    // Track page view logic here';
    console.log('Page View:', pageName)}'
  }
  const setUser = (newUserId: string, properties?: Record<string, any>) => {setUserId(newUserId)';
    console.log('User Set:', newUserId, properties)}'
  }
  const value: AnalyticsContextType = {
    trackEvent,
=======
  }, []);
  const trackEvent = (eventName: string, properties?: Record<string, any>) => { if (!isEnabled) return;
    // Track event logic here;
    console.log('Analytics Event:', eventName, properties); }
  const trackPageView = (pageName: string) => { if (!isEnabled) return;
    // Track page view logic here;
    console.log('Page View:', pageName); }
  const setUser = (newUserId: string, properties?: Record<string, any>) => { setUserId(newUserId);
    console.log('User Set:', newUserId, properties); }
    if (!isEnabled) return
    // Track event logic here
    console.log('Analytics Event:', eventName, properties)}
  const trackPageView = (pageName: string) => { if (!isEnabled) return
    // Track page view logic here
    console.log('Page View:', pageName) }
  const setUser = (newUserId: string, properties?: Record<string, any>) => { setUserId(newUserId)
    console.log('User Set:', newUserId, properties) }
    // Track event logic here;'
    console.log('Analytics Event:', eventName, properties);}
  };
  const trackPageView = (pageName: string) => { if (!isEnabled) return;
    // Track page view logic here;'
    console.log('Page View:', pageName); }
  };
  const setUser = (newUserId: string, properties?: Record<string, any>) => { setUserId(newUserId);'
    console.log('User Set:', newUserId, properties); }
  };
  const value: AnalyticsContextType = { trackEvent,
>>>>>>> origin/main
    trackPageView,
    setUser,
    isEnabled, }
    isEnabled,}
  return (
    <AnalyticsContext.Provider value={value}>
      { children }
    </AnalyticsContext.Provider>
<<<<<<< HEAD
  )
    <AnalyticsContext.Provider value={value}>{children}
=======
  );
}
    <AnalyticsContext.Provider value={value}>{ children }
>>>>>>> origin/main
    </AnalyticsContext.Provider>
  )
export { AnalyticsContext }
<<<<<<< HEAD
export { AnalyticsContext }';
=======
};
export { AnalyticsContext };'
=======

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // if analytics is enabled
    setIsEnabled(true);
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    // Track event logic here
    console.log("Analytics Event:", eventName, properties);
  };

  const trackPageView = (pageName: string) => {
    // Track page view logic here
    console.log("Page View:", pageName);
  };

  const setUser = (newUserId: string, properties?: Record<string, unknown>) => {
    console.log("User Set:", newUserId, properties);
  };

  const value = {
    trackEvent,
    trackPageView,
    setUser,
    isEnabled
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  
  return context;
};

export { AnalyticsContext };
>>>>>>> origin/main
>>>>>>> origin/main
