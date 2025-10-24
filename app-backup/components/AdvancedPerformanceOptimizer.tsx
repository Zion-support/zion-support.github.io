import React, { useEffect, useCallback, useState } from 'react'
'use client'
interface PerformanceMetrics {
  lcp: number,
    fid: number
  cl,
  s: number,
    fcp: number
  ttf,
  b: number}
interface AdvancedPerformanceOptimizerProps {
  enableWebVitals?: boolean
  enableAdvancedCaching?: boolean
  enableImageOptimization?: boolean
  enablePreloading?: boolean
  enableServiceWorker?: boolean
}
const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableWebVitals = true
  enableAdvancedCaching = true
  enableImageOptimization = true
  enablePreloading = true
  enableServiceWorker = true
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0
    cl,
  s: 0,
    fcp: 0
    ttf,
  b: 0})
  // Web Vitals monitoring
  const measureWebVitals = $2;
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number }
        setPerformanceMetrics(prev => ({
          ...prev
          lcp: lastEntry.renderTime || lastEntry.loadTime || 0}))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      // Measure First Input Delay
      const fidObserver = $2;
export default AdvancedPerformanceOptimizer