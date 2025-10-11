'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  trackUser: (userId: string, traits?: Record<string, any>) => void;
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
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize analytics
    setIsInitialized(true)
  }, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isInitialized) return
    
    // Mock analytics tracking
    console.log('Analytics Event:', eventName, properties)
    
    // In a real implementation, you would send this to your analytics service
    // Example: analytics.track(eventName, properties)
  }

  const trackPageView = (pageName: string) => {
    if (!isInitialized) return
    
    // Mock page view tracking
    console.log('Page View:', pageName)
    
    // In a real implementation, you would send this to your analytics service
    // Example: analytics.page(pageName)
  }

  const trackUser = (userId: string, traits?: Record<string, any>) => {
    if (!isInitialized) return
    
    // Mock user tracking
    console.log('User Identified:', userId, traits)
    
    // In a real implementation, you would send this to your analytics service
    // Example: analytics.identify(userId, traits)
  }

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackUser
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}