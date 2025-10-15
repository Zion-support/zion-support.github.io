import React, { useEffect, useCallback } from 'react'

interface PerformanceEnhancerProps {
  enableImageOptimization?: boolean
  enablePreloading?: boolean
  enableCaching?: boolean
  enableCompression?: boolean
}

const AdvancedPerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true
}) => {
  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return
    
    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy')
      }
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async')
      }
      // Add fetchpriority="auto" for above-the-fold images
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.setAttribute('fetchpriority', 'high')
      }
    })
  }, [enableImageOptimization])

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return
    
    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="stylesheet"]')
    if (criticalCSS) {
      const preloadLink = document.createElement('link')
      preloadLink.rel = 'preload'
      preloadLink.href = criticalCSS.getAttribute('href') || ''
      preloadLink.as = 'style'
      preloadLink.onload = () => {
        preloadLink.rel = 'stylesheet'
      }
      document.head.appendChild(preloadLink)
    }
    
    // Preload critical fonts
    const fontPreload = document.createElement('link')
    fontPreload.rel = 'preload'
    fontPreload.href = '/fonts/inter-var.woff2'
    fontPreload.as = 'font'
    fontPreload.type = 'font/woff2'
    fontPreload.crossOrigin = 'anonymous'
    document.head.appendChild(fontPreload)
  }, [enablePreloading])

  // Enable caching strategies
  const enableCachingStrategies = useCallback(() => {
    if (!enableCaching) return
    
    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    }
  }, [enableCaching])

  // Enable compression
  const enableCompressionStrategies = useCallback(() => {
    if (!enableCompression) return
    
    // Enable gzip compression headers
    const meta = document.createElement('meta')
    meta.httpEquiv = 'Content-Encoding'
    meta.content = 'gzip'
    document.head.appendChild(meta)
  }, [enableCompression])

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    // Web Vitals monitoring
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }
    
    // Performance observer for long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry)
          }
        }
      })
      observer.observe({ entryTypes: ['longtask'] })
    }
  }, [])

  // Initialize all performance enhancements
  useEffect(() => {
    optimizeImages()
    preloadCriticalResources()
    enableCachingStrategies()
    enableCompressionStrategies()
    monitorPerformance()
  }, [
    optimizeImages,
    preloadCriticalResources,
    enableCachingStrategies,
    enableCompressionStrategies,
    monitorPerformance
  ])

  // Re-optimize images when new ones are added
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element
              if (element.tagName === 'IMG' || element.querySelector('img')) {
                optimizeImages()
              }
            }
          })
        }
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => observer.disconnect()
  }, [optimizeImages])

  return null
}

export default AdvancedPerformanceEnhancer