'use client'
import React, { useEffect, useCallback, useState } from 'react'

interface PerformanceMetrics {
  lcp: number
  fid: number
  cls: number
  fcp: number
  ttfb: number
}

interface AdvancedPerformanceOptimizerProps {
  children: React.ReactNode
  enableWebVitals?: boolean
  enableAdvancedCaching?: boolean
  enableImageOptimization?: boolean
  enablePreloading?: boolean
  enableServiceWorker?: boolean
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  children,
  enableWebVitals = true,
  enableAdvancedCaching = true,
  enableImageOptimization = true,
  enablePreloading = true,
  enableServiceWorker = true
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  })

  // Web Vitals monitoring
  const measureWebVitals = useCallback(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      // Measure Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number }
        setPerformanceMetrics(prev => ({
          ...prev,
          lcp: lastEntry.renderTime || lastEntry.loadTime || 0
        }))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Measure First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          const fid = (entry as any).processingStart - entry.startTime
          setPerformanceMetrics(prev => ({
            ...prev,
            fid: fid || 0
          }))
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Measure Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        setPerformanceMetrics(prev => ({
          ...prev,
          cls: clsValue
        }))
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Measure First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
        if (fcpEntry) {
          setPerformanceMetrics(prev => ({
            ...prev,
            fcp: fcpEntry.startTime
          }))
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Measure Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        setPerformanceMetrics(prev => ({
          ...prev,
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart
        }))
      }

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        fcpObserver.disconnect()
      }
    }
  }, [enableWebVitals])

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return

    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy')
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async')
      }

      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '')
      }
    })
  }, [enableImageOptimization])

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return

    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="stylesheet"][data-critical]')
    if (criticalCSS) {
      criticalCSS.setAttribute('rel', 'preload')
      criticalCSS.setAttribute('as', 'style')
      criticalCSS.setAttribute('onload', "this.onload=null;this.rel='stylesheet'")
    }

    // Preload critical fonts
    const criticalFonts = document.querySelectorAll('link[rel="preload"][as="font"]')
    criticalFonts.forEach((font) => {
      font.setAttribute('crossorigin', 'anonymous')
    })
  }, [enablePreloading])

  // Advanced caching strategies
  const setupAdvancedCaching = useCallback(() => {
    if (!enableAdvancedCaching || typeof window === 'undefined') return

    // Set cache headers for static assets
    const staticAssets = document.querySelectorAll('link[rel="stylesheet"], script[src], img[src]')
    staticAssets.forEach((asset) => {
      if (asset instanceof HTMLLinkElement || asset instanceof HTMLScriptElement || asset instanceof HTMLImageElement) {
        // Add cache control headers via meta tags
        const meta = document.createElement('meta')
        meta.setAttribute('http-equiv', 'Cache-Control')
        meta.setAttribute('content', 'public, max-age=31536000')
        document.head.appendChild(meta)
      }
    })
  }, [enableAdvancedCaching])

  // Service Worker registration
  const registerServiceWorker = useCallback(() => {
    if (!enableServiceWorker || typeof window === 'undefined' || !('serviceWorker' in navigator)) return

    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration)
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error)
      })
  }, [enableServiceWorker])

  // Initialize performance optimizations
  useEffect(() => {
    const cleanup = measureWebVitals()
    optimizeImages()
    preloadCriticalResources()
    setupAdvancedCaching()
    registerServiceWorker()

    return cleanup
  }, [measureWebVitals, optimizeImages, preloadCriticalResources, setupAdvancedCaching, registerServiceWorker])

  // Performance monitoring dashboard (development only)
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="performance-optimizer">
        <div className="performance-metrics fixed bottom-4 left-4 bg-black text-white p-4 rounded-lg text-xs font-mono z-50">
          <div className="mb-2 font-bold">Performance Metrics</div>
          <div>LCP: {performanceMetrics.lcp.toFixed(2)}ms</div>
          <div>FID: {performanceMetrics.fid.toFixed(2)}ms</div>
          <div>CLS: {performanceMetrics.cls.toFixed(4)}</div>
          <div>FCP: {performanceMetrics.fcp.toFixed(2)}ms</div>
          <div>TTFB: {performanceMetrics.ttfb.toFixed(2)}ms</div>
        </div>
        {children}
      </div>
    )
  }

  return <>{children}</>
}

export default AdvancedPerformanceOptimizer