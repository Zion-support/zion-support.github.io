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
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
      script.async = true
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      window.gtag = function() {
        window.dataLayer.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID)
    }
  }

  const initializePerformanceMonitoring = () => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(sendToAnalytics)
        getFID(sendToAnalytics)
        getFCP(sendToAnalytics)
        getLCP(sendToAnalytics)
        getTTFB(sendToAnalytics)
      })
    }
  }

  const initializeErrorTracking = () => {
    // Track JavaScript errors
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        sendToAnalytics('error', {
          error_message: event.message,
          error_filename: event.filename,
          error_lineno: event.lineno,
          error_colno: event.colno
        })
      })

      window.addEventListener('unhandledrejection', (event) => {
        sendToAnalytics('error', {
          error_message: event.reason?.message || 'Unhandled Promise Rejection',
          error_type: 'unhandledrejection'
        })
      })
    }
  }

  const initializeUserBehaviorTracking = () => {
    // Track user interactions
    if (typeof window !== 'undefined') {
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          sendToAnalytics('click', {
            element_type: target.tagName.toLowerCase(),
            element_text: target.textContent?.slice(0, 100),
            element_href: target.getAttribute('href')
          })
        }
      })
    }
  }

  const sendToAnalytics = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  }

  return null
}

export default Analytics