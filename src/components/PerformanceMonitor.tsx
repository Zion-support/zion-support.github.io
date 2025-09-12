import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  })

  useEffect(() => {
    const startTime = performance.now()
    
    const measurePerformance = () => {
      const loadTime = performance.now() - startTime
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(performance.now() - startTime),
        memoryUsage: Math.round(memoryUsage / 1024 / 1024) // Convert to MB
      })
    }

    measurePerformance()
    const interval = setInterval(measurePerformance, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-4 left-4 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white text-sm max-w-sm z-50"
    >
      <h3 className="font-semibold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>Load Time: {metrics.loadTime}ms</div>
        <div>Render Time: {metrics.renderTime}ms</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
      </div>
    </motion.div>
  )
}

export default PerformanceMonitor