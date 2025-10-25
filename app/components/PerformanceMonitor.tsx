<<<<<<< HEAD
"use client";
import React from 'react';

const PerformanceMonitor = () => {
  return (
    <div>
      <h1>PerformanceMonitor</h1>
      <p>This component is under construction.</p>
    </div>
  );
};

export default PerformanceMonitor;
=======
'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  domContentLoaded: number
  firstPaint: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paintEntries = performance.getEntriesByType('paint')
      
      const loadTime = navigation.loadEventEnd - navigation.navigationStart
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.navigationStart
      
      const firstPaint = paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0

      // Measure Core Web Vitals
      let largestContentfulPaint = 0
      let firstInputDelay = 0
      let cumulativeLayoutShift = 0

      // LCP
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          largestContentfulPaint = lastEntry.startTime
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            firstInputDelay = entry.processingStart - entry.startTime
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // CLS
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          cumulativeLayoutShift = clsValue
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      }

      const performanceMetrics: PerformanceMetrics = {
        loadTime: Math.round(loadTime),
        domContentLoaded: Math.round(domContentLoaded),
        firstPaint: Math.round(firstPaint),
        firstContentfulPaint: Math.round(firstContentfulPaint),
        largestContentfulPaint: Math.round(largestContentfulPaint),
        firstInputDelay: Math.round(firstInputDelay),
        cumulativeLayoutShift: Math.round(cumulativeLayoutShift * 1000) / 1000
      }

      setMetrics(performanceMetrics)

      // Log performance issues
      if (loadTime > 3000) {
        console.warn('Slow page load detected:', loadTime + 'ms')
      }
      if (firstContentfulPaint > 1800) {
        console.warn('Slow First Contentful Paint:', firstContentfulPaint + 'ms')
      }
      if (largestContentfulPaint > 2500) {
        console.warn('Slow Largest Contentful Paint:', largestContentfulPaint + 'ms')
      }
      if (firstInputDelay > 100) {
        console.warn('High First Input Delay:', firstInputDelay + 'ms')
      }
      if (cumulativeLayoutShift > 0.1) {
        console.warn('High Cumulative Layout Shift:', cumulativeLayoutShift)
      }
    }

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    // Show performance monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  if (!isVisible || !metrics) return null

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.poor) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 1000, poor: 3000 })}>
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">DOM Ready:</span>
          <span className={getScoreColor(metrics.domContentLoaded, { good: 1000, poor: 2000 })}>
            {metrics.domContentLoaded}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={getScoreColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}>
            {metrics.firstContentfulPaint}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={getScoreColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}>
            {metrics.largestContentfulPaint}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FID:</span>
          <span className={getScoreColor(metrics.firstInputDelay, { good: 100, poor: 300 })}>
            {metrics.firstInputDelay}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}>
            {metrics.cumulativeLayoutShift}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PerformanceMonitor
>>>>>>> 6d21a698833607de6a5fc802b68ed751e474e57d
