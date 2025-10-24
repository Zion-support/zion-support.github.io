'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle } from 'lucide-react'
interface PerformanceMetrics {
    loadTime: number
  renderTime: number
  memoryUsage: number
  fps: number,
  [key: string]: number
  }
interface PerformanceProps {
    onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  }
const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });
fps
      }
      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
  })
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [alerts, setAlerts] = useState<string[]>([])
  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0
      // Measure render time
      const renderStart = performance.now()
      const renderTime = performance.now() - renderStart
      // Measure memory usage
      let memoryUsage = 0
      if ('memory' in performance) {
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory
        memoryUsage = memory?.usedJSHeapSize || 0
      }
      
      // Measure FPS (simplified)
      let fps = 60
      if ('requestAnimationFrame' in window) {
        let lastTime = performance.now()
        let frameCount = 0
        const measureFPS = () => {
          const currentTime = performance.now()
          frameCount++
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
            frameCount = 0
            lastTime = currentTime
          }
          
          if (isMonitoring) {
            requestAnimationFrame(measureFPS)
          }
        }
        requestAnimationFrame(measureFPS)
      }
      
      const newMetrics: PerformanceMetrics = {
        loadTime,
        renderTime,
        memoryUsage,
        fps
      }
      setMetrics(newMetrics)
      onMetricsUpdate?.(newMetrics)
      // Check for performance alerts
      checkPerformanceAlerts(newMetrics)
    }
    if (isMonitoring) {
    updateMetrics()
      const interval = setInterval(updateMetrics, 1000)
      return () => clearInterval(interval)
  }
  }, [isMonitoring, onMetricsUpdate])
  const checkPerformanceAlerts = useCallback((currentMetrics: PerformanceMetrics) => {
    const newAlerts: string[] = [],
    if (currentMetrics.loadTime > 3000) {
      newAlerts.push('Load time is above 3 seconds')
  }
    if (currentMetrics.memoryUsage > 50 * 1024 * 1024) {
    // 50MB
      newAlerts.push('Memory usage is high')
  }
    if (currentMetrics.fps < 30) {
    newAlerts.push('FPS is below 30')
  }
    setAlerts(newAlerts)
  }, [])
  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
  }
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024,
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  const getPerformanceColor = (value: number, thresholds: { good: number, warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.warning) return 'text-yellow-400'
    return 'text-red-400'
  }
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Performance Dashboard
          {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
      {alerts.length > 0 && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h4 className="text-red-400 font-semibold">Performance Alerts
          <ul className="space-y-1">
            {alerts.map((alert, index) => (
              <li key={index} className="text-red-300 text-sm">• {alert}
            ))}
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">Load Time
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}>{metrics.loadTime.toFixed(0)}ms
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 text-sm">Render Time
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}`}>{metrics.renderTime.toFixed(2)}ms
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <MemoryStick className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300 text-sm">Memory Usage
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 })}`}>
            {formatBytes(metrics.memoryUsage)}
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="text-gray-300 text-sm">FPS
          <div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 })}`}>
            {metrics.fps}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          {isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'}
        </p>
      </div>
    </div>
  )
}
export default PerformanceDashboard</div>
  </h3>
  </div>
  </PerformanceMetrics>
  </PerformanceProps>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></h4></ul></li>
