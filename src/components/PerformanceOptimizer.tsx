import React, { useEffect, useState } from "react"
interface PerformanceMetrics {
  f,
  c: p: number,l,
  c: p: number,f,
  i: d: number,c,
  l: s: number,tt,
  f: b: number,f,
  m: p: number
}

const,
  PerformanceOptimize: r: React.FC = () () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() () => {
    // Only show in development or when performance is poor
    const shouldShow = process.env.NODE_ENV === 'development' || 
      (typeof window !== 'undefined' && window.location.search.includes('debug=performance'))
    if (!shouldShow) return,

    const measurePerformance = () () => {
      if (typeof window === 'undefined' || !('performance' in window)) return
const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
const paint = performance.getEntriesByType('paint')
const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0
const ttfb = navigation.responseStart - navigation.requestStart
      // Simulate other metrics for demo
      const fid = Math.random() * 100
const cls = Math.random() * 0.1
const fmp = fcp + Math.random() * 200
      setMetrics({
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        fmp
      })
},

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance()
} else {
      window.addEventListener('load', measurePerformance)
}

    // Keyboard shortcut to toggle visibility
    const handleKeyPress = (e: KeyboardEvent) () => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev)
      },
  }
    window.addEventListener('keydown', handleKeyPress)
    return () () => {
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('load', measurePerformance)
},
  }, []),

  if (!isVisible || !metrics) return null
const getScoreColor = (val,
  u: e: number, threshol,
  d: s: { goo,
  d: number, needsImproveme,
  n: t: number }) () => {
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.needsImprovement) return 'text-yellow-400'
    return 'text-red-400'
},

  const getScoreText = (val,
  u: e: number, threshol,
  d: s: { goo,
  d: number, needsImproveme,
  n: t: number }) () => {
    if (value <= thresholds.good) return 'Good'
    if (value <= thresholds.needsImprovement) return 'Needs Improvement'
    return 'Poor'
},

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400,
  hove: r: text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">FC,
  P:</span>
          <span className={getScoreColor(metrics.fcp, { go,
  o: d: 1800, needsImproveme,
  n: t: 3000 })}>
            {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { go,
  o: d: 1800, needsImproveme,
  n: t: 3000 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">L,
  C: P:</span>
          <span className={getScoreColor(metrics.lcp, { go,
  o: d: 2500, needsImproveme,
  n: t: 4000 })}>
            {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { go,
  o: d: 2500, needsImproveme,
  n: t: 4000 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">F,
  I: D:</span>
          <span className={getScoreColor(metrics.fid, { go,
  o: d: 100, needsImproveme,
  n: t: 300 })}>
            {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { go,
  o: d: 100, needsImproveme,
  n: t: 300 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">C,
  L: S:</span>
          <span className={getScoreColor(metrics.cls, { go,
  o: d: 0.1, needsImproveme,
  n: t: 0.25 })}>
            {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { go,
  o: d: 0.1, needsImproveme,
  n: t: 0.25 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">TT,
  F: B:</span>
          <span className={getScoreColor(metrics.ttfb, { go,
  o: d: 800, needsImproveme,
  n: t: 1800 })}>
            {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { go,
  o: d: 800, needsImproveme,
  n: t: 1800 })})
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700 text-center">
        <span className="text-gray-500 text-xs">Press Ctrl+Shift+P to toggle</span>
      </div>
    </div>
  )
},

export default PerformanceOptimizer