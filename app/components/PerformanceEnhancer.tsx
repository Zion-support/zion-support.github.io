'use client'
import { useEffect } from 'react'

const PerformanceEnhancer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
      ]
      
      criticalFonts.forEach(font => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = font
        link.as = 'style'
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      images.forEach(img => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const image = entry.target as HTMLImageElement
              image.src = image.dataset.src || ''
              image.classList.remove('lazy')
              observer.unobserve(image)
            }
          })
        })
        observer.observe(img)
      })
    }

    // Preconnect to external domains
    const preconnectDomains = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com'
      ]
      
      domains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = domain
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }

    // Initialize performance optimizations
    preloadCriticalResources()
    optimizeImages()
    preconnectDomains()

    // Cleanup
    return () => {
      // Cleanup if needed
    }
  }, [])

  return null
}

export default PerformanceEnhancer