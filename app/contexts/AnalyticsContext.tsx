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
  const trackEvent = useCallback((_eventName: string, _properties?: Record<string, unknown>) => {
    // Analytics events are tracked silently
    // Add your analytics tracking logic here
  }, [])

  const trackPageView = useCallback((_pageName: string, _properties?: Record<string, unknown>) => {
    // Page views are tracked silently
    // Add your page view tracking logic here
  }, [])

  const identifyUser = useCallback((_userId: string, _properties?: Record<string, unknown>) => {
    // User identification is handled silently
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