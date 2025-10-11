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

    // Optimize images
    if (enableImageOptimization) {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img')
        images.forEach(img => {
          if (enableLazyLoading && !img.loading) {
            img.loading = 'lazy'
          }
          if (!img.decoding) {
            img.decoding = 'async'
          }
        })
      }

      optimizeImages()

      // Re-optimize when DOM changes
      const observer = new MutationObserver(() => {
        optimizeImages()
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })

      return () => {
        observer.disconnect()
      }
    }

    // Add performance monitoring
    const addPerformanceMonitoring = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (perfData) {
            console.log('Performance metrics:', {
              domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
              totalTime: perfData.loadEventEnd - perfData.fetchStart
            })
          }
        })
      }
    }

    addPerformanceMonitoring()
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting])

  return <>{children}</>
}

export default PerformanceOptimizer