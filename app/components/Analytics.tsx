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
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }

  const initializePerformanceMonitoring = () => {
    // Performance monitoring setup
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (perfData) {
          console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart)
        }
      })
    }
  }

  const initializeErrorTracking = () => {
    // Error tracking setup
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('JavaScript error:', event.error)
        // Send error to analytics service
      })
    }
  }

  const initializeUserBehaviorTracking = () => {
    // User behavior tracking setup
    if (typeof window !== 'undefined') {
      // Track page views
      const trackPageView = () => {
        console.log('Page view tracked:', window.location.pathname)
      }
      
      // Track clicks
      const trackClick = (event: Event) => {
        const target = event.target as HTMLElement
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          console.log('Click tracked:', target.textContent)
        }
      }

      window.addEventListener('load', trackPageView)
      document.addEventListener('click', trackClick)

      return () => {
        window.removeEventListener('load', trackPageView)
        document.removeEventListener('click', trackClick)
      }
    }
  }

  return null
}

export default Analytics