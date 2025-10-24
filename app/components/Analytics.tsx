'use client'
import React, { useEffect } from 'react'

<<<<<<< HEAD
interface AnalyticsProps {
  enableGoogleAnalytics?: boolean
  enablePerformanceMonitoring?: boolean
  enableErrorTracking?: boolean
  enableUserBehaviorTracking?: boolean
=======
declare global {
  interface Window {
    gtag: (..._args: unknown[]) => void
  }
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
}

const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true,
}) => {
  useEffect(() => {
<<<<<<< HEAD
    if (enableGoogleAnalytics) {
      initializeGoogleAnalytics()
=======
    if (!GA_TRACKING_ID) return

    // Initialize gtag
    window.gtag = window.gtag || function() {
      (window.gtag as any).q = (window.gtag as any).q || []
      ;(window.gtag as any).q.push(arguments)
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
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
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID')
    }
  }

  const initializePerformanceMonitoring = () => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Performance monitoring logic
    }
  }

  const initializeErrorTracking = () => {
    // Initialize error tracking
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('Error tracked:', event.error)
      })
    }
  }

  const initializeUserBehaviorTracking = () => {
    // Initialize user behavior tracking
    if (typeof window !== 'undefined') {
      // User behavior tracking logic
    }
  }

  return null; // This component doesn't render anything visible
}

export default Analytics