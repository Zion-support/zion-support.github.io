<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'

interface PerformanceMetrics {
  cls: number | null
  inp: number | null
  fcp: number | null
  lcp: number | null
  ttfb: number | null
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  })

  useEffect(() => {
    // Measure Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }))
      console.log('CLS:', metric)
    })

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }))
      console.log('INP:', metric)
    })

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }))
      console.log('FCP:', metric)
    })

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }))
      console.log('LCP:', metric)
    })

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }))
      console.log('TTFB:', metric)
    })

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry)
        } else if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming
          if (resource.duration > 1000) {
            console.warn('Slow resource:', resource.name, resource.duration)
          }
        }
      }
    })

    observer.observe({ entryTypes: ['navigation', 'resource'] })

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory
      console.log('Memory usage:', {
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Send metrics to analytics in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const allMetricsCollected = Object.values(metrics).every(value => value !== null)
      
      if (allMetricsCollected) {
        // Send to analytics service
        console.log('Sending performance metrics to analytics:', metrics)
        
        // Example: Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'Core Web Vitals',
            value: Math.round((metrics.lcp || 0) + (metrics.inp || 0) + (metrics.cls || 0))
          })
        }
      }
    }
  }, [metrics])

  // Development-only performance display
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50 max-w-xs">
        <div className="font-bold mb-2 text-cyan-400">Performance Metrics</div>
        <div className="space-y-1">
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>
          <div>INP: {metrics.inp ? `${metrics.inp.toFixed(2)}ms` : 'Loading...'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'Loading...'}</div>
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>
          <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>
        </div>
      </div>
    )
  }

=======
'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
          } else if (entry.entryType === 'layout-shift') {
            if (!entry.hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
            }
          }
        }
      })

      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        observer.observe({ entryTypes: ['navigation'] })
      }
    }

    // Start measuring after a short delay to ensure page is loaded
    const timeout = setTimeout(() => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            ttfb: navigation.responseStart - navigation.requestStart
          }))
        }
      }
    }, 1000)

    return () => {
      clearTimeout(timeout)
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        observer.disconnect()
      }
    }
  }, [])

  // Log metrics for debugging (only in development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.keys(metrics).length > 0) {
      console.log('Performance Metrics:', metrics)
    }
  }, [metrics])

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
  return null
}

export default PerformanceMonitor