'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memory: number | null
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  })

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    if (typeof PerformanceObserver === 'undefined') return

    const observers: PerformanceObserver[] = []

    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || []
    if (fcpEntries.length > 0) {
      setMetrics(prev => ({ ...prev, fcp: fcpEntries[0].startTime }))
    }

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
    observers.push(lcpObserver)

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })
    observers.push(fidObserver)

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
          setMetrics(prev => ({ ...prev, cls: clsValue }))
        }
      })
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })
    observers.push(clsObserver)

    // Measure Time to First Byte (TTFB)
    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
    if (navigationEntries.length > 0) {
      const navEntry = navigationEntries[0]
      setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }))
    }

    // Measure Memory Usage
    if ('memory' in performance) {
      const memory = (performance as any).memory
      setMetrics(prev => ({ 
        ...prev, 
        memory: memory.usedJSHeapSize / (1024 * 1024) // Convert to MB
      }))
    }

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  useEffect(() => {
    const cleanup = measureWebVitals()
    return cleanup
  }, [measureWebVitals])

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400'
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.poor) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getScoreLabel = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'No data'
    if (value <= thresholds.good) return 'Good'
    if (value <= thresholds.poor) return 'Needs improvement'
    return 'Poor'
  }

  const metricsData = [
    {
      name: 'First Contentful Paint',
      value: metrics.fcp,
      unit: 'ms',
      thresholds: { good: 1800, poor: 3000 },
      icon: Activity,
      description: 'Time until first content is painted'
    },
    {
      name: 'Largest Contentful Paint',
      value: metrics.lcp,
      unit: 'ms',
      thresholds: { good: 2500, poor: 4000 },
      icon: Zap,
      description: 'Time until largest content is painted'
    },
    {
      name: 'First Input Delay',
      value: metrics.fid,
      unit: 'ms',
      thresholds: { good: 100, poor: 300 },
      icon: Clock,
      description: 'Time until first user interaction'
    },
    {
      name: 'Cumulative Layout Shift',
      value: metrics.cls,
      unit: '',
      thresholds: { good: 0.1, poor: 0.25 },
      icon: TrendingUp,
      description: 'Visual stability score'
    },
    {
      name: 'Time to First Byte',
      value: metrics.ttfb,
      unit: 'ms',
      thresholds: { good: 800, poor: 1800 },
      icon: Activity,
      description: 'Server response time'
    },
    {
      name: 'Memory Usage',
      value: metrics.memory,
      unit: 'MB',
      thresholds: { good: 50, poor: 100 },
      icon: Activity,
      description: 'JavaScript heap size'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-6">
            Performance Monitor
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time performance metrics and optimization insights for your web application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metricsData.map((metric, index) => {
            const Icon = metric.icon
            const scoreColor = getScoreColor(metric.value, metric.thresholds)
            const scoreLabel = getScoreLabel(metric.value, metric.thresholds)

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{metric.name}</h3>
                      <p className="text-sm text-gray-400">{metric.description}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${scoreColor.replace('text-', 'bg-').replace('-400', '-500/20')} ${scoreColor}`}>
                    {scoreLabel}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className={`text-3xl font-bold ${scoreColor}`}>
                      {metric.value !== null ? Math.round(metric.value * 100) / 100 : '--'}
                    </span>
                    <span className="text-gray-400">{metric.unit}</span>
                  </div>

                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        metric.value !== null
                          ? metric.value <= metric.thresholds.good
                            ? 'bg-gradient-to-r from-green-400 to-green-500'
                            : metric.value <= metric.thresholds.poor
                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-500'
                            : 'bg-gradient-to-r from-red-400 to-red-500'
                          : 'bg-gray-600'
                      }`}
                      style={{
                        width: metric.value !== null
                          ? `${Math.min((metric.value / (metric.thresholds.poor * 1.5)) * 100, 100)}%`
                          : '0%'
                      }}
                    />
                  </div>

                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Good: ≤{metric.thresholds.good}{metric.unit}</span>
                    <span>Poor: &gt;{metric.thresholds.poor}{metric.unit}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Performance Recommendations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Optimization Tips</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Optimize images and use modern formats (WebP, AVIF)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Implement lazy loading for below-the-fold content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Minimize and compress CSS and JavaScript</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Use a Content Delivery Network (CDN)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Monitoring</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Set up automated performance monitoring</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Monitor Core Web Vitals regularly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Test on real devices and networks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Use performance budgets in CI/CD</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor
