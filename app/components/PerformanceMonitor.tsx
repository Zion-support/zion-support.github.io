'use client'
import React, { useState, useEffect } from 'react'
interface PerformanceMetrics {
  loadTime?: number
  domContentLoaded?: number
  memoryUsage?: number
  connectionSpeed?: string
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  useEffect(() => {
    const measureWebVitals = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
          const memory = (performance as any).memory
          const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0
          const connection = (navigator as any).connection
          const connectionSpeed = connection ? connection.effectiveType : 'unknown'
          setMetrics({
            loadTime,
            domContentLoaded,
            memoryUsage,
            connectionSpeed
          })
        }
      }
    }
    if (document.readyState === 'complete') {
      measureWebVitals()
    } else {
      window.addEventListener('load', measureWebVitals)
    }

    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
          }
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }))
          }
          if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
          }
        }
      })
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Some browsers don't support all entry types
      }

      return () => observer.disconnect()
    }
  }, [])
  return metrics
}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const measureWebVitals = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
          const memory = (performance as any).memory
          const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0
          const connection = (navigator as any).connection
          const connectionSpeed = connection ? connection.effectiveType : 'unknown'
          setMetrics({
            loadTime,
            domContentLoaded,
            memoryUsage,
            connectionSpeed
          })
        }
      }
    }
    if (document.readyState === 'complete') {
      measureWebVitals()
    } else {
      window.addEventListener('load', measureWebVitals)
    }

    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
          }
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }))
          }
          if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
          }
        }
      })
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Some browsers don't support all entry types
      }

      return () => observer.disconnect()
    }
  }, [])
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold">Performance
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-cyan-400 hover:text-cyan-300"
        >
          {isVisible ? 'Hide' : 'Show'}
      {isVisible && (
        <div className="space-y-1">
          {metrics.loadTime && <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>}
          {metrics.domContentLoaded && <div>DOM Ready: {metrics.domContentLoaded.toFixed(2)}ms</div>}
          {metrics.memoryUsage && <div>Memory: {metrics.memoryUsage}MB</div>}
          {metrics.connectionSpeed && <div>Connection: {metrics.connectionSpeed}</div>}
          {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
          {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}
          {metrics.cls && <div>CLS: {metrics.cls.toFixed(4)}</div>}
      )}
  )
}
export default PerformanceMonitor