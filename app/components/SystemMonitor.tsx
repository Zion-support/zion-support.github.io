'use client'
import React, { useState, useEffect } from 'react'

interface SystemMetrics {
  cpuUsage: number
  memoryUsage: number
  diskUsage: number
  networkLatency: number
  uptime: number
}

const SystemMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpuUsage: 0,
    memoryUsage: 0,
    diskUsage: 0,
    networkLatency: 0,
    uptime: 0
  })

  useEffect(() => {
    const updateMetrics = () => {
      // Simulate system metrics (in a real app, these would come from an API)
      setMetrics({
        cpuUsage: Math.random() * 100,
        memoryUsage: Math.random() * 100,
        diskUsage: Math.random() * 100,
        networkLatency: Math.random() * 100,
        uptime: Date.now() - performance.timeOrigin
      })
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatUptime = (ms: number) => {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    
    if (days > 0) return `${days}d ${hours % 24}h`
    if (hours > 0) return `${hours}h ${minutes % 60}m`
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`
    return `${seconds}s`
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">System Monitor</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{Math.round(metrics.cpuUsage)}%</div>
          <div className="text-sm text-gray-600">CPU Usage</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{Math.round(metrics.memoryUsage)}%</div>
          <div className="text-sm text-gray-600">Memory Usage</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-600">{Math.round(metrics.diskUsage)}%</div>
          <div className="text-sm text-gray-600">Disk Usage</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">{Math.round(metrics.networkLatency)}ms</div>
          <div className="text-sm text-gray-600">Network Latency</div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <div className="text-sm text-gray-600">Uptime: {formatUptime(metrics.uptime)}</div>
      </div>
    </div>
  )
}

export default SystemMonitor