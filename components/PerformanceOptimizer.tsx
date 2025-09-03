import React, { useEffect } from 'react'

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ]
      
      criticalFonts.forEach(font => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'style'
        link.href = font
        document.head.appendChild(link)
      })
    }

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy'
        }
        if (!img.decoding) {
          img.decoding = 'async'
        }
      })
    }

    // Add intersection observer for animations
    const setupIntersectionObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
            }
          })
        },
        { threshold: 0.1 }
      )

      const animatedElements = document.querySelectorAll('[data-animate]')
      animatedElements.forEach(el => observer.observe(el))
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    setupIntersectionObserver()

    // Cleanup
    return () => {
      // Cleanup if needed
    }
  }, [])

  return null
}

export default PerformanceOptimizer