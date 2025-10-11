'use client'
import React, { createContext, useContext, useCallback } from 'react'

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string, properties?: Record<string, any>) => void
  trackConversion: (conversionName: string, value?: number) => void
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
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: properties?.category || 'engagement',
        event_label: properties?.label,
        value: properties?.value,
        ...properties
      })
    }

    // Custom analytics
    console.log('Analytics Event:', eventName, properties)
  }, [])

  const trackPageView = useCallback((pageName: string, properties?: Record<string, any>) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...properties
      })
    }

    // Custom analytics
    console.log('Page View:', pageName, properties)
  }, [])

  const trackConversion = useCallback((conversionName: string, value?: number) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
        value: value,
        currency: 'USD',
        event_category: conversionName
      })
    }

    // Custom analytics
    console.log('Conversion:', conversionName, value)
  }, [])

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider
