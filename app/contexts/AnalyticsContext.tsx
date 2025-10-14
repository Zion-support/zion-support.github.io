import React, { createContext, ReactNode, useCallback } from 'react'

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void
  identifyUser: (userId: string, properties?: Record<string, unknown>) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

interface AnalyticsProviderProps {
  children: ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
import React, { Suspense } from 'react';
import React, { Suspense } from 'react';
  const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
import React, { Suspense } from 'react';
    if (process.env.NODE_ENV === 'development') {
      console.warn('Event tracked:', eventName, properties)
    }
    // Add your analytics tracking logic here
  }, [])

  const trackPageView = useCallback((pageName: string, properties?: Record<string, unknown>) => {
import React, { Suspense } from 'react';
    if (process.env.NODE_ENV === 'development') {
      console.warn('Page view tracked:', pageName, properties)
    }
    // Add your page view tracking logic here
  }, [])

  const identifyUser = useCallback((userId: string, properties?: Record<string, unknown>) => {
import React, { Suspense } from 'react';
    if (process.env.NODE_ENV === 'development') {
      console.warn('User identified:', userId, properties)
    }
    // Add your user identification logic here
  }, [])

  const value = {
    trackEvent,
    trackPageView,
    identifyUser
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export { AnalyticsContext }
