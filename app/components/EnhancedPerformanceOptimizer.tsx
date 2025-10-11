import React, { useEffect } from 'react'

interface PerformanceOptimizerProps {
  children: React.ReactNode
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ]

      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource
        link.as = resource.endsWith('.woff2') ? 'font' : 'image'
        if (resource.endsWith('.woff2')) {
          link.type = 'font/woff2'
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

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      const lazyElements = document.querySelectorAll('[data-lazy]')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            const src = element.dataset.lazy
            if (src) {
              if (element.tagName === 'IMG') {
                (element as HTMLImageElement).src = src
              } else {
                element.style.backgroundImage = `url(${src})`
              }
              element.removeAttribute('data-lazy')
              observer.unobserve(element)
            }
          }
        })
      })

      lazyElements.forEach(element => observer.observe(element))
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    lazyLoadResources()

    // Cleanup
    return () => {
      // Cleanup if needed
    }
  }, [])

  return <>{children}</>
}

export default PerformanceOptimizer
