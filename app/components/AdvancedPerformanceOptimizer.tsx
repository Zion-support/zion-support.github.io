'use client'
import React, { useEffect, useState, useCallback } from 'react'

interface AdvancedPerformanceOptimizerProps {
  enableAdvancedCaching?: boolean
  enableImageOptimization?: boolean
  enableLazyLoading?: boolean
  enablePreloading?: boolean
  enableCodeSplitting?: boolean
  enableResourceHints?: boolean
  enableServiceWorker?: boolean
  enableCriticalCSS?: boolean
  enableWebVitals?: boolean
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableAdvancedCaching = true,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableResourceHints = true,
  enableServiceWorker = true,
  enableCriticalCSS = true,
  enableWebVitals = true
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  })

  // Web Vitals monitoring
  useEffect(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      const measureWebVitals = () => {
        // First Contentful Paint
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setPerformanceMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
          }
        }).observe({ entryTypes: ['paint'] })

        // Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setPerformanceMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        }).observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setPerformanceMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
          }
        }).observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        let clsValue = 0
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
              setPerformanceMetrics(prev => ({ ...prev, cls: clsValue }))
            }
          }
        }).observe({ entryTypes: ['layout-shift'] })
      }

      measureWebVitals()
    }
  }, [enableWebVitals])

  // Advanced caching strategies
  const setupAdvancedCaching = useCallback(() => {
    if (typeof window === 'undefined') return

    // Service Worker for advanced caching
    if ('serviceWorker' in navigator && enableServiceWorker) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration)
        })
        .catch((registrationError) => {
          console.error('Service Worker registration failed:', registrationError)
        })
    }

    // Memory-based caching for API responses
    const cache = new Map()
    const originalFetch = window.fetch
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : input.url
      const cacheKey = `${url}_${JSON.stringify(init)}`

      if (cache.has(cacheKey)) {
        return cache.get(cacheKey)
      }

      const response = await originalFetch(input, init)
      cache.set(cacheKey, response)
      return response
    }
  }, [enableServiceWorker])

  // Image optimization
  const setupImageOptimization = useCallback(() => {
    if (typeof window === 'undefined' || !enableImageOptimization) return

    const images = document.querySelectorAll('img')
    images.forEach(img => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy')
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async')
      }
    })
  }, [enableImageOptimization])

  // Resource hints
  const setupResourceHints = useCallback(() => {
    if (typeof window === 'undefined' || !enableResourceHints) return

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ]

    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.woff2') ? 'font' : 'style'
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous'
      }
      document.head.appendChild(link)
    })
  }, [enableResourceHints])

  // Initialize optimizations
  useEffect(() => {
    if (enableAdvancedCaching) {
      setupAdvancedCaching()
    }
    if (enableImageOptimization) {
      setupImageOptimization()
    }
    if (enableResourceHints) {
      setupResourceHints()
    }
  }, [enableAdvancedCaching, enableImageOptimization, enableResourceHints, setupAdvancedCaching, setupImageOptimization, setupResourceHints])

  return null
}

export default AdvancedPerformanceOptimizer