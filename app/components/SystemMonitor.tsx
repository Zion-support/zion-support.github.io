'use client'
import React, { useState, useEffect } from 'react'
import { Activity, Cpu, HardDrive, Wifi, Battery } from 'lucide-react'
interface SystemMonitorProps {
  showDetails?: boolean
  refreshInterval?: number
  className?: string
}

interface SystemStats {
  cpu: number,
      memory: number,
      disk: number,
      network: number
  battery?: number
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({
  showDetails = true
  refreshInterval = 1000
  className = ''
}) => {
  const [stats, setStats] = useState<SystemStats>({
    cpu: 0,
      memory: 0,
      disk: 0,
      network: 0
  })
  useEffect(() => {
    const updateStats = () => {
      // Simulate system stats (in a real app, you'd get these from an API)
      setStats({
        cpu: Math.random() * 100
        memory: Math.random() * 100
        disk: Math.random() * 100
        network: Math.random() * 100
        battery: Math.random() * 100
      })
    }
    updateStats()
    const interval = setInterval(updateStats, refreshInterval)
    return () => clearInterval(interval)
  }, [refreshInterval])
  const getStatusColor = (value: number) => {
    if (value < 50) return 'text-green-500'
    if (value < 80) return 'text-yellow-500'
    return 'text-red-500'
  }
  const getStatusBgColor = (value: number) => {
    if (value < 50) return 'bg-green-500'
    if (value < 80) return 'bg-yellow-500'
    return 'bg-red-500'
  }
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      <div className="...">
        <h3 className="...">
          <Activity className="w-5 h-5 mr-2" />
          System Monitor
        </h3>
        <div className="...">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="...">
        {/* CPU */}
        <div className="...">
          <div className="...">
            <Cpu className="w-5 h-5 text-blue-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">CPU</span>
          </div>
          <div className="...">
            {stats.cpu.toFixed(0)}%
          </div>
          <div className="...">
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.cpu)}`}
              style={{ width: `${stats.cpu}%` }}
            ></div>
          </div>
        </div>

        {/* Memory */}
        <div className="...">
          <div className="...">
            <HardDrive className="w-5 h-5 text-green-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Memory</span>
          </div>
          <div className="...">
            {stats.memory.toFixed(0)}%
          </div>
          <div className="...">
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.memory)}`}
              style={{ width: `${stats.memory}%` }}
            ></div>
          </div>
        </div>

        {/* Disk */}
        <div className="...">
          <div className="...">
            <HardDrive className="w-5 h-5 text-purple-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Disk</span>
          </div>
          <div className="...">
            {stats.disk.toFixed(0)}%
          </div>
          <div className="...">
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.disk)}`}
              style={{ width: `${stats.disk}%` }}
            ></div>
          </div>
        </div>

        {/* Network */}
        <div className="...">
          <div className="...">
            <Wifi className="w-5 h-5 text-orange-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Network</span>
          </div>
          <div className="...">
            {stats.network.toFixed(0)}%
          </div>
          <div className="...">
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.network)}`}
              style={{ width: `${stats.network}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Battery (if available) */}
      {stats.battery !== undefined && (
        <div className="...">
          <div className="...">
            <div className="...">
              <Battery className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Battery</span>
            </div>
            <div className="...">
              <span className="...">
                {stats.battery.toFixed(0)}%
              </span>
              <div className="...">
                <div
                  className={`h-2 rounded-full ${getStatusBgColor(stats.battery)}`}
                  style={{ width: `${stats.battery}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default SystemMonitor