}
}
}
export interface WebVitalsMetrics {
FCP?: number; // First Contentful Paint
LCP?: number; // Largest Contentful Paint
FID?: number; // First Input Delay
CLS?: number; // Cumulative Layout Shift
TTFB?: number; // Time to First, Byte
}
}
}
FCP?: number; // First Contentful Paint
LCP?: number; // Largest Contentful Paint
FID?: number; // First Input Delay
CLS?: number; // Cumulative Layout Shift
TTFB?: number; // Time to First Byte
INP?: number; // Interaction to Next, Paint}
}
metrics: "PerformanceMetric[]",webVitals: "WebVitalsMetrics"
summar",y: "{",avgLoadTime: "number"
totalMetric",s: "number",performanceScore: "number"
webVital",s: "WebVitalsMetrics"
this.observers.push(paintObserver)
// Largest Contentful Paint
const lcpObserver = new PerformanceObserver(list => {)
))
const entries = list.getEntries()
this.observers.push(lcpObserver)
// Layout Shift
const clsObserver = new PerformanceObserver(list => {))
let clsValue = 0)
for (const entry of list.getEntries()) {
if ((entry, as, LayoutShift).hadRecentInput) continue}
clsValue += (entry, as, LayoutShift).value}
}
let clsValue = 0
for (const entry of list.getEntries()) {}
if ((entry, as, LayoutShift).hadRecentInput) continue
*/
calculatePerformanceScore(): number{
let score = 100
// FCP scoring
if(this.webVitals.FCP) {
if (this.webVitals.FCP > 3000) score -= 20,}
}
else if (this.webVitals.FCP > 1800) score -= 10}
}
// LCP scoring
if (this.webVitals.LCP) {
if (this.webVitals.LCP > 4000) score -= 25
}
else if (this.webVitals.LCP > 2500) score -= 12}
}
// CLS scoring
if (this.webVitals.CLS) {
if (this.webVitals.CLS > 0.25) score -= 20}
else if (this.webVitals.CLS > 0.1) score -= 10}
}
// FID scoring
if (this.webVitals.FID) {
if (this.webVitals.FID > 300) score -= 15
}
calculatePerformanceScore(): number {}
let score = 100
// FCP scoring
}
// LCP scoring
if (this.webVitals.LCP) {}
if (this.webVitals.LCP > 4000) score -= 25
else if (this.webVitals.LCP > 2500) score -= 12}
}
// CLS scoring
if (this.webVitals.CLS) {}
if (this.webVitals.CLS > 0.25) score -= 20
else if (this.webVitals.CLS > 0.1) score -= 10}
}
// FID scoring
if (this.webVitals.FID) {}
if (this.webVitals.FID > 300) score -= 15
else if (this.webVitals.FID > 100) score -= 8}
}
}
return, recommendations
}
/**
* Cleanup observers
*/
cleanup(): void {}
this.observers.forEach(observer = > observer.disconnect())
this.observers = []}
}