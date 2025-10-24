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
          for (const entry of list.getEntries()) {
            setPerformanceMetrics(prev => ({ ...prev, lcp: entry.startTime }))
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setPerformanceMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
          }
        }).observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        new PerformanceObserver((list) => {
          let clsValue = 0
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          setPerformanceMetrics(prev => ({ ...prev, cls: clsValue }))
        }).observe({ entryTypes: ['layout-shift'] })
      }

      measureWebVitals()
    }
  }, [enableWebVitals])

  // Advanced caching
  useEffect(() => {
    if (enableAdvancedCaching && typeof window !== 'undefined') {
      // Implement advanced caching strategies
      const setupAdvancedCaching = () => {
        // Cache API implementation
        if ('caches' in window) {
          caches.open('app-cache-v1').then(cache => {
            // Cache critical resources
            cache.addAll([
              '/',
              '/static/css/main.css',
              '/static/js/main.js'
            ])
          })
        }
      }

      setupAdvancedCaching()
    }
  }, [enableAdvancedCaching])

  // Image optimization
  useEffect(() => {
    if (enableImageOptimization && typeof window !== 'undefined') {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img[data-src]')
        
        if ('IntersectionObserver' in window) {
          const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement
                img.src = img.dataset.src || ''
                img.classList.remove('lazy')
                imageObserver.unobserve(img)
              }
            })
          })

          images.forEach(img => imageObserver.observe(img))
        }
      }

      optimizeImages()
    }
  }, [enableImageOptimization])

  // Lazy loading
  useEffect(() => {
    if (enableLazyLoading && typeof window !== 'undefined') {
      const setupLazyLoading = () => {
        const lazyElements = document.querySelectorAll('[data-lazy]')
        
        if ('IntersectionObserver' in window) {
          const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const element = entry.target as HTMLElement
                element.classList.add('loaded')
                lazyObserver.unobserve(element)
              }
            })
          })

          lazyElements.forEach(element => lazyObserver.observe(element))
        }
      }

      setupLazyLoading()
    }
  }, [enableLazyLoading])

  // Preloading
  useEffect(() => {
    if (enablePreloading && typeof window !== 'undefined') {
      const setupPreloading = () => {
        // Preload critical resources
        const preloadLink = document.createElement('link')
        preloadLink.rel = 'preload'
        preloadLink.href = '/critical.css'
        preloadLink.as = 'style'
        document.head.appendChild(preloadLink)

        // Prefetch next page resources
        const prefetchLink = document.createElement('link')
        prefetchLink.rel = 'prefetch'
        prefetchLink.href = '/next-page.js'
        document.head.appendChild(prefetchLink)
      }

      setupPreloading()
    }
  }, [enablePreloading])

  // Resource hints
  useEffect(() => {
    if (enableResourceHints && typeof window !== 'undefined') {
      const setupResourceHints = () => {
        // DNS prefetch
        const dnsPrefetch = document.createElement('link')
        dnsPrefetch.rel = 'dns-prefetch'
        dnsPrefetch.href = '//fonts.googleapis.com'
        document.head.appendChild(dnsPrefetch)

        // Preconnect
        const preconnect = document.createElement('link')
        preconnect.rel = 'preconnect'
        preconnect.href = 'https://api.example.com'
        document.head.appendChild(preconnect)
      }

      setupResourceHints()
    }
  }, [enableResourceHints])

  // Service Worker
  useEffect(() => {
    if (enableServiceWorker && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js')
          console.log('Service Worker registered:', registration)
        } catch (error) {
          console.error('Service Worker registration failed:', error)
        }
      }

      registerServiceWorker()
    }
  }, [enableServiceWorker])

  // Critical CSS
  useEffect(() => {
    if (enableCriticalCSS && typeof window !== 'undefined') {
      const loadCriticalCSS = () => {
        const criticalCSS = document.createElement('style')
        criticalCSS.textContent = `
          /* Critical CSS for above-the-fold content */
          body { margin: 0; font-family: system-ui, sans-serif; }
          .hero { min-height: 100vh; display: flex; align-items: center; }
        `
        document.head.insertBefore(criticalCSS, document.head.firstChild)
      }

      loadCriticalCSS()
    }
  }, [enableCriticalCSS])

  // Performance optimization utilities
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: NodeJS.Timeout
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }, [])

  const throttle = useCallback((func: Function, limit: number) => {
    let inThrottle: boolean
    return function executedFunction(...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }, [])

  // Return null as this is a utility component
  return null
}

export default AdvancedPerformanceOptimizer