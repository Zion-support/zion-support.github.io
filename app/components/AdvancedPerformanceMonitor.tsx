'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  memoryUsage: number
  cls: number
  fid: number
  lcp: number
  fcp: number
  ttfb: number
}

export default function AdvancedPerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cls: 0,
    fid: 0,
    lcp: 0,
    fcp: 0,
    ttfb: 0
  })

  useEffect(() => {
    // Measure page load time
    const measureLoadTime = () => {
      const loadTime = performance.now()
      setMetrics(prev => ({ ...prev, loadTime }))
    }

    // Measure memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }))
      }
    }

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // This would typically use web-vitals library
      // For now, we'll just set placeholder values
      setMetrics(prev => ({
        ...prev,
        cls: 0.1,
        fid: 100,
        lcp: 2500,
        fcp: 1800,
        ttfb: 600
      }))
    }

    // Report metrics to analytics
    const reportMetric = () => {
      // Analytics reporting would go here
      console.log('Performance metrics:', metrics)
    }

    measureWebVitals()
    measureMemory()
    measureLoadTime()
    reportMetric()
  }, [metrics])

  return (
    <div className="performance-monitor">
      <div className="metrics-grid">
        <div className="metric">
          <span className="metric-label">Load Time:</span>
          <span className="metric-value">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">Memory Usage:</span>
          <span className="metric-value">{metrics.memoryUsage.toFixed(2)}MB</span>
        </div>
        <div className="metric">
          <span className="metric-label">CLS:</span>
          <span className="metric-value">{metrics.cls.toFixed(3)}</span>
        </div>
        <div className="metric">
          <span className="metric-label">FID:</span>
          <span className="metric-value">{metrics.fid}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">LCP:</span>
          <span className="metric-value">{metrics.lcp}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">FCP:</span>
          <span className="metric-value">{metrics.fcp}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">TTFB:</span>
          <span className="metric-value">{metrics.ttfb}ms</span>
        </div>
      </div>
    </div>
  )
}