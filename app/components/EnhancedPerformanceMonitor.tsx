'use client'
import React, { useState, useEffect } from 'react'
import { Zap, Shield, Brain, Globe } from 'lucide-react'

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0
  })

  useEffect(() => {
    const updateMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0
        
        setMetrics(prev => ({
          ...prev,
          loadTime: Math.round(loadTime),
          memoryUsage: Math.round(Math.random() * 100),
          cpuUsage: Math.round(Math.random() * 100),
          networkLatency: Math.round(Math.random() * 50)
        }))
      }
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 5000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Monitoring',
      description: 'Monitor your application performance in real-time with detailed metrics and alerts.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security Analytics',
      description: 'Track security events and potential threats with advanced monitoring capabilities.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations to optimize your application performance.'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'Global Monitoring',
      description: 'Monitor performance across multiple regions and data centers worldwide.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enhanced Performance Monitor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Monitor and optimize your application performance with our advanced monitoring solution.
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white mb-2">{metrics.loadTime}ms</div>
              <div className="text-gray-300 text-sm">Load Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white mb-2">{metrics.memoryUsage}%</div>
              <div className="text-gray-300 text-sm">Memory Usage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white mb-2">{metrics.cpuUsage}%</div>
              <div className="text-gray-300 text-sm">CPU Usage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white mb-2">{metrics.networkLatency}ms</div>
              <div className="text-gray-300 text-sm">Network Latency</div>
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
              Comprehensive performance monitoring capabilities for modern applications
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Monitor Your Performance?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start monitoring your application performance today and optimize for better user experience.
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

export default EnhancedPerformanceMonitor