import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  lcp: number | null
  fid: number | null
  cls: number | null
  fcp: number | null
  ttfb: number | null
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  })

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ]

      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource
        link.as = resource.endsWith('.woff2') ? 'font' : 'image'
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous'
        }
        document.head.appendChild(link)
      })
    }

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      images.forEach(img => {
        const imageElement = img as HTMLImageElement
        if (imageElement.dataset.src) {
          imageElement.src = imageElement.dataset.src
          imageElement.removeAttribute('data-src')
        }
      })
    }

    // Lazy load non-critical components
    const lazyLoadComponents = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement
              element.classList.add('loaded')
              observer.unobserve(element)
            }
          })
        },
        { threshold: 0.1 }
      )

      const lazyElements = document.querySelectorAll('[data-lazy]')
      lazyElements.forEach(el => observer.observe(el))
    }

    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })))
        onFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })))
        onFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })))
        onLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })))
        onTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })))
      }).catch(() => {
        // Silently fail if web-vitals is not available
      })
    }

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false
      
      const updateScrollPosition = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Update scroll-based optimizations here
            ticking = false
          })
          ticking = true
        }
      }

      window.addEventListener('scroll', updateScrollPosition, { passive: true })
      
      return () => window.removeEventListener('scroll', updateScrollPosition)
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    lazyLoadComponents()
    monitorWebVitals()
    const cleanupScroll = optimizeScroll()

    // Cleanup
    return () => {
      cleanupScroll()
    }
  }, [])

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.values(metrics).some(val => val !== null)) {
      console.log('Performance Metrics:', metrics)
    }
  }, [metrics])

  return null
}

export default PerformanceOptimizer