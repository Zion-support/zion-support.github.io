'use client'
import  { useEffect } from 'react'

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
  return (
    <div>

    <div>
  
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }

const initializePerformanceMonitoring = () => {
  return (
    <div>

    <div>
  
    if (typeof window !== 'undefined' && 'performance' in window) {
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
  return (
    <div>

    <div>
  
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('Global error:', event.error)
        // Send error to analytics service
      })
      
      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason)
        // Send error to analytics service
      })
    }
  }

const initializeUserBehaviorTracking = () => {
  return (
    <div>

    <div>
  
    if (typeof window !== 'undefined') {
      // Track page views
      const trackPageView = () => {
  return (
    <div>

    <div>
  
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
      }

      // Track scroll depth
      let maxScroll = 0
      const trackScroll = () => {
  return (
    <div>

    <div>
  
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent
          if (window.gtag && scrollPercent % 25 === 0) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${scrollPercent}%`,
              value: scrollPercent
            })
          }
        }
      }

      // Initialize tracking
      trackPageView()
      document.addEventListener('click', trackClick)
      window.addEventListener('scroll', trackScroll)

      // Cleanup
      return () => {
        document.removeEventListener('click', trackClick)
        window.removeEventListener('scroll', trackScroll)
      }
    }
  }

  return null
}

export default Analytics