'use client'
import React, { useEffect, useState } from 'react'
interface PerformanceMetrics {
  domContentLoaded: number
  loadComplete: number
  firstPaint: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  timeToInteractive: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    const measurePerformance = () => {
      // Measure Core Web Vitals
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')
      const metrics: PerformanceMetrics = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        
        // Paint timing
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        
        // Core Web Vitals (simplified)
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
        timeToInteractive: 0
      }
      // Measure LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        metrics.largestContentfulPaint = lastEntry.startTime
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      // Measure CLS
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        metrics.cumulativeLayoutShift = clsValue
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      // Measure FID
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          metrics.firstInputDelay = (entry as any).processingStart - entry.startTime
        }
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
      setMetrics(metrics)
      // Clean up observers
      setTimeout(() => {
        lcpObserver.disconnect()
        clsObserver.disconnect()
        fidObserver.disconnect()
      }, 5000)
    }
    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])
  const getPerformanceScore = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'good'
    if (value <= thresholds.poor) return 'needs-improvement'
    return 'poor'
  }
  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-400'
      case 'needs-improvement': return 'text-yellow-400'
      case 'poor': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }
  if (!metrics) return null
  return (
    <div> </div><button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-slate-700 transition-colors"
      >
        Performance
      </button>
      
      {isVisible && (
        <div> </div><h3 className="text-lg font-semibold mb-4 text-cyan-400">Performance Metrics</h3>
          
          <div> </div><div> </div><span className="text-sm">DOM Content Loaded:</span>
              <span>{metrics.domContentLoaded.toFixed(0)}ms
              </span></span>
            </div>
            
            <div> </div><span className="text-sm">Load Complete:</span>
              <span>{metrics.loadComplete.toFixed(0)}ms
              </span></span>
            </div>
            
            <div> </div><span className="text-sm">First Paint:</span>
              <span>{metrics.firstPaint.toFixed(0)}ms
              </span></span>
            </div>
            
            <div> </div><span className="text-sm">First Contentful Paint:</span>
              <span>{metrics.firstContentfulPaint.toFixed(0)}ms
              </span></span>
            </div>
            
            <div> </div><span className="text-sm">Largest Contentful Paint:</span>
              <span>{metrics.largestContentfulPaint.toFixed(0)}ms
              </span></span>
            </div>
            
            <div> </div><span className="text-sm">Cumulative Layout Shift:</span>
              <span>{metrics.cumulativeLayoutShift.toFixed(3)}
              </span></span>
            </div>
            
            <div> </div><span className="text-sm">First Input Delay:</span>
              <span>{metrics.firstInputDelay.toFixed(0)}ms
              </span></span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default PerformanceMonitor