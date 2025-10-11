'use client'
import React, { useState, useEffect } from 'react'

interface PerformanceMetrics {
  loadTime: number
  memoryUsage: number
  cpuUsage: number
  networkLatency: number
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0
  })

  useEffect(() => {
    const updateMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0
        
        setMetrics(prev => ({
          ...prev,
          loadTime: Math.round(loadTime),
          memoryUsage: Math.random() * 100, // Simulated
          cpuUsage: Math.random() * 100, // Simulated
          networkLatency: Math.random() * 100 // Simulated
        }))
      }
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{metrics.loadTime}ms</div>
          <div className="text-sm text-gray-600">Load Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{Math.round(metrics.memoryUsage)}%</div>
          <div className="text-sm text-gray-600">Memory Usage</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-600">{Math.round(metrics.cpuUsage)}%</div>
          <div className="text-sm text-gray-600">CPU Usage</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">{Math.round(metrics.networkLatency)}ms</div>
          <div className="text-sm text-gray-600">Network Latency</div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedPerformanceMonitor