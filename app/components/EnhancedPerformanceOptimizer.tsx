'use client'
import React, { useEffect } from 'react'

interface PerformanceOptimizerProps {
  children: React.ReactNode
  enableImageOptimization?: boolean
  enableLazyLoading?: boolean
  enablePreloading?: boolean
  enableCodeSplitting?: boolean
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  useEffect(() => {
    // Preload critical resources
    if (enablePreloading) {
      const preloadCriticalResources = () => {
        const criticalImages = [
          '/hero-bg.jpg',
          '/logo.png'
        ]

        criticalImages.forEach(src => {
          const link = document.createElement('link')
          link.rel = 'preload'
          link.as = 'image'
          link.href = src
          document.head.appendChild(link)
        })
      }

      preloadCriticalResources()
    }

    // Enable lazy loading for images
    if (enableLazyLoading) {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('lazy')
            observer.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Optimize images
    if (enableImageOptimization) {
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
  }, [enablePreloading, enableLazyLoading, enableImageOptimization])

  return <>{children}</>
}

export default PerformanceOptimizer