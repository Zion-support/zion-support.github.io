'use client'
import React, { useEffect } from 'react'

interface AnalyticsProps {
  enableGoogleAnalytics?: boolean
  enablePerformanceMonitoring?: boolean
  enableErrorTracking?: boolean
  enableUserBehaviorTracking?: boolean
}

const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics) {
      initializeGoogleAnalytics()
    }
    if (enablePerformanceMonitoring) {
      initializePerformanceMonitoring()
    }
    if (enableErrorTracking) {
      initializeErrorTracking()
    }
    if (enableUserBehaviorTracking) {
      initializeUserBehaviorTracking()
    }
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking])

  const initializeGoogleAnalytics = () => {
    // Load Google Analytics
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', 'GA_MEASUREMENT_ID')
  }

  const initializePerformanceMonitoring = () => {
    // Performance monitoring setup
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry)
          }
        }
      })
      observer.observe({ entryTypes: ['navigation'] })
    }
  }

  const initializeErrorTracking = () => {
    // Error tracking setup
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error)
    })

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason)
    })
  }

  const initializeUserBehaviorTracking = () => {
    // User behavior tracking
    const trackClick = (event: Event) => {
      const target = event.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        console.log('Button/Link clicked:', target.textContent)
      }
    }

    document.addEventListener('click', trackClick)
    
    return () => {
      document.removeEventListener('click', trackClick)
    }
  }

  return null
}

export default Analytics