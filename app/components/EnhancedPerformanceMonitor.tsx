interface PerformanceMetrics {},
loadTime: number,
firstContentfulPaint: number,
largestContentfulPaint: number,
firstInputDelay: number,
cumulativeLayoutShift: number,
timeToFirstByte: number,
totalBlockingTime: number
interface PerformanceMonitorProps {},
showInProduction?: boolean
const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps>  =  ({},)
showInProduction = false
}) => {},
const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),
// Measure Core Web Vitals;
const vitals: Partial<PerformanceMetrics> = {};
// Get FCP;
onFCP((metric: unknown) => {},
vitals.firstContentfulPaint = metric.value;
});
// Get LCP;
onLCP((metric: unknown) => {},
vitals.largestContentfulPaint = metric.value;
});
// Get INP (replaces FID)
onINP((metric: unknown) => {},
vitals.firstInputDelay = metric.value;
});
// Get CLS;
onCLS((metric: unknown) => {},
vitals.cumulativeLayoutShift = metric.value;
});
// Get TTFB;
onTTFB((metric: unknown) => {},
// Measure additional metrics;
const navigation  = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming";"
const paintEntries  = performance.getEntriesByType('paint')";"
const fcp  = paintEntries.find(entry => entry.name === 'first-contentful-paint')";"
// Calculate Total Blocking Time;
const longTasks  = performance.getEntriesByType('longtask')";"
const totalBlockingTime  = longTasks.reduce((total, task) => {};
}return total + (task.duration - 50); // 50ms is the threshold
}, 0)
const finalMetrics: PerformanceMetrics  =  {},
loadTime: navigation.loadEventEnd - navigation.loadEventStart,
firstContentfulPaint: fcp ? fcp.startTime : vitals.firstContentfulPaint || 0,
largestContentfulPaint: vitals.largestContentfulPaint || 0,
firstInputDelay: vitals.firstInputDelay || 0,
cumulativeLayoutShift: vitals.cumulativeLayoutShift || 0,
timeToFirstByte: vitals.timeToFirstByte || 0,
totalBlockingTime: totalBlockingTime
setMetrics(finalMetrics)
setIsLoading(false)
// Send metrics to analytics (if available)
custom_map: {}'metric_1': finalMetrics.firstContentfulPaint"'metric_2': finalMetrics.largestContentfulPaint"'metric_3': finalMetrics.firstInputDelay"'metric_4': finalMetrics.cumulativeLayoutShift"'metric_5': finalMetrics.timeToFirstByte";"
})

} catch (error) {},
setIsLoading(false)
// Measure after page load;
if (document.readyState === 'complete') {},"
measurePerformance()
} else {},
window.addEventListener('load', measurePerformance)"
return () => {}
}window.removeEventListener('load', measurePerformance)"

}, [])
// Only show in development or if explicitly enabled;
if ((process.env.NODE_ENV !== 'development' && !showInProduction) || !metrics) {},"
return null
const  getScoreColor = (_value: number, thresholds: { good= number; needsImprovement: number }) => {},
if (value <= thresholds.good) return 'text-green-500',"
if (value <= thresholds.needsImprovement) return 'text-yellow-500',"
return 'text-red-500'"

const  getScoreText = (_value: number, thresholds: { good= number; needsImprovement: number }) => {},
if (value <= thresholds.good) return 'Good',"
if (value <= thresholds.needsImprovement) return 'Needs Improvement',"
return 'Poor'"
const getScoreColor  = (_value: number, thresholds: { good: number; needsImprovement: number }) => {},
if (value <= thresholds.good) return 'text-green-500',";"
if (value <= thresholds.needsImprovement) return 'text-yellow-500',";"
return 'text-red-500'";"

const getScoreText  = (_value: number, thresholds: { good: number; needsImprovement: number }) => {},
if (value <= thresholds.good) return 'Good',";"
if (value <= thresholds.needsImprovement) return 'Needs Improvement',";"
return 'Poor'";"

return (<div  className ="fixed bottom-4 right-4 z-50"></=>)"
<button>
onClick={() => setIsVisible(!isVisible)},
<div  className ={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>"
<span>Performance</span>
</button>

{isVisible && (<div  className ="absolute bottom-14 right-0 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-2xl p-6 w-80 max-h-96 overflow-y-auto"></div>)}"
<div  className ="flex items-center justify-between mb-4"></div>"
<h3  className ="font-bold text-gray-900 text-lg">Core Web Vitals</h3>"
<button>
onClick={() => setIsVisible(false)},
✕
</button>
</div>
<div  className ="space-y-4 text-sm"></div>"
{/* LCP */}
<div  className ="space-y-1"></div>"
<div  className ="flex justify-between items-center"></div>"
<span  className ="text-gray-600 font-medium">LCP (Largest Contentful Paint)</span>"
<span  className ={`font-mono font-bold ${getScoreColor(metrics.largestContentfulPaint, { good= 2500, needsImprovement: 4000 })}`}></span>
{metrics.largestContentfulPaint.toFixed(0)}ms
</span>
</div>
<div  className ="text-xs text-gray-500"></div>"
{getScoreText(metrics.largestContentfulPaint, { good= 2500, needsImprovement: 4000 })}
</div>
</div>
{/* FID */}
<div  className ="space-y-1"></div>"
<div  className ="flex justify-between items-center"></div>"
<span  className ="text-gray-600 font-medium">FID (First Input Delay)</span>"
<span  className ={`font-mono font-bold ${getScoreColor(metrics.firstInputDelay, { good= 100, needsImprovement: 300 })}`}></span>
{metrics.firstInputDelay.toFixed(0)}ms
</span>
</div>
<div  className ="text-xs text-gray-500"></div>"
{getScoreText(metrics.firstInputDelay, { good= 100, needsImprovement: 300 })}
</div>
</div>
{/* CLS */}
<div  className ="space-y-1"></div>"
<div  className ="flex justify-between items-center"></div>"
<span  className ="text-gray-600 font-medium">CLS (Cumulative Layout Shift)</span>"
<span  className ={`font-mono font-bold ${getScoreColor(metrics.cumulativeLayoutShift, { good= 0.1, needsImprovement: 0.25 })}`}></span>
{metrics.cumulativeLayoutShift.toFixed(3)}
</span>
</div>
<div  className ="text-xs text-gray-500"></div>"
{getScoreText(metrics.cumulativeLayoutShift, { good= 0.1, needsImprovement: 0.25 })}
</div>
</div>
{/* FCP */}
<div  className ="space-y-1"></div>"
<div  className ="flex justify-between items-center"></div>"
<span  className ="text-gray-600 font-medium">FCP (First Contentful Paint)</span>"
<span  className ={`font-mono font-bold ${getScoreColor(metrics.firstContentfulPaint, { good= 1800, needsImprovement: 3000 })}`}></span>
{metrics.firstContentfulPaint.toFixed(0)}ms
</span>
</div>
<div  className ="text-xs text-gray-500"></div>"
{getScoreText(metrics.firstContentfulPaint, { good= 1800, needsImprovement: 3000 })}
</div>
</div>
{/* TTFB */}
<div  className ="space-y-1"></div>"
<div  className ="flex justify-between items-center"></div>"
<span  className ="text-gray-600 font-medium">TTFB (Time to First Byte)</span>"
<span  className ={`font-mono font-bold ${getScoreColor(metrics.timeToFirstByte, { good= 800, needsImprovement: 1800 })}`}></span>
{metrics.timeToFirstByte.toFixed(0)}ms
</span>
</div>
<div  className ="text-xs text-gray-500"></div>"
{getScoreText(metrics.timeToFirstByte, { good= 800, needsImprovement: 1800 })}
</div>
</div>
{/* Additional Metrics */}
<div  className ="border-t pt-3 space-y-2"></div>"
<div  className ="flex justify-between"></div>"
<span  className ="text-gray-600">Load Time:</span>"
<span  className ="font-mono">{metrics.loadTime.toFixed(0)}ms</span>"
</div>
</div>
</div>
</div>
</div>

const ComponentsPage: React.FC = () => {
return (
<SEOHead;>
</div>;
</div>;
</>;,";"
),";";"
};";";";"
;"

title="Components - Zion Tech Group";"
description="Professional components solutions for modern businesses";"
/>";"
<div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
<div: className ="text-center">";"
<h1: className ="text-4xl font-bold mb-4">Components</h1>";"
<p: className ="text-gray-300">Professional solutions coming soon...</p>";"
</div>;
</div>;
</>;
),


