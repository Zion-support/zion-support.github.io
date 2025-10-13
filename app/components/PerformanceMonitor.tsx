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
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToFirstByte: null,
    memoryUsage: null
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
          setMetrics(prev => ({ ...prev, firstContentfulPaint: fcpEntry.startTime }))
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Measure Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Measure First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, firstInputDelay: entry.processingStart - entry.startTime }))
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Measure Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }))
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Measure Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          timeToFirstByte: navigationEntry.responseStart - navigationEntry.requestStart 
        }))
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 
        }))
      }

      // Cleanup observers
      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }

    const cleanup = measurePerformance()
    return cleanup
  }, [])



  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <span className="text-gray-800">{metrics.loadTime}ms</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              <span className="text-gray-800">{metrics.fcp}ms</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className="text-gray-800">{metrics.lcp}ms</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className="text-gray-800">{metrics.cls}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
              <span className="text-gray-800">{metrics.ttfb}ms</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PerformanceMonitor