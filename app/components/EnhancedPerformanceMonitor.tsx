'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, BarChart, TrendingUp } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  cpuUsage: number
  networkLatency: number
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0
  })

  const [isMonitoring, setIsMonitoring] = useState(false)

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        // Simulate performance metrics collection
        setMetrics(prev => ({
          loadTime: Math.random() * 2000 + 500,
          renderTime: Math.random() * 100 + 10,
          memoryUsage: Math.random() * 100,
          cpuUsage: Math.random() * 100,
          networkLatency: Math.random() * 100 + 10
        }))
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isMonitoring])

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Monitoring',
      description: 'Monitor your application performance in real-time with advanced metrics and alerts.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      title: 'Performance Analytics',
      description: 'Get detailed insights into your application performance with comprehensive analytics.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security Monitoring',
      description: 'Monitor security threats and vulnerabilities in real-time with automated alerts.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations to optimize your application performance.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enhanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Performance Monitor</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Monitor and optimize your application performance with our advanced AI-powered monitoring solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsMonitoring(!isMonitoring)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
              </button>
              <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Display */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time performance data and analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Load Time</h3>
                <p className="text-3xl font-bold text-blue-400">{metrics.loadTime.toFixed(0)}ms</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Render Time</h3>
                <p className="text-3xl font-bold text-green-400">{metrics.renderTime.toFixed(0)}ms</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Memory Usage</h3>
                <p className="text-3xl font-bold text-yellow-400">{metrics.memoryUsage.toFixed(1)}%</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">CPU Usage</h3>
                <p className="text-3xl font-bold text-red-400">{metrics.cpuUsage.toFixed(1)}%</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Network Latency</h3>
                <p className="text-3xl font-bold text-purple-400">{metrics.networkLatency.toFixed(0)}ms</p>
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
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to monitor and optimize your application performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Performance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start monitoring your application performance today and see the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnhancedPerformanceMonitor