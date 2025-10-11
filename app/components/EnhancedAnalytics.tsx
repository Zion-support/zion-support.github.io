'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string) => void
  identifyUser: (userId: string, traits?: Record<string, any>) => void
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
    setIsLoaded(true)
  }, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && isLoaded) {
      // Track event with analytics service
      console.log('Analytics Event:', eventName, properties)
    }
  }

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && isLoaded) {
      // Track page view
      console.log('Analytics Page View:', pageName)
    }
  }

  const identifyUser = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && isLoaded) {
      // Identify user
      console.log('Analytics Identify:', userId, traits)
    }
  }

  const value: AnalyticsContextType = {
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

export default AnalyticsProvider