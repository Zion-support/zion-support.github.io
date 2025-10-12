'use client'
import React, { useState, useEffect } from 'react'
import { Activity, Cpu, HardDrive, Wifi, CheckCircle, AlertCircle } from 'lucide-react'

interface SystemMonitorProps {
  className?: string
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({ className = '' }) => {
  const [systemData, setSystemData] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    isHealthy: true
  })
  const [isMonitoring, setIsMonitoring] = useState(false)

  useEffect(() => {
    startMonitoring()
    return () => stopMonitoring()
  }, [])

  const startMonitoring = () => {
    setIsMonitoring(true)
    // Simulate system monitoring
    const interval = setInterval(() => {
      setSystemData({
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        disk: Math.floor(Math.random() * 100),
        network: Math.floor(Math.random() * 100),
        isHealthy: Math.random() > 0.1 // 90% chance of being healthy
      })
    }, 2000)

    return () => clearInterval(interval)
  }

  const stopMonitoring = () => {
    setIsMonitoring(false)
  }

  const getStatusColor = (value: number) => {
    if (value < 50) return 'text-green-500'
    if (value < 80) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getStatusIcon = (value: number) => {
    if (value < 50) return <CheckCircle className="w-4 h-4 text-green-500" />
    if (value < 80) return <AlertCircle className="w-4 h-4 text-yellow-500" />
    return <AlertCircle className="w-4 h-4 text-red-500" />
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Activity className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">System Monitor</h3>
        <div className={`ml-auto w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
      </div>
      
      <div className="space-y-4">
        {/* CPU Usage */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">CPU Usage</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-bold ${getStatusColor(systemData.cpu)}`}>
                {systemData.cpu}%
              </span>
              {getStatusIcon(systemData.cpu)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                systemData.cpu < 50 ? 'bg-green-500' : 
                systemData.cpu < 80 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${systemData.cpu}%` }}
            ></div>
          </div>
        </div>

        {/* Memory Usage */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HardDrive className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Memory Usage</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-bold ${getStatusColor(systemData.memory)}`}>
                {systemData.memory}%
              </span>
              {getStatusIcon(systemData.memory)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                systemData.memory < 50 ? 'bg-green-500' : 
                systemData.memory < 80 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${systemData.memory}%` }}
            ></div>
          </div>
        </div>

        {/* Disk Usage */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HardDrive className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Disk Usage</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-bold ${getStatusColor(systemData.disk)}`}>
                {systemData.disk}%
              </span>
              {getStatusIcon(systemData.disk)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                systemData.disk < 50 ? 'bg-green-500' : 
                systemData.disk < 80 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${systemData.disk}%` }}
            ></div>
          </div>
        </div>

        {/* Network Usage */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wifi className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Network Usage</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-bold ${getStatusColor(systemData.network)}`}>
                {systemData.network}%
              </span>
              {getStatusIcon(systemData.network)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                systemData.network < 50 ? 'bg-green-500' : 
                systemData.network < 80 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${systemData.network}%` }}
            ></div>
          </div>
        </div>

        {/* Overall Status */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Overall Status</span>
            <div className="flex items-center space-x-2">
              {systemData.isHealthy ? (
                <>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">Healthy</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-red-600">Warning</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemMonitor