'use client'

import React, { createContext, useContext, useEffect } from 'react'

interface AnalyticsContextType {
  track: (_event: string, _properties?: Record<string, unknown>) => void
  identify: (_userId: string, _traits?: Record<string, unknown>) => void
  page: (_name: string, _properties?: Record<string, unknown>) => void
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
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.NODE_ENV === 'production') {
        // Load Google Analytics script
      }
    }
  }, [])

  const track = (_event: string, _properties?: Record<string, unknown>) => {
    // Track event
  }

  const identify = (_userId: string, _traits?: Record<string, unknown>) => {
    // Identify user
  }

  const page = (_name: string, _properties?: Record<string, unknown>) => {
    // Track page view
  }

  return (
    <AnalyticsContext.Provider value={{ track, identify, page }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider