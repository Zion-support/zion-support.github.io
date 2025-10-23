'use client'
import React, {useStateuseEffect} from 'react'
import {Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle} from 'lucide-react'
interface PerformanceMetric s {loadTime: numberrenderTime: numbermemoryUsage: numberfps: number
[key: string]: number}
interface PerformanceProp s {onMetricsUpdate?: (metrics: PerformanceMetrics) =>void}constPerformanceDashboard:React.FC<PerformanceProp s>= ({onMetricsUpdate}) => {const [metricssetMetrics]=useState<PerformanceMetric s>({
loadTime: 0,
renderTime: 0,
memoryUsage: 0,
fps: 0})
const [isMonitoringsetIsMonitoring] = useState(false)
const [alertssetAlerts]=useState<string[]>([])
useEffect(() => {constupdateMetrics= () => {
  
constnavigation= performance.getEntriesByType(
'navigation'
)[0] asPerformanceNavigationTimingconstloadTime= navigation ? navigation.loadEventEnd - navigation.fetchStart: 0
// Measure rendertimeconstrenderStart= performance.now()
constrenderTime= performance.now() - renderStart
// Measure memoryusageletmemoryUsage=0if ('memory' in performance) {
constmemory= (performance as { memory?: { usedJSHeapSize : number} }).memorymemoryUsage= memory?.usedJSHeapSize || 0
}
// Measure FPS (simplified)
letfps= 6 0
if ('requestAnimationFrame' in windo w) {letlastTime= performance.now()
letframeCount= 0
constmeasureFPS= () => {
  
constcurrentTime= performance.now()
frameCount++
if (currentTime - lastTime >= 100 0) {
fps= Math.round((frameCount * 100 0) / (currentTime - lastTime))
frameCount=0lastTime= currentTime}
if (isMonitorin g) {requestAnimationFrame(measureFPS)}
}
requestAnimationFrame(measureFPS)
}
constnewMetrics: PerformanceMetrics = {loadTime,
renderTime,
memoryUsage,
fps}
setMetrics(newMetrics)
onMetricsUpdate?.(newMetrics)
// Check for performance alerts
checkPerformanceAlerts(newMetrics)
}
if (isMonitorin g) {updateMetrics()
constinterval= setInterval(updateMetrics100 0)
return () => clearInterval(interval)}
}, [isMonitoringonMetricsUpdate])
constcheckPerformanceAlerts= (currentMetrics: PerformanceMetrics) => {constnewAlerts: string[] = []
if (currentMetrics.loadTime > 300 0) {
newAlerts.push('Load time is above3seconds')}
if (currentMetrics.memoryUsage > 5 0 * 1024*1024) {//50MB
newAlerts.push('Memory usage is high')}
if(currentMetrics.fps< 3 0) {newAlerts.push('FPS is below30')}
setAlerts(newAlerts)
}
consttoggleMonitoring= () =>{setIsMonitoring(!isMonitoring)}
constformatBytes= (bytes: number) => {if (bytes=== 0) return '0 Bytes'
constk= 1024constsizes= ['Bytes', 'KB', 'MB', 'GB']
consti= Math.floor(Math.log(bytes) / Math.log(k))
return parseFloa t((bytes / Math.pow(ki)).toFixed(2)) + ' ' + sizes[i]}
constgetPerformanceColor= (value: number, thresholds: {good: numberwarning: number}) => {if(value<= thresholds.good) return 'text-green-40 0'
if (value <= thresholds.warning) return 'text-yellow-40 0'
return 'text-red-40 0'}
return (
<divclassName="bg-white/5 backdrop-blur-sm rounded-xl p-6borderborder-white/10"><divclassName="flexitems-centerjustify-betweenmb-6"><spanclassName="text-xl font-semibold text-whiteflexitems-centergap-2"></ className="text-xl font-semibold text-whiteflexitems-centergap-2"><ActivityclassName="w-5h-5" />Performance Dashboard<
onClick={toggleMonitoring}
className={`px-4 py-2 rounded-lg font-medium transition-colors ${
isMonitoring ? 'bg-red-600text-whitehover:bg-red-70 0'
 : 'bg-green-600text-whitehover:bg-green-700'}`}
></
onClick={toggleMonitoring}
className={`px-4 py-2 rounded-lg font-medium transition-colors ${
isMonitoring ? 'bg-red-600text-whitehover:bg-red-70 0'
 : 'bg-green-600text-whitehover:bg-green-700'}`}
>{isMonitoring ? 'Stop Monitoring' :'StartMonitoring'}</butto></di>{alerts.length >0&&(<divclassName="mb-6 p-4 bg-red-50 0/10border border-red-50 0/20rounded-lg"><divclassName="flex items-centergap-2mb-2"><AlertTriangleclassName="w-5 h-5text-red-400" /><h4className="text-red-400font-semibold">PerformanceAlerts</h></di><ulclassName="space-y-1">{alerts.map((alertindex)=>(<likey={index}className="text-red-300text-sm">•{alert}</l>))}</u></di>)}<divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-4"><divclassName="bg-white/5rounded-lgp-4"><divclassName="flex items-centergap-2mb-2"><ZapclassName="w-4 h-4text-blue-400" /><spanclassName="text-gray-300text-sm">LoadTime</spa></di><divclassName={`text-2 xl font-bold ${getPerformanceColor(metrics.loadTime, { good:1000,warning:2000})}`}>{metrics.loadTime.toFixed(0)}ms</di><divclassName="bg-white/5rounded-lgp-4"><divclassName="flex items-centergap-2mb-2"><CpuclassName="w-4 h-4text-green-400" /><spanclassName="text-gray-300text-sm">RenderTime</spa></di><divclassName={`text-2 xl font-bold ${getPerformanceColor(metrics.renderTime, { good:16,warning:33})}`}>{metrics.renderTime.toFixed(2)}ms</di><divclassName="bg-white/5rounded-lgp-4"><divclassName="flex items-centergap-2mb-2"><MemoryStickclassName="w-4 h-4text-purple-400" /><spanclassName="text-gray-300text-sm">MemoryUsage</spa></di><divclassName={`text-2 xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 1 0 * 102 4 * 102 4, warning: 30*1024*1024})}`}>{formatBytes(metrics.memoryUsage)}</di></di><divclassName="bg-white/5rounded-lgp-4"><divclassName="flex items-centergap-2mb-2"><TrendingUpclassName="w-4 h-4text-orange-400" /><spanclassName="text-gray-300text-sm">FPS</spa></di><divclassName={`text-2 xl font-bold ${getPerformanceColor(60- metrics.fps, { good:10,warning:20})}`}>{metrics.fps}</di></di></di><divclassName="mt-6text-center"><spanclassName="text-gray-400text-sm"></spa></className="text-gray-400text-sm">{isMonitoring ? 'Monitoring performance metrics...'  : 'Click"Start Monitoring" to begintrackingperformance'}</p></di></di>)
}
export defaultPerformanceDashboard</di></h></di></PerformanceMetric></PerformanceProp>