'use client'
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

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
  const [isLoaded, setIsLoaded] = useState(false)

  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: properties?.category || 'general',
        event_label: properties?.label || '',
        value: properties?.value || 0,
        ...properties
      })
    }
    console.log('Analytics Event:', eventName, properties)
  }, [])

  const trackPageView = useCallback((pageName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href
      })
    }
    console.log('Analytics Page View:', pageName)
  }, [])

  const trackUserAction = useCallback((action: string, category: string, label?: string) => {
    trackEvent(action, {
      category,
      label,
      action
    })
  }, [trackEvent])

  useEffect(() => {
    // Initialize analytics
    const initAnalytics = () => {
      // Google Analytics initialization
      if (typeof window !== 'undefined') {
        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID'}`
        document.head.appendChild(script)

        window.dataLayer = window.dataLayer || []
        function gtag(...args: any[]) {
          window.dataLayer.push(args)
        }
        window.gtag = gtag
        gtag('js', new Date())
        gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID')
      }
    }

    initAnalytics()
    setIsLoaded(true)
  }, [])

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

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default AnalyticsProvider