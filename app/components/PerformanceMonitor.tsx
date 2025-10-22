'use client'
import React, { useEffect, useState } from 'react'

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [metrics, setMetrics] = useState({
    fps: 0,
    memory: 0,
    loadTime: 0
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateMetrics = () => {
      // Simulate performance metrics
      setMetrics({
        fps: Math.floor(Math.random() * 60) + 30,
        memory: Math.floor(Math.random() * 100),
        loadTime: Math.floor(Math.random() * 2000) + 500
      })
    }

    const interval = setInterval(updateMetrics, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-cyan-500 text-white p-2 rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
        title="Show Performance Monitor"
      >
        📊
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg border border-slate-700 min-w-[200px]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      <div className="space-y-1 text-xs">
        <div>FPS: {metrics.fps}</div>
        <div>Memory: {metrics.memory}%</div>
        <div>Load: {metrics.loadTime}ms</div>
      </div>
    </div>
  )
}

export default PerformanceMonitor