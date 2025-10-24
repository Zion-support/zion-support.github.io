'use client'

import React, { useState, useEffect } from 'react'

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkRequests: 0
  })

  useEffect(() => {
    // Simulate performance metrics
    const interval = setInterval(() => {
      setMetrics({
        loadTime: Math.random() * 1000,
        renderTime: Math.random() * 100,
        memoryUsage: Math.random() * 100,
        networkRequests: Math.floor(Math.random() * 20)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white/5 backdrop-blur-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Performance Dashboard</h2>
          <p className="text-gray-300">Real-time performance metrics</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Load Time</h3>
            <p className="text-3xl font-bold text-purple-400">{metrics.loadTime.toFixed(0)}ms</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Render Time</h3>
            <p className="text-3xl font-bold text-blue-400">{metrics.renderTime.toFixed(0)}ms</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Memory Usage</h3>
            <p className="text-3xl font-bold text-green-400">{metrics.memoryUsage.toFixed(1)}%</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Network Requests</h3>
            <p className="text-3xl font-bold text-yellow-400">{metrics.networkRequests}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceDashboard