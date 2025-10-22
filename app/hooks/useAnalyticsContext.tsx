import React, { createContext, useContext } from 'react'
interface AnalyticsContextType {
  trackEvent: (event: string, properties?: any) => void
  trackPageView: (page: string) => void
}
const AnalyticsContext = createContext<AnalyticsContextType | null>(null)
export function useAnalyticsContext() {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider')
  }
  return context
}
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const trackEvent = (event: string, properties?: any) => {
    console.log('Analytics event:', event, properties)
  }
  const trackPageView = (page: string) => {
    console.log('Page view:', page)
  }
  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
      {children}
    </AnalyticsContext.Provider>
  )
}