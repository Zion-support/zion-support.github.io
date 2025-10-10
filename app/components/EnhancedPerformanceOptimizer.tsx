'use client'
import React, { useEffect, useCallback } from 'react'
import { useAnalytics } from './EnhancedAnalytics'

interface PerformanceMetrics {
  lcp: number | null
  fid: number | null
  cls: number | null
  fcp: number | null
  ttfb: number | null
}

interface PerformanceOptimizerProps {
  children: React.ReactNode
  enableImageOptimization?: boolean
  enableLazyLoading?: boolean
  enablePreloading?: boolean
  enableCodeSplitting?: boolean
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  const { trackEvent } = useAnalytics()

  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  })

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return

    // Measure Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })))
        getFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })))
        getFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })))
        getLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })))
        getTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })))
      })
    }
  }, [])

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return

    const images = document.querySelectorAll('img[data-src]')
    images.forEach((img) => {
      const image = img as HTMLImageElement
      if (image.dataset.src) {
        image.src = image.dataset.src
        image.removeAttribute('data-src')
      }
    })
  }, [enableImageOptimization])

  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || typeof window === 'undefined') return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          if (element.dataset.src) {
            element.style.backgroundImage = `url(${element.dataset.src})`
            element.removeAttribute('data-src')
          }
          observer.unobserve(element)
        }
      })
    })

    const lazyElements = document.querySelectorAll('[data-src]')
    lazyElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [enableLazyLoading])

  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return

    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="preload"][as="style"]')
    if (criticalCSS) {
      criticalCSS.setAttribute('rel', 'stylesheet')
    }

    // Preload critical fonts
    const criticalFonts = document.querySelectorAll('link[rel="preload"][as="font"]')
    criticalFonts.forEach((font) => {
      font.setAttribute('rel', 'stylesheet')
    })
  }, [enablePreloading])

  useEffect(() => {
    measurePerformance()
    optimizeImages()
    const cleanup = setupLazyLoading()
    preloadCriticalResources()

    // Track performance metrics
    trackEvent('performance_optimization', {
      image_optimization: enableImageOptimization,
      lazy_loading: enableLazyLoading,
      preloading: enablePreloading,
      code_splitting: enableCodeSplitting
    })

    return cleanup
  }, [measurePerformance, optimizeImages, setupLazyLoading, preloadCriticalResources, enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting, trackEvent])

  // Code splitting for non-critical components
  useEffect(() => {
    if (enableCodeSplitting && typeof window !== 'undefined') {
      // Load non-critical components after initial render
      const timer = setTimeout(() => {
        import('./ContentCarousel').catch(console.error)
        import('./DynamicContentShowcase').catch(console.error)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [enableCodeSplitting])

  return (
    <div className="performance-optimized">
      {children}
      {/* Performance metrics for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs">
          <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
          <div>FID: {metrics.fid?.toFixed(2)}ms</div>
          <div>CLS: {metrics.cls?.toFixed(3)}</div>
        </div>
      )}
    </div>
  )
}

export default EnhancedPerformanceOptimizer