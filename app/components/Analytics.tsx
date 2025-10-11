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
    window.gtag = window.gtag || function() {
      (window.gtag.q = window.gtag.q || []).push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', 'GA_MEASUREMENT_ID')
  }

  const initializePerformanceMonitoring = () => {
    // Performance monitoring setup
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance entry:', entry)
        }
      })
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })
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
    const trackClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (target) {
        console.log('Click tracked:', {
          element: target.tagName,
          id: target.id,
          className: target.className,
          text: target.textContent?.slice(0, 100)
        })
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