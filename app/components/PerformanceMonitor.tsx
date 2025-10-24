'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure page load time
      const measurePageLoad = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart
          console.log('Page load time:', loadTime + 'ms')
          
          // Track Core Web Vitals
          if ('web-vitals' in window) {
            import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
              getCLS((metric) => {
                console.log('CLS:', metric)
              })
              getFID((metric) => {
                console.log('FID:', metric)
              })
              getFCP((metric) => {
                console.log('FCP:', metric)
              })
              getLCP((metric) => {
                console.log('LCP:', metric)
              })
              getTTFB((metric) => {
                console.log('TTFB:', metric)
              })
            })
          }
        }
      }

      // Run after page load
      if (document.readyState === 'complete') {
        measurePageLoad()
      } else {
        window.addEventListener('load', measurePageLoad)
      }

      // Cleanup
      return () => {
        window.removeEventListener('load', measurePageLoad)
      }
    }
  }, [])

  return null
}