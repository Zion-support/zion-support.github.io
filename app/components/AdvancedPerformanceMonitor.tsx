'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memoryUsage: number | null
  loadTime: number | null
}

const AdvancedPerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const measurePerformance = () => {
      // Measure page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
      })

      // Measure First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Measure Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lcpEntry = entries[entries.length - 1]
        if (lcpEntry) {
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }))
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Measure First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fidEntry = entries[0]
        if (fidEntry) {
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))
        }
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Measure Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const clsValue = entries.reduce((sum, entry) => sum + (entry.value || 0), 0)
        setMetrics(prev => ({ ...prev, cls: clsValue }))
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Measure Time to First Byte (TTFB)
      const ttfbObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const ttfbEntry = entries[0]
        if (ttfbEntry) {
          setMetrics(prev => ({ ...prev, ttfb: ttfbEntry.responseStart - ttfbEntry.requestStart }))
        }
      })
      ttfbObserver.observe({ entryTypes: ['navigation'] })

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }))
      }
    }

    measurePerformance()

    // Cleanup
    return () => {
      // Cleanup observers if needed
    }
  }, [])

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-500'
    if (value <= thresholds.poor) return 'text-yellow-500'
    return 'text-red-500'
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        📊
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Load Time:</span>
          <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
            {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">FCP:</span>
          <span className={`font-mono ${metrics.fcp ? getMetricColor(metrics.fcp, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">LCP:</span>
          <span className={`font-mono ${metrics.lcp ? getMetricColor(metrics.lcp, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">FID:</span>
          <span className={`font-mono ${metrics.fid ? getMetricColor(metrics.fid, { good: 100, poor: 300 }) : 'text-gray-400'}`}>
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">CLS:</span>
          <span className={`font-mono ${metrics.cls !== null ? getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
            {metrics.cls !== null ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">TTFB:</span>
          <span className={`font-mono ${metrics.ttfb ? getMetricColor(metrics.ttfb, { good: 800, poor: 1800 }) : 'text-gray-400'}`}>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>
        </div>
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor