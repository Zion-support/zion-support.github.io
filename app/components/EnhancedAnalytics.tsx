'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface AnalyticsContextType {
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

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize analytics
    const initAnalytics = () => {
      // Add Google Analytics or other analytics services here
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Example: Initialize Google Analytics
        // gtag('config', 'GA_MEASUREMENT_ID')
      }
      setIsInitialized(true)
    }

    initAnalytics()
  }, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isInitialized) return

    // Track event with analytics service
    if (typeof window !== 'undefined') {
      console.log('Analytics Event:', eventName, properties)
      
      // Example: Send to Google Analytics
      // gtag('event', eventName, properties)
    }
  }

  const trackPageView = (pageName: string) => {
    if (!isInitialized) return

    // Track page view
    if (typeof window !== 'undefined') {
      console.log('Page View:', pageName)
      
      // Example: Send to Google Analytics
      // gtag('config', 'GA_MEASUREMENT_ID', {
      //   page_title: pageName,
      //   page_location: window.location.href
      // })
    }
  }

  const trackUserAction = (action: string, category: string, label?: string) => {
    if (!isInitialized) return

    trackEvent('user_action', {
      action,
      category,
      label,
      timestamp: new Date().toISOString()
    })
  }

  const value: AnalyticsContextType = {
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