'use client';
import React, { useEffect, useState } from 'react'
interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
}
const PerformanceMonitor: React.FC = () => {
const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') ;

return
    const shouldMonitor = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('performance-monitoring') === 'true'
    if (!shouldMonitor) ;

returnconst updateMetrics  = () => {
      setMetrics(prev => ({ ...prev, ...newMetrics }))
    }
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => updateMetrics({ cls: metric.value }))
        getFID((metric) => updateMetrics({ fid: metric.value }))
        getFCP((metric) => updateMetrics({ fcp: metric.value }))
        getLCP((metric) => updateMetrics({ lcp: metric.value }))
        getTTFB((metric) => updateMetrics({ ttfb: metric.value }))
      })
    }
    // Monitor performance with Performance Observer
    if ('PerformanceObserver' in window) {
      ;

const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetrics({ lcp: entry.startTime })
          }
          if (entry.entryType === 'first-input') {
            updateMetrics({ fid: entry.processingStart - entry.startTime })
          }
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              updateMetrics({ fcp: entry.startTime })
            }
          }
        })
      })
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'paint'] })
      } catch (e) {
        console.warn('Performance Observer not supported:', e)
      }
      ;

return () => observer.disconnect()
    }
    // Show performance panel after 3 seconds
    ;

const timer = setTimeout(() => setIsVisible(true), 3000);

return () => clearTimeout(timer)
  }, [])
  if (!isVisible || Object.keys(metrics).length === 0) {
    return null
  }
  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value</PerformanceMetrics> <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.poor) return 'text-yellow-400'
    return 'text-red-400'
  }const getScoreText;

export default PerformanceMonitor
}