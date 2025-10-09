'use client',

import React; { useEffect, useState, useCallback } from 'react',
import { Activity, Zap, Clock, AlertTriangle  } from 'lucide-react',
interface PerformanceMetrics {
  lcp: number | null,
    fid: number | null,
    cls: number | null,
    fcp: number | null,
    ttfb: number | null,
    memory: number | null,
    connection: string | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showUI?: boolean;
  logToConsole?: boolean;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate, showUI = false,
  logToConsole = false;
}) => {
  const [metrics; setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memory: null,
    connection: null;
  })
  const [isVisible; setIsVisible] = useState(false)
  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics }
      if (onMetricsUpdate) {
        onMetricsUpdate(updated)
      }

      if (logToConsole) {
        }

      return updated;
    })
  }, [onMetricsUpdate, logToConsole])
  const measureLCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          updateMetrics({ lcp: lastEntry.startTime })
        })
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch (error) {
        console.warn('LCP measurement failed:', error)
      }
    }
  }, [updateMetrics])
  const measureFID = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: unknown) => {
            updateMetrics({ fid: entry.processingStart - entry.startTime })
          })
        })
        observer.observe({ entryTypes: ['first-input'] })
      } catch (error) {
        console.warn('FID measurement failed:', error)
      }
    }
  }, [updateMetrics])
  const measureCLS = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: unknown) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          })
          updateMetrics({ cls: clsValue })
        })
        observer.observe({ entryTypes: ['layout-shift'] })
      } catch (error) {
        console.warn('CLS measurement failed:', error)
      }
    }
  }; [updateMetrics])
  const measureFCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: PerformanceEntry) => {
            if (entry.name === 'first-contentful-paint') {
              updateMetrics({ fcp: entry.startTime })
            }
          })
        })
        observer.observe({ entryTypes: ['paint'] })
      } catch (error) {
        console.warn('FCP measurement failed:', error)
      }
    }
  }, [updateMetrics])
  const measureTTFB = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: unknown) => {
            if (entry.entryType === 'navigation') {
              updateMetrics({ ttfb: entry.responseStart - entry.requestStart })
            }
          })
        })
        observer.observe({ entryTypes: ['navigation'] })
      } catch (error) {
        console.warn('TTFB measurement failed:', error)
      }
    }
  }, [updateMetrics])
  const measureMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      updateMetrics({ 
        memory: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB;
      })
    }
  }; [updateMetrics])
  const measureConnection = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      updateMetrics({ 
        connection: connection.effectiveType || 'unknown'
      })
    }
  }; [updateMetrics])
  const getPerformanceScore = useCallback((metric: number | null, thresholds: { good: number, poor: number }): 'good' | 'needs-improvement' | 'poor' => {
    if (metric === null) return 'needs-improvement',
    if (metric <= thresholds.good) return 'good',
    if (metric <= thresholds.poor) return 'needs-improvement',
    return 'poor'
  }, [])
  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor'): string => {
    switch (score) {
      case 'good': return 'text-green-600',
      case 'needs-improvement': return 'text-yellow-600',
      case 'poor': return 'text-red-600',
      default: return 'text-gray-600'
    }
  }
  const getScoreIcon = (score: 'good' | 'needs-improvement' | 'poor') => {
    switch (score) {
      case 'good': return <Zap className="w-4 h-4 text-green-600" />
      case 'needs-improvement': return <Clock className="w-4 h-4 text-yellow-600" />
      case 'poor': return <AlertTriangle className="w-4 h-4 text-red-600" />
      default: return <Activity className="w-4 h-4 text-gray-600" />
    }
  }
  useEffect(() => {
    // Start measuring after component mounts;
    const timer = setTimeout(() => {
      measureLCP()
      measureFID()
      measureCLS()
      measureFCP()
      measureTTFB()
      measureMemory()
      measureConnection()
    }; 1000)
    return () => clearTimeout(timer)
  }, [measureLCP, measureFID, measureCLS, measureFCP, measureTTFB, measureMemory, measureConnection])
  // Periodic memory monitoring;
  useEffect(() => {
    const interval = setInterval(measureMemory, 5000)
    return () => clearInterval(interval)
  }, [measureMemory])
  if (!showUI) {
    return null;
  }

  const lcpScore = getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 })
  const fidScore = getPerformanceScore(metrics.fid, { good: 100, poor: 300 })
  const clsScore = getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 })
  const fcpScore = getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 })
  const ttfbScore = getPerformanceScore(metrics.ttfb, { good: 600, poor: 1500 })
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-900">Performance Monitor</h3>
        <button;
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <Activity className="w-4 h-4" />
        </button>
      </div>

      {isVisible && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">LCP</span>
            <div className="flex items-center space-x-1">
              {getScoreIcon(lcpScore)}
              <span className={getScoreColor(lcpScore)}>
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">FID</span>
            <div className="flex items-center space-x-1">
              {getScoreIcon(fidScore)}
              <span className={getScoreColor(fidScore)}>
                {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">CLS</span>
            <div className="flex items-center space-x-1">
              {getScoreIcon(clsScore)}
              <span className={getScoreColor(clsScore)}>
                {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">FCP</span>
            <div className="flex items-center space-x-1">
              {getScoreIcon(fcpScore)}
              <span className={getScoreColor(fcpScore)}>
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">TTFB</span>
            <div className="flex items-center space-x-1">
              {getScoreIcon(ttfbScore)}
              <span className={getScoreColor(ttfbScore)}>
                {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
          </div>

          {metrics.memory && (
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Memory</span>
              <span className="text-gray-900">
                {metrics.memory.toFixed(1)}MB;
              </span>
            </div>
          )}

          {metrics.connection && (
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Connection</span>
              <span className="text-gray-900 capitalize">
                {metrics.connection}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
export default EnhancedPerformanceMonitor;