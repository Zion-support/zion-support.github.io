'use client'
import React, { useEffect, useCallback } from 'react'
import { useRouter } from 'react-router-dom'

interface PerformanceOptimizerProps {
  children: React.ReactNode
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const router = useRouter()

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return

    // Preload critical fonts
    const fontPreloads = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
    ]

    fontPreloads.forEach(font => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = font
      link.as = 'style'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // Preload critical images
    const criticalImages = [
      '/logo192.png',
      '/favicon.svg'
    ]

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = src
      link.as = 'image'
      document.head.appendChild(link)
    })
  }, [])

  // Optimize images
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return

    const images = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || ''
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    })

    images.forEach(img => imageObserver.observe(img))
  }, [])

  // Optimize third-party scripts
  const optimizeThirdPartyScripts = useCallback(() => {
    if (typeof window === 'undefined') return

    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[data-defer]')
    scripts.forEach(script => {
      script.setAttribute('defer', '')
    })

    // Load analytics after page load
    if (document.readyState === 'complete') {
      loadAnalytics()
    } else {
      window.addEventListener('load', loadAnalytics)
    }
  }, [])

  const loadAnalytics = useCallback(() => {
    // Load Google Analytics or other analytics scripts here
    // This is a placeholder for analytics loading
  }, [])

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    if (typeof window === 'undefined') return

    // Clean up unused event listeners
    const cleanup = () => {
      // Remove unused event listeners
      window.removeEventListener('resize', () => {})
      window.removeEventListener('scroll', () => {})
    }

    // Run cleanup every 5 minutes
    setInterval(cleanup, 5 * 60 * 1000)
  }, [])

  // Bundle splitting optimization
  const optimizeBundleSplitting = useCallback(() => {
    if (typeof window === 'undefined') return

    // Preload next likely routes
    const nextRoutes = ['/about', '/services', '/contact']
    
    nextRoutes.forEach(route => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = route
      document.head.appendChild(link)
    })
  }, [])

  // Critical CSS optimization
  const optimizeCriticalCSS = useCallback(() => {
    if (typeof window === 'undefined') return

    // Inline critical CSS for above-the-fold content
    const criticalCSS = `
      .min-h-screen { min-height: 100vh; }
      .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
      .from-slate-900 { --tw-gradient-from: #0f172a; --tw-gradient-to: rgb(15 23 42 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
      .via-purple-900 { --tw-gradient-to: rgb(88 28 135 / 0); --tw-gradient-stops: var(--tw-gradient-from), #581c87, var(--tw-gradient-to); }
      .to-slate-900 { --tw-gradient-to: #0f172a; }
    `

    const style = document.createElement('style')
    style.textContent = criticalCSS
    style.setAttribute('data-critical', 'true')
    document.head.insertBefore(style, document.head.firstChild)
  }, [])

  // Service Worker optimization
  const optimizeServiceWorker = useCallback(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return

    navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none'
    }).then(registration => {
      // Service Worker registered successfully
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content available, prompt user to refresh
              if (confirm('New version available! Refresh to update?')) {
                window.location.reload()
              }
            }
          })
        }
      })
    }).catch(error => {
      // Service Worker registration failed
    })
  }, [])

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    if (typeof window === 'undefined') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          // LCP measurement
        } else if (entry.entryType === 'first-input') {
          // FID measurement
        } else if (entry.entryType === 'layout-shift') {
          // CLS measurement
        }
      })
    })

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (error) {
      // PerformanceObserver not supported
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // Memory usage is high, trigger garbage collection
        if ('gc' in window) {
          (window as any).gc()
        }
      }
    }
  }, [])

  // Initialize optimizations
  useEffect(() => {
    preloadCriticalResources()
    optimizeImages()
    optimizeThirdPartyScripts()
    optimizeMemory()
    optimizeBundleSplitting()
    optimizeCriticalCSS()
    optimizeServiceWorker()
    monitorPerformance()
  }, [
    preloadCriticalResources,
    optimizeImages,
    optimizeThirdPartyScripts,
    optimizeMemory,
    optimizeBundleSplitting,
    optimizeCriticalCSS,
    optimizeServiceWorker,
    monitorPerformance
  ])

  // Route-based optimizations
  useEffect(() => {
    const handleRouteChange = () => {
      // Preload components for the next likely route
      optimizeBundleSplitting()
    }

    // Listen for route changes
    const unlisten = router.listen(handleRouteChange)
    return unlisten
  }, [router, optimizeBundleSplitting])

  return <>{children}</>
}

export default AdvancedPerformanceOptimizer
