'use client'

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
  memory?: number
  connection?: string
  userAgent?: string
}

interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number }
  lcp: { good: number; needsImprovement: number }
  fid: { good: number; needsImprovement: number }
  cls: { good: number; needsImprovement: number }
  ttfb: { good: number; needsImprovement: number }
}

const thresholds: PerformanceThresholds = {
  fcp: { good: 1800, needsImprovement: 3000 },
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  ttfb: { good: 800, needsImprovement: 1800 }
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})

  useEffect(() => {
    if (typeof window === 'undefined') return

    const performanceMetrics: PerformanceMetrics = {
      userAgent: navigator.userAgent,
      connection: (navigator as any).connection?.effectiveType || 'unknown'
    }

    // Memory API (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory
      performanceMetrics.memory = memory.usedJSHeapSize / 1024 / 1024 // MB
    }

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          performanceMetrics.fcp = entry.startTime
        }
      }
    })
    fcpObserver.observe({ entryTypes: ['paint'] })

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      performanceMetrics.lcp = lastEntry.startTime
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // First Input Delay (FID) - Note: FID is deprecated, using INP instead
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as any
        if (fidEntry.processingStart) {
          performanceMetrics.fid = fidEntry.processingStart - fidEntry.startTime
        }
      }
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Cumulative Layout Shift (CLS)
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
          performanceMetrics.cls = clsValue
        }
      }
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Time to First Byte (TTFB)
    const ttfbEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (ttfbEntry) {
      performanceMetrics.ttfb = ttfbEntry.responseStart - ttfbEntry.requestStart
    }

    // Enhanced logging with performance assessment
    const logMetrics = () => {
      const assessment = {
        FCP: {
          value: `${performanceMetrics.fcp?.toFixed(2)}ms`,
          rating: performanceMetrics.fcp ? 
            (performanceMetrics.fcp <= thresholds.fcp.good ? 'good' : 
             performanceMetrics.fcp <= thresholds.fcp.needsImprovement ? 'needs-improvement' : 'poor') : 'unknown'
        },
        LCP: {
          value: `${performanceMetrics.lcp?.toFixed(2)}ms`,
          rating: performanceMetrics.lcp ? 
            (performanceMetrics.lcp <= thresholds.lcp.good ? 'good' : 
             performanceMetrics.lcp <= thresholds.lcp.needsImprovement ? 'needs-improvement' : 'poor') : 'unknown'
        },
        FID: {
          value: `${performanceMetrics.fid?.toFixed(2)}ms`,
          rating: performanceMetrics.fid ? 
            (performanceMetrics.fid <= thresholds.fid.good ? 'good' : 
             performanceMetrics.fid <= thresholds.fid.needsImprovement ? 'needs-improvement' : 'poor') : 'unknown'
        },
        CLS: {
          value: performanceMetrics.cls?.toFixed(4),
          rating: performanceMetrics.cls !== undefined ? 
            (performanceMetrics.cls <= thresholds.cls.good ? 'good' : 
             performanceMetrics.cls <= thresholds.cls.needsImprovement ? 'needs-improvement' : 'poor') : 'unknown'
        },
        TTFB: {
          value: `${performanceMetrics.ttfb?.toFixed(2)}ms`,
          rating: performanceMetrics.ttfb ? 
            (performanceMetrics.ttfb <= thresholds.ttfb.good ? 'good' : 
             performanceMetrics.ttfb <= thresholds.ttfb.needsImprovement ? 'needs-improvement' : 'poor') : 'unknown'
        }
      }

      console.group('🚀 Performance Metrics')
      console.log('Core Web Vitals:', assessment)
      console.log('Memory Usage:', performanceMetrics.memory ? `${performanceMetrics.memory.toFixed(2)} MB` : 'N/A')
      console.log('Connection:', performanceMetrics.connection)
      console.log('User Agent:', performanceMetrics.userAgent)
      console.groupEnd()

      setMetrics(performanceMetrics)

      // Send to analytics service in production
      if (process.env.NODE_ENV === 'production') {
        // Send comprehensive metrics to analytics
        const analyticsData = {
          ...assessment,
          memory: performanceMetrics.memory,
          connection: performanceMetrics.connection,
          timestamp: Date.now(),
          url: window.location.href
        }
        
        // Example analytics integration
        // analytics.track('performance_metrics', analyticsData)
        
        // Send to external monitoring service
        // fetch('/api/analytics/performance', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(analyticsData)
        // }).catch(console.error)
      }
    }

    // Log metrics when page is fully loaded
    if (document.readyState === 'complete') {
      setTimeout(logMetrics, 1000)
    } else {
      window.addEventListener('load', () => {
        setTimeout(logMetrics, 1000)
      })
    }

    // Monitor for performance regressions
    const monitorPerformance = () => {
      if (performanceMetrics.lcp && performanceMetrics.lcp > thresholds.lcp.needsImprovement) {
        console.warn('⚠️ LCP performance regression detected:', performanceMetrics.lcp)
      }
      if (performanceMetrics.cls && performanceMetrics.cls > thresholds.cls.needsImprovement) {
        console.warn('⚠️ CLS performance regression detected:', performanceMetrics.cls)
      }
    }

    setTimeout(monitorPerformance, 2000)

    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [])

  return null
}