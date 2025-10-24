'use client'
import React, { useEffect, useState } from 'react'
import { Activity, Zap, TrendingUp, Clock } from 'lucide-react'

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateMetrics = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart
          const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0
          
          setMetrics({
            loadTime: Math.round(loadTime),
            memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
            cpuUsage: Math.round(Math.random() * 100), // Simulated
            networkLatency: Math.round(Math.random() * 100) // Simulated
          })
        }
      }

      updateMetrics()
      const interval = setInterval(updateMetrics, 5000)

      return () => clearInterval(interval)
    }
  }, [])

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
      <div className="flex items-center mb-4">
        <Activity className="w-6 h-6 text-cyan-400 mr-2" />
        <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400">{metrics.loadTime}ms</div>
          <div className="text-sm text-gray-300">Load Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{metrics.memoryUsage}MB</div>
          <div className="text-sm text-gray-300">Memory Usage</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">{metrics.cpuUsage}%</div>
          <div className="text-sm text-gray-300">CPU Usage</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{metrics.networkLatency}ms</div>
          <div className="text-sm text-gray-300">Network Latency</div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedPerformanceMonitor