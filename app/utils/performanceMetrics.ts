app/utils/performanceMetrics.ts'app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
/**
* Performance Metrics app/utils/performanceMetrics.ts;
* Advanced performance tracking and monitoring for web app/utils/performanceMetrics.ts;
*/
export interface PerformanceMetric {

name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsloadapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsruntimeapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsnetworkapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsmemoryapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tscustomapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,unknown>
}
}
}


export interface WebVitalsMetrics {

FCP?: number; // First Contentful app/utils/performanceMetrics.ts;
LCP?: number; // Largest Contentful app/utils/performanceMetrics.ts;
FID?: number; // First Input app/utils/performanceMetrics.ts;
CLS?: number; // Cumulative Layout app/utils/performanceMetrics.ts;
TTFB?: number; // Time to First, app/utils/performanceMetrics.ts;
}
}
export interface PerformanceMetric {


;}
;}

name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsloadapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsruntimeapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsnetworkapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsmemoryapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tscustomapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,unknown>;}</strin>

}
export interface WebVitalsMetrics {


;}
;}

FCP?: number; // First Contentful app/utils/performanceMetrics.ts;
LCP?: number; // Largest Contentful app/utils/performanceMetrics.ts;
FID?: number; // First Input app/utils/performanceMetrics.ts;
CLS?: number; // Cumulative Layout app/utils/performanceMetrics.ts;
TTFB?: number; // Time to First app/utils/performanceMetrics.ts;
INP?: number; // Interaction to Next, Paint}
}
export interface PerformanceReport {


;}
;}

metrics: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,webVitals: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,avgLoadTime: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,s: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,performanceScore: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,s: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
summary: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
avgLoadTime: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,totalMetrics: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,e: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,recommendations: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
}
timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
export class PerformanceMetrics{;}
private static instance: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,;}
private metrics: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
private webVitals: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,;}

private observers: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,constructor() {
if (typeof window !== app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts) {;}
export class PerformanceMetrics {;}
private static instance: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,s: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}

private webVitals: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
private observers: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,constructor() {}
if (typeof window !== app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts) {;}
this.initializeObservers();}
}
}
static getInstance(): PerformanceMetrics {;}
if (!PerformanceMetrics.instance) {;}
PerformanceMetrics.instance = new PerformanceMetrics(),;}
export interface PerformanceMetric {
/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
}
}

}
export interface WebVitalsMetrics {
/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
;}
;}

}
export interface PerformanceReport {
/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
;}
;}

}
app/utils/performanceMetrics.ts;
p: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
export class PerformanceMetrics {/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,;}
webVitals: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,;}

app/utils/performanceMetrics.ts;
observers: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,O: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,, , }

}
}
static getInstance(): PerformanceMetrics {/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
;}
return PerformanceMetrics.app/utils/performanceMetrics.ts;
;}
/**
* Initialize performance app/utils/performanceMetrics.ts;
*/
private initializeObservers(): void{// Observe navigation app/utils/performanceMetrics.ts;
if (app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts in, window) {
try {
// Navigation app/utils/performanceMetrics.ts;
const navObserver = new PerformanceObserver(list => {
)

for (const entry of list.getEntries()) {
if (entry.entryType === app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts) {
const navEntry = entry as app/utils/performanceMetrics.ts;
this.recordMetric({)
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tspageLoadTimeapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsloadapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,metadata: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,d: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
  ,}
private initializeObservers(): void {;}
// Observe navigation app/utils/performanceMetrics.ts;
if (app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts in, window) {}
try {}
// Navigation app/utils/performanceMetrics.ts;
const navObserver = new PerformanceObserver(list => {
)
,}
for (const entry of list.getEntries()) {;}

if (entry.entryType = == app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts) {,}

const navEntry = entry as app/utils/performanceMetrics.ts;
this.recordMetric({),}
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tspageLoadTimeapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsloadapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,metadata: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
domContentLoaded: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,domInteractive: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
private initializeObservers(): void {/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
}
})
;}
;}
;})
navObserver.observe({ entryTypes: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnavigationapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,})
this.observers.push(navObserver)
// Paint app/utils/performanceMetrics.ts;
const paintObserver = new PerformanceObserver(list => {
)

  )
for (const entry of list.getEntries()) {
if (entry.name === app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts) {
this.webVitals.FCP = entry.app/utils/performanceMetrics.ts;
this.recordMetric({)
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFCPapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
}
const paintObserver = new PerformanceObserver(list => {
)
,}
for (const entry of list.getEntries()) {;}

if (entry.name = == app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts) {,}

this.webVitals.FCP = entry.app/utils/performanceMetrics.ts;
this.recordMetric({),}
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFCPapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsloadapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,}

})
}
}
})
paintObserver.observe({ entryTypes: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tspaintapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,})
this.observers.push(paintObserver)
// Largest Contentful app/utils/performanceMetrics.ts;
const lcpObserver = new PerformanceObserver(list => {
)

  )
const entries = list.getEntries()
const lastEntry = entries[entries.length - 1,]
if (lastEntry) {
this.webVitals.LCP = lastEntry.app/utils/performanceMetrics.ts;
this.recordMetric({)
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsLCPapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
}
const lcpObserver = new PerformanceObserver(list => {
)
,}

const entries = list.getEntries()
const lastEntry = entries[entries.length - 1,]
if (lastEntry) {}
this.webVitals.LCP = lastEntry.app/utils/performanceMetrics.ts;
this.recordMetric({),}
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsLCPapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsloadapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,}
})
}
})
lcpObserver.observe({ entryTypes: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tslargest-contentful-paintapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,})
this.observers.push(lcpObserver)
// Layout app/utils/performanceMetrics.ts;
const clsObserver = new PerformanceObserver(list => {
)
  )

let clsValue = 0;)
for (const entry of list.getEntries()) {
if ((entry, as, LayoutShift).hadRecentInput) app/utils/performanceMetrics.ts;
}
clsValue += (entry, as, LayoutShift).value;}
}
this.webVitals.CLS = app/utils/performanceMetrics.ts;
this.recordMetric({)
  )
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsCLSapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsscoreapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,}
const clsObserver = new PerformanceObserver(list => {
)
,}

let clsValue = app/utils/performanceMetrics.ts;
for (const entry of list.getEntries()) {,;}
if ((entry, as, LayoutShift).hadRecentInput) app/utils/performanceMetrics.ts;
clsValue += (entry, as, LayoutShift).value;}
}
this.webVitals.CLS = app/utils/performanceMetrics.ts;
this.recordMetric({),}
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsCLSapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsscoreapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsruntimeapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,}

})
})
clsObserver.observe({ entryTypes: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tslayout-shiftapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,})
this.observers.push(clsObserver)
} catch (error) {}

})
navObserver.observe({/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,})
s: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnavigationapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,})
this.observers.push(navObserver)
// Paint app/utils/performanceMetrics.ts;
const paintObserver = new PerformanceObserver(list => {
/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
})
})
}
}
})
paintObserver.observe({/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,})
s: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tspaintapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,})
this.observers.push(paintObserver)
// Largest Contentful app/utils/performanceMetrics.ts;
const lcpObserver = new PerformanceObserver(list => {
/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
})
})
}
})
lcpObserver.observe({/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,})
s: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tslargest-contentful-paintapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,})
this.observers.push(lcpObserver)
// Layout app/utils/performanceMetrics.ts;
const clsObserver = new PerformanceObserver(list => {
/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
;}

};)
this.webVitals.CLS = clsValue)
this.recordMetric({/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,})
})
})
clsObserver.observe({/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,})
s: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tslayout-shiftapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,})
this.observers.push(clsObserver)
} catch(error) {   /* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,, , , }
}
}
}
/**
* Record a custom performance app/utils/performanceMetrics.ts;
*/
recordMetric(metric: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,// Keep only last, 1000, metrics,;}
if (this.metrics.length > 1000) {}
recordMetric(metric: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,;}
this.metrics.push(metric)
// Keep only last 1000 app/utils/performanceMetrics.ts;
if (this.metrics.length > 1000) {}
this.metrics.shift();}
recordMetric(metri)
c: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,O: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
;}
;}
/**
* Record page load app/utils/performanceMetrics.ts;
*/
recordPageLoad(): void{
if (typeof window === app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts) app/utils/performanceMetrics.ts;
const perfData = window.performance.app/utils/performanceMetrics.ts;
const pageLoadTime = perfData.loadEventEnd - perfData.app/utils/performanceMetrics.ts;
this.recordMetric({)
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tspageLoadapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsloadapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,metadata: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,p: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,tcpConnection: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,e: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
  ,}
recordPageLoad(): void {;}
if (typeof window = == app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts) app/utils/performanceMetrics.ts;
const perfData = window.performance.app/utils/performanceMetrics.ts;
const pageLoadTime = perfData.loadEventEnd - perfData.app/utils/performanceMetrics.ts;
this.recordMetric({),}
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tspageLoadapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsloadapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,metadata: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
dnsLookup: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,tcpConnection: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,e: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,domParsing: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
recordPageLoad(): void {/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
}
;})
;}
/**
* Record network request app/utils/performanceMetrics.ts;
*/
recordNetworkRequest(url: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,duration: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,status: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,this.recordMetric({)
app/utils/performanceMetrics.ts;
e: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnetworkRequestapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnetworkapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,metadata: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
,}
recordNetworkRequest(url: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,duration: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,status: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,;}
this.recordMetric({);}
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnetworkRequestapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnetworkapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,metadata: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
app/utils/performanceMetrics.ts;
status}
recordNetworkRequest(ur;)
l: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,duratio)
n: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,statu)
s: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,O: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
}
;})
;}
/**
* Record memory app/utils/performanceMetrics.ts;
*/
recordMemoryUsage(): void{
if (typeof window === app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts) app/utils/performanceMetrics.ts;
if (!(performance, as, PerformanceWithMemory).memory) app/utils/performanceMetrics.ts;
const memory = (performance, as, PerformanceWithMemory).app/utils/performanceMetrics.ts;
this.recordMetric({)
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmemoryUsageapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsbytesapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmemoryapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,metadata: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,l: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,limit: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
  ,}
recordMemoryUsage(): void {;}
if (typeof window === app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts) app/utils/performanceMetrics.ts;
if (!(performance, as, PerformanceWithMemory).memory) app/utils/performanceMetrics.ts;
const memory = (performance, as, PerformanceWithMemory).app/utils/performanceMetrics.ts;
this.recordMetric({)}
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmemoryUsageapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,t: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsbytesapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,y: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmemoryapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,metadata: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
total: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,limit: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,e: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}

recordMemoryUsage(): void {/* TODO: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
}
;})
;}
/**
* Measure function execution app/utils/performanceMetrics.ts;
*/
measureFunction<T>(name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,fn: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,const result = fn();,;}
const endTime = performance.now(),;}

this.recordMetric({})
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsfunctioapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts${nameapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts)
value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,unit: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,e: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,fn: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}

const startTime = performance.now()
const result = fn()
const endTime = performance.now()
this.recordMetric({,})
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsfunctioapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts${nameapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,unit: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,timestamp: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,category: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsruntimeapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,})</T>
measureFunction<T>(app/utils/performanceMetrics.ts;
e: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,f)
n: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,O: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}
n: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}app/utils/performanceMetrics.ts`app/utils/performanceMetrics.tsendTime - startTimeapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnew Date()app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsstringapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts() => Promise<T>): Promise<T> {
const startTime = performance.now();app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts})
name: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsasynapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts${nameapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts)
value: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,unit: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsmsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts,</T>
e: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,fn: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}

const startTime = performance.now()
const result = await fn()
const endTime = performance.now()
this.recordMetric({app/utils/performanceMetrics.ts`app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts`app/utils/performanceMetrics.ts,c: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}app/utils/performanceMetrics.ts`app/utils/performanceMetrics.tsendTime - startTimeapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnew Date()app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsstringapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts() => Promise<T>): Promise<T> {/* TODapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
c: app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts,}app/utils/performanceMetrics.ts`app/utils/performanceMetrics.tsendTime - startTimeapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnew Date()app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsPerformanceMetric[app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts]): PerformanceMetric[] {app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsPerformanceMetric[app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts]): PerformanceMetric[] {app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsPerformanceMetric[app/utils/performanceMetrics.ts'app/utils/performanceMetrics.ts]): PerformanceMetric[] {/* TODapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsstring[] = []
if (this.webVitals.FCP && this.webVitals.FCP > 1800) {app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsOptimize First Contentful Paint (FCP) - consider reducing render-blocking resourcesapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsstring[] = []app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsOptimize First Contentful Paint (FCP) - consider reducing render-blocking resourcesapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsImprove Largest Contentful Paint (LCP) - optimize largest element loadingapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsReduce Cumulative Layout Shift (CLS) - add size attributes to images and embedsapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsReduce First Input Delay (FID) - optimize JavaScript executionapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnetworkapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsOptimize network requests - consider caching and reducing payload sizesapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsOptimize network requests - consider caching and reducing payload sizesapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsloadapp/utils/performanceMetrics.ts'app/utils/performanceMetrics.tsthis.getMetrics()app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsthis.getWebVitals()
summary: {
app/utils/performanceMetrics.ts;
totalMetricapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsthis.metrics.app/utils/performanceMetrics.ts;
const avgLoadTime = loadMetrics.reduce((sumapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsthis.getMetrics()app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsthis.getWebVitals()
summarapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts{app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsthis.metrics.lengthapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsthis.calculatePerformanceScore()
recommendationapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsthis.getRecommendations()app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnew Date()app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnew Date()app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts{app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts{app/utils/performanceMetrics.ts"app/utils/performanceMetrics.app/utils/performanceMetrics.ts;
// totalJSHeapSize: app/utils/performanceMetrics.ts;
// jsHeapSizeLimiapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnumberapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnumberapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsnumberapp/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsboolean;app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.tsFix JSX expression */app/utils/performanceMetrics.ts"app/utils/performanceMetrics.ts</T>
,}