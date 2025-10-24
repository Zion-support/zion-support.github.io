'use client'

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, _properties?: Record<string, unknown>) => void
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
        function gtag(...args: unknown[]) {
          ;(window as unknown as { dataLayer: unknown[] }).dataLayer.push(args)
        }
        gtag('js', new Date())
        gtag('config', process.env.REACT_APP_GA_ID)
      }
    }
  }, [])

  const track = (event: string, _properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', event, _properties)
      }

      // Custom analytics
      console.log('Analytics Event:', event, _properties)
    }
  }

  const identify = (_userId: string, _traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', process.env.REACT_APP_GA_ID, {
          user_id: _userId,
          custom_map: _traits
        })
      }

      // Custom analytics
      console.log('Analytics Identify:', _userId, _traits)
    }
  }

  const page = (_name: string, _properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', process.env.REACT_APP_GA_ID, {
          page_title: _name,
          page_location: window.location.href,
          ..._properties
        })
      }

      // Custom analytics
      console.log('Analytics Page:', _name, _properties)
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
