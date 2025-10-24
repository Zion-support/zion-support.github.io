'use client'
import { useEffect } from 'react'

const Analytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics initialization
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Initialize Google Analytics
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID'}`
      document.head.appendChild(script)

      // Initialize gtag
      window.gtag = window.gtag || function() {
        (window.gtag as any).q = (window.gtag as any).q || []
        ;(window.gtag as any).q.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      })

      // Track page views
      const trackPageView = () => {
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
          })
        }
      }

      // Track initial page view
      trackPageView()

      // Track route changes (for SPA behavior)
      const handleRouteChange = () => {
        trackPageView()
      }

      // Listen for popstate events (back/forward navigation)
      window.addEventListener('popstate', handleRouteChange)

      // Cleanup
      return () => {
        window.removeEventListener('popstate', handleRouteChange)
      }
    }
  }, [])

  // Track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  }

  // Expose tracking function globally for use in components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).trackEvent = trackEvent
    }
  }, [])

  return null
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: {
      (...args: any[]): void
      q: any[]
    }
  }
}

export default Analytics