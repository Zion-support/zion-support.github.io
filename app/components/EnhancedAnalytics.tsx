'use client'
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

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
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Initialize Google Analytics or other analytics services
      setIsInitialized(true)
    }
  }, [])

  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    if (!isInitialized) return

    // Track event with analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
      gtag('event', eventName, properties)
    }

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, properties)
    }
  }, [isInitialized])

  const trackPageView = useCallback((pageName: string) => {
    if (!isInitialized) return

    // Track page view
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
      gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href
      })
    }

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Page View:', pageName)
    }
  }, [isInitialized])

  const identifyUser = useCallback((userId: string, traits?: Record<string, any>) => {
    if (!isInitialized) return

    // Identify user
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
      gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits
      })
    }

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Identify:', userId, traits)
    }
  }, [isInitialized])

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