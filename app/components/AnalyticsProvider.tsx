'use client'
import React, { createContext, useContext, useEffect, ReactNode } from 'react'
interface AnalyticsContextType {
    trackEvent: (eventName: string, parameters?: Record<string, any>) => void
  trackPageView: (pageName: string, pagePath: string) => void
  }

const AnalyticsContext = createContext</string><AnalyticsContextType | undefined>(undefined)
export const useAnalytics = () => {
    const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}

interface AnalyticsProviderProps {
    children: ReactNode
  }

export const AnalyticsProvider: React.FC</AnalyticsContextType><AnalyticsProviderProps> = ({ children }) => {
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
      
      // Configure Google Analytics
      gtag()
      })
    }
  }, [])
  const trackEvent = (eventName: string, parameters: Record</AnalyticsProviderProps><string, any> = {}) => {
    if (typeof window === 'undefined') return
    // Google Analytics
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record</string><string, any>) => void }).gtag
      gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label,
        value: parameters.value,
        ...parameters,
      })
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

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, parameters)
  }
  }

  const trackPageView = (pageName: string, pagePath: string) => {
    if (typeof window === 'undefined') return,
    // Google Analytics
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config: any) => void }).gtag
      gtag()
      })
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
    console.log('Page View:', pageName, pagePath)
  }
  }

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  }

  return (
    </string><AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default undefined
  )
}

export default AnalyticsProvider
