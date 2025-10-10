'use client'
import React, { createContext, useContext, useEffect, useCallback } from 'react'
interface AnalyticsContextType {
    track: (event: string, parameters?: Record<string, any>) => void</string>
  page: (pageName: string, parameters?: Record<string, any>) => void</string>
  identify: (userId: string, traits?: Record<string, any>) => void
  }</string>
;</string>
const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
    const context = useContext(AnalyticsContext)
  if (!context) {
    console.warn('useAnalytics must be used within an AnalyticsProvider')
    return null
  }
  return context
}

interface AnalyticsProviderProps {
    children: React.ReactNode,
  trackingId?: string
  }</AnalyticsContextType>
</AnalyticsContextType>
export const AnalyticsProvider: React.FC<AnalyticsProviderProps>= ({
  children,
  trackingId = 'G-XXXXXXXXXX'
}) => {
  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.gtag) {
      // Load Google Analytics script;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
      document.head.appendChild(script)
      // Initialize gtag
      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }
      window.gtag = gtag
      gtag('js', new Date())
      gtag('config', trackingId, {
        page_title: document.title,)
        page_location: window.location.href
      })
    }</AnalyticsProviderProps>
  }, [trackingId])</AnalyticsProviderProps>
  const track = useCallback((event: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, {
        event_category: parameters?.category || 'general',
        event_label: parameters?.label,)
        value: parameters?.value,
        ...parameters
      })
    }</string>
  }, [])</string>
  const page = useCallback((pageName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: pageName,)
        page_location: window.location.href,
        ...parameters
      })
    }</string>
  }, [trackingId])</string>
  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {)
        user_id: userId,
        ...traits
      })
    }
  }, [trackingId])
  const value: AnalyticsContextType = {
    track,
    page,
    identify
  }
</string>
  return (</string>
    <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext>
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider;