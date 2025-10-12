<<<<<<< HEAD
ursor/website-audit-and-update-with-deployment-a178
=======
'use client'
import React, { useState, useEffect } from 'react'
import { ArrowRight, Zap, Shield, Brain, Globe, BarChart3, Clock, TrendingUp } from 'lucide-react'

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
        updateMetrics()
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isMonitoring])

  const updateMetrics = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory

      setMetrics({
        loadTime: navigation ? Math.round(navigation.loadEventEnd - navigation.loadEventStart) : 0,
        renderTime: navigation ? Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart) : 0,
        memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0,
        cpuUsage: Math.round(Math.random() * 100), // Simulated CPU usage
        networkLatency: Math.round(Math.random() * 100) // Simulated network latency
      })
    }
  }

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Monitoring',
      description: 'Monitor your application performance in real-time with detailed metrics and analytics.'
    },
    {
<<<<<<< HEAD
=======
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Performance Tracking',
      description: 'Track load times, render performance, and user experience metrics.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: 'Optimization Insights',
      description: 'Get actionable insights to optimize your application performance.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Error Tracking',
      description: 'Monitor and track errors to ensure application stability.'
>>>>>>> cursor/fix-errors-and-merge-to-main-5945
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Enhanced Performance Monitor
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Monitor and optimize your application performance with advanced AI-powered analytics and real-time insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
              <Zap className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Display */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
=======
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time performance data and analytics
>>>>>>> cursor/fix-errors-and-merge-to-main-5945
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-2">Load Time</h3>
                <p className="text-2xl font-bold text-white">{metrics.loadTime}ms</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <BarChart3 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-2">Render Time</h3>
                <p className="text-2xl font-bold text-white">{metrics.renderTime}ms</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <Brain className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-2">Memory Usage</h3>
                <p className="text-2xl font-bold text-white">{metrics.memoryUsage}MB</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-2">CPU Usage</h3>
                <p className="text-2xl font-bold text-white">{metrics.cpuUsage}%</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <Globe className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-2">Network Latency</h3>
                <p className="text-2xl font-bold text-white">{metrics.networkLatency}ms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
=======
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Key Features
>>>>>>> cursor/fix-errors-and-merge-to-main-5945
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive performance monitoring and optimization tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Performance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start monitoring your application performance today and unlock its full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Contact Us
            </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-5945
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnhancedPerformanceMonitor
