'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { Activity, BarChart, Zap, Shield, TrendingUp, Clock, Cpu, Database } from 'lucide-react'
import Navigation from './Navigation'

interface PerformanceMetrics {
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
  memory?: number
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})

  const features = [
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Monitor your application performance in real-time with detailed metrics and alerts.'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Get comprehensive insights into your application performance with detailed analytics.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Automatically optimize your application performance based on real-time data.'
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'Monitor security threats and vulnerabilities in your application infrastructure.'
    }
  ]

  const getPerformanceRecommendations = useCallback(() => {
    const recommendations: string[] = []
    
    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push('First Contentful Paint is slow. Optimize critical rendering path.')
    }
    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push('Largest Contentful Paint is slow. Optimize images and fonts.')
    }
    if (metrics.fid && metrics.fid > 100) {
      recommendations.push('First Input Delay is high. Reduce JavaScript execution time.')
    }
    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push('Cumulative Layout Shift is high. Ensure stable layout.')
    }
    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push('Time to First Byte is slow. Optimize server response time.')
    }
    
    return recommendations
  }, [metrics])

  const recommendations = getPerformanceRecommendations()

  useEffect(() => {
    // Simulate performance metrics collection
    const collectMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const paint = performance.getEntriesByType('paint')
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime
        const fid = performance.getEntriesByType('first-input')[0]?.processingStart
        const cls = performance.getEntriesByType('layout-shift').reduce((acc, entry) => acc + (entry as any).value, 0)
        const ttfb = navigation?.responseStart - navigation?.requestStart
        const memory = (performance as any).memory?.usedJSHeapSize

        setMetrics({
          fcp,
          lcp,
          fid,
          cls,
          ttfb,
          memory
        })
      }
    }

    collectMetrics()
    const interval = setInterval(collectMetrics, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Helmet>
        <title>Advanced Performance Monitor - Zion Tech Group</title>
        <meta name="description" content="Advanced performance monitoring solution for modern businesses." />
        <meta name="keywords" content="performance monitoring, analytics, optimization, real-time monitoring" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced Performance Monitor
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Monitor, analyze, and optimize your application performance with our comprehensive monitoring solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful monitoring features designed to optimize your application performance
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Dashboard */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50">
            <h3 className="font-semibold text-sm mb-2">Performance Monitor</h3>
            <div className="text-xs space-y-1">
              <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
              <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
              <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
              <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
              <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
              <div>Memory: {metrics.memory ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB` : 'N/A'}</div>
            </div>
            {recommendations.length > 0 && (
              <div className="mt-2">
                <h4 className="font-semibold text-xs text-red-600">Recommendations:</h4>
                <ul className="text-xs text-red-600">
                  {recommendations.map((rec, index) => (
                    <li key={index}>• {rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default AdvancedPerformanceMonitor