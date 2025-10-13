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

<<<<<<< HEAD
const AdvancedPerformanceMonitor = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD



=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6877
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbe3
=======
const AdvancedPerformanceMonitor: React.FC = () => {
>>>>>>> cursor/website-audit-and-update-with-deployment-f1ad
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

<<<<<<< HEAD
    const measurePerformance = () => {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }))
          } else if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cls: (entry as any).value }))
          }
=======
        onCLS((metric: any) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }))
          reportMetric()
>>>>>>> cursor/website-audit-and-update-with-deployment-f1ad
        })
      })

<<<<<<< HEAD
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }))
=======
        onINP((metric: any) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }))
          reportMetric()
        })

        onFCP((metric: any) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }))
          reportMetric()
        })

        onLCP((metric: any) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }))
          reportMetric()
        })

        onTTFB((metric: any) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }))
          reportMetric()
        })
      } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD

        console.error('Failed to measure web vitals:', error);



=======
        console.warn('Web Vitals not available:', error)
>>>>>>> cursor/fix-errors-and-merge-to-main-6877
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbe3
=======
        console.warn('Failed to load web-vitals:', error);
>>>>>>> cursor/website-audit-and-update-with-deployment-f1ad
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
      }

      // Measure load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
<<<<<<< HEAD
=======
      }
    }

    // Report metrics to analytics
    const reportMetric = () => {
      // Analytics reporting would go here
    }

    measureWebVitals()
    measureMemory()
    measureLoadTime()

    // Set up performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log('Custom Performance Measure:', entry.name, entry.duration)
          }
        }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbe3
      })
    }

    measurePerformance()
  }, [])

  if (!isVisible) return null

<<<<<<< HEAD
  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg text-xs font-mono max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}
        {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
        {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}
        {metrics.cls && <div>CLS: {metrics.cls.toFixed(4)}</div>}
        {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>}
        {metrics.memoryUsage && <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>}
        {metrics.loadTime && <div>Load: {metrics.loadTime.toFixed(2)}ms</div>}
=======
    if (metrics.fcp !== null) {
      factors++
      if (metrics.fcp > 1800) score -= 20
      else if (metrics.fcp > 1000) score -= 10
    }

    if (metrics.lcp !== null) {
      factors++
      if (metrics.lcp > 2500) score -= 20
      else if (metrics.lcp > 1500) score -= 10
    }

    if (metrics.cls !== null) {
      factors++
      if (metrics.cls > 0.25) score -= 20
      else if (metrics.cls > 0.1) score -= 10
    }

    if (metrics.fid !== null) {
      factors++
      if (metrics.fid > 300) score -= 20
      else if (metrics.fid > 100) score -= 10
    }

    return factors > 0 ? Math.max(0, score) : null
  }

  const performanceScore = calculateScore()

<<<<<<< HEAD
<<<<<<< HEAD

  // Render performance dashboard in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
        <div className="font-bold mb-2">Performance Metrics</div>
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
        <div>Memory: {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}%` : 'N/A'}</div>
        <div>Load: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}</div>
        {performanceScore && (
          <div className="mt-2 pt-2 border-t border-gray-600">
            <div>Score: {performanceScore}/100</div>
          </div>
        )}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbe3
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="mt-2 px-2 py-1 bg-red-600 text-white rounded text-xs"
      >
        Close
      </button>
    </div>
  )
}

export default AdvancedPerformanceMonitor
<<<<<<< HEAD
=======


=======
  // Don't render if no metrics are available
  if (!performanceScore) return null

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-f1ad
  return (
    <div className="performance-monitor">
      <h3>Performance Score: {performanceScore || 'Calculating...'}</h3>
    </div>
  );
};

<<<<<<< HEAD
export default AdvancedPerformanceMonitor
>>>>>>> cursor/fix-errors-and-merge-to-main-6877
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbe3
=======
export default AdvancedPerformanceMonitor;
>>>>>>> cursor/website-audit-and-update-with-deployment-f1ad
