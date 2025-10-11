'use client'
import React, { createContext, useContext, useCallback, useEffect, useState } from 'react'

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void
  page: (pageName: string, parameters?: Record<string, any>) => void
  identify: (userId: string, traits?: Record<string, any>) => void
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string) => void
  trackUserAction: (action: string, category: string, label?: string) => void
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
    const initAnalytics = () => {
      // Google Analytics initialization
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, targetId: string, config?: Record<string, any>) => void }).gtag
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href
        })
      }
      setIsInitialized(true)
    }

    initAnalytics()
  }, [])

  const track = useCallback((event: string, parameters?: Record<string, any>) => {
    console.log('Analytics Event:', event, parameters)
    
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag
      gtag('event', event, parameters || {})
    }
  }, [])

  const page = useCallback((pageName: string, parameters?: Record<string, any>) => {
    console.log('Analytics Page:', pageName, parameters)
    
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config: Record<string, any>) => void }).gtag
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...parameters
      })
    }
  }, [])

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    console.log('Analytics Identify:', userId, traits)
    
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, userProperties: Record<string, any>) => void }).gtag
      gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits || {}
      })
    }
  }, [])

  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    track(eventName, properties)
  }, [track])

  const trackPageView = useCallback((pageName: string) => {
    page(pageName)
  }, [page])

  const trackUserAction = useCallback((action: string, category: string, label?: string) => {
    track('user_action', {
      action,
      category,
      label
    })
  }, [track])

  const value: AnalyticsContextType = {
    track,
    page,
    identify,
    trackEvent,
    trackPageView,
    trackUserAction
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider