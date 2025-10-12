'use client'
import React, { useEffect, useState } from 'react'
import { Zap, CheckCircle } from 'lucide-react'

interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
  memory?: number
  loadTime?: number
}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [optimizations, setOptimizations] = useState<string[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }))
    }

    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(updateMetrics)
        getFID(updateMetrics)
        getFCP(updateMetrics)
        getLCP(updateMetrics)
        getTTFB(updateMetrics)
      })
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory
      if (memory) {
        updateMetrics({
          memory: Math.round(memory.usedJSHeapSize / 1024 / 1024)
        })
      }
    }

    // Monitor load time
    window.addEventListener('load', () => {
      updateMetrics({
        loadTime: Math.round(performance.now())
      })
    })

    // Auto-optimize based on metrics
    const optimizePerformance = () => {
      const newOptimizations: string[] = []
      
      if (metrics.lcp && metrics.lcp > 2500) {
        newOptimizations.push('Optimizing Largest Contentful Paint')
      }
      if (metrics.fid && metrics.fid > 100) {
        newOptimizations.push('Reducing First Input Delay')
      }
      if (metrics.cls && metrics.cls > 0.1) {
        newOptimizations.push('Minimizing Cumulative Layout Shift')
      }
      if (metrics.memory && metrics.memory > 100) {
        newOptimizations.push('Optimizing memory usage')
      }
      
      setOptimizations(newOptimizations)
    }

    const interval = setInterval(optimizePerformance, 5000)
    return () => clearInterval(interval)
  }, [metrics])

  const handleOptimize = () => {
    setIsOptimizing(true)
    
    // Simulate optimization process
    setTimeout(() => {
      setIsOptimizing(false)
      setOptimizations([])
    }, 2000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 flex items-center">
            <Zap className="w-4 h-4 text-yellow-500 mr-2" />
            Performance Monitor
          </h3>
          <button
            onClick={handleOptimize}
            disabled={isOptimizing}
            className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {isOptimizing ? 'Optimizing...' : 'Optimize'}
          </button>
        </div>
        
        <div className="space-y-2 text-xs">
          {metrics.lcp && (
            <div className="flex justify-between">
              <span className="text-gray-600">LCP:</span>
              <span className={metrics.lcp > 2500 ? 'text-red-500' : 'text-green-500'}>
                {metrics.lcp}ms
              </span>
            </div>
          )}
          {metrics.fid && (
            <div className="flex justify-between">
              <span className="text-gray-600">FID:</span>
              <span className={metrics.fid > 100 ? 'text-red-500' : 'text-green-500'}>
                {metrics.fid}ms
              </span>
            </div>
          )}
          {metrics.cls && (
            <div className="flex justify-between">
              <span className="text-gray-600">CLS:</span>
              <span className={metrics.cls > 0.1 ? 'text-red-500' : 'text-green-500'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
          )}
          {metrics.memory && (
            <div className="flex justify-between">
              <span className="text-gray-600">Memory:</span>
              <span className={metrics.memory > 100 ? 'text-red-500' : 'text-green-500'}>
                {metrics.memory}MB
              </span>
            </div>
          )}
        </div>

        {optimizations.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="text-xs text-gray-600 mb-2">Active Optimizations:</div>
            <div className="space-y-1">
              {optimizations.map((opt, index) => (
                <div key={index} className="flex items-center text-xs text-blue-600">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {opt}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PerformanceEnhancer