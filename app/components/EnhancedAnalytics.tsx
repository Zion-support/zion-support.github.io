'use client'

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (_event: string, _properties?: Record<string, unknown>) => void
  identify: (_userId: string, _traits?: Record<string, unknown>) => void
  page: (_name: string, _properties?: Record<string, unknown>) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
)

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
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.NODE_ENV === 'production') {
        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`
        document.head.appendChild(script)

        ;(window as unknown as { dataLayer: unknown[] }).dataLayer =
          (window as unknown as { dataLayer: unknown[] }).dataLayer || []
        
        function gtag(..._args: unknown[]) {
          ;(window as unknown as { dataLayer: unknown[] }).dataLayer.push(_args)
        }
        gtag('js', new Date())
        gtag('config', process.env.REACT_APP_GA_ID)
      }
    }
  }, [])

  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', event, properties)
      }

      // Custom analytics
      console.log('Analytics Event:', event, properties)
    }
  }

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', process.env.REACT_APP_GA_ID, {
          user_id: userId,
          custom_map: traits
        })
      }

      // Custom analytics
      console.log('Analytics Identify:', userId, traits)
    }
  }

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', process.env.REACT_APP_GA_ID, {
          page_title: name,
          page_location: window.location.href,
          ...properties
        })
      }

      // Custom analytics
      console.log('Analytics Page:', name, properties)
    }
  }

  const value: AnalyticsContextType = {
    track,
    identify,
    page
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider