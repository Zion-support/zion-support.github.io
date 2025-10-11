'use client'
import React, { useEffect, useState } from 'react'
import { Activity, Zap, TrendingUp, AlertTriangle } from 'lucide-react'

interface PerformanceMetrics {
  cpu: number
  memory: number
  network: number
  responseTime: number
}

interface EnhancedPerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean
  alertThreshold?: {
    cpu: number
    memory: number
    responseTime: number
  }
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  alertThreshold = {
    cpu: 80,
    memory: 85,
    responseTime: 2000
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cpu: 0,
    memory: 0,
    network: 0,
    responseTime: 0
  })

  const [alerts, setAlerts] = useState<string[]>([])

  useEffect(() => {
    if (!enableRealTimeMonitoring) return

    const updateMetrics = () => {
      // Simulate performance metrics
      const newMetrics = {
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        network: Math.random() * 100,
        responseTime: Math.random() * 3000
      }

      setMetrics(newMetrics)

      // Check for alerts
      const newAlerts: string[] = []
      if (newMetrics.cpu > alertThreshold.cpu) {
        newAlerts.push(`High CPU usage: ${newMetrics.cpu.toFixed(1)}%`)
      }
      if (newMetrics.memory > alertThreshold.memory) {
        newAlerts.push(`High memory usage: ${newMetrics.memory.toFixed(1)}%`)
      }
      if (newMetrics.responseTime > alertThreshold.responseTime) {
        newAlerts.push(`Slow response time: ${newMetrics.responseTime.toFixed(0)}ms`)
      }

      setAlerts(newAlerts)
    }

    const interval = setInterval(updateMetrics, 1000)
    return () => clearInterval(interval)
  }, [enableRealTimeMonitoring, alertThreshold])

  const getStatusColor = (value: number, threshold: number) => {
    if (value > threshold) return 'text-red-500'
    if (value > threshold * 0.8) return 'text-yellow-500'
    return 'text-green-500'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Performance Monitor
        </h3>
        <div className={`w-3 h-3 rounded-full ${enableRealTimeMonitoring ? 'bg-green-500' : 'bg-gray-400'}`} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">CPU Usage</span>
            <Zap className="w-4 h-4 text-blue-500" />
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.cpu, alertThreshold.cpu)}`}>
            {metrics.cpu.toFixed(1)}%
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Memory Usage</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.memory, alertThreshold.memory)}`}>
            {metrics.memory.toFixed(1)}%
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Network</span>
            <Activity className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-blue-600">
            {metrics.network.toFixed(1)}%
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Response Time</span>
            <Activity className="w-4 h-4 text-orange-500" />
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.responseTime, alertThreshold.responseTime)}`}>
            {metrics.responseTime.toFixed(0)}ms
          </div>
        </div>
      </div>

      {alerts.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-sm font-medium text-red-800">Performance Alerts</span>
          </div>
          <ul className="space-y-1">
            {alerts.map((alert, index) => (
              <li key={index} className="text-sm text-red-700">{alert}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default EnhancedPerformanceMonitor