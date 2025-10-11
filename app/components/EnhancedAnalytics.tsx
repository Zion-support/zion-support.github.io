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

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize analytics
    setIsInitialized(true)
  }, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isInitialized) return
    
    // Google Analytics 4
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
      gtag('event', eventName, properties || {})
    }
    
    // Console log for development
    console.log('Analytics Event:', eventName, properties)
  }

  const trackPageView = (pageName: string) => {
    if (!isInitialized) return
    
    // Google Analytics 4
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
      gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href
      })
    }
    
    // Console log for development
    console.log('Analytics Page View:', pageName)
  }

  const trackUserAction = (action: string, category: string, label?: string) => {
    if (!isInitialized) return
    
    const properties = {
      action,
      category,
      ...(label && { label })
    }
    
    trackEvent('user_action', properties)
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

export default AnalyticsProvider