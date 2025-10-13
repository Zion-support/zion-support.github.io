'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Activity, X, TrendingUp, Clock, Zap } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number | null
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  })

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }): string => {
    if (value <= thresholds.good) return 'text-green-600'
    if (value <= thresholds.poor) return 'text-yellow-600'
    return 'text-red-600'
  }

  const measurePerformance = useCallback(() => {
    // Measure load time
    const loadTime = performance.now()
    setMetrics(prev => ({ ...prev, loadTime }))

    // Measure Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
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

      // Time to First Byte (TTFB)
      const ttfbObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const ttfbEntry = entries.find(entry => entry.entryType === 'navigation')
        if (ttfbEntry) {
          setMetrics(prev => ({ ...prev, ttfb: ttfbEntry.responseStart - ttfbEntry.requestStart }))
        }
      })
      ttfbObserver.observe({ entryTypes: ['navigation'] })
    }
  }, [])

  useEffect(() => {
    // Only measure in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || localStorage.getItem('debug-performance') === 'true') {
      measurePerformance()
    }
  }, [measurePerformance])

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        aria-label="Open performance monitor"
      >
        <Activity className="w-5 h-5" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200 w-80 max-h-96 overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          <h3 className="font-semibold">Performance Monitor</h3>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close performance monitor"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-4 max-h-80 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Performance Metrics
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <span className={`font-mono ${getMetricColor(metrics.loadTime || 0, { good: 1000, poor: 3000 })}`}>
                {metrics.loadTime?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              <span className={`font-mono ${getMetricColor(metrics.fcp || 0, { good: 1800, poor: 3000 })}`}>
                {metrics.fcp?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${getMetricColor(metrics.lcp || 0, { good: 2500, poor: 4000 })}`}>
                {metrics.lcp?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FID:</span>
              <span className={`font-mono ${getMetricColor(metrics.fid || 0, { good: 100, poor: 300 })}`}>
                {metrics.fid?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className={`font-mono ${getMetricColor(metrics.cls || 0, { good: 0.1, poor: 0.25 })}`}>
                {metrics.cls?.toFixed(3) || 'N/A'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
              <span className={`font-mono ${getMetricColor(metrics.ttfb || 0, { good: 200, poor: 600 })}`}>
                {metrics.ttfb?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
          </div>
          
          <div className="pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Web Vitals</span>
              <div className="flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                <span>Real-time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceMonitor