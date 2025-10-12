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
<<<<<<< HEAD
    // Load Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
=======
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID', {
>>>>>>> main
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }

  const initializePerformanceMonitoring = () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> main
    }
  }

  const initializeErrorTracking = () => {
<<<<<<< HEAD
    // Initialize error tracking
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('JavaScript Error:', event.error)
        // Send to error tracking service
      })

      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled Promise Rejection:', event.reason)
        // Send to error tracking service
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-55ae
=======
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('JavaScript error:', event.error)
        // Send error to analytics service
      })
      
      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason)
        // Send error to analytics service
>>>>>>> main
      })
    }
  }

  const initializeUserBehaviorTracking = () => {
<<<<<<< HEAD
<<<<<<< HEAD
    // Initialize user behavior tracking
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-55ae
=======
>>>>>>> main
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
<<<<<<< HEAD
=======
>>>>>>> main
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'engagement',
              event_label: target.textContent || target.getAttribute('aria-label') || 'unknown'
            })
          }
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-55ae
=======
>>>>>>> main
        }
      }

      // Track scroll depth
<<<<<<< HEAD
      let maxScroll = 0
      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent
<<<<<<< HEAD
          if (window.gtag && scrollPercent % 25 === 0) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${scrollPercent}%`,
              value: scrollPercent
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-55ae
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
>>>>>>> main
            })
          }
        }
      }

      // Initialize tracking
      trackPageView()
      document.addEventListener('click', trackClick)
<<<<<<< HEAD
      window.addEventListener('scroll', trackScroll)
=======
      window.addEventListener('scroll', trackScrollDepth)
>>>>>>> main

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-55ae
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