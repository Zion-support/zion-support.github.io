'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, BarChart3, Cpu, Memory, HardDrive } from 'lucide-react'

interface SystemMetrics {
  cpu: number
  memory: number
  disk: number
  network: number
}

const SystemMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0
  })
  const [isMonitoring, setIsMonitoring] = useState(false)

  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'CPU Monitoring',
      description: 'Real-time CPU usage tracking and performance analysis'
    },
    {
      icon: <Memory className="w-8 h-8 text-green-500" />,
      title: 'Memory Management',
      description: 'Monitor memory usage and optimize performance'
    },
    {
      icon: <HardDrive className="w-8 h-8 text-purple-500" />,
      title: 'Disk Analytics',
      description: 'Track disk usage and storage optimization'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Network Monitoring',
      description: 'Monitor network traffic and connectivity'
    }
  ]

  const benefits = [
    'Real-time system monitoring',
    'Performance optimization',
    'Resource usage tracking',
    'Automated alerts',
    'Historical data analysis',
    'Predictive maintenance',
    'Cost optimization',
    'Improved reliability'
  ]

  const startMonitoring = () => {
    setIsMonitoring(true)
    
    // Simulate monitoring data
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        disk: Math.floor(Math.random() * 100),
        network: Math.floor(Math.random() * 100)
      })
    }, 1000)

    // Stop monitoring after 10 seconds for demo
    setTimeout(() => {
      clearInterval(interval)
      setIsMonitoring(false)
    }, 10000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>System Monitor - Zion Tech Group</title>
        <meta name="description" content="Advanced system monitoring solutions by Zion Tech Group. Monitor and optimize your system performance." />
        <meta name="keywords" content="system monitoring, performance monitoring, resource tracking, system optimization, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              System Monitor
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Monitor and optimize your system performance with our advanced monitoring solutions. 
              Real-time insights and automated optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={startMonitoring}
                disabled={isMonitoring}
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
              >
                {isMonitoring ? (
                  <>
                    <Zap className="w-5 h-5 mr-2 animate-pulse" />
                    Monitoring...
                  </>
                ) : (
                  <>
                    Start Monitoring
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              System Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time system performance metrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <Cpu className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold text-white">{metrics.cpu}%</span>
              </div>
              <div className="text-gray-300 text-sm">CPU Usage</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${metrics.cpu}%` }}
                />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <Memory className="w-8 h-8 text-green-500" />
                <span className="text-2xl font-bold text-white">{metrics.memory}%</span>
              </div>
              <div className="text-gray-300 text-sm">Memory Usage</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${metrics.memory}%` }}
                />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <HardDrive className="w-8 h-8 text-purple-500" />
                <span className="text-2xl font-bold text-white">{metrics.disk}%</span>
              </div>
              <div className="text-gray-300 text-sm">Disk Usage</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${metrics.disk}%` }}
                />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold text-white">{metrics.network}%</span>
              </div>
              <div className="text-gray-300 text-sm">Network Usage</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${metrics.network}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Monitoring Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive system monitoring and optimization tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Monitoring Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimize your system performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Monitor Your System?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start monitoring your system performance today and optimize for better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Monitoring
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Get Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SystemMonitor