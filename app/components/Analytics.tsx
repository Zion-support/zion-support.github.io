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
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }

  const initializePerformanceMonitoring = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry)
          }
        }
      })
      
      observer.observe({ entryTypes: ['navigation'] })
      
      return () => observer.disconnect()
    }
  }

  const initializeErrorTracking = () => {
    if (typeof window !== 'undefined') {
      const handleError = (event: ErrorEvent) => {
        console.error('JavaScript Error:', event.error)
        // Send error to analytics service
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: event.error?.message || 'Unknown error',
            fatal: false
          })
        }
      }

      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        console.error('Unhandled Promise Rejection:', event.reason)
        // Send error to analytics service
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: event.reason?.toString() || 'Unhandled promise rejection',
            fatal: false
          })
        }
      }

      window.addEventListener('error', handleError)
      window.addEventListener('unhandledrejection', handleUnhandledRejection)

      return () => {
        window.removeEventListener('error', handleError)
        window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      }
    }
  }

  const initializeUserBehaviorTracking = () => {
    if (typeof window !== 'undefined') {
      const trackClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (target && window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'engagement',
            event_label: target.tagName + (target.className ? '.' + target.className : ''),
            value: 1
          })
        }
      }

      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        if (window.gtag) {
          window.gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: `${scrollPercent}%`,
            value: scrollPercent
          })
        }
      }

      let scrollTimeout: NodeJS.Timeout
      const throttledScroll = () => {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(trackScroll, 100)
      }

      document.addEventListener('click', trackClick)
      window.addEventListener('scroll', throttledScroll)

      return () => {
        document.removeEventListener('click', trackClick)
        window.removeEventListener('scroll', throttledScroll)
        clearTimeout(scrollTimeout)
      }
    }
  }

  return null
}

export default Analytics