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
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }

  const initializePerformanceMonitoring = () => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }
  }

  const initializeErrorTracking = () => {
    // Initialize error tracking
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('JavaScript Error:', event.error)
        // Send to error tracking service
      })

      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled Promise Rejection:', event.reason)
        // Send to error tracking service
      })
    }
  }

  const initializeUserBehaviorTracking = () => {
    if (typeof window !== 'undefined') {
      // Track page views
      const trackPageView = () => {
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href
          })
        }
      }

      // Track clicks
      const trackClick = (event: Event) => {
        const target = event.target as HTMLElement
        if (target && window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'engagement',
            event_label: target.tagName + (target.className ? '.' + target.className : ''),
            value: 1
          })
        }
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'engagement',
              event_label: target.textContent || target.getAttribute('aria-label') || 'unknown'
            })
          }
        }
      }

      // Track scroll depth
      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
        if (window.gtag && scrollPercent % 25 === 0) {
          window.gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: `${scrollPercent}%`,
            value: scrollPercent
          })
        }
      }

      // Initialize tracking
      trackPageView()
      document.addEventListener('click', trackClick)
      window.addEventListener('scroll', trackScroll)
    }
  }

  return null
}

export default Analytics