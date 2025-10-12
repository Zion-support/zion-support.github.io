'use client'
import { createContext, useContext, useEffect } from 'react'

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void
  page: (name: string, properties?: Record<string, any>) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const track = (event: string, properties?: Record<string, any>) => {
    // Track analytics events
    console.log('Analytics Event:', event, properties)
  }

  const page = (name: string, properties?: Record<string, any>) => {
    // Track page views
    console.log('Page View:', name, properties)
  }

  useEffect(() => {
    // Initialize analytics
    console.log('Analytics initialized')
  }, [])

  return (
    <AnalyticsContext.Provider value={{ track, page }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}