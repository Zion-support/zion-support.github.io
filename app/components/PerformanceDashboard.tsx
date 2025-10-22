<<<<<<< HEAD

import React from 'react'
interface PerformanceDashboardProps {
  className?: string
  children?: React.ReactNode
  }

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`performancedashboard-component ${className}`} {...props}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">PerformanceDashboard</h3>
          <p className="text-gray-300">This component is ready for implementation.</div>
      )}
  )
  }
export default PerformanceDashboard
=======
'use client'
import React, {useState, useEffect} from 'react'
import {Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle} from 'lucide-react'
interface PerformanceMetrics {loadTime: number,}
  renderTime: number,
  memoryUsage: number,
  fps: number,
  [key: string]: number,}interface PerformanceProps {onMetricsUpdate?: (metrics: PerformanceMetrics) => void,}}const PerformanceDashboard: React.FC<PerformanceProps> = ({onMetricsUpdate ,}) => {const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,})
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [alerts, setAlerts] = useState<string[]>([])
  useEffect(() => {const updateMetrics = ($2) => {
    
    
      const navigation = performance.getEntriesByType('navigation')
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
    const memory = (performance as {memory?: { usedJSHeapSize: number ,}}}).memory
        memoryUsage = memory?.usedJSHeapSize || 0
  }
      // Measure FPS (simplified)
      let fps = 60
      if ('requestAnimationFrame' in window) {let lastTime = performance.now()
        let frameCount = 0
        const measureFPS = ($2) => {
    
    
          const currentTime = performance.now()
          frameCount++
          if (currentTime - lastTime >= 1000) {
    fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
            frameCount = 0
            lastTime = currentTime
  }if (isMonitoring) {requestAnimationFrame(measureFPS)}}
        requestAnimationFrame(measureFPS)
  }
      const newMetrics: PerformanceMetrics = {,
        loadTime,
        renderTime,
        memoryUsage,
        fps
  }setMetrics(newMetrics)
      onMetricsUpdate?.(newMetrics)
      // Check for performance alerts
      checkPerformanceAlerts(newMetrics)
  }
    if (isMonitoring) {updateMetrics()
      const interval = setInterval(updateMetrics, 1000)
      return () => clearInterval(interval)}}, [isMonitoring, onMetricsUpdate])
  const checkPerformanceAlerts = ($2) => {
    
    ,
    const newAlerts: string[] = [],
    if (currentMetrics.loadTime > 3000) {
    newAlerts.push('Load time is above 3 seconds')}if (currentMetrics.memoryUsage > 50 * 1024 * 1024) {// 50MB
      newAlerts.push('Memory usage is high')}if (currentMetrics.fps < 30) {newAlerts.push('FPS is below 30')}setAlerts(newAlerts)
  }
  const toggleMonitoring = ($2) => {
    
    setIsMonitoring(!isMonitoring)}const formatBytes = ($2) => {
    
    ,
    if (bytes === 0) return '0 Bytes'
    const k = 1024,
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]}const getPerformanceColor = ($2) => {
    
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.warning) return 'text-yellow-400'
    return 'text-red-400'}return(<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">)</div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Performance Dashboard
  </
        <button
          onClick={toggleMonitoring}className={`px-4 py-2 rounded-lg font-medium transition-colors ${
    isMonitoring
              ? 'bg-red-600 text-white hover: bg-red-700',
              : 'bg-green-600 text-white hover: bg-green-700',} `}
        >{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'</button>}
      {alerts.length > 0 && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h4 className="text-red-400 font-semibold">Performance Alerts</div>
          <ul className="space-y-1">
            {alerts.map((alert, index) => (
              <li key={index}className="text-red-300 text-sm">• {alert}
            ))}
          </div>
      )}
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4"></div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">Load Time</div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 ,)} )}`}>{metrics.loadTime.toFixed(0)</div>}ms
  </
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 text-sm">Render Time</div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 ,)} )}`}>{metrics.renderTime.toFixed(2)</div>}ms
  </
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <MemoryStick className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300 text-sm">Memory Usage</div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 ,)} )}`}>{formatBytes(metrics.memoryUsage)</div>}
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="text-gray-300 text-sm">FPS</div>
          <div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 ,)} )}`}>{metrics.fps</div>}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">{isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'</p>}
  )
  }

export default PerformanceDashboard
  </PerformanceMetrics>
  </PerformanceProps>
>>>>>>> 483f75ef6f90550321090516b2130e42775ac7eb

                                        </div>
                                      </span>
                                    </TrendingUp>
                                  </div>
                                </span>
                              </MemoryStick>
                            </div>
                          </span>
                        </Cpu>
                      </span>
                    </Zap>
                  </li>
                </ul>
              </h4>
            </AlertTriangle>
          </Activity>
        </h3>
      </div>
    </p>
  </div>
</PerformanceDashboardProps>