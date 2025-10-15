import React, { useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean
  enablePreloading?: boolean
  enableCaching?: boolean
  enableCompression?: boolean
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true
}) => {
  const location = useLocation()

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return

    const images = document.querySelectorAll('img')
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy'
      }
      if (!img.decoding) {
        img.decoding = 'async'
      }
    })
  }, [enableImageOptimization])

  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return

    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css'
    ]

    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.css') ? 'style' : 'font'
      document.head.appendChild(link)
    })
  }, [enablePreloading])

  const setupCaching = useCallback(() => {
    if (!enableCaching) return

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
    }
  }, [enableCaching])

  const enableCompression = useCallback(() => {
    if (!enableCompression) return

    // Compression would be handled by the server
  }, [enableCompression])

  useEffect(() => {
    optimizeImages()
    preloadCriticalResources()
    setupCaching()
    enableCompression()
  }, [optimizeImages, preloadCriticalResources, setupCaching, enableCompression, location])

  return null
}

export default AdvancedPerformanceOptimizer