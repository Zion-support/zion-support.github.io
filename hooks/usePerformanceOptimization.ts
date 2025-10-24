import { useEffect, useCallback, useRef } from 'react'

interface PerformanceOptimizationOptions {
  enableLazyLoading?: boolean
  enablePreloading?: boolean
  enableImageOptimization?: boolean
  enableCodeSplitting?: boolean
  enableCaching?: boolean
}

export const usePerformanceOptimization = $2;
      const link = document.createElement('link')
      Object.entries(hint).forEach(([key, value]) => {
        if (key === 'crossOrigin') {
          link.setAttribute('crossorigin', value as string)
        } else {
          link.setAttribute(key, value as string)
        }
      })
      document.head.appendChild(link)
    })
  }, [])

  useEffect(() => {
    // Initialize all optimizations
    setupLazyLoading()
    preloadCriticalResources()
    optimizeImages()
    optimizeCodeSplitting()
    registerServiceWorker()
    setupPerformanceMonitoring()
    addResourceHints()

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [
    setupLazyLoading,
    preloadCriticalResources,
    optimizeImages,
    optimizeCodeSplitting,
    registerServiceWorker,
    setupPerformanceMonitoring,
    addResourceHints
  ])

  return {
    setupLazyLoading,
    preloadCriticalResources,
    optimizeImages,
    registerServiceWorker,
    setupPerformanceMonitoring
  }
}