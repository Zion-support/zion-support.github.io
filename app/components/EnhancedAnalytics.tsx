'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string) => void
  trackConversion: (conversionType: string, value?: number) => void
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
  const [isLoaded, setIsLoaded] = useState(false)

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
      setIsLoaded(true)
    }

    initAnalytics()
  }, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag
      gtag('event', eventName, {
        event_category: properties?.category || 'engagement',
        event_label: properties?.label,
        value: properties?.value
      })
    }
    console.log('Analytics Event:', eventName, properties)
  }

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag
      gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href
      })
    }
    console.log('Analytics Page View:', pageName)
  }

  const trackConversion = (conversionType: string, value?: number) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag
      gtag('event', 'conversion', {
        send_to: 'GA_MEASUREMENT_ID',
        value: value,
        currency: 'USD'
      })
    }
    console.log('Analytics Conversion:', conversionType, value)
  }

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion
  }

  if (!isLoaded) {
    return <div>Loading analytics...</div>
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider
