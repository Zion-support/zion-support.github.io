'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number | null
  firstContentfulPaint: number | null
  largestContentfulPaint: number | null
  firstInputDelay: number | null
  cumulativeLayoutShift: number | null
  timeToInteractive: number | null
  memoryUsage: number | null
  networkInfo: {
    effectiveType: string | null
    downlink: number | null
    rtt: number | null
  }
}

interface PerformanceMonitorProps {
  showInProduction?: boolean
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInProduction = false, 
  onMetricsUpdate 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToInteractive: null,
    memoryUsage: null,
    networkInfo: {
      effectiveType: null,
      downlink: null,
      rtt: null
    }
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development or if explicitly enabled
    if (process.env.NODE_ENV === 'development' || showInProduction) {
      setIsVisible(true)
    }

    // Performance observer for Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                firstContentfulPaint: entry.startTime
              }))
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              largestContentfulPaint: entry.startTime
            }))
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({
              ...prev,
              firstInputDelay: (entry as any).processingStart - entry.startTime
            }))
          } else if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({
                ...prev,
                cumulativeLayoutShift: (prev.cumulativeLayoutShift || 0) + (entry as any).value
              }))
            }
          }
        })
      })

      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (error) {
        console.warn('Performance Observer not supported:', error)
      }

      // Memory usage
      if ('memory' in performance) {
        const updateMemoryUsage = () => {
          setMetrics(prev => ({
            ...prev,
            memoryUsage: (performance as any).memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
          }))
        }

        updateMemoryUsage()
        const memoryInterval = setInterval(updateMemoryUsage, 5000)

        return () => {
          clearInterval(memoryInterval)
          observer.disconnect()
        }
      }

      return () => observer.disconnect()
    }
  }, [showInProduction])

  useEffect(() => {
    // Network information
    if (typeof window !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection
      setMetrics(prev => ({
        ...prev,
        networkInfo: {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt
        }
      }))
    }

    // Page load time
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        setMetrics(prev => ({
          ...prev,
          loadTime
        }))
      })
    }
  }, [])

  useEffect(() => {
    // Notify parent component of metrics updates
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics)
    }
  }, [metrics, onMetricsUpdate])

  if (!isVisible) {
    return null
  }

  const getPerformanceScore = () => {
    let score = 100

    // FCP scoring (0-100)
    if (metrics.firstContentfulPaint) {
      if (metrics.firstContentfulPaint > 3000) score -= 30
      else if (metrics.firstContentfulPaint > 1800) score -= 20
      else if (metrics.firstContentfulPaint > 1000) score -= 10
    }

    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint) {
      if (metrics.largestContentfulPaint > 4000) score -= 30
      else if (metrics.largestContentfulPaint > 2500) score -= 20
      else if (metrics.largestContentfulPaint > 1500) score -= 10
    }

    // FID scoring (0-100)
    if (metrics.firstInputDelay) {
      if (metrics.firstInputDelay > 300) score -= 30
      else if (metrics.firstInputDelay > 100) score -= 20
      else if (metrics.firstInputDelay > 50) score -= 10
    }

    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift) {
      if (metrics.cumulativeLayoutShift > 0.25) score -= 30
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 20
      else if (metrics.cumulativeLayoutShift > 0.05) score -= 10
    }

    return Math.max(0, score)
  }

  const score = getPerformanceScore()
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 70) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-cyan-400 font-semibold">Performance Monitor</h3>
        <div className={`font-bold ${getScoreColor(score)}`}>
          {score}/100
        </div>
      </div>
      
      <div className="space-y-1">
        {metrics.loadTime && (
          <div>Load Time: <span className="text-cyan-300">{metrics.loadTime}ms</span></div>
        )}
        {metrics.firstContentfulPaint && (
          <div>FCP: <span className="text-cyan-300">{Math.round(metrics.firstContentfulPaint)}ms</span></div>
        )}
        {metrics.largestContentfulPaint && (
          <div>LCP: <span className="text-cyan-300">{Math.round(metrics.largestContentfulPaint)}ms</span></div>
        )}
        {metrics.firstInputDelay && (
          <div>FID: <span className="text-cyan-300">{Math.round(metrics.firstInputDelay)}ms</span></div>
        )}
        {metrics.cumulativeLayoutShift && (
          <div>CLS: <span className="text-cyan-300">{metrics.cumulativeLayoutShift.toFixed(3)}</span></div>
        )}
        {metrics.memoryUsage && (
          <div>Memory: <span className="text-cyan-300">{metrics.memoryUsage.toFixed(1)}MB</span></div>
        )}
        {metrics.networkInfo.effectiveType && (
          <div>Network: <span className="text-cyan-300">{metrics.networkInfo.effectiveType}</span></div>
        )}
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor