<<<<<<< HEAD
ursor/website-audit-and-update-with-deployment-a178
=======
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
<<<<<<< HEAD
=======
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
          } else if (entry.entryType === 'paint') {
            console.log('Paint timing:', entry)
          }
        }
      })
      
      observer.observe({ entryTypes: ['navigation', 'paint'] })
    }
  }

  const initializeErrorTracking = () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('JavaScript error:', event.error)
        // Send error to analytics service
      })
      
      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason)
        // Send error to analytics service
>>>>>>> cursor/fix-errors-and-merge-to-main-5945
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
<<<<<<< HEAD
=======
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'engagement',
              event_label: target.textContent || target.getAttribute('aria-label') || 'unknown'
            })
          }
>>>>>>> cursor/fix-errors-and-merge-to-main-5945
        }
      }

      // Track scroll depth
<<<<<<< HEAD
=======
      let maxScrollDepth = 0
      const trackScrollDepth = () => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth
          if (window.gtag) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${scrollDepth}%`
>>>>>>> cursor/fix-errors-and-merge-to-main-5945
            })
          }
        }
      }

<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
=======
      // Initialize tracking
      trackPageView()
      document.addEventListener('click', trackClick)
      window.addEventListener('scroll', trackScrollDepth)

>>>>>>> cursor/fix-errors-and-merge-to-main-5945
      // Cleanup
      return () => {
        document.removeEventListener('click', trackClick)
        window.removeEventListener('scroll', trackScrollDepth)
      }
    }
  }

  return null
}

export default Analytics
