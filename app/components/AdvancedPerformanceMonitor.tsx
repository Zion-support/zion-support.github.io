'use client'
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AdvancedPerformanceMonitorPage: React.FC = () => {
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
        <title>AdvancedPerformanceMonitor</title>
        <meta name="description" content="Advanced AdvancedPerformanceMonitor solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, AdvancedPerformanceMonitor, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AdvancedPerformanceMonitor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AdvancedPerformanceMonitor solution for modern businesses.
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

export default AdvancedPerformanceMonitorPage;
=======
import React, { useEffect, useState, useCallback } from 'react'
interface PerformanceMetrics {
fcp: number | null
lcp: number | null
fid: number | null
cls: number | null
ttfb: number | null
memory: number | null
}
interface PerformanceMonitorProps {
onMetricsUpdate?: (metrics: PerformanceMetrics) => void
enableRealTimeMonitoring?: boolean
}
const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
onMetricsUpdate,
enableRealTimeMonitoring = true,
}) => {
const [metrics, setMetrics] = useState<PerformanceMetrics>({
fcp: null,
lcp: null,
fid: null,
cls: null,
ttfb: null,
memory: null,
})
const measureWebVitals = useCallback(() => {
if (typeof window === 'undefined' || !('performance' in window)) return
if (typeof PerformanceObserver === 'undefined') return
const observers: PerformanceObserver[] = []
// Measure First Contentful Paint (FCP)
const fcpEntries = performance.getEntriesByName('first-contentful-paint') || []
const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null
// Measure Largest Contentful Paint (LCP)
if ('PerformanceObserver' in window) {
try {
const lcpObserver = new PerformanceObserver(list => {
const entries = list.getEntries()
const lastEntry = entries[entries.length - 1]
setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
})
lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
observers.push(lcpObserver)
} catch (error) {
// eslint-disable-next-line no-console
}
}
// Measure First Input Delay (FID)
if ('PerformanceObserver' in window) {
try {
const fidObserver = new PerformanceObserver(list => {
const entries = list.getEntries()
entries.forEach(entry => {
if (
entry.entryType === 'first-input' &&
'processingStart' in entry &&
'startTime' in entry
) {
const fidEntry = entry as PerformanceEventTiming
setMetrics(prev => ({
...prev,
fid: fidEntry.processingStart - fidEntry.startTime,
}))
}
})
})
fidObserver.observe({ entryTypes: ['first-input'] })
observers.push(fidObserver)
} catch (error) {
// eslint-disable-next-line no-console
}
}
// Measure Cumulative Layout Shift (CLS)
if ('PerformanceObserver' in window) {
try {
let clsValue = 0
const clsObserver = new PerformanceObserver(list => {
const entries = list.getEntries()
entries.forEach(entry => {
if (
entry.entryType === 'layout-shift' &&
'hadRecentInput' in entry &&
'value' in entry
) {
const clsEntry = entry as LayoutShift
if (!clsEntry.hadRecentInput) {
clsValue += clsEntry.value
setMetrics(prev => ({ ...prev, cls: clsValue }))
}
}
})
})
clsObserver.observe({ entryTypes: ['layout-shift'] })
observers.push(clsObserver)
} catch (error) {
// eslint-disable-next-line no-console
}
}
// Measure Time to First Byte (TTFB)
try {
const navigationEntries = performance.getEntriesByType?.('navigation') || []
const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming
const ttfb = navigationEntry
? navigationEntry.responseStart - navigationEntry.requestStart
: null
// Measure Memory Usage
const memory =
(performance as Performance & { memory?: { usedJSHeapSize: number } })
.memory?.usedJSHeapSize || null
setMetrics(prev => ({
...prev,
fcp,
ttfb,
memory,
}))
} catch (error) {
// eslint-disable-next-line no-console
}
// Cleanup observers
return () => {
observers.forEach(observer => {
try {
observer.disconnect()
} catch (error) {
// eslint-disable-next-line no-console
}
})
}
}, [])
const measureResourceTiming = useCallback(() => {
if (typeof window === 'undefined' || !('performance' in window)) return
const resources = performance.getEntriesByType('resource')
const slowResources = resources.filter(
(resource: PerformanceResourceTiming) => resource.duration > 1000
)
if (slowResources.length > 0) {
// eslint-disable-next-line no-console
console.log(
'Slow resources detected:',
slowResources.map((r: PerformanceResourceTiming) => ({
name: r.name,
duration: r.duration,
size: r.transferSize,
}))
)
}
}, [])
const measureCoreWebVitals = useCallback(() => {
if (typeof window === 'undefined') return
// Use web-vitals library if available
try {
import('web-vitals')
.then(webVitals => {
const { onCLS, onFCP, onLCP, onTTFB } = webVitals
if (onCLS) {
onCLS((metric: { value: number }) =>
setMetrics(prev => ({ ...prev, cls: metric.value }))
)
}
if (onFCP) {
onFCP((metric: { value: number }) =>
setMetrics(prev => ({ ...prev, fcp: metric.value }))
)
}
if (onLCP) {
onLCP((metric: { value: number }) =>
setMetrics(prev => ({ ...prev, lcp: metric.value }))
)
}
if (onTTFB) {
onTTFB((metric: { value: number }) =>
setMetrics(prev => ({ ...prev, ttfb: metric.value }))
)
}
})
.catch(() => {
// web-vitals not available, continue without it
})
} catch {
// web-vitals not available, continue without it
}
}, [])
useEffect(() => {
if (!enableRealTimeMonitoring) return
const cleanup = measureWebVitals()
measureResourceTiming()
measureCoreWebVitals()
// Monitor performance every 5 seconds
const interval = setInterval(() => {
measureResourceTiming()
}, 5000)
return () => {
if (cleanup) cleanup()
clearInterval(interval)
}
}, [
enableRealTimeMonitoring,
measureWebVitals,
measureResourceTiming,
measureCoreWebVitals,
])
useEffect(() => {
if (onMetricsUpdate) {
onMetricsUpdate(metrics)
}
}, [metrics, onMetricsUpdate])
// Performance recommendations
const getPerformanceRecommendations = useCallback(() => {
const recommendations: string[] = []
if (metrics.fcp && metrics.fcp > 1800) {
recommendations.push(
'First Contentful Paint is slow. Consider optimizing critical rendering path.'
)
}
if (metrics.lcp && metrics.lcp > 2500) {
recommendations.push(
'Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.'
)
}
if (metrics.fid && metrics.fid > 100) {
recommendations.push(
'First Input Delay is high. Reduce JavaScript execution time.'
)
}
if (metrics.cls && metrics.cls > 0.1) {
recommendations.push(
'Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.'
)
}
if (metrics.ttfb && metrics.ttfb > 600) {
recommendations.push(
'Time to First Byte is slow. Optimize server response time.'
)
}
return recommendations
}, [metrics])
const _recommendations = getPerformanceRecommendations()
if (process.env.NODE_ENV === 'development') {
return (
<div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>
<h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
<div className='text-xs space-y-1'>
<div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
<div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
<div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
<div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
<div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
<div>Memory:{' '}</div>
{metrics.memory
? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
: 'N/A'}
</div>
</div>
{_recommendations.length > 0 && (
<div className='mt-2'>
<h4 className='font-semibold text-xs text-red-600'>
Recommendations:
</h4>
<ul className='text-xs text-red-600'>
{_recommendations.map((rec, index) => (
<li key={index}>• {rec}</li>
))}
</ul>
</div>
)}
</div>
)
}
return null
}
export default AdvancedPerformanceMonitor
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
