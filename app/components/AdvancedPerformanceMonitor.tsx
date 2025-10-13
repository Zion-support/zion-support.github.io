import React, { useState, useEffect } from 'react'

interface PerformanceMetrics {
  fps: number | null
  memoryUsage: number | null
  loadTime: number | null
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: null,
    memoryUsage: null,
    loadTime: null
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const updateMetrics = () => {
      // Get FPS
      let fps = null
      if ('requestAnimationFrame' in window) {
        let lastTime = performance.now()
        let frameCount = 0
        
        const countFrames = () => {
          frameCount++
          const currentTime = performance.now()
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
            lastTime = currentTime
            frameCount = 0
          }
          requestAnimationFrame(countFrames)
        }
        requestAnimationFrame(countFrames)
      }

      // Get memory usage
      let memoryUsage = null
      if ('memory' in performance) {
        memoryUsage = Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024)
      }

      // Get load time
      const loadTime = Math.round(performance.now())

      setMetrics({ fps, memoryUsage, loadTime })
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 1000)

    return () => clearInterval(interval)
  }, [])

  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg font-mono text-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-1">
          {metrics.fps !== null && (
            <div>FPS: {metrics.fps}</div>
          )}
          {metrics.memoryUsage !== null && (
            <div>Memory: {metrics.memoryUsage}MB</div>
          )}
          {metrics.loadTime !== null && (
            <div>Load Time: {metrics.loadTime}ms</div>
          )}
        </div>
      )}
    </div>
  )
}

export default AdvancedPerformanceMonitor