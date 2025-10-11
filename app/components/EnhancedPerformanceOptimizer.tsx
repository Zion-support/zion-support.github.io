'use client'
import React, { useEffect } from 'react'

interface EnhancedPerformanceOptimizerProps {
  children: React.ReactNode
}

const EnhancedPerformanceOptimizer: React.FC<EnhancedPerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Performance optimization effects
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const preloadCriticalResources = () => {
        const criticalImages = [
          '/images/hero-bg.jpg',
          '/images/logo.png'
        ]
        
        criticalImages.forEach(src => {
          const link = document.createElement('link')
          link.rel = 'preload'
          link.as = 'image'
          link.href = src
          document.head.appendChild(link)
        })
      }

      // Lazy load images
      const lazyLoadImages = () => {
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
        })

        images.forEach(img => imageObserver.observe(img))
      }

      // Initialize optimizations
      preloadCriticalResources()
      lazyLoadImages()
    }
  }, [])

  return <>{children}</>
}

export default EnhancedPerformanceOptimizer
