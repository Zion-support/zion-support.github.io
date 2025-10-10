'use client'
import React, { useState, useEffect } from 'react'
import { Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle } from 'lucide-react'
interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  fps: number
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
  const checkPerformanceAlerts = (currentMetrics: PerformanceMetrics) => {
    const newAlerts: string[] = []
    if (currentMetrics.loadTime > 3000) {
      newAlerts.push('Load time is above 3 seconds')
    }
    if (currentMetrics.memoryUsage > 50 * 1024 * 1024) { // 50MB
      newAlerts.push('Memory usage is high')
    }
    if (currentMetrics.fps < 30) {
      newAlerts.push('FPS is below 30')
    }
    setAlerts(newAlerts)
  }
  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
  }
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.warning) return 'text-yellow-400'
    return 'text-red-400'
  }
  return (
    <div> </div><div> </div><h3> </h3><Activity>Performance Dashboard>
        </Activity><button>{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
        </button></button>
      </div>
      {alerts.length > 0 && (
        <div> </div><div> </div><AlertTriangle> </AlertTriangle><h4 className="text-red-400 font-semibold">Performance Alerts</h4>
          </div>
          <ul>{alerts.map((alert, index) => (
              </ul><li key={index} className="text-red-300 text-sm">• {alert}</li>
            ))}
          </ul>
        </div>
      )}
      <div> </div><div> </div><div> </div><Zap> </Zap><span className="text-gray-300 text-sm">Load Time</span>
          </div>
          <div>{metrics.loadTime.toFixed(0)}ms>
        </div></div>
        <div> </div><div> </div><Cpu> </Cpu><span className="text-gray-300 text-sm">Render Time</span>
          </div>
          <div>{metrics.renderTime.toFixed(2)}ms>
        </div></div>
        <div> </div><div> </div><MemoryStick> </MemoryStick><span className="text-gray-300 text-sm">Memory Usage</span>
          </div>
          <div>{formatBytes(metrics.memoryUsage)}
          </div></div>
        </div>
        <div> </div><div> </div><TrendingUp> </TrendingUp><span className="text-gray-300 text-sm">FPS</span>
          </div>
          <div>{metrics.fps}
          </div></div>
        </div>
      </div>
      <div> </div><p>{isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'}
        </p></p>
      </div>
    </div>
  )
}
export default PerformanceDashboard
  </div>
  </h3>
  </div>
  </PerformanceMetrics>
  </PerformanceProps>