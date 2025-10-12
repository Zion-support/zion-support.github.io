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

  return null
}

export default PerformanceMonitor