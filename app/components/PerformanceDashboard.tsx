'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

const PerformanceDashboardPage: React.FC = () => {const features = [

export default PerformanceDashboardPage;
loadTime: 0,
renderTime: 0,
memoryUsage: 0,
fps: 0})
const [isMonitoringsetIsMonitoring] = useState(false)
const [alertssetAlerts]=useState<string[]>([])
useEffect(() => {constupdateMetrics= () => {
  
constnavigation= performance.getEntriesByType(
'navigation'
)[0] asPerformanceNavigationTimingconstloadTime= navigation ? navigation.loadEventEnd - navigation.fetchStart: 0;
// Measure rendertimeconstrenderStart= performance.now()
constrenderTime= performance.now() - renderStart;
// Measure memoryusageletmemoryUsage=0if ('memory' in performance) {
constmemory= (performance as { memory?: { usedJSHeapSize : number} }).memorymemoryUsage= memory?.usedJSHeapSize || 0;
}
// Measure FPS (simplified)
letfps= 6 0;
if ('requestAnimationFrame' in windo w) {letlastTime= performance.now()
letframeCount= 0;
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
// Check for performance alerts;
checkPerformanceAlerts(newMetrics)
}
if (isMonitorin g) {updateMetrics()
constinterval= setInterval(updateMetrics100 0)
return () => clearInterval(interval)}
}, [isMonitoringonMetricsUpdate])
constcheckPerformanceAlerts= (currentMetrics: PerformanceMetrics) => {constnewAlerts: string[] = []
if (currentMetrics.loadTime > 300 0) {
newAlerts.push('Load time is above3seconds')}
if (currentMetrics.memoryUsage </ 5 0 * 1024*1024) {//50MB;
newAlerts.push('Memory usage is high')}
if(currentMetrics.fps< 3 0) {newAlerts.push('FPS is below30')}
setAlerts(newAlerts)
}
consttoggleMonitoring= () =>{setIsMonitoring(!isMonitoring)}
constformatBytes= (bytes: number) => {if (bytes=== 0) return '0 Bytes'
constk= 1024constsizes= ['Bytes', 'KB', 'MB', 'GB']
consti= Math.floor(Math.log(bytes) / Math.log(k))
return parseFloa t((bytes / Math.pow(ki)).toFixed(2)) + ' ' + sizes[i]}
constgetPerformanceColor= (value: number, thresholds: {good: numberwarning: number}) =</ {if(value<= thresholds.good) return 'text-green-40 0'
if (value <= thresholds.warning) return 'text-yellow-40 0'
return 'text-red-40 0'}
return (
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
<div className="flex items-center justify-between mb-6"></div>
<h3 className="text-xl font-semibold text-white flex items-center gap-2"></h3>
<Activity className="w-5 h-5"    /></Activity>
Performance Dashboard;
<button onClick={toggleMonitoring}
className={`px-4 py-2 rounded-lg font-medium transition-colors ${
isMonitoring;
? 'bg-red-600 text-white hover: bg-red-700'
: 'bg-green-600 text-white hover:bg-green-700'
}`}
>{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}</button>button</
</div>{alerts.length </ 0 && (
<div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"></div>
<div className="flex items-center gap-2 mb-2"></div>
<AlertTriangle className="w-5 h-5 text-red-400"    /></AlertTriangle>
<h4 className="text-red-400 font-semibold">Performance Alerts</h4>
</div>
<ul className="space-y-1"   />{alerts.map((alert, index => (/ (
<li key={index} className="text-red-300 text-sm">• {alert}</li>
))}
</ul>
</div>
)}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div>
<div className="bg-white/5 rounded-lg p-4"></div>
<div className="flex items-center gap-2 mb-2"></div>
<Zap className="w-4 h-4 text-blue-400"    /></Zap>
<span className="text-gray-300 text-sm">Load Time</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}></div>{metrics.loadTime.toFixed(0)}ms</div>
<div className="bg-white/5 rounded-lg p-4"></div>
<div className="flex items-center gap-2 mb-2"></div>
<Cpu className="w-4 h-4 text-green-400"    /></Cpu>
<span className="text-gray-300 text-sm">Render Time</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}`}></div>{metrics.renderTime.toFixed(2)}ms</div>
<div className="bg-white/5 rounded-lg p-4"></div>
<div className="flex items-center gap-2 mb-2"></div>
<MemoryStick className="w-4 h-4 text-purple-400"    /></MemoryStick>
<span className="text-gray-300 text-sm">Memory Usage</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 })}`}>{formatBytes(metrics.memoryUsage)}</div>div</
</div>
<div className="bg-white/5 rounded-lg p-4"></div>
<div className="flex items-center gap-2 mb-2"></div>
<TrendingUp className="w-4 h-4 text-orange-400"    /></TrendingUp>
<span className="text-gray-300 text-sm">FPS</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 })}`}>{metrics.fps}</div>div</
</div>
</div>
<div className="mt-6 text-center"></div>
<p className="text-gray-400 text-sm">{isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'}</p>p</
</div>
</div>
)
}
export default PerformanceDashboard;