'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number | null
  firstContentfulPaint: number | null
  largestContentfulPaint: number | null
  firstInputDelay: number | null
  cumulativeLayoutShift: number | null
  timeToInteractive: number | null
  totalBlockingTime: number | null
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  enableRealTimeMonitoring?: boolean
  logToConsole?: boolean
}
// Monitor Core Web Vitals
if ('web-vitals' in window) {
import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
getCLS((metric) => updateMetrics({ cls: metric.value }))
getFID((metric) => updateMetrics({ fid: metric.value }))
getFCP((metric) => updateMetrics({ fcp: metric.value }))
getLCP((metric) => updateMetrics({ lcp: metric.value }))
getTTFB((metric) => updateMetrics({ ttfb: metric.value }))
})
}
// Monitor performance with Performance Observer
if ('PerformanceObserver' in window) {
const observer = new PerformanceObserver((list) => {
list.getEntries().forEach((entry) => {
if (entry.entryType === 'largest-contentful-paint') {
updateMetrics({ lcp: entry.startTime })
}
if (entry.entryType === 'first-input') {
updateMetrics({ fid: entry.processingStart - entry.startTime })
}
if (entry.entryType === 'paint') {
if (entry.name === 'first-contentful-paint') {
updateMetrics({ fcp: entry.startTime })
}
}
})
})
try {
observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'paint'] })
} catch (e) {
console.warn('Performance Observer not supported:', e)
}
return () => observer.disconnect()
}
// Show performance panel after 3 seconds
const timer = setTimeout(() => setIsVisible(true), 3000)
return () => clearTimeout(timer)
}, [])
if (!isVisible || Object.keys(metrics).length === 0) {
return null
}
const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
if (value <= thresholds.good) return 'text-green-400'
if (value <= thresholds.poor) return 'text-yellow-400'
return 'text-red-400'
}
const getScoreText = (value: number, thresholds: { good: number; poor: number }) => {
if (value <= thresholds.good) return 'Good'
if (value <= thresholds.poor) return 'Needs Improvement'
return 'Poor'
}
  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-xs text-white z-50 max-w-xs">
<div className="flex items-center justify-between mb-2">
<h3 className="font-semibold text-cyan-400">Performance</h3>
<button
onClick={() => setIsVisible(false)}
className="text-gray-400 hover:text-white"
>
×
</button>
</div>
<div className="space-y-1">
{metrics.lcp && (
<div className="flex justify-between">
<span>LCP:</span>
<span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
{Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})
</span>
</div>
)}
{metrics.fid && (
<div className="flex justify-between">
<span>FID:</span>
<span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
{Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, poor: 300 })})
</span>
</div>
)}
{metrics.cls && (
<div className="flex justify-between">
<span>CLS:</span>
<span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
{metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})
</span>
</div>
)}
{metrics.fcp && (
<div className="flex justify-between">
<span>FCP:</span>
<span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
{Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})
</span>
</div>
)}
{metrics.ttfb && (
<div className="flex justify-between">
<span>TTFB:</span>
<span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
{Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})
</span>
</div>
)}
</div>
</div>
)
}
export default PerformanceMonitor
