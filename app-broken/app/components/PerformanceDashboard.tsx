'use client'
import React, { useState, useEffect } from 'react'
import { Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle } from 'lucide-react'
interface PerformanceMetrics {
loadTime: number
renderTime: number
memoryUsage: number
fps: number
[key: string]: number
}
interface PerformanceProps {
onMetricsUpdate?: (metrics: PerformanceMetrics) => void
}
const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
const [metrics, setMetrics] = useState<PerformanceMetrics>({
loadTime: 0,
renderTime: 0,
memoryUsage: 0,
fps: 0
})
const [isMonitoring, setIsMonitoring] = useState(false)
const [alerts, setAlerts] = useState<string[]>([])
useEffect(() => {
const updateMetrics = () => {
const navigation = performance.getEntriesByType(
'navigation'
)[0] as PerformanceNavigationTiming
const loadTime = navigation
? navigation.loadEventEnd - navigation.fetchStart
: 0
// Measure render time
const renderStart = performance.now()
const renderTime = performance.now() - renderStart
// Measure memory usage
let memoryUsage = 0
if ('memory' in performance) {
const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory
memoryUsage = memory?.usedJSHeapSize || 0
}
// Measure FPS (simplified)
let fps = 60
if ('requestAnimationFrame' in window) {
let lastTime = performance.now()
let frameCount = 0
const measureFPS = () => {
const currentTime = performance.now()
frameCount++
if (currentTime - lastTime >= 1000) {
fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
frameCount = 0
lastTime = currentTime
}
if (isMonitoring) {
requestAnimationFrame(measureFPS)
}
}
requestAnimationFrame(measureFPS)
}
const newMetrics: PerformanceMetrics = {
loadTime,
renderTime,
memoryUsage,
fps
}
setMetrics(newMetrics)
onMetricsUpdate?.(newMetrics)
// Check for performance alerts
checkPerformanceAlerts(newMetrics)
}
if (isMonitoring) {
updateMetrics()
const interval = setInterval(updateMetrics, 1000)
return () => clearInterval(interval)
}
}, [isMonitoring, onMetricsUpdate])
const checkPerformanceAlerts = (currentMetrics: PerformanceMetrics) => {
const newAlerts: string[] = []
if (currentMetrics.loadTime > 3000) {
newAlerts.push('Load time is above 3 seconds')
}
if (currentMetrics.memoryUsage > 50 * 1024 * 1024) { // 50MB
newAlerts.push('Memory usage is high')
}
if (currentMetrics.fps < 30) {
newAlerts.push('FPS is below 30')
}
setAlerts(newAlerts)
}
const toggleMonitoring = () => {
setIsMonitoring(!isMonitoring)
}
const formatBytes = (bytes: number) => {
if (bytes === 0) return '0 Bytes'
const k = 1024
const sizes = ['Bytes', 'KB', 'MB', 'GB']
const i = Math.floor(Math.log(bytes) / Math.log(k))
return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
if (value <= thresholds.good) return 'text-green-400'
if (value <= thresholds.warning) return 'text-yellow-400'
return 'text-red-400'
}
return (
<div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10&quot;></div>
<div className=&quot;flex items-center justify-between mb-6&quot;></div>
<h3 className=&quot;text-xl font-semibold text-white flex items-center gap-2&quot;>
<Activity className=&quot;w-5 h-5&quot; />
Performance Dashboard

<button
onClick={toggleMonitoring}
className={`px-4 py-2 rounded-lg font-medium transition-colors ${
isMonitoring
? 'bg-red-600 text-white hover:bg-red-700'
: 'bg-green-600 text-white hover:bg-green-700'
}`}
>
{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
</button>
</div>
{alerts.length > 0 && (
<div className=&quot;mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg&quot;></div>
<div className=&quot;flex items-center gap-2 mb-2&quot;></div>
<AlertTriangle className=&quot;w-5 h-5 text-red-400&quot; />
<h4 className=&quot;text-red-400 font-semibold&quot;>Performance Alerts</h4>
</div>
<ul className=&quot;space-y-1&quot;>
{alerts.map((alert, index) => (
<li key={index} className=&quot;text-red-300 text-sm&quot;>• {alert}</li>
))}
</ul>
</div>
)}
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4&quot;></div>
<div className=&quot;bg-white/5 rounded-lg p-4&quot;></div>
<div className=&quot;flex items-center gap-2 mb-2&quot;></div>
<Zap className=&quot;w-4 h-4 text-blue-400&quot; />
<span className=&quot;text-gray-300 text-sm&quot;>Load Time</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}></div>
{metrics.loadTime.toFixed(0)}ms

</div>
<div className=&quot;bg-white/5 rounded-lg p-4&quot;></div>
<div className=&quot;flex items-center gap-2 mb-2&quot;></div>
<Cpu className=&quot;w-4 h-4 text-green-400&quot; />
<span className=&quot;text-gray-300 text-sm&quot;>Render Time</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}`}></div>
{metrics.renderTime.toFixed(2)}ms

</div>
<div className=&quot;bg-white/5 rounded-lg p-4&quot;></div>
<div className=&quot;flex items-center gap-2 mb-2&quot;></div>
<MemoryStick className=&quot;w-4 h-4 text-purple-400&quot; />
<span className=&quot;text-gray-300 text-sm&quot;>Memory Usage</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 })}`}></div>
{formatBytes(metrics.memoryUsage)}
</div>
</div>
<div className=&quot;bg-white/5 rounded-lg p-4&quot;></div>
<div className=&quot;flex items-center gap-2 mb-2&quot;></div>
<TrendingUp className=&quot;w-4 h-4 text-orange-400&quot; />
<span className=&quot;text-gray-300 text-sm&quot;>FPS</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 })}`}></div>
{metrics.fps}
</div>
</div>
</div>
<div className=&quot;mt-6 text-center&quot;></div>
<p className=&quot;text-gray-400 text-sm&quot;>
{isMonitoring ? 'Monitoring performance metrics...' : 'Click &quot;Start Monitoring&quot; to begin tracking performance'}
</p>
</div>
</div>
)
}
export default PerformanceDashboard
</div>
</h3>
</div>
</PerformanceMetrics>
</PerformanceProps>