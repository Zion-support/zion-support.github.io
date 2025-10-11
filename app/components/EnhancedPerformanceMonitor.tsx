'use client'
import React, { useState, useEffect } from 'react'
import { Zap, Shield, Brain, Globe, CheckCircle, AlertTriangle, Activity } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  timeToInteractive: number
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean
  enableAlerts?: boolean
  alertThresholds?: {
    loadTime: number
    firstContentfulPaint: number
    largestContentfulPaint: number
  }
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  enableAlerts = true,
  alertThresholds = {
    loadTime: 3000,
    firstContentfulPaint: 1500,
    largestContentfulPaint: 2500
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0
  })

  const [alerts, setAlerts] = useState<string[]>([])
  const [isMonitoring, setIsMonitoring] = useState(false)

  const startMonitoring = () => {
    setIsMonitoring(true)
    
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            setMetrics(prev => ({
              ...prev,
              loadTime: navEntry.loadEventEnd - navEntry.loadEventStart
            }))
          }
        }
      })

      observer.observe({ entryTypes: ['navigation'] })

      // Monitor Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getFCP((metric) => {
            setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }))
            checkThresholds('firstContentfulPaint', metric.value)
          })
          
          getLCP((metric) => {
            setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }))
            checkThresholds('largestContentfulPaint', metric.value)
          })
          
          getCLS((metric) => {
            setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }))
          })
          
          getFID((metric) => {
            setMetrics(prev => ({ ...prev, firstInputDelay: metric.value }))
          })
          
          getTTFB((metric) => {
            setMetrics(prev => ({ ...prev, timeToInteractive: metric.value }))
          })
        })
      }
    }
  }

  useEffect(() => {
    if (enableRealTimeMonitoring) {
      startMonitoring()
    }
  }, [enableRealTimeMonitoring])

  const checkThresholds = (metric: string, value: number) => {
    if (!enableAlerts) return

    const threshold = alertThresholds[metric as keyof typeof alertThresholds]
    if (threshold && value > threshold) {
      const alert = `${metric} exceeded threshold: ${value}ms > ${threshold}ms`
      setAlerts(prev => [...prev, alert])
    }
  }

  const getPerformanceScore = () => {
    let score = 100
    
    if (metrics.loadTime > alertThresholds.loadTime) score -= 20
    if (metrics.firstContentfulPaint > alertThresholds.firstContentfulPaint) score -= 20
    if (metrics.largestContentfulPaint > alertThresholds.largestContentfulPaint) score -= 20
    if (metrics.cumulativeLayoutShift > 0.1) score -= 20
    if (metrics.firstInputDelay > 100) score -= 20
    
    return Math.max(0, score)
  }

  const performanceScore = getPerformanceScore()
  const scoreColor = performanceScore >= 80 ? 'text-green-500' : 
                    performanceScore >= 60 ? 'text-yellow-500' : 'text-red-500'

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Activity className="w-6 h-6 mr-2 text-purple-600" />
          Performance Monitor
        </h2>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          <span className="text-sm text-gray-600">
            {isMonitoring ? 'Monitoring' : 'Stopped'}
          </span>
        </div>
      </div>

      {/* Performance Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Performance Score</span>
          <span className={`text-2xl font-bold ${scoreColor}`}>
            {performanceScore}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              performanceScore >= 80 ? 'bg-green-500' : 
              performanceScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${performanceScore}%` }}
          ></div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Zap className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Load Time</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.loadTime.toFixed(0)}ms
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Shield className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">First Contentful Paint</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Brain className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Largest Contentful Paint</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Globe className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Cumulative Layout Shift</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Activity className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">First Input Delay</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.firstInputDelay.toFixed(0)}ms
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Time to Interactive</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.timeToInteractive.toFixed(0)}ms
          </div>
        </div>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
            Performance Alerts
          </h3>
          <div className="space-y-2">
            {alerts.map((alert, index) => (
              <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">{alert}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex space-x-4">
        <button
          onClick={() => setIsMonitoring(!isMonitoring)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            isMonitoring
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
        </button>
        
        <button
          onClick={() => setAlerts([])}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
        >
          Clear Alerts
        </button>
      </div>
    </div>
  )
}

export default EnhancedPerformanceMonitor