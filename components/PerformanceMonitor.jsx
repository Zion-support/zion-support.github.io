import { useEffect, useState } from 'react'

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  })

  useEffect(() => {
    // Monitor page load performance
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0]
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0
      
      // Monitor memory usage if available
      const memoryUsage = performance.memory ? 
        Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) : 0

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Date.now() - performance.timeOrigin,
        memoryUsage
      })
    }
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono backdrop-blur-sm">
      <div>Load: {metrics.loadTime}ms</div>
      <div>Render: {metrics.renderTime}ms</div>
      {metrics.memoryUsage > 0 && (
        <div>Memory: {metrics.memoryUsage}MB</div>
      )}
    </div>
  )
}