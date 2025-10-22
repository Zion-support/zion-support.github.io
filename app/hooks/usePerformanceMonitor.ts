import { useCallback, useEffect, useState, useRef } from 'react'

interface UsePerformanceMonitorOptions {
  enabled?: boolean
  threshold?: number
  measureMemoryUsage?: boolean
}

interface PerformanceData {
  fps: number
  memoryUsage: number
  loadTime: number
  renderTime: number
}

export const usePerformanceMonitor = (options: UsePerformanceMonitorOptions = {}) => {
  const {
    enabled = true,
    measureMemoryUsage = true
  } = options

  const [metrics, setMetrics] = useState<PerformanceData>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0
  })

  const [isMonitoringFPS, setIsMonitoringFPS] = useState(false)
  const frameCountRef = useRef(0)
  const lastTimeRef = useRef(performance.now())

  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }))
    }
  }, [])

  const measureFPS = useCallback(() => {
    if (!isMonitoringFPS) return

    frameCountRef.current++
    const currentTime = performance.now()
    const deltaTime = currentTime - lastTimeRef.current

    if (deltaTime >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / deltaTime)
      setMetrics(prev => ({
        ...prev,
        fps
      }))
      
      frameCountRef.current = 0
      lastTimeRef.current = currentTime
    }

    requestAnimationFrame(measureFPS)
  }, [isMonitoringFPS])

  const startFPSMonitoring = useCallback(() => {
    setIsMonitoringFPS(true)
  }, [])

  const stopFPSMonitoring = useCallback(() => {
    setIsMonitoringFPS(false)
  }, [])

  const measureLoadTime = useCallback(() => {
    if (typeof window !== 'undefined') {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart
        setMetrics(prev => ({
          ...prev,
          loadTime
        }))
        console.log('Page load time:', loadTime)
      }
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    // Run monitoring after page load
    if (document.readyState === 'complete') {
      measureLoadTime()
    } else {
      window.addEventListener('load', measureLoadTime)
    }

    return () => {
      window.removeEventListener('load', measureLoadTime)
    }
  }, [enabled, measureLoadTime])

  useEffect(() => {
    if (isMonitoringFPS) {
      measureFPS()
    }
  }, [isMonitoringFPS, measureFPS])

  useEffect(() => {
    if (measureMemoryUsage) {
      const interval = setInterval(measureMemoryUsage, 1000)
      return () => clearInterval(interval)
    }
  }, [measureMemoryUsage])

  return {
    metrics,
    startFPSMonitoring,
    stopFPSMonitoring,
    measureLoadTime
  }
}