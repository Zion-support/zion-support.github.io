'use client'
import React, { useEffect, useState } from 'react'
import { Activity, Zap, Clock, Database } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number
  memoryUsage: number
  renderTime: number
  bundleSize: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
    bundleSize: 0
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || window.location.search.includes('debug=true')) {
      setIsVisible(true)
      
      // Measure performance metrics
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0
        
        // Memory usage (if available)
        const memory = (performance as any).memory
        const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0
        
        // Render time
        const renderTime = performance.now()
        
        // Bundle size estimation
        const bundleSize = document.querySelectorAll('script[src]').length * 50 // Rough estimation
        
        setMetrics({
          loadTime: Math.round(loadTime),
          memoryUsage,
          renderTime: Math.round(renderTime),
          bundleSize
        })
      }

      // Measure after initial load
      setTimeout(measurePerformance, 1000)
      
      // Update metrics periodically
      const interval = setInterval(measurePerformance, 5000)
      
      return () => clearInterval(interval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white text-xs font-mono z-50">
      <div className="flex items-center space-x-2 mb-2">
        <Activity className="w-4 h-4 text-cyan-400" />
        <span className="font-semibold">Performance Monitor</span>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <Clock className="w-3 h-3 text-green-400" />
          <span>Load: {metrics.loadTime}ms</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Database className="w-3 h-3 text-blue-400" />
          <span>Memory: {metrics.memoryUsage}MB</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Zap className="w-3 h-3 text-yellow-400" />
          <span>Render: {metrics.renderTime}ms</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Activity className="w-3 h-3 text-purple-400" />
          <span>Bundle: ~{metrics.bundleSize}KB</span>
        </div>
      </div>
    </div>
  )
}

export default PerformanceMonitor