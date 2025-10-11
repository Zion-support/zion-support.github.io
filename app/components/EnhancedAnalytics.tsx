'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void
  trackPageView: (page: string) => void
  setUser: (userId: string, properties?: Record<string, any>) => void
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

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (!isLoaded) return
    
    // Track event logic here
    console.log('Analytics Event:', event, properties)
  }

  const trackPageView = (page: string) => {
    if (!isLoaded) return
    
    // Track page view logic here
    console.log('Page View:', page)
  }

  const setUser = (userId: string, properties?: Record<string, any>) => {
    if (!isLoaded) return
    
    // Set user logic here
    console.log('User Set:', userId, properties)
  }

  const value = {
    trackEvent,
    trackPageView,
    setUser
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider
