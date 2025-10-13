'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memoryUsage: number | null
  loadTime: number | null
}

const AdvancedPerformanceMonitor = () => {

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  })

  const [isVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    // Performance monitoring logic
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
          }
        }
      })
    })

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })

    return () => observer.disconnect()
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="text-lg font-bold mb-2">Performance Monitor</h3>
      <div className="space-y-1 text-sm">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}</div>
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor
