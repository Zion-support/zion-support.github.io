'use client'
import React, { createContext, useContext, useEffect, ReactNode } from 'react'

interface AnalyticsContextType {
  track: (event: string, data?: any) => void
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
  children: ReactNode
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const track = (event: string, data?: any) => {
    // Analytics tracking logic here
    console.log('Analytics event:', event, data)
  }

  return (
    <AnalyticsContext.Provider value={{ track }}>
      {children}
    </AnalyticsContext.Provider>
  )
}