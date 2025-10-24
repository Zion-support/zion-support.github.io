'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

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
    setMetrics(prev => ({ ...prev, fcp }))

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
        console.warn('LCP measurement not supported:', error)
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
        console.warn('FID measurement not supported:', error)
      }
    }

    // Measure Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver(list => {
          let clsValue = 0
          const entries = list.getEntries()
          entries.forEach(entry => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          })
          setMetrics(prev => ({ ...prev, cls: clsValue }))
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
        observers.push(clsObserver)
      } catch (error) {
        console.warn('CLS measurement not supported:', error)
      }
    }

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      setMetrics(prev => ({ ...prev, ttfb }))
    }

    // Measure Memory Usage
    if ('memory' in performance) {
      const memory = (performance as any).memory.usedJSHeapSize
      setMetrics(prev => ({ ...prev, memory }))
    }

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  useEffect(() => {
    if (!enableRealTimeMonitoring) return

    const cleanup = measureWebVitals()
    return cleanup
  }, [measureWebVitals, enableRealTimeMonitoring])

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics)
    }
  }, [metrics, onMetricsUpdate])

  const getPerformanceScore = (metric: number | null, thresholds: { good: number; poor: number }) => {
    if (metric === null) return 'unknown'
    if (metric <= thresholds.good) return 'good'
    if (metric <= thresholds.poor) return 'needs-improvement'
    return 'poor'
  }

  const getRecommendations = () => {
    const recommendations: string[] = []

    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push('Optimize First Contentful Paint - consider reducing render-blocking resources')
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push('Improve Largest Contentful Paint - optimize images and critical resources')
    }

    if (metrics.fid && metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay - minimize JavaScript execution time')
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push('Fix Cumulative Layout Shift - ensure stable layout')
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push('Improve Time to First Byte - optimize server response time')
    }

    return recommendations
  }

  const recommendations = getRecommendations()

  if (!enableRealTimeMonitoring) {
    return null
  }

  return (
    <>
      <Helmet>
        <title>AdvancedPerformanceMonitor</title>
        <meta name=&quot;description&quot; content=&quot;Advanced AdvancedPerformanceMonitor solution for modern businesses.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, AdvancedPerformanceMonitor, AI solutions, intelligent automation&quot; />
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
              AdvancedPerformanceMonitor
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced AdvancedPerformanceMonitor solution for modern businesses.
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
      {recommendations.length > 0 && (
        <div className="mt-2">
          <h4 className="font-semibold text-xs text-red-600">
            Recommendations:
          </h4>
          <ul className="text-xs text-red-600">
            {recommendations.map((rec, index) => (
              <li key={index}>• {rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AdvancedPerformanceMonitorPage;
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
// eslint-disable-next-line no-console
// // console.log(
'Slow resources detected:',
slowResources.map((r: PerformanceResourceTiming) => ({
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
<div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'></div>
<h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
<div className='text-xs space-y-1'></div>
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
<div className='mt-2'></div>
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
export default AdvancedPerformanceMonitor
