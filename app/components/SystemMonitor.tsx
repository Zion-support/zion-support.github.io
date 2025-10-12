'use client'
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
  ]
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced systemmonitor solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
  </
            </div>
        </div>
    </div>
  )}
export default SystemMonitorPage
  </button>
=======
import React, { useState, useEffect, useCallback } from 'react'
import { Monitor, Cpu, HardDrive, Wifi, Battery, Activity } from 'lucide-react'

interface SystemMetrics {
  cpu: number
  memory: number
  disk: number
  network: number
  battery: number
  uptime: number
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
}

interface SystemMonitorProps {
  onAlert?: (alert: string) => void
  className?: string
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({
  onAlert,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    battery: 100,
    uptime: 0
  })
  const [isMonitoring, setIsMonitoring] = useState(false)

  const updateMetrics = useCallback(() => {
    // Simulate system metrics
    const newMetrics = {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      disk: Math.random() * 100,
      network: Math.random() * 100,
      battery: Math.random() * 100,
      uptime: Date.now() - performance.timing.navigationStart
    }

    setMetrics(newMetrics)

    // Check for alerts
    if (newMetrics.cpu > 90) {
      onAlert?.('High CPU usage detected')
    }
    if (newMetrics.memory > 90) {
      onAlert?.('High memory usage detected')
    }
    if (newMetrics.disk > 90) {
      onAlert?.('High disk usage detected')
    }
  }, [onAlert])

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(updateMetrics, 1000)
      return () => clearInterval(interval)
    }
  }, [isMonitoring, updateMetrics])

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
    if (!isMonitoring) {
      updateMetrics()
    }
  }

  const formatUptime = (ms: number) => {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`
    if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`
    return `${seconds}s`
  }

  const getStatusColor = (value: number) => {
    if (value > 90) return 'text-red-500'
    if (value > 70) return 'text-yellow-500'
    return 'text-green-500'
  }

  const getStatusBg = (value: number) => {
    if (value > 90) return 'bg-red-500'
    if (value > 70) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Monitor className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">System Monitor</h3>
            <p className="text-gray-300 text-sm">Real-time system performance monitoring</p>
          </div>
        </div>
<<<<<<< HEAD
    </div>)};export default SystemMonitorPage
}
=======
        <button
          onClick={toggleMonitoring}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            isMonitoring
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
          }`}
        >
          {isMonitoring ? 'Stop' : 'Start'} Monitoring
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Cpu className="w-6 h-6 text-blue-400" />
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.cpu)}`}>
            {metrics.cpu.toFixed(1)}%
          </div>
          <div className="text-gray-400 text-sm">CPU</div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${getStatusBg(metrics.cpu)}`}
              style={{ width: `${metrics.cpu}%` }}
            />
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <HardDrive className="w-6 h-6 text-green-400" />
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.memory)}`}>
            {metrics.memory.toFixed(1)}%
          </div>
          <div className="text-gray-400 text-sm">Memory</div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${getStatusBg(metrics.memory)}`}
              style={{ width: `${metrics.memory}%` }}
            />
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <HardDrive className="w-6 h-6 text-purple-400" />
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.disk)}`}>
            {metrics.disk.toFixed(1)}%
          </div>
          <div className="text-gray-400 text-sm">Disk</div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${getStatusBg(metrics.disk)}`}
              style={{ width: `${metrics.disk}%` }}
            />
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Wifi className="w-6 h-6 text-yellow-400" />
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.network)}`}>
            {metrics.network.toFixed(1)}%
          </div>
          <div className="text-gray-400 text-sm">Network</div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${getStatusBg(metrics.network)}`}
              style={{ width: `${metrics.network}%` }}
            />
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Battery className="w-6 h-6 text-orange-400" />
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(100 - metrics.battery)}`}>
            {metrics.battery.toFixed(1)}%
          </div>
          <div className="text-gray-400 text-sm">Battery</div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${getStatusBg(100 - metrics.battery)}`}
              style={{ width: `${metrics.battery}%` }}
            />
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Activity className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            {formatUptime(metrics.uptime)}
          </div>
          <div className="text-gray-400 text-sm">Uptime</div>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="flex items-center justify-center">
        <div className={`w-3 h-3 rounded-full mr-2 ${isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
        <span className="text-gray-300 text-sm">
          {isMonitoring ? 'Monitoring Active' : 'Monitoring Stopped'}
        </span>
      </div>
    </div>
  )
}

export default SystemMonitor
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
