'use client'

import React, { createContext, useContext } from 'react'

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
  const track = (event: string, properties?: Record<string, unknown>) => {
    console.log('Analytics track:', event, properties)
  }

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    console.log('Analytics identify:', userId, traits)
  }

  const page = (name: string, properties?: Record<string, unknown>) => {
    console.log('Analytics page:', name, properties)
  }

  return (
    <AnalyticsContext.Provider value={{ track, identify, page }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

const EnhancedAnalytics: React.FC = () => {
  return (
    <div className="enhanced-analytics">
      <h1>Enhanced Analytics Component</h1>
      <p>This component provides enhanced analytics functionality.</p>
    </div>
  )
}

export default EnhancedAnalytics