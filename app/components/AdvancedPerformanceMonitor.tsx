'use client';
import React from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

interface AdvancedPerformanceMonitorProps {
  className?: string;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ className }) => {
(
    <>
      
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
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
    </>

        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
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
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
            {getPerformanceRecommendations.length > 0 && (
              <div className="mt-2">
                <h4 className="font-semibold text-xs text-red-600">Recommendations:</h4>
                <ul className="text-xs text-red-600">
                  {getPerformanceRecommendations.map((rec, index) => (
                    <li key={index}>• {rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer /></Footer>
    </>
  );,
};
;
fcp: null,;
lcp: null,;
fid: null,;
cls: null,;
ttfb: null,;
memory: null,});"
constmeasureWebVitals="useCallback(()" => {if (type ofwindow="==" 'undefined' || !('performance' in windo w)) return i f (type ofPerformanceObserver="==" 'undefined') return constobserver s: PerformanceObserver[] = []
// Measure First Contentful Paint (FCP);"
constfcpEntries="performance.getEntriesByName('first-contentful-paint')" || [];"
constfcp="fcpEntries.length" >0? fcpEntries[0].startTime: null
// Measure Largest Contentful Paint (LCP);
if ('PerformanceObserver' in windo w) {
try {"
constlcpObserver="new" PerformanceObserver(list=> {
  );"
constentries="list.getEntries()";"}
constlastEntry="entries[entries.length" - 1]}
setMetrics(prev=> ({...prev, lcp: lastEntry.startTime}))
});
lcpObserver.observe({entry Types: ['largest-contentful-paint']});
observers.push(lcpObserver)
} catch (error) {// eslint-disable-next-line no-console}
}
// Measure First Input Delay (FID);
if ('PerformanceObserver' in windo w) {try {"
constfidObserver: "new" PerformanceObserver(list=> {
  );"
constentries="list.getEntries()";
entries.forEach(entry=> {
;  
if ();"
entry.entryType="==" 'first-input' &&
'processingStart' in entry && 'startTime' in entry
) {"
constfidEntry="entry" as PerformanceEventTiming;}
setMetrics(prev=> ({
...prev,});
fid: fidEntry.processingStart - fidEntry.startTime,}))
}
})
});
fidObserver.observe({entry Types: ['first-input']});
observers.push(fidObserver)
} catch (error) {// eslint-disable-next-line no-console}
}
// Measure Cumulative Layout Shift (CLS);
if ('PerformanceObserver' in windo w) {try {"
letclsValue="0constclsObserver=" new PerformanceObserver(list=> {
  );"
constentries="list.getEntries()";
entries.forEach(entry=> {
;  
if ();"
entry.entryType="==" 'layout-shift' &&
'hadRecentInput' in entry && 'value' in entry
) {"
constclsEntry="entry" as LayoutShift;
if (!clsEntry.hadRecentInput) {}
clsValue += clsEntry.value}
setMetrics(prev=> ({...prev, cls: clsValue}))
}
}
})
});
clsObserver.observe({entry Types: ['layout-shift']});
observers.push(clsObserver)
} catch (error) {// eslint-disable-next-line no-console}
}
// Measure Time to First Byte (TTFB);"
try {constnavigationEntries="performance.getEntriesByType?.('navigation')" || []}"
constnavigationEntry="navigationEntries[0]" asPerformanceNavigationTimingconstttfb="navigationEntry" ? navigationEntry.responseStart - navigationEntry.requestStart: null"
// Measure MemoryUsageconstmemory="(performance" as Performance & {memory?: { usedJSHeapSize : number} })
.memory?.usedJSHeapSize || null;
setMetrics(prev=> ({...prev,;
fcp,;}
ttfb,});
memory,}))
} catch (error) {// eslint-disable-next-line no-console}
// Cleanup observers
() => {observers.forEach(observer=> {
;  }
try {});
observer.disconnect()} catch (error) {// eslint-disable-next-line no-console}
})
}
}, []);"
constmeasureResourceTiming="useCallback(()" => {if (type ofwindow: "==" 'undefined' || !('performance' in windo w)) return constresources="performance.getEntriesByType('resource')";"
constslowResources="resources.filter("
(resource: PerformanceResourceTiming) => resource.duration > 1000);
if (slowResources.length > 0) {
// eslint-disable-next-line no-console
// // console.log(
'Slow resources detected:',);
slowResources.map((r: PerformanceResourceTiming) => ({,;
name: r.name,;}
duration: r.duration,}
size: r.transferSize,}))
)
}
}, []);"
constmeasureCoreWebVitals="useCallback(()" => {if (type ofwindow="==" 'undefined') return
// Use web-vitals library if available;
try {}
import('web-vitals')
.then(webVitals=> {
  }
const {onCLS, onFCP, onLCP, onTTFB} = webVitals);
if (onCL S) {onCLS((metric: { value: number}) =>;
setMetrics(prev=> ({...prev, cls: metric.value}))
)
}
if (onFC P) {onFCP((metric: { value: number}) =>;
setMetrics(prev=> ({...prev, fcp: metric.value}))
)
}
if (onLC P) {onLCP((metric: { value: number}) =>;
setMetrics(prev=> ({...prev, lcp: metric.value}))
)
}
if (onTTF B) {onTTFB((metric: { value: number}) =>;
setMetrics(prev=> ({...prev, ttfb: metric.value}))
)
}
})
.catch(() => {
  // web-vitals not available, continue without it
})
} catch {// web-vitals not available, continue without it}
}, []);"
useEffect(() => {if (!enableRealTimeMonitoring) return constcleanup="measureWebVitals()";
measureResourceTiming();}
measureCoreWebVitals()"
// Monitor performanceevery5secondsconstinterval="setInterval(()" => {
  }
measureResourceTiming()}, 500 0);
() => {if (cleanu p) cleanup()}
clearInterval(interval)}
}, [;
enableRealTimeMonitoring,;
measureWebVitals,;
measureResourceTiming,;
measureCoreWebVitals,
]);
useEffect(() => {if (onMetricsUpdat e) {}
onMetricsUpdate(metrics)}
}, [metricsonMetricsUpdate])"
// PerformancerecommendationsconstgetPerformanceRecommendations="useCallback(()" => {constrecommendations: string[] = [];}
if (metrics.fcp && metrics.fcp >1800) {}
recommendations.push(
'First Contentful Paint is slow. Consider optimizing critical rendering path.'
)
}
if (metrics.lcp && metrics.lcp > 2500) {}
recommendations.push(
'Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.'
)
}
if (metrics.fid && metrics.fid > 100) {}
recommendations.push(
'First Input Delay is high. Reduce JavaScript execution time.'
)
}
if (metrics.cls && metrics.cls > 0.1) {}
recommendations.push(
'Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.'
)
}
if (metrics.ttfb && metrics.ttfb > 600) {}
recommendations.push(
'Time to First Byte is slow. Optimize server response time.'
)
}
return recommendations
}, [metrics]);"
export const _recommendations=";";"
if (process.env.NODE_ENV="==" 'development') {}
(
<div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'></div>
<h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>"
<div className="'text-xs" space-y-1'></div>
<div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
<div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
<div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
<div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
<div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
<div>Memory:{' '}</div>
{metrics.memory;
? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
: 'N/A'}
</div>
</div>
{_recommendations.length > 0 && ("
<div className="'mt-2'"></div>
<h4 className='font-semibold text-xs text-red-600'>}</h4>
Recommendations:</h4>
</h4>"
<ul className="'text-xs" text-red-600'></ul>
{_recommendations.map((rec, index) => (</ul>"
<li key="{index}">• {rec}</li>
))}
</ul>
</div>
)}
if (metrics.lcp && metrics.lcp > 250 0) {recommendations.push('Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.'
)}
if (metrics.fid && metrics.fid >100) {recommendations.push('First Input Delay is high. Reduce JavaScript execution time.'
)}
if (metrics.cls && metrics.cls > 0.1) {recommendations.push('Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.'
)}
if (metrics.ttfb && metrics.ttfb >600) {recommendations.push('Time to First Byte is slow. Optimize server response time.'
)}
return recommendation s
}, [metrics]);"
const_recommendations="getPerformanceRecommendations()";"
if (process.env.NODE_ENV="==" 'development') {return(<divclassName="'fixed" bottom-4 right-4 bg-white p-4 rounded-lg shado w-lg border max-w-sm z-5 0'><h3className='font-semibold text-sm mb-2'>PerformanceMonitor</h><divclassName='text-xs space-y-1'><di v>FCP: {metrics.fcp ?`${metrics.fcp.toFixed(0)}ms`:'N/A'}</di><di v>LCP: {metrics.lcp?`${metrics.lcp.toFixed(0)}ms`:'N/A'}</di><di v>FID: {metrics.fid?`${metrics.fid.toFixed(0)}ms`:'N/A'}</di><di v>CLS: {metrics.cls ?metrics.cls.toFixed(3):'N/A'}</di><di v>TTFB: {metrics.ttfb?`${metrics.ttfb.toFixed(0)}ms`:'N/A'}</di><di v>Memory:{''}
{metrics.memory</di>
?`${(metrics.memory /1024/1024).toFixed(1)}MB`</di>"
:'N/A'}</di></di>{_recommendations.length >0&&(<divclassName="'mt-2'"><h4className='font-semibold text-xs text-red-60 0'>Recommendations:</h><ulclassName="'text-xs" text-red-60 0'>{_recommendations.map((recindex)=>(<likey="{index}">•{rec}</l>))}</u></di>)}</di>)
}
return nul l;
}



export default AdvancedPerformanceMonitor;"