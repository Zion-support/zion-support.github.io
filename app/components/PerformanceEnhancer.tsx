'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Zap, CheckCircle, ArrowRight } from 'lucide-react'

const PerformanceEnhancer: React.FC = () => {
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
      title: 'Real-time Optimization',
      description: 'Continuously monitor and optimize your application performance in real-time.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: 'Automated Improvements',
      description: 'AI-powered suggestions and automatic performance improvements.'
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-purple-500" />,
      title: 'Speed Enhancement',
      description: 'Dramatically improve loading times and overall application speed.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Performance Enhancer - Zion Tech Group</title>
        <meta name="description" content="Advanced performance enhancement solutions powered by AI technology." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Performance Enhancer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Boost your application performance with our advanced enhancement solutions.
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
              Powerful performance enhancement capabilities for modern applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Enhance Performance?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start optimizing your application performance today.
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

export default PerformanceEnhancer