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

    // Measure load time
    const measureLoadTime = () => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        setMetrics(prev => ({ ...prev, loadTime }))
      }
    }

    // Measure Web Vitals
    const measureWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB, onINP } = await import('web-vitals')

        getCLS((metric: any) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }))
        })

        getFID((metric: any) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }))
        })

        onINP((metric: any) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }))
        })

        getFCP((metric: any) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }))
        })

        getLCP((metric: any) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }))
        })

        getTTFB((metric: any) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }))
        })
      } catch (error) {
        console.error('Failed to measure web vitals:', error)
      }
    }

    // Measure memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }))
      }
    }

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measureLoadTime()
      measureWebVitals()
      measureMemory()
    } else {
      window.addEventListener('load', () => {
        measureLoadTime()
        measureWebVitals()
        measureMemory()
      })
    }
  }, [])

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600'
    if (value <= thresholds.poor) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getOverallScore = () => {
    let score = 0
    let count = 0

    if (metrics.loadTime) {
      score += metrics.loadTime <= 1000 ? 100 : metrics.loadTime <= 3000 ? 50 : 0
      count++
    }

    if (metrics.fcp) {
      score += metrics.fcp <= 1800 ? 100 : metrics.fcp <= 3000 ? 50 : 0
      count++
    }

    if (metrics.lcp) {
      score += metrics.lcp <= 2500 ? 100 : metrics.lcp <= 4000 ? 50 : 0
      count++
    }

    if (metrics.fid) {
      score += metrics.fid <= 100 ? 100 : metrics.fid <= 300 ? 50 : 0
      count++
    }

    if (metrics.cls !== null) {
      score += metrics.cls <= 0.1 ? 100 : metrics.cls <= 0.25 ? 50 : 0
      count++
    }

    return count > 0 ? Math.round(score / count) : 0
  }

  const overallScore = getOverallScore()

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Performance Monitor"
      >
        📊
      </button>

      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
          
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
              <span className={`font-mono ${metrics.ttfb ? getMetricColor(metrics.ttfb, { good: 200, poor: 600 }) : 'text-gray-400'}`}>
                {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
          </div>

          {overallScore > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Overall Score:</span>
                <span className={`font-bold text-lg ${getMetricColor(overallScore, { good: 80, poor: 60 })}`}>
                  {overallScore}/100
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default AdvancedPerformanceMonitor