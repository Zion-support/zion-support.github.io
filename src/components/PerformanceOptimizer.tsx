import React, { useEffect, useCallback, useRef } from 'react'

interface PerformanceMetrics {
  fcp: number
  lcp: number
  fid: number
  cls: number
  ttfb: number
  domLoad: number
  windowLoad: number
}

interface PerformanceOptimizerProps {
  enabled?: boolean
  autoRefresh?: boolean
  refreshInterval?: number
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
}

export function PerformanceOptimizer({
  enabled = true,
  autoRefresh = false,
  refreshInterval = 5000,
  onMetricsUpdate
}: PerformanceOptimizerProps) {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0
  })

  const observerRef = useRef<PerformanceObserver | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Measure Core Web Vitals
  const measureCoreWebVitals = useCallback(() => {
    if (!('PerformanceObserver' in window)) return

    try {
      // First Contentful Paint (FCP)
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.fcp = entry.startTime
            onMetricsUpdate?.(metricsRef.current)
          }
        })
      })
      observerRef.current.observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint (LCP)
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            metricsRef.current.lcp = entry.startTime
            onMetricsUpdate?.(metricsRef.current)
          }
        })
      })
      observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            metricsRef.current.fid = entry.processingStart - entry.startTime
            onMetricsUpdate?.(metricsRef.current)
          }
        })
      })
      observerRef.current.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
      observerRef.current = new PerformanceObserver((list) => {
        let clsValue = 0
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        metricsRef.current.cls = clsValue
        onMetricsUpdate?.(metricsRef.current)
      })
      observerRef.current.observe({ entryTypes: ['layout-shift'] })
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error)
    }
  }, [onMetricsUpdate])

  // Measure additional performance metrics
  const measureAdditionalMetrics = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        metricsRef.current.ttfb = navigation.responseStart - navigation.requestStart
        metricsRef.current.domLoad = navigation.domContentLoadedEventEnd - navigation.navigationStart
        metricsRef.current.windowLoad = navigation.loadEventEnd - navigation.navigationStart
        onMetricsUpdate?.(metricsRef.current)
      }
    }
  }, [onMetricsUpdate])

  // Optimize images with lazy loading
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src!
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }, [])

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/zion-logo.png',
      '/images/zion-tech-group-og.jpg'
    ]

    criticalResources.forEach((resource) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.woff2') ? 'font' : 'image'
      link.crossOrigin = resource.startsWith('http') ? 'anonymous' : undefined
      document.head.appendChild(link)
    })
  }, [])

  // Optimize fonts
  const optimizeFonts = useCallback(() => {
    if ('fonts' in document) {
      // Preload and optimize font loading
      const fontFaceSet = document.fonts
      fontFaceSet.ready.then(() => {
        console.log('Fonts loaded successfully')
      })
    }
  }, [])

  // Monitor memory usage
  const monitorMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        console.warn('High memory usage detected')
      }
    }
  }, [])

  // Setup performance monitoring
  useEffect(() => {
    if (!enabled) return

    // Measure initial metrics
    measureCoreWebVitals()
    measureAdditionalMetrics()

    // Optimize resources
    optimizeImages()
    preloadCriticalResources()
    optimizeFonts()

    // Setup auto-refresh if enabled
    if (autoRefresh) {
      intervalRef.current = setInterval(() => {
        measureAdditionalMetrics()
        monitorMemory()
      }, refreshInterval)
    }

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [enabled, autoRefresh, refreshInterval, measureCoreWebVitals, measureAdditionalMetrics, optimizeImages, preloadCriticalResources, optimizeFonts, monitorMemory])

  // Log performance metrics to console in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const logMetrics = () => {
        console.group('🚀 Performance Metrics')
        console.log('FCP:', metricsRef.current.fcp.toFixed(2), 'ms')
        console.log('LCP:', metricsRef.current.lcp.toFixed(2), 'ms')
        console.log('FID:', metricsRef.current.fid.toFixed(2), 'ms')
        console.log('CLS:', metricsRef.current.cls.toFixed(4))
        console.log('TTFB:', metricsRef.current.ttfb.toFixed(2), 'ms')
        console.log('DOM Load:', metricsRef.current.domLoad.toFixed(2), 'ms')
        console.log('Window Load:', metricsRef.current.windowLoad.toFixed(2), 'ms')
        console.groupEnd()
      }

      // Log metrics after a delay to allow them to be measured
      const timeoutId = setTimeout(logMetrics, 3000)
      return () => clearTimeout(timeoutId)
    }
  }, [])

  // Return null as this is a utility component
  return null
}
