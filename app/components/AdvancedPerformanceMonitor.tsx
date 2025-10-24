'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Star, Clock, Zap, Shield, Globe, Database, Users, Settings } from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

interface AdvancedPerformanceMonitorProps {
  className?: string
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    memory: 0
  })

  const [isVisible, setIsVisible] = useState(false)

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return

    // Measure First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
        }
      }
    })
    fcpObserver.observe({ entryTypes: ['paint'] })

    // Measure Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // Measure First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
      }
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Measure Cumulative Layout Shift
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
          setMetrics(prev => ({ ...prev, cls: clsValue }))
        }
      }
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Measure Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }))
    }

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory
      setMetrics(prev => ({ ...prev, memory: memory.usedJSHeapSize }))
    }

    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const cleanup = measurePerformance()
    return cleanup
  }, [measurePerformance])

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
      recommendations.push('Cumulative Layout Shift is high. Fix layout shifts.')
    }
    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push('Time to First Byte is slow. Optimize server response time.')
    }
    
    return recommendations
  }, [metrics])

  const recommendations = getPerformanceRecommendations()

  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50 ${className}`}>
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
    )
  }

  return null
}

export default AdvancedPerformanceMonitor