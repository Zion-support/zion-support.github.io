'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Activity, Cpu, HardDrive, Wifi, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react'

interface SystemMetrics {
  cpu: number
  memory: number
  disk: number
  network: number
  uptime: number
}

interface SystemMonitorProps {
  onMetricsUpdate?: (metrics: SystemMetrics) => void
  enableRealTimeMonitoring?: boolean
  className?: string
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    uptime: 0
  })
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [alerts, setAlerts] = useState<string[]>([])

  const generateMockMetrics = useCallback(() => {
    // Generate realistic mock data
    const newMetrics: SystemMetrics = {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      disk: Math.random() * 100,
      network: Math.random() * 100,
      uptime: Date.now() - (Math.random() * 86400000) // Random uptime up to 24 hours
    }

    setMetrics(newMetrics)
    onMetricsUpdate?.(newMetrics)

    // Check for alerts
    const newAlerts: string[] = []
    if (newMetrics.cpu > 80) newAlerts.push('High CPU usage detected')
    if (newMetrics.memory > 85) newAlerts.push('High memory usage detected')
    if (newMetrics.disk > 90) newAlerts.push('Disk space running low')
    if (newMetrics.network > 95) newAlerts.push('Network congestion detected')

    setAlerts(newAlerts)
  }, [onMetricsUpdate])

  useEffect(() => {
    if (!enableRealTimeMonitoring) return

    setIsMonitoring(true)
    generateMockMetrics()

    const interval = setInterval(generateMockMetrics, 2000)
    return () => {
      clearInterval(interval)
      setIsMonitoring(false)
    }
  }, [generateMockMetrics, enableRealTimeMonitoring])

  const formatUptime = (ms: number) => {
    const hours = Math.floor(ms / 3600000)
    const minutes = Math.floor((ms % 3600000) / 60000)
    return `${hours}h ${minutes}m`
  }

  const getStatusColor = (value: number) => {
    if (value > 80) return 'text-red-500'
    if (value > 60) return 'text-yellow-500'
    return 'text-green-500'
  }

  const getStatusBgColor = (value: number) => {
    if (value > 80) return 'bg-red-100'
    if (value > 60) return 'bg-yellow-100'
    return 'bg-green-100'
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-500" />
          System Monitor
        </h3>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`} />
          <span className="text-sm text-gray-500">
            {isMonitoring ? 'Monitoring' : 'Stopped'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Cpu className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">CPU</span>
            </div>
            <span className={`text-sm font-bold ${getStatusColor(metrics.cpu)}`}>
              {metrics.cpu.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                metrics.cpu > 80 ? 'bg-red-500' : metrics.cpu > 60 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${metrics.cpu}%` }}
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <HardDrive className="w-4 h-4 mr-2 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Memory</span>
            </div>
            <span className={`text-sm font-bold ${getStatusColor(metrics.memory)}`}>
              {metrics.memory.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                metrics.memory > 80 ? 'bg-red-500' : metrics.memory > 60 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${metrics.memory}%` }}
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <HardDrive className="w-4 h-4 mr-2 text-purple-500" />
              <span className="text-sm font-medium text-gray-700">Disk</span>
            </div>
            <span className={`text-sm font-bold ${getStatusColor(metrics.disk)}`}>
              {metrics.disk.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                metrics.disk > 80 ? 'bg-red-500' : metrics.disk > 60 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${metrics.disk}%` }}
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Wifi className="w-4 h-4 mr-2 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Network</span>
            </div>
            <span className={`text-sm font-bold ${getStatusColor(metrics.network)}`}>
              {metrics.network.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                metrics.network > 80 ? 'bg-red-500' : metrics.network > 60 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${metrics.network}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Uptime</span>
          <span className="font-medium">{formatUptime(metrics.uptime)}</span>
        </div>
      </div>

      {alerts.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Alerts</h4>
          <div className="space-y-1">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-center text-sm text-red-600">
                <AlertTriangle className="w-4 h-4 mr-2" />
                {alert}
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={generateMockMetrics}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Refresh Metrics
      </button>
    </div>
  )
}

export default SystemMonitor