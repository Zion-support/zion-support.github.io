<<<<<<< HEAD
ursor/website-audit-and-update-with-deployment-a178
    // Load Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
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
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID', {
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
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
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value)
          }
        }
      })
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
    }
  }

  const initializeErrorTracking = () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('JavaScript Error:', {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          error: event.error
        })
      })

      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled Promise Rejection:', event.reason)
<<<<<<< HEAD
        // Send to error tracking service
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
      })
    }
  }

  const initializeUserBehaviorTracking = () => {
<<<<<<< HEAD
    // Initialize user behavior tracking
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
    if (typeof window !== 'undefined') {
      // Track page views
      const trackPageView = () => {
        console.log('Page View:', {
          url: window.location.href,
          title: document.title,
          timestamp: new Date().toISOString()
        })
      }

      // Track clicks
      const trackClick = (event: Event) => {
        const target = event.target as HTMLElement
<<<<<<< HEAD
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'engagement',
              event_label: target.textContent || target.getAttribute('aria-label') || 'unknown'
            })
          }
        }
=======
        console.log('Click Event:', {
          element: target.tagName,
          id: target.id,
          className: target.className,
          text: target.textContent?.slice(0, 100),
          timestamp: new Date().toISOString()
        })
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
      }

      // Track scroll depth
      let maxScrollDepth = 0
      const trackScroll = () => {
<<<<<<< HEAD
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent
          if (window.gtag) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${scrollPercent}%`
      let maxScrollDepth = 0
      const trackScrollDepth = () => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth
          if (window.gtag) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${scrollDepth}%`
            })
          }
        }
      }

      // Add event listeners
=======
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth
          console.log('Scroll Depth:', maxScrollDepth + '%')
        }
      }

>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
      // Initialize tracking
      trackPageView()
      document.addEventListener('click', trackClick)
      window.addEventListener('scroll', trackScroll)
<<<<<<< HEAD
      trackPageView()
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07

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
