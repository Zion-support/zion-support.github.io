'use client'
import React, { useEffect, useState, useCallback } from 'react'

interface AdvancedPerformanceOptimizerProps {
  enableAdvancedCaching?: boolean
  enableImageOptimization?: boolean
  enableLazyLoading?: boolean
  enablePreloading?: boolean
  enableCodeSplitting?: boolean
  enableResourceHints?: boolean
  enableServiceWorker?: boolean
  enableCriticalCSS?: boolean
  enableWebVitals?: boolean
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableAdvancedCaching = true
  enableImageOptimization = true
  enableLazyLoading = true
  enablePreloading = true
  enableCodeSplitting = true
  enableResourceHints = true
  enableServiceWorker = true
  enableCriticalCSS = true
  enableWebVitals = true
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    fcp: 0,
  lcp: 0,
  fid: 0,
    cls: 0,
import React, { useEffect, useCallback, useState } from 'react';

interface PerformanceMetrics {
  lcp: number,
  fid: number,
  cls: number,
  fcp: number,
  ttfb: number
}

interface AdvancedPerformanceOptimizerProps {
  enableWebVitals?: boolean
  enableAdvancedCaching?: boolean
  enableImageOptimization?: boolean
  enablePreloading?: boolean
  enableServiceWorker?: boolean
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({;
  enableWebVitals = true
  enableAdvancedCaching = true
  enableImageOptimization = true
  enablePreloading = true
  enableServiceWorker = true
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({;
    lcp: 0,
  fid: 0,
  cls: 0,
  fcp: 0,
  ttfb: 0
  })

  // Web Vitals monitoring
  useEffect(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      const measureWebVitals = () => {
        // First Contentful Paint
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setPerformanceMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
          }
        }).observe({ entryTypes: ['paint'] })

        // Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setPerformanceMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        }).observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fidEntry = entry as any
            if (fidEntry.processingStart) {
              setPerformanceMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))
            }
          }
        }).observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        let clsValue = 0
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
              setPerformanceMetrics(prev => ({ ...prev, cls: clsValue }))
            }
          }
        }).observe({ entryTypes: ['layout-shift'] })
      }

      measureWebVitals();
  const measureWebVitals = useCallback(() => {;
    if (enableWebVitals && typeof window !== 'undefined') {
      // Measure Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
        setPerformanceMetrics(prev => ({
          ...prev,
  lcp: lastEntry.renderTime || lastEntry.loadTime || 0
        }))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Measure First Input Delay
      const fidObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          const fid = (entry as any).processingStart - entry.startTime
          setPerformanceMetrics(prev => ({
            ...prev
            fid
          }))
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Measure Cumulative Layout Shift
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += entry.value
            setPerformanceMetrics(prev => ({
              ...prev,
  cls: clsValue
            }))
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Measure First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        entries.forEach(entry => {
          setPerformanceMetrics(prev => ({
            ...prev,
  fcp: entry.startTime
          }))
        })
      })
      fcpObserver.observe({ entryTypes: ['paint'] })
    }
  }, [enableWebVitals])

  // Advanced caching strategies
  const setupAdvancedCaching = useCallback(() => {
    if (typeof window === 'undefined') return

    // Service Worker for advanced caching
    if ('serviceWorker' in navigator && enableServiceWorker) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
