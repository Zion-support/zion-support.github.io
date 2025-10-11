'use client'
import React, {createContext, useContext, useEffect, useState} from 'react'

interface AnalyticsContextType {trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string) => void
  trackUser: (userId: string, traits?: Record<string, any>) => void}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

export const useAnalytics = () => {const context = useContext(AnalyticsContext)
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}
  return context
}

interface AnalyticsProviderProps {children: React.ReactNode}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({children}) => {const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize analytics
    setIsInitialized(true)}, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {if (!isInitialized) return
    
    // Track event logic here
    console.log('Event tracked:', eventName, properties)}

  const trackPageView = (pageName: string) => {if (!isInitialized) return
    
    // Track page view logic here
    console.log('Page view tracked:', pageName)}

  const trackUser = (userId: string, traits?: Record<string, any>) => {if (!isInitialized) return
    
    // Track user logic here
    console.log('User tracked:', userId, traits)}

  const value: AnalyticsContextType = {trackEvent,
    trackPageView,
    trackUser}

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider