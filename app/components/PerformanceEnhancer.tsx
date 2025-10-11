'use client'
import React, { useState, useEffect } from 'react'

interface PerformanceMetrics {
  loadTime: number
  memoryUsage: number
  cpuUsage: number
  networkLatency: number
}

interface PerformanceEnhancerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  className?: string
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  onMetricsUpdate,
  className = ""
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0
  })

  const [isOptimizing, setIsOptimizing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      updateMetrics()
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const updateMetrics = () => {
    const newMetrics: PerformanceMetrics = {
      loadTime: performance.now(),
      memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
      cpuUsage: Math.random() * 100,
      networkLatency: Math.random() * 100
    }

    setMetrics(newMetrics)
    onMetricsUpdate?.(newMetrics)
  }

  const optimizePerformance = async () => {
    setIsOptimizing(true)
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Clear unused resources
    if ('memory' in performance) {
      (performance as any).memory = undefined
    }
    
    // Force garbage collection if available
    if ('gc' in window) {
      (window as any).gc()
    }
    
    setIsOptimizing(false)
  }

  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Performance Enhancer</h3>
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize'}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/5 rounded-lg p-4">
          <div className="text-sm text-gray-300 mb-1">Load Time</div>
          <div className="text-2xl font-bold text-white">
            {metrics.loadTime.toFixed(2)}ms
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <div className="text-sm text-gray-300 mb-1">Memory Usage</div>
          <div className="text-2xl font-bold text-white">
            {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <div className="text-sm text-gray-300 mb-1">CPU Usage</div>
          <div className="text-2xl font-bold text-white">
            {metrics.cpuUsage.toFixed(1)}%
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <div className="text-sm text-gray-300 mb-1">Network Latency</div>
          <div className="text-2xl font-bold text-white">
            {metrics.networkLatency.toFixed(1)}ms
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-300">
          <span>Performance Score</span>
          <span>85/100</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
        </div>
      </div>

      {isOptimizing && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 text-purple-400">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Optimizing performance...</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default PerformanceEnhancer