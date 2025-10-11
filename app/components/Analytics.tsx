import React, { useEffect } from 'react'

interface AnalyticsProps {
  measurementId?: string
}

const Analytics: React.FC<AnalyticsProps> = ({ measurementId = 'GA_MEASUREMENT_ID' }) => {
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    // Initialize gtag
    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) {
      ;(window as any).dataLayer.push(args)
    }
    ;(window as any).gtag = gtag
    gtag('js', new Date())
    gtag('config', measurementId)

    // Track page view
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href
    })

    // Track Web Vitals
    const trackEvent = (category: string, action: string, value: number) => {
      gtag('event', action, {
        event_category: category,
        event_label: action,
        value: value
      })
    }

    // Performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            trackEvent('web_vitals', 'LCP', Math.round(entry.startTime))
          } else if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime
            trackEvent('web_vitals', 'FID', Math.round(fid))
          } else if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              trackEvent('web_vitals', 'CLS', (entry as any).value)
            }
          }
        }
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Track page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          trackEvent('performance', 'page_load_time', Math.round(navigation.loadEventEnd - navigation.fetchStart))
        }
      })
    }

    // Error tracking
    window.addEventListener('error', (event) => {
      gtag('event', 'exception', {
        description: event.message,
        fatal: false,
        type: (event.target as any).tagName,
        src: (event.target as any).src || (event.target as any).href,
        error: event.type
      })
    }, true)

    // Unhandled promise rejection tracking
    window.addEventListener('unhandledrejection', (event) => {
      gtag('event', 'exception', {
        description: event.reason?.message || 'Unhandled Promise Rejection',
        fatal: false,
        error: 'unhandledrejection'
      })
    })

    return () => {
      // Cleanup if needed
    }
  }, [measurementId])

  return null
}

export default Analytics