'use client'
fcp: null,
lcp: null,
fid: null,
cls: null,
ttfb: null,
memory: null,})
constmeasureWebVitals= useCallback(() => {if (type ofwindow=== 'undefined' || !('performance' in windo w)) return i f (type ofPerformanceObserver=== 'undefined') return constobserver s: PerformanceObserver[] = []
// Measure First Contentful Paint (FCP)
constfcpEntries= performance.getEntriesByName('first-contentful-paint') || []
constfcp= fcpEntries.length >0? fcpEntries[0].startTime: null
// Measure Largest Contentful Paint (LCP)
if ('PerformanceObserver' in windo w) {
try {
constlcpObserver= new PerformanceObserver(list=> {
  
constentries= list.getEntries()
constlastEntry= entries[entries.length - 1]
setMetrics(prev=> ({ ...prev, lcp: lastEntry.startTime}))
})
lcpObserver.observe({entry Types: ['largest-contentful-paint']})
observers.push(lcpObserver)
} catch (error) {// eslint-disable-next-line no-console}
}
// Measure First Input Delay (FID)
if ('PerformanceObserver' in windo w) {try {
constfidObserver= new PerformanceObserver(list=> {
  
constentries= list.getEntries()
entries.forEach(entry=> {
  
if (
entry.entryType=== 'first-input' &&
'processingStart' in entry && 'startTime' in entry
) {
constfidEntry= entry as PerformanceEventTiming
setMetrics(prev=> ({
...prev,
fid: fidEntry.processingStart - fidEntry.startTime,}))
}
})
})
fidObserver.observe({entry Types: ['first-input']})
observers.push(fidObserver)
} catch (error) {// eslint-disable-next-line no-console}
}
// Measure Cumulative Layout Shift (CLS)
if ('PerformanceObserver' in windo w) {try {
letclsValue=0constclsObserver= new PerformanceObserver(list=> {
  
constentries= list.getEntries()
entries.forEach(entry=> {
  
if (
entry.entryType=== 'layout-shift' &&
'hadRecentInput' in entry && 'value' in entry
) {
constclsEntry= entry as LayoutShift
if (!clsEntry.hadRecentInput) {
clsValue += clsEntry.value
setMetrics(prev=> ({ ...prev, cls: clsValue}))
}
}
})
})
clsObserver.observe({entry Types: ['layout-shift']})
observers.push(clsObserver)
} catch (error) {// eslint-disable-next-line no-console}
}
// Measure Time to First Byte (TTFB)
try {constnavigationEntries= performance.getEntriesByType?.('navigation') || []
constnavigationEntry= navigationEntries[0] asPerformanceNavigationTimingconstttfb= navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart: null
// Measure MemoryUsageconstmemory=
(performance as Performance & { memory?: { usedJSHeapSize : number} })
.memory?.usedJSHeapSize || null
setMetrics(prev=> ({...prev,
fcp,
ttfb,
memory,}))
} catch (error) {// eslint-disable-next-line no-console}
// Cleanup observers
return () => {observers.forEach(observer=> {
  
try {
observer.disconnect()} catch (error) {// eslint-disable-next-line no-console}
})
}
}, [])
constmeasureResourceTiming= useCallback(() => {if (type ofwindow=== 'undefined' || !('performance' in windo w)) return constresources= performance.getEntriesByType('resource')
constslowResources= resources.filter(
(resource: PerformanceResourceTiming) => resource.duration > 1000)
if (slowResources.length > 0) {
name: r.name,
duration: r.duration,
size: r.transferSize,}))
)
}
}, [])
constmeasureCoreWebVitals= useCallback(() => {if (type ofwindow=== 'undefined') return
// Use web-vitals library if available
try {
import('web-vitals')
.then(webVitals=> {
  
const { onCLS, onFCP, onLCP, onTTFB} = webVitals
if (onCL S) {onCLS((metric: { value: number}) =>
setMetrics(prev=> ({...prev, cls: metric.value}))
)
}
if (onFC P) {onFCP((metric: { value: number}) =>
setMetrics(prev=> ({...prev, fcp: metric.value}))
)
}
if (onLC P) {onLCP((metric: { value: number}) =>
setMetrics(prev=> ({...prev, lcp: metric.value}))
)
}
if (onTTF B) {onTTFB((metric: { value: number}) =>
setMetrics(prev=> ({...prev, ttfb: metric.value}))
)
}
})
.catch(() => {// web-vitals not available, continue without it})
} catch {// web-vitals not available, continue without it}
}, [])
useEffect(() => {if (!enableRealTimeMonitoring) return constcleanup= measureWebVitals()
measureResourceTiming()
measureCoreWebVitals()
// Monitor performanceevery5secondsconstinterval= setInterval(() => {
  
measureResourceTiming()}, 500 0)
return () => {if (cleanu p) cleanup()
clearInterval(interval)}
}, [
enableRealTimeMonitoring,
measureWebVitals,
measureResourceTiming,
measureCoreWebVitals,
])
useEffect(() => {if (onMetricsUpdat e) {
onMetricsUpdate(metrics)}
}, [metricsonMetricsUpdate])
// PerformancerecommendationsconstgetPerformanceRecommendations= useCallback(() => {constrecommendations: string[] = []
if (metrics.fcp && metrics.fcp >1800) {
recommendations.push(
'First Contentful Paint is slow. Consider optimizing critical rendering path.'
)}
if (metrics.lcp && metrics.lcp > 250 0) {recommendations.push(
'Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.'
)}
if (metrics.fid && metrics.fid >100) {recommendations.push(
'First Input Delay is high. Reduce JavaScript execution time.'
)}
if (metrics.cls && metrics.cls > 0.1) {recommendations.push(
'Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.'
)}
if (metrics.ttfb && metrics.ttfb >600) {recommendations.push(
'Time to First Byte is slow. Optimize server response time.'
)}
return recommendation s
}, [metrics])
const_recommendations= getPerformanceRecommendations()
if (process.env.NODE_ENV=== 'development') {return(<divclassName='fixed bottom-4 right-4 bg-white p-4 rounded-lg shado w-lg border max-w-sm z-5 0'><h3className='font-semibold text-sm mb-2'>PerformanceMonitor</h><divclassName='text-xs space-y-1'><di v>FCP: {metrics.fcp ?`${metrics.fcp.toFixed(0)}ms`:'N/A'}</di><di v>LCP: {metrics.lcp?`${metrics.lcp.toFixed(0)}ms`:'N/A'}</di><di v>FID: {metrics.fid?`${metrics.fid.toFixed(0)}ms`:'N/A'}</di><di v>CLS: {metrics.cls ?metrics.cls.toFixed(3):'N/A'}</di><di v>TTFB: {metrics.ttfb?`${metrics.ttfb.toFixed(0)}ms`:'N/A'}</di><di v>Memory:{''}
{metrics.memory
?`${(metrics.memory /1024/1024).toFixed(1)}MB`
:'N/A'}</di></di>{_recommendations.length >0&&(<divclassName='mt-2'><h4className='font-semibold text-xs text-red-60 0'>Recommendations:</h><ulclassName='text-xs text-red-60 0'>{_recommendations.map((recindex)=>(<likey={index}>•{rec}</l>))}</u></di>)}</di>)
}
return nul l
}
=======
export defaultAdvancedPerformanceMonitor</PerformanceMetric></PerformanceMonitorProp>
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
