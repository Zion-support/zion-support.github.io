import React, { createContext, useContext, useEffect, ReactNode } from 'react';
interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void
  page: (name: string, properties?: Record<string, any>) => void
  identify: (userId: string, traits?: Record<string, any>) => void
}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)</AnalyticsContextType
interface AnalyticsProviderProps {
  children: ReactNode
  trackingId?: string
}
export const AnalyticsProvider: React.FC<AnalyticsProviderProps>= ({ 
  children, 
  trackingId = 'G-XXXXXXXXXX' 
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && trackingId !== 'G-XXXXXXXXXX') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script)</AnalyticsProviderProps>
      // Initialize gtag
      window.dataLayer = window.dataLayer || []</AnalyticsProviderProps
      function gtag(...args: any[]) {
        window.dataLayer.push(args)</AnalyticsProviderProps
      }
      window.gtag = gtag
      gtag('js', new Date())</AnalyticsProviderProps
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href})</AnalyticsProviderProps
    }
  }, [trackingId])</AnalyticsProviderProps
  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties)</string
    }
    // Also log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event, properties)</string
    }
  }</string
  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: name,
        page_location: window.location.href,
        ...properties})</string
    }
    // Also log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Page:', name, properties)</string
    }
  }</string
  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        user_id: userId,
        ...traits})</string
    }
    // Also log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Identify:', userId, traits)</string
    }
  }</string
  const value: AnalyticsContextType = {
    track,
    page,
    identify}</string
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider
  );
};
export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context
};
// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void
  }
}
  </AnalyticsProviderProps
  </AnalyticsContextType