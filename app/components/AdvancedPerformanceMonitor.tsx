'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number | null
  firstContentfulPaint: number | null
  largestContentfulPaint: number | null
  firstInputDelay: number | null
  cumulativeLayoutShift: number | null
  timeToFirstByte: number | null
  memoryUsage: number | null
  domContentLoaded: number | null
  totalBlockingTime: number | null
}

const AdvancedPerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToFirstByte: null,
    memoryUsage: null,
    domContentLoaded: null,
    totalBlockingTime: null
  })

  const [isVisible, setIsVisible] = useState(false)
  const [isRecording, setIsRecording] = useState(false)

  useEffect(() => {
    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
      // Analytics reporting would go here
      console.log(`${name}: ${value}`);
    }

    // Measure Web Vitals
    const measureWebVitals = () => {
      if (typeof window === 'undefined' || !('performance' in window)) return;

      try {
        // FCP measurement
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }))
              reportMetric('FCP', entry.startTime)
            }
          }
        })
        observer.observe({ entryTypes: ['paint'] })

        // LCP measurement
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }))
          reportMetric('LCP', lastEntry.startTime)
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // CLS measurement
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
              setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }))
              reportMetric('CLS', clsValue)
            }
          }
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

      } catch (error) {
        console.error('Failed to measure web vitals:', error);
      }
    }

    // Measure memory usage
    const measureMemory = () => {
      if (typeof window !== 'undefined' && 'performance' in window && 'memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }))
        reportMetric('Memory', memory.usedJSHeapSize)
      }
    }

    // Measure load time
    const measureLoadTime = () => {
      if (typeof window !== 'undefined' && 'performance' in window && performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        setMetrics(prev => ({ ...prev, loadTime }))
        reportMetric('LoadTime', loadTime)
      }
    }

    // Measure TTFB
    const measureTTFB = () => {
      if (typeof window !== 'undefined' && 'performance' in window && performance.timing) {
        const ttfb = performance.timing.responseStart - performance.timing.navigationStart
        setMetrics(prev => ({ ...prev, timeToFirstByte: ttfb }))
        reportMetric('TTFB', ttfb)
      }
    }

    // Measure DOM Content Loaded
    const measureDOMContentLoaded = () => {
      if (typeof window !== 'undefined' && 'performance' in window && performance.timing) {
        const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
        setMetrics(prev => ({ ...prev, domContentLoaded }))
        reportMetric('DOMContentLoaded', domContentLoaded)
      }
    }

    // Run measurements
    measureWebVitals()
    measureMemory()
    measureLoadTime()
    measureTTFB()
    measureDOMContentLoaded()

    // Cleanup observers
    return () => {
      // Cleanup would go here if needed
    }
  }, [])

  // Toggle visibility for debugging
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  // Toggle recording
  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return null
}

export default AdvancedPerformanceMonitor
