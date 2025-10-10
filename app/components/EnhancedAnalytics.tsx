'use client'
import React, { useEffect, useState, useCallback } from 'react'
interface AnalyticsEvent {
  event: string
  properties?: Record<string, any>
  timestamp: number
}

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void
  trackPageView: (page: string) => void
  trackUserAction: (action: string, element: string) => void
  events: AnalyticsEvent[]
}

const AnalyticsContext = React.createContext<AnalyticsContextType | undefined>(undefined)
export const useAnalytics = () => {
  const context = React.useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}
interface AnalyticsProviderProps {
  children: React.ReactNode
}

const EnhancedAnalytics: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([])
  const [isInitialized, setIsInitialized] = useState(false)
  const trackEvent = useCallback((event: string, properties?: Record<string, any>) => {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties,
      timestamp: Date.now()
    }
    setEvents(prev => [...prev, analyticsEvent])
    // Send to analytics service (replace with your actual analytics service)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties)
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', analyticsEvent)
    }
  }, [])
  const trackPageView = useCallback((page: string) => {
    trackEvent('page_view', { page })
  }, [trackEvent])
  const trackUserAction = useCallback((action: string, element: string) => {
    trackEvent('user_action', { action, element })
  }, [trackEvent])
  useEffect(() => {
    // Initialize analytics
    setIsInitialized(true)
    // Track initial page view
    trackPageView(window.location.pathname)
    // Set up page view tracking for route changes
    const handleRouteChange = () => {
      trackPageView(window.location.pathname)
    }
    window.addEventListener('popstate', handleRouteChange)
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [trackPageView])
  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackUserAction,
    events
  }
  if (!isInitialized) {
    return <div>Loading analytics...
  }

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
  )
}
export default EnhancedAnalytics