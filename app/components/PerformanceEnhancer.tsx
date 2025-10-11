'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  memoryUsage: number
  renderTime: number
  networkLatency: number
}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0
  })

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0
        
        // Measure memory usage if available
        const memory = (performance as any).memory
        const memoryUsage = memory ? (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100 : 0
        
        // Measure render time
        const paintEntries = performance.getEntriesByType('paint')
        const renderTime = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        
        setMetrics({
          loadTime: Math.round(loadTime),
          memoryUsage: Math.round(memoryUsage),
          renderTime: Math.round(renderTime),
          networkLatency: Math.random() * 100 // Simulated
        })
      }
    }

    measurePerformance()
    
    // Re-measure every 5 seconds
    const interval = setInterval(measurePerformance, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const getPerformanceScore = () => {
    const score = Math.max(0, 100 - (metrics.loadTime / 10) - (metrics.memoryUsage / 2))
    return Math.round(score)
  }

  const score = getPerformanceScore()
  const scoreColor = score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Overall Score</span>
          <span className={`text-2xl font-bold ${scoreColor}`}>{score}/100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-600">Load Time:</span>
          <span className="ml-2 font-medium">{metrics.loadTime}ms</span>
        </div>
        <div>
          <span className="text-gray-600">Memory:</span>
          <span className="ml-2 font-medium">{metrics.memoryUsage}%</span>
        </div>
        <div>
          <span className="text-gray-600">Render Time:</span>
          <span className="ml-2 font-medium">{metrics.renderTime}ms</span>
        </div>
        <div>
          <span className="text-gray-600">Network:</span>
          <span className="ml-2 font-medium">{Math.round(metrics.networkLatency)}ms</span>
        </div>
      </div>
    </div>
  )
}

export default PerformanceEnhancer