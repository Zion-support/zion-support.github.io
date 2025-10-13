'use client'
import { useEffect, useState } from 'react'



      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
      })
    }

    measurePerformance()
  }, [])

  if (!isVisible) return null

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
