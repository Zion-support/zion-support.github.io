import React, { createContext, ReactNode, useCallback } from 'react'

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string, properties?: Record<string, any>) => void
  identifyUser: (userId: string, properties?: Record<string, any>) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

interface AnalyticsProviderProps {
  children: ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    console.log('Event tracked:', eventName, properties)
    // Add your analytics tracking logic here
  }, [])

  const trackPageView = useCallback((pageName: string, properties?: Record<string, any>) => {
    console.log('Page view tracked:', pageName, properties)
    // Add your page view tracking logic here
  }, [])

  const identifyUser = useCallback((userId: string, properties?: Record<string, any>) => {
    console.log('User identified:', userId, properties)
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