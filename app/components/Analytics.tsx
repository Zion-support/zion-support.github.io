<<<<<<< HEAD
<<<<<<< HEAD
"use client";
import React from 'react';

const Analytics = () => {
  return (
    <div>
      <h1>Analytics</h1>
      <p>This component is under construction.</p>
=======


import React from 'react';

interface AnalyticsProps {
  // Add props here
}

const Analytics: React.FC<AnalyticsProps> = (_props) => {
  return (
    <div>
      {/* Component content */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0ece
    </div>
  );
};

export default Analytics;
<<<<<<< HEAD
=======
'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Analytics: React.FC = () => {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
        page_path: pathname,
      })
    }

    // Track custom events
    const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters)
      }
    }

    // Track page load time
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart
        trackEvent('page_load_time', {
          load_time: loadTime,
          page_path: pathname
        })
      }
    }

    // Track Core Web Vitals
    const trackWebVitals = () => {
      if (typeof window !== 'undefined' && 'web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            trackEvent('web_vital', {
              name: 'CLS',
              value: metric.value,
              page_path: pathname
            })
          })
          
          getFID((metric) => {
            trackEvent('web_vital', {
              name: 'FID',
              value: metric.value,
              page_path: pathname
            })
          })
          
          getFCP((metric) => {
            trackEvent('web_vital', {
              name: 'FCP',
              value: metric.value,
              page_path: pathname
            })
          })
          
          getLCP((metric) => {
            trackEvent('web_vital', {
              name: 'LCP',
              value: metric.value,
              page_path: pathname
            })
          })
          
          getTTFB((metric) => {
            trackEvent('web_vital', {
              name: 'TTFB',
              value: metric.value,
              page_path: pathname
            })
          })
        })
      }
    }

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        if (target.matches('button, a[href]')) {
          trackEvent('click', {
            element: target.tagName.toLowerCase(),
            text: target.textContent?.slice(0, 100),
            href: target.getAttribute('href'),
            page_path: pathname
          })
        }
      })

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement
        trackEvent('form_submit', {
          form_id: form.id || 'unnamed',
          page_path: pathname
        })
      })
    }

    // Initialize tracking
    trackPageLoad()
    trackWebVitals()
    trackInteractions()

    // Track scroll depth
    let maxScroll = 0
    const trackScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackEvent('scroll_depth', {
            depth: maxScroll,
            page_path: pathname
          })
        }
      }
    }

    window.addEventListener('scroll', trackScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', trackScroll)
    }
  }, [pathname])

  // Google Analytics script
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_ID && typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      window.gtag = gtag
      gtag('js', new Date())
      gtag('config', process.env.NEXT_PUBLIC_GA_ID)
    }
  }, [])

  return null
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default Analytics
>>>>>>> 6d21a698833607de6a5fc802b68ed751e474e57d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0ece
