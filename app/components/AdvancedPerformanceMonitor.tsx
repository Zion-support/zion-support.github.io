'use client'

import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage?: number
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    const startTime = performance.now()
    
    const measurePerformance = () => {
      const loadTime = performance.now() - startTime
      const renderTime = performance.now()
      
      setMetrics({
        loadTime,
        renderTime,
        memoryUsage: (performance as any).memory?.usedJSHeapSize
      })
    }

    // Measure after component mount
    setTimeout(measurePerformance, 100)
  }, [])

  if (!metrics) return null

  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <p>Load Time: {metrics.loadTime.toFixed(2)}ms</p>
      <p>Render Time: {metrics.renderTime.toFixed(2)}ms</p>
      {metrics.memoryUsage && (
        <p>Memory Usage: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</p>
      )}
    </div>
  )
}

export default AdvancedPerformanceMonitor