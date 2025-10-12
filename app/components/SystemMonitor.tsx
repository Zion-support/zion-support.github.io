'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Activity, Cpu, HardDrive, Wifi, Zap, Shield, Brain, Globe } from 'lucide-react'

const SystemMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    uptime: 0
  })

  useEffect(() => {
    const updateMetrics = () => {
      // Simulate system metrics (in a real app, these would come from an API)
      setMetrics({
        cpu: Math.round(Math.random() * 100),
        memory: Math.round(Math.random() * 100),
        disk: Math.round(Math.random() * 100),
        network: Math.round(Math.random() * 100),
        uptime: Math.round(Math.random() * 100)
      })
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 2000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Monitoring',
      description: 'Monitor system performance in real-time with detailed metrics and alerts.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: 'CPU & Memory Tracking',
      description: 'Track CPU usage, memory consumption, and other critical system resources.'
    },
    {
      icon: <HardDrive className="w-8 h-8 text-purple-500" />,
      title: 'Disk Usage Monitoring',
      description: 'Monitor disk space usage and performance across all storage devices.'
    },
    {
      icon: <Wifi className="w-8 h-8 text-orange-500" />,
      title: 'Network Analytics',
      description: 'Track network performance, bandwidth usage, and connection quality.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>System Monitor - Zion Tech Group</title>
        <meta name="description" content="Advanced system monitoring and performance tracking solutions." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System Monitor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Monitor and optimize your system performance with our advanced monitoring solution.
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <Cpu className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-2">{metrics.cpu}%</div>
              <div className="text-gray-300 text-sm">CPU Usage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <Activity className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-2">{metrics.memory}%</div>
              <div className="text-gray-300 text-sm">Memory</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <HardDrive className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-2">{metrics.disk}%</div>
              <div className="text-gray-300 text-sm">Disk Usage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <Wifi className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-2">{metrics.network}%</div>
              <div className="text-gray-300 text-sm">Network</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-2">{metrics.uptime}%</div>
              <div className="text-gray-300 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive system monitoring capabilities for modern applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Monitor Your System?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start monitoring your system performance today and optimize for better efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SystemMonitor