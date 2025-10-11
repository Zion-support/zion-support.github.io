import React, { useEffect } from 'react'
import { usePerformance } from '../hooks/usePerformance'

interface PerformanceMonitorProps {
  enabled?: boolean
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ enabled = false }) => {
  const metrics = usePerformance()

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development' && Object.keys(metrics).length > 0) {
      console.group('🚀 Performance Metrics')
      console.log('LCP (Largest Contentful Paint):', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A')
      console.log('FID (First Input Delay):', metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A')
      console.log('CLS (Cumulative Layout Shift):', metrics.cls ? metrics.cls.toFixed(4) : 'N/A')
      console.log('FCP (First Contentful Paint):', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A')
      console.log('TTFB (Time to First Byte):', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A')
      console.groupEnd()

      // Send to analytics in production
      if (process.env.NODE_ENV === 'production') {
        // Example: Send to Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'Core Web Vitals',
            value: Math.round(metrics.lcp || 0),
            custom_map: {
              lcp: metrics.lcp,
              fid: metrics.fid,
              cls: metrics.cls,
              fcp: metrics.fcp,
              ttfb: metrics.ttfb
            }
          })
        }
      }
    }
  }, [metrics, enabled])

  return null
}

export default PerformanceMonitor