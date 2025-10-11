'use client'
import React, { useEffect, useState } from 'react'
import { Zap, TrendingUp, Activity, CheckCircle } from 'lucide-react'

interface PerformanceMetrics {
  score: number
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
}

interface PerformanceEnhancerProps {
  enableMonitoring?: boolean
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  targetScore?: number
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enableMonitoring = true,
  onMetricsUpdate,
  targetScore = 90
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    score: 0,
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0
  })

  const [isOptimizing, setIsOptimizing] = useState(false)

  useEffect(() => {
    if (!enableMonitoring) return

    const measurePerformance = () => {
      // Measure page load time
      const loadTime = performance.now()

      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                firstContentfulPaint: entry.startTime
              }))
            }
          }
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              largestContentfulPaint: entry.startTime
            }))
          }
          if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({
              ...prev,
              cumulativeLayoutShift: prev.cumulativeLayoutShift + (entry as any).value
            }))
          }
        }
      })

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] })

      // Calculate performance score
      const calculateScore = () => {
        let score = 100

        // FCP scoring (0-100)
        if (metrics.firstContentfulPaint > 3000) score -= 30
        else if (metrics.firstContentfulPaint > 1800) score -= 20
        else if (metrics.firstContentfulPaint > 1000) score -= 10

        // LCP scoring (0-100)
        if (metrics.largestContentfulPaint > 4000) score -= 30
        else if (metrics.largestContentfulPaint > 2500) score -= 20
        else if (metrics.largestContentfulPaint > 1500) score -= 10

        // CLS scoring (0-100)
        if (metrics.cumulativeLayoutShift > 0.25) score -= 30
        else if (metrics.cumulativeLayoutShift > 0.1) score -= 20
        else if (metrics.cumulativeLayoutShift > 0.05) score -= 10

        return Math.max(0, score)
      }

      const updateMetrics = () => {
        const newScore = calculateScore()
        const newMetrics = {
          ...metrics,
          loadTime,
          score: newScore
        }
        
        setMetrics(newMetrics)
        
        if (onMetricsUpdate) {
          onMetricsUpdate(newMetrics)
        }
      }

      // Update metrics after a delay to allow for measurements
      setTimeout(updateMetrics, 1000)

      return () => observer.disconnect()
    }

    const cleanup = measurePerformance()
    return cleanup
  }, [enableMonitoring, onMetricsUpdate, metrics])

  const optimizePerformance = async () => {
    setIsOptimizing(true)
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, you would implement actual optimizations here
    console.log('Performance optimization completed')
    
    setIsOptimizing(false)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500'
    if (score >= 70) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-500'
    if (score >= 70) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-yellow-500" />
          Performance Enhancer
        </h3>
        <div className={`w-3 h-3 rounded-full ${getScoreBgColor(metrics.score)}`} />
      </div>

      {/* Performance Score */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Performance Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(metrics.score)}`}>
            {metrics.score}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${getScoreBgColor(metrics.score)}`}
            style={{ width: `${metrics.score}%` }}
          />
        </div>
        {metrics.score < targetScore && (
          <p className="text-xs text-gray-500 mt-2">
            Target: {targetScore}/100
          </p>
        )}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">Load Time</span>
            <Activity className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {metrics.loadTime.toFixed(0)}ms
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">FCP</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">LCP</span>
            <TrendingUp className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">CLS</span>
            <Activity className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </div>
        </div>
      </div>

      {/* Optimization Button */}
      <button
        onClick={optimizePerformance}
        disabled={isOptimizing}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isOptimizing ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
            Optimizing...
          </>
        ) : (
          <>
            <Zap className="w-4 h-4 mr-2" />
            Optimize Performance
          </>
        )}
      </button>

      {/* Recommendations */}
      {metrics.score < targetScore && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="text-sm font-semibold text-yellow-800 mb-2">Recommendations</h4>
          <ul className="text-xs text-yellow-700 space-y-1">
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2" />
              Optimize images and assets
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2" />
              Enable compression
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2" />
              Minimize JavaScript bundles
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default PerformanceEnhancer