'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
}

interface EnhancedPerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  enableRealTimeMonitoring?: boolean
  enableWebVitals?: boolean
  enableResourceTiming?: boolean
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  enableWebVitals = true,
  enableResourceTiming = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0
  })

  useEffect(() => {
    if (enableWebVitals) {
      // Monitor Core Web Vitals
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }))
        })
        
        getFID((metric) => {
          setMetrics(prev => ({ ...prev, firstInputDelay: metric.value }))
        })
        
        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }))
        })
        
        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }))
        })
        
        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, loadTime: metric.value }))
        })
      })
    }
  }, [enableWebVitals])

  useEffect(() => {
    if (enableResourceTiming) {
      // Monitor resource loading performance
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            setMetrics(prev => ({
              ...prev,
              loadTime: navEntry.loadEventEnd - navEntry.loadEventStart
            }))
          }
        })
      })

      observer.observe({ entryTypes: ['navigation', 'resource'] })

      return () => {
        observer.disconnect()
      }
    }
  }, [enableResourceTiming])

  useEffect(() => {
    if (enableRealTimeMonitoring) {
      // Monitor real-time performance
      const monitorPerformance = () => {
        if (performance.memory) {
          const memoryInfo = performance.memory
          console.log('Memory Usage:', {
            used: memoryInfo.usedJSHeapSize,
            total: memoryInfo.totalJSHeapSize,
            limit: memoryInfo.jsHeapSizeLimit
          })
        }
      }

      const interval = setInterval(monitorPerformance, 5000)
      return () => clearInterval(interval)
    }
  }, [enableRealTimeMonitoring])

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics)
    }
  }, [metrics, onMetricsUpdate])

  // Don't render anything visible
  return null
}

export default EnhancedPerformanceMonitor