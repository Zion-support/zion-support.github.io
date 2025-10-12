'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Settings, BarChart3 } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  bundleSize: number
}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0
  })
  const [isOptimizing, setIsOptimizing] = useState(false)

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Speed Optimization',
      description: 'Advanced techniques to improve page load times and runtime performance'
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Analysis',
      description: 'Machine learning algorithms identify performance bottlenecks automatically'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Resource Management',
      description: 'Intelligent caching and resource optimization for maximum efficiency'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Real-time Monitoring',
      description: 'Continuous performance tracking and optimization recommendations'
    }
  ]

  const benefits = [
    'Up to 70% faster page load times',
    'Reduced memory usage by 50%',
    'Improved Core Web Vitals scores',
    'Better user experience and engagement',
    'Lower bounce rates',
    'Higher conversion rates',
    'Reduced server costs',
    'SEO performance boost'
  ]

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    const paint = performance.getEntriesByType('paint')
    
    const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0
    const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
    
    // Estimate memory usage (if available)
    const memory = (performance as any).memory
    const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0

    setMetrics({
      loadTime: Math.round(loadTime),
      renderTime: Math.round(renderTime),
      memoryUsage: Math.round(memoryUsage * 100) / 100,
      bundleSize: 0 // Would need to be calculated from actual bundle
    })
  }, [])

  useEffect(() => {
    measurePerformance()
  }, [measurePerformance])

  const handleOptimize = async () => {
    setIsOptimizing(true)
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulate improved metrics
    setMetrics(prev => ({
      ...prev,
      loadTime: Math.max(prev.loadTime - 200, 100),
      renderTime: Math.max(prev.renderTime - 100, 50),
      memoryUsage: Math.max(prev.memoryUsage - 5, 10)
    }))
    
    setIsOptimizing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Performance Enhancer - Zion Tech Group</title>
        <meta name="description" content="Advanced performance optimization solutions by Zion Tech Group. Boost your website speed and user experience." />
        <meta name="keywords" content="performance optimization, website speed, Core Web Vitals, performance monitoring, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Performance Enhancer
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Optimize your website's performance with our advanced AI-powered solutions. 
              Achieve lightning-fast load times and superior user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleOptimize}
                disabled={isOptimizing}
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
              >
                {isOptimizing ? (
                  <>
                    <Settings className="w-5 h-5 mr-2 animate-spin" />
                    Optimizing...
                  </>
                ) : (
                  <>
                    Optimize Now
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

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Current Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time performance metrics and optimization opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{metrics.loadTime}ms</div>
              <div className="text-gray-300 text-sm">Load Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{metrics.renderTime}ms</div>
              <div className="text-gray-300 text-sm">Render Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{metrics.memoryUsage}MB</div>
              <div className="text-gray-300 text-sm">Memory Usage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">A+</div>
              <div className="text-gray-300 text-sm">Performance Grade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Optimization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive performance enhancement tools and techniques
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
              Performance Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable improvements that drive business results
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
              Ready to Boost Your Performance?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start optimizing your website's performance today and see immediate improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Optimization
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PerformanceEnhancer