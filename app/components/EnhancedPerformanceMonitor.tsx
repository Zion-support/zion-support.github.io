'use client'
import React, { useState, useEffect } from 'react'

interface PerformanceMetrics {
  loadTime: number
  memoryUsage: number
  cpuUsage: number
  networkLatency: number
}

interface EnhancedPerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  className?: string
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  onMetricsUpdate,
  className = ""
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0
  })

  const [isMonitoring, setIsMonitoring] = useState(false)

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        updateMetrics()
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isMonitoring])

  const updateMetrics = () => {
    const newMetrics: PerformanceMetrics = {
      loadTime: performance.now(),
      memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
      cpuUsage: Math.random() * 100, // Simulated CPU usage
      networkLatency: Math.random() * 100 // Simulated network latency
    }

    setMetrics(newMetrics)
    onMetricsUpdate?.(newMetrics)
  }

  const startMonitoring = () => {
    setIsMonitoring(true)
    updateMetrics()
  }

  const stopMonitoring = () => {
    setIsMonitoring(false)
  }

  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Performance Monitor</h3>
        <div className="flex space-x-2">
          <button
            onClick={startMonitoring}
            disabled={isMonitoring}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start
          </button>
          <button
            onClick={stopMonitoring}
            disabled={!isMonitoring}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Stop
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
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

      {isMonitoring && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Monitoring active</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default EnhancedPerformanceMonitor