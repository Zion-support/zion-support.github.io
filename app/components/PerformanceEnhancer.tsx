'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Zap, CheckCircle, AlertTriangle, Settings } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
}

interface PerformanceEnhancerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  enableRealTimeMonitoring?: boolean
  className?: string
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0
  })
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [optimizations, setOptimizations] = useState<string[]>([])

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    const paintEntries = performance.getEntriesByType('paint')
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry
    
    const newMetrics: PerformanceMetrics = {
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      cumulativeLayoutShift: 0, // Would need to be measured with PerformanceObserver
      firstInputDelay: 0 // Would need to be measured with PerformanceObserver
    }

    setMetrics(newMetrics)
    onMetricsUpdate?.(newMetrics)
  }, [onMetricsUpdate])

  const optimizePerformance = useCallback(() => {
    setIsOptimizing(true)
    const newOptimizations: string[] = []

    // Simulate optimization recommendations
    if (metrics.loadTime > 3000) {
      newOptimizations.push('Enable code splitting and lazy loading')
    }
    if (metrics.firstContentfulPaint > 1500) {
      newOptimizations.push('Optimize critical rendering path')
    }
    if (metrics.largestContentfulPaint > 2500) {
      newOptimizations.push('Optimize images and fonts')
    }

    setOptimizations(newOptimizations)
    
    // Simulate optimization process
    setTimeout(() => {
      setIsOptimizing(false)
    }, 2000)
  }, [metrics])

  useEffect(() => {
    if (!enableRealTimeMonitoring) return

    measurePerformance()
    
    const interval = setInterval(measurePerformance, 5000)
    return () => clearInterval(interval)
  }, [measurePerformance, enableRealTimeMonitoring])

  const getPerformanceScore = () => {
    let score = 100
    
    if (metrics.loadTime > 3000) score -= 20
    if (metrics.firstContentfulPaint > 1500) score -= 20
    if (metrics.largestContentfulPaint > 2500) score -= 20
    if (metrics.cumulativeLayoutShift > 0.1) score -= 20
    if (metrics.firstInputDelay > 100) score -= 20
    
    return Math.max(0, score)
  }

  const score = getPerformanceScore()
  const isGood = score >= 80
  const isWarning = score >= 60 && score < 80
  const isPoor = score < 60

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-blue-500" />
          Performance Monitor
        </h3>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
          isGood ? 'bg-green-100 text-green-800' :
          isWarning ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {score}/100
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-sm">
          <span className="text-gray-500">Load Time:</span>
          <span className="ml-2 font-medium">{metrics.loadTime.toFixed(0)}ms</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">FCP:</span>
          <span className="ml-2 font-medium">{metrics.firstContentfulPaint.toFixed(0)}ms</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">LCP:</span>
          <span className="ml-2 font-medium">{metrics.largestContentfulPaint.toFixed(0)}ms</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">CLS:</span>
          <span className="ml-2 font-medium">{metrics.cumulativeLayoutShift.toFixed(3)}</span>
        </div>
      </div>

      {optimizations.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Recommendations:</h4>
          <ul className="space-y-1">
            {optimizations.map((optimization, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500" />
                {optimization}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={optimizePerformance}
        disabled={isOptimizing}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
      >
        {isOptimizing ? (
          <>
            <Settings className="w-4 h-4 mr-2 animate-spin" />
            Optimizing...
          </>
        ) : (
          <>
            <Zap className="w-4 h-4 mr-2" />
            Optimize Performance
          </>
        )}
      </button>
    </div>
  )
}

export default PerformanceEnhancer