'use client'
import React, { useState, useEffect } from 'react'
import { Activity, Zap, TrendingUp, Clock } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  cpuUsage: number
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    cpuUsage: 0
  })

  const [isMonitoring, setIsMonitoring] = useState(false)

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        // Simulate performance monitoring
        setMetrics({
          loadTime: Math.random() * 1000 + 500,
          renderTime: Math.random() * 100 + 50,
          memoryUsage: Math.random() * 100,
          cpuUsage: Math.random() * 100
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isMonitoring])

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Performance Monitor</h3>
        <button
          onClick={toggleMonitoring}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            isMonitoring
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isMonitoring ? 'Stop' : 'Start'} Monitoring
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-sm text-gray-300">Load Time</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {Math.round(metrics.loadTime)}ms
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Zap className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm text-gray-300">Render Time</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {Math.round(metrics.renderTime)}ms
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Activity className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-sm text-gray-300">Memory</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {Math.round(metrics.memoryUsage)}%
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-sm text-gray-300">CPU</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {Math.round(metrics.cpuUsage)}%
          </div>
        </div>
      </div>

      {isMonitoring && (
        <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-400 text-sm">
            Performance monitoring is active. Metrics are updated every second.
          </p>
        </div>
      )}
    </div>
  )
}

export default EnhancedPerformanceMonitor