'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

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
    const initializeAnalytics = () => {
      // Add Google Analytics or other analytics scripts here
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, targetId: string, config?: Record<string, any>) => void }).gtag
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href
        })
      }
      setIsInitialized(true)
    }

    initializeAnalytics()
  }, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag
      gtag('event', eventName, {
        event_category: 'engagement',
        ...properties
      })
    }
    console.log('Analytics Event:', eventName, properties)
  }

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config: Record<string, any>) => void }).gtag
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href
      })
    }
    console.log('Analytics Page View:', pageName)
  }

  const identifyUser = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config: Record<string, any>) => void }).gtag
      gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits
      })
    }
    console.log('Analytics Identify:', userId, traits)
  }

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