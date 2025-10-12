'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Zap, CheckCircle, AlertTriangle, Settings } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  networkLatency: number
  score: number
}

interface PerformanceEnhancerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  autoOptimize?: boolean
  showMetrics?: boolean
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  onMetricsUpdate,
  autoOptimize = true,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    score: 0
  })
  const [optimizations, setOptimizations] = useState<string[]>([])
  const [isOptimizing, setIsOptimizing] = useState(false)

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    const paint = performance.getEntriesByType('paint')
    
    const loadTime = navigation ? navigation.loadEventEnd - navigation.fetchStart : 0
    const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
    
    // Memory usage (if available)
    const memory = (performance as { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory
    const memoryUsage = memory ? memory.usedJSHeapSize / memory.jsHeapSizeLimit : 0
    
    // Network latency (simplified)
    const networkLatency = navigation ? navigation.responseEnd - navigation.requestStart : 0
    
    // Calculate performance score (0-100)
    const score = Math.max(0, 100 - (loadTime / 100) - (renderTime / 10) - (memoryUsage * 100))
    
    const newMetrics: PerformanceMetrics = {
      loadTime,
      renderTime,
      memoryUsage,
      networkLatency,
      score: Math.round(score)
    }
    
    setMetrics(newMetrics)
    onMetricsUpdate?.(newMetrics)
  }, [onMetricsUpdate])

  const applyOptimizations = useCallback(() => {
    setIsOptimizing(true)
    const newOptimizations: string[] = []
    
    // Image optimization
    if (metrics.loadTime > 2000) {
      newOptimizations.push('Optimizing images...')
      // Implement image optimization logic here
    }
    
    // Code splitting
    if (metrics.renderTime > 1000) {
      newOptimizations.push('Implementing code splitting...')
      // Implement code splitting logic here
    }
    
    // Memory optimization
    if (metrics.memoryUsage > 0.8) {
      newOptimizations.push('Optimizing memory usage...')
      // Implement memory optimization logic here
    }
    
    // Network optimization
    if (metrics.networkLatency > 500) {
      newOptimizations.push('Optimizing network requests...')
      // Implement network optimization logic here
    }
    
    setOptimizations(newOptimizations)
    
    // Simulate optimization process
    setTimeout(() => {
      setIsOptimizing(false)
      setOptimizations([])
    }, 2000)
  }, [metrics])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Initial measurement
    measurePerformance()
    
    // Set up performance monitoring
    const observer = new PerformanceObserver(() => {
      measurePerformance()
    })
    
    observer.observe({ entryTypes: ['navigation', 'paint', 'measure'] })
    
    // Auto-optimize if enabled
    if (autoOptimize && metrics.score < 70) {
      applyOptimizations()
    }
    
    return () => {
      observer.disconnect()
    }
  }, [measurePerformance, autoOptimize, metrics.score, applyOptimizations])

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5 text-green-500" />
    if (score >= 60) return <AlertTriangle className="w-5 h-5 text-yellow-500" />
    return <AlertTriangle className="w-5 h-5 text-red-500" />
  }

  if (!showMetrics) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
            <Zap className="w-4 h-4 mr-2" />
            Performance
          </h3>
          <button
            onClick={applyOptimizations}
            disabled={isOptimizing}
            className="text-xs text-purple-600 hover:text-purple-700 disabled:opacity-50"
          >
            {isOptimizing ? 'Optimizing...' : 'Optimize'}
          </button>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 dark:text-gray-400">Score</span>
            <div className="flex items-center space-x-1">
              {getScoreIcon(metrics.score)}
              <span className={`text-sm font-medium ${getScoreColor(metrics.score)}`}>
                {metrics.score}/100
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 dark:text-gray-400">Load Time</span>
            <span className="text-xs text-gray-900 dark:text-white">
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 dark:text-gray-400">Render Time</span>
            <span className="text-xs text-gray-900 dark:text-white">
              {metrics.renderTime.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 dark:text-gray-400">Memory</span>
            <span className="text-xs text-gray-900 dark:text-white">
              {(metrics.memoryUsage * 100).toFixed(1)}%
            </span>
          </div>
        </div>
        
        {optimizations.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-1">
              {optimizations.map((optimization, index) => (
                <div key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                  <Settings className="w-3 h-3 mr-1 animate-spin" />
                  {optimization}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PerformanceEnhancer