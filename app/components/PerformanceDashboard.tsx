'use client'
import { Metadata } from 'next';
import React from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

interface PerformanceDashboardProps {},

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
              PerformanceDashboard
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced PerformanceDashboard solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

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
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div />
<div className="flex items-center justify-between mb-6"></div />
<h3 className="text-xl font-semibold text-white flex items-center gap-2"></h3 />
<Activity className="w-5 h-5" / />
Performance Dashboard;
<button onClick={toggleMonitoring}
className={`px-4 py-2 rounded-lg font-medium transition-colors ${
isMonitoring;
? 'bg-red-600 text-white hover: bg-red-700'
: 'bg-green-600 text-white hover:bg-green-700'
}`}
>{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}</button>button</
</div />{alerts.length </ 0 && (
<div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"></div />
<div className="flex items-center gap-2 mb-2"></div />
<AlertTriangle className="w-5 h-5 text-red-400" / />
<h4 className="text-red-400 font-semibold">Performance Alerts</h4 />
</div />
<ul className="space-y-1" />{alerts.map((alert, index) =</ (
<li key={index} className="text-red-300 text-sm">• {alert}</li />
))}
</ul />
</div />
)}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div />
<div className="bg-white/5 rounded-lg p-4"></div />
<div className="flex items-center gap-2 mb-2"></div />
<Zap className="w-4 h-4 text-blue-400" / />
<span className="text-gray-300 text-sm">Load Time</span />
</div />
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}></div />{metrics.loadTime.toFixed(0)}ms</div />
<div className="bg-white/5 rounded-lg p-4"></div />
<div className="flex items-center gap-2 mb-2"></div />
<Cpu className="w-4 h-4 text-green-400" / />
<span className="text-gray-300 text-sm">Render Time</span />
</div />
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}`}></div />{metrics.renderTime.toFixed(2)}ms</div />
<div className="bg-white/5 rounded-lg p-4"></div />
<div className="flex items-center gap-2 mb-2"></div />
<MemoryStick className="w-4 h-4 text-purple-400" / />
<span className="text-gray-300 text-sm">Memory Usage</span />
</div />
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 })}`}>{formatBytes(metrics.memoryUsage)}</div>div</
</div />
<div className="bg-white/5 rounded-lg p-4"></div />
<div className="flex items-center gap-2 mb-2"></div />
<TrendingUp className="w-4 h-4 text-orange-400" / />
<span className="text-gray-300 text-sm">FPS</span />
</div />
<div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 })}`}>{metrics.fps}</div>div</
</div />
</div />
<div className="mt-6 text-center"></div />
<p className="text-gray-400 text-sm">{isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'}</p>p</
</div />
</div />
)
}
export default PerformanceDashboard;