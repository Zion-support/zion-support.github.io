import React, { useEffect, useCallback } from 'react'

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean
  enablePreloading?: boolean
  enableCaching?: boolean
  enableCompression?: boolean
  enableLazyLoading?: boolean
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true,
  enableLazyLoading = true
}) => {
  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return

    const images = document.querySelectorAll('img')
    images.forEach(img => {
      // Add loading="lazy" for better performance
      if (enableLazyLoading && !img.getAttribute('loading')) {
        img.setAttribute('loading', 'lazy')
      }

      // Add decoding="async" for non-blocking image loading
      if (!img.getAttribute('decoding')) {
        img.setAttribute('decoding', 'async')
      }

      // Add error handling
      img.addEventListener('error', () => {
        img.style.display = 'none'
        console.warn('Failed to load image:', img.src)
      })

      // Add loading state
      img.addEventListener('load', () => {
        img.style.opacity = '1'
        img.style.transition = 'opacity 0.3s ease-in-out'
      })

      // Set initial opacity for smooth loading
      img.style.opacity = '0'
    })
  }, [enableImageOptimization, enableLazyLoading])

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return

    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg'
    ]

    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      
      if (resource.endsWith('.woff2')) {
        link.as = 'font'
        link.type = 'font/woff2'
        link.crossOrigin = 'anonymous'
      } else if (resource.endsWith('.jpg') || resource.endsWith('.png')) {
        link.as = 'image'
      }
      
      document.head.appendChild(link)
    })
  }, [enablePreloading])

  // Enable service worker for caching
  const enableServiceWorker = useCallback(() => {
    if (!enableCaching || typeof window === 'undefined' || !('serviceWorker' in navigator)) return

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration)
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error)
        })
    }
  }, [enableCaching])

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    if (typeof window === 'undefined') return

    let ticking = false

    const updateScrollPosition = () => {
      // Throttle scroll events for better performance
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scroll position for parallax effects
          const scrolled = window.pageYOffset
          const parallax = document.querySelectorAll('[data-parallax]')
          
          parallax.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-parallax') || '0.5')
            const yPos = -(scrolled * speed)
            element.style.transform = `translateY(${yPos}px)`
          })
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', updateScrollPosition, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition)
    }
  }, [])

  // Optimize resize performance
  const optimizeResizePerformance = useCallback(() => {
    if (typeof window === 'undefined') return

    let resizeTimeout: NodeJS.Timeout

    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        // Trigger resize-dependent updates
        window.dispatchEvent(new CustomEvent('optimizedResize'))
      }, 250)
    }

    window.addEventListener('resize', handleResize, { passive: true })
    
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  // Enable compression hints
  const enableCompressionHints = useCallback(() => {
    if (!enableCompression || typeof window === 'undefined') return

    // Add compression hints to meta tags
    const compressionHint = document.createElement('meta')
    compressionHint.name = 'compression'
    compressionHint.content = 'gzip, deflate, br'
    document.head.appendChild(compressionHint)

    // Add resource hints
    const resourceHints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
    ]

    resourceHints.forEach(hint => {
      const link = document.createElement('link')
      Object.entries(hint).forEach(([key, value]) => {
        link.setAttribute(key, value)
      })
      document.head.appendChild(link)
    })
  }, [enableCompression])

  // Initialize all optimizations
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = []

    // Run optimizations after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      optimizeImages()
      preloadCriticalResources()
      enableServiceWorker()
      enableCompressionHints()
      
      const scrollCleanup = optimizeScrollPerformance()
      const resizeCleanup = optimizeResizePerformance()
      
      if (scrollCleanup) cleanupFunctions.push(scrollCleanup)
      if (resizeCleanup) cleanupFunctions.push(resizeCleanup)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }, [
    optimizeImages,
    preloadCriticalResources,
    enableServiceWorker,
    enableCompressionHints,
    optimizeScrollPerformance,
    optimizeResizePerformance
  ])

  // This component doesn't render anything
  return null
}

export default PerformanceOptimizer