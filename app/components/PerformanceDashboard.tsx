'use client'
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const PerformanceDashboardPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Helmet>
        <title>PerformanceDashboard</title>
        <meta name="description" content="Advanced PerformanceDashboard solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, PerformanceDashboard, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              PerformanceDashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced PerformanceDashboard solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
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
=======
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
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-semibold text-white flex items-center gap-2">
<Activity className="w-5 h-5" />
Performance Dashboard
</
<button
onClick={toggleMonitoring}
className={`px-4 py-2 rounded-lg font-medium transition-colors ${
isMonitoring
? 'bg-red-600 text-white hover:bg-red-700'
: 'bg-green-600 text-white hover:bg-green-700'
}`}
>{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}</button>button>
</div>
{alerts.length > 0 && (
<div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
<div className="flex items-center gap-2 mb-2">
<AlertTriangle className="w-5 h-5 text-red-400" />
<h4 className="text-red-400 font-semibold">Performance Alerts</h4>
</div>
<ul className="space-y-1">
{alerts.map((alert, index) => (
<li key={index} className="text-red-300 text-sm">• {alert}</li>
))}
</ul>
</div>
)}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white/5 rounded-lg p-4">
<div className="flex items-center gap-2 mb-2">
<Zap className="w-4 h-4 text-blue-400" />
<span className="text-gray-300 text-sm">Load Time</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}>{metrics.loadTime.toFixed(0)}ms</div>
</div>
<div className="bg-white/5 rounded-lg p-4">
<div className="flex items-center gap-2 mb-2">
<Cpu className="w-4 h-4 text-green-400" />
<span className="text-gray-300 text-sm">Render Time</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}`}>{metrics.renderTime.toFixed(2)}ms</div>
</div>
<div className="bg-white/5 rounded-lg p-4">
<div className="flex items-center gap-2 mb-2">
<MemoryStick className="w-4 h-4 text-purple-400" />
<span className="text-gray-300 text-sm">Memory Usage</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 })}`}>{formatBytes(metrics.memoryUsage)}</div>div>
</div>
<div className="bg-white/5 rounded-lg p-4">
<div className="flex items-center gap-2 mb-2">
<TrendingUp className="w-4 h-4 text-orange-400" />
<span className="text-gray-300 text-sm">FPS</span>
</div>
<div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 })}`}>{metrics.fps}</div>div>
</div>
</div>
<div className="mt-6 text-center">
<p className="text-gray-400 text-sm">{isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'}</p>p>
</div>
</div>
)
}
export default PerformanceDashboard
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
