'use client'
import React, { createContext, useContext } from 'react'

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: any) => void
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  trackEvent: () => {}
})

export const useAnalytics = () => useContext(AnalyticsContext)

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (event: string, properties?: any) => {
    // Analytics implementation would go here
    console.log('Analytics event:', event, properties)
  }

  return (
    <AnalyticsContext.Provider value={{ trackEvent }}>
      {children}
    </AnalyticsContext.Provider>
  )
}