import React, { useEffect } from 'react',

interface PerformanceData {
  domContentLoaded: number,
  loadComplete: number,
  totalLoadTime: number,
  firstPaint: number,
  firstContentfulPaint: number,
  resourceCount: number,
  memory?: {
    used: number,
    total: number,
    limit: number,
  } | null,
}

interface PerformanceMonitorProps {
  onPerformanceData?: (data: PerformanceData) => void,
}

// Extend the Window interface to include performance types
declare global {
  interface Window {
    performance: Performance,
  }
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof performance === 'undefined') return,

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
      const paint = performance.getEntriesByType('paint'),
      
      const performanceData: PerformanceData = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        
        // Paint timing
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        
        // Resource timing
        resourceCount: performance.getEntriesByType('resource').length,
        
        // Memory usage (if available)
        memory: (performance as any).memory ? {
          used: (performance as any).memory.usedJSHeapSize,
          total: (performance as any).memory.totalJSHeapSize,
          limit: (performance as any).memory.jsHeapSizeLimit
        } : null
      },

      if (onPerformanceData) {
        onPerformanceData(performanceData),
      }

      // Log performance data in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', performanceData),
      }
    },

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance(),
    } else {
      window.addEventListener('load', measurePerformance),
    }

    return () => {
      window.removeEventListener('load', measurePerformance),
    },
  }, [onPerformanceData]),

  return null,
},

export default PerformanceMonitor,