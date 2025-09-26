'use client'

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
  fmp?: number
}

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

export default function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalFonts = [
        '/fonts/inter-var.woff2',
        '/fonts/inter-regular.woff2'
      ]

      criticalFonts.forEach(font => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = font
        link.as = 'font'
        link.type = 'font/woff2'
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.webp',
        '/images/logo.webp'
      ]

      criticalImages.forEach(image => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = image
        link.as = 'image'
        document.head.appendChild(link)
      })
    }

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        // Add loading="lazy" if not already present
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy')
        }

        // Add decoding="async"
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async')
        }

        // Convert to WebP if supported
        if (img.src && (img.src.includes('.jpg') || img.src.includes('.png'))) {
          const webpSrc = img.src.replace(/\.(jpg|png)$/, '.webp')
          const webpImg = new Image()
          webpImg.onload = () => {
            img.src = webpSrc
          }
          webpImg.src = webpSrc
        }
      })
    }

    // Setup lazy loading for images with data-src
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              if (img.dataset.src) {
                img.src = img.dataset.src
                img.removeAttribute('data-src')
                imageObserver.unobserve(img)
              }
            }
          })
        })

        const lazyImages = document.querySelectorAll('img[data-src]')
        lazyImages.forEach(img => imageObserver.observe(img))
      }
    }

    // Monitor performance metrics
    const monitorPerformance = () => {
      const performanceMetrics: PerformanceMetrics = {}

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            performanceMetrics.fcp = entry.startTime
          }
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        performanceMetrics.lcp = lastEntry?.startTime || 0
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEventTiming
          if (fidEntry.processingStart) {
            performanceMetrics.fid = fidEntry.processingStart - fidEntry.startTime
          }
        }
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as LayoutShift
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value
            performanceMetrics.cls = clsValue
          }
        }
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Time to First Byte (TTFB)
      const ttfbEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (ttfbEntry) {
        performanceMetrics.ttfb = ttfbEntry.responseStart - ttfbEntry.requestStart
      }

      // Log metrics and optimize based on results
      const logAndOptimize = () => {
        setMetrics(performanceMetrics)
        
        // Optimize based on poor metrics
        if (performanceMetrics.lcp && performanceMetrics.lcp > 2500) {
          // eslint-disable-next-line no-console
          console.warn('LCP is slow, consider optimizing images and critical resources')
          optimizeImages()
        }

        if (performanceMetrics.cls && performanceMetrics.cls > 0.1) {
          // eslint-disable-next-line no-console
          console.warn('CLS is high, check for layout shifts')
        }

        if (performanceMetrics.fid && performanceMetrics.fid > 100) {
          // eslint-disable-next-line no-console
          console.warn('FID is high, consider reducing JavaScript execution time')
        }
      }

      if (document.readyState === 'complete') {
        setTimeout(logAndOptimize, 1000)
      } else {
        window.addEventListener('load', () => {
          setTimeout(logAndOptimize, 1000)
        })
      }

      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Add any scroll-based optimizations here
            ticking = false
          })
          ticking = true
        }
      }
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    setupLazyLoading()
    const cleanup = monitorPerformance()
    const scrollCleanup = optimizeScroll()

    return () => {
      cleanup?.()
      scrollCleanup?.()
    }
  }, [])

  // Add resource hints
  useEffect(() => {
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'images.unsplash.com'
      ]

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = `//${domain}`
        document.head.appendChild(link)
      })

      // Preconnect to critical domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ]

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = domain
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }

    addResourceHints()
  }, [])

  return null
}