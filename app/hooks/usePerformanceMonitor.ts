'use client'
import { useEffect } from 'react'
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return
    // Monitor page load performance
    const handleLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        }
        console.log('Performance Metrics:', metrics)
        // Send to analytics if available
        if ('gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag
          gtag('event', 'page_performance', {
            event_category: 'performance',
            dom_content_loaded: Math.round(metrics.domContentLoaded),
            load_complete: Math.round(metrics.loadComplete),
            total_load_time: Math.round(metrics.totalLoadTime),
          })
        }
      }
    }
    // Monitor resource loading
    const handleResourceTiming = () => {
      const resources = performance.getEntriesByType('resource')
      const slowResources = resources.filter(resource => resource.duration > 1000)
      if (slowResources.length > 0) {
        console.warn('Slow loading resources:', slowResources)
      }
    }
    // Monitor memory usage
    const handleMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
        }
        if (memoryUsage.used > memoryUsage.limit * 0.8) {
          console.warn('High memory usage detected:', memoryUsage)
        }
      }
    }
    // Set up monitoring
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Monitor resources after a delay
    setTimeout(handleResourceTiming, 2000)
    setTimeout(handleMemoryUsage, 5000)
    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])
}