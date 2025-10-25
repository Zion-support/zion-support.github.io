<<<<<<< HEAD
'use client'

import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
}
=======
import React, { useEffect } from 'react';
import { getPerformanceTracker } from '../utils/performance';
>>>>>>> main

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  })

  useEffect(() => {
<<<<<<< HEAD
    if (typeof window === 'undefined') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
            break
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
            break
          case 'first-input':
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }))
            break
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + (entry as any).value 
              }))
            }
            break
        }
      }
    })

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Performance Observer not supported:', e)
    }
=======
    const tracker = getPerformanceTracker();
    
    // The tracker handles all performance monitoring internally
    // We just need to ensure it's initialized
    
    return () => {
      // Cleanup is handled by the tracker singleton
      tracker.cleanup();
    };
  }, []);
>>>>>>> main

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      setMetrics(prev => ({ 
        ...prev, 
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
      }))
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Log metrics to console in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.values(metrics).some(v => v !== null)) {
      // eslint-disable-next-line no-console
      console.log('Performance Metrics:', metrics)
    }
  }, [metrics])

  // Send metrics to analytics in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && 'gtag' in window) {
      if (metrics.fcp) {
        // @ts-ignore
        window.gtag('event', 'web_vitals', {
          name: 'FCP',
          value: Math.round(metrics.fcp),
          event_category: 'Web Vitals'
        })
      }
      if (metrics.lcp) {
        // @ts-ignore
        window.gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(metrics.lcp),
          event_category: 'Web Vitals'
        })
      }
      if (metrics.fid) {
        // @ts-ignore
        window.gtag('event', 'web_vitals', {
          name: 'FID',
          value: Math.round(metrics.fid),
          event_category: 'Web Vitals'
        })
      }
      if (metrics.cls) {
        // @ts-ignore
        window.gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(metrics.cls * 1000) / 1000,
          event_category: 'Web Vitals'
        })
      }
    }
  }, [metrics])

  return null // This component doesn't render anything
}

export default PerformanceMonitor