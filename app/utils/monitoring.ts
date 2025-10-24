app/utils/monitoring.ts'app/utils/monitoring.app/utils/monitoring.ts;
import React from app/utils/monitoring.ts'app/utils/monitoring.ts;
/**
 * Comprehensive Monitoring app/utils/monitoring.ts;
 * Real-time, application, monitoring, performance, tracking, and error app/utils/monitoring.ts;
 */
const performanceConfig = {
monitoring: app/utils/monitoring.ts"app/utils/monitoring.ts,enableLongTaskDetection: app/utils/monitoring.ts"app/utils/monitoring.ts,g: app/utils/monitoring.ts"app/utils/monitoring.ts,sampleRate: app/utils/monitoring.ts"app/utils/monitoring.ts,}
  webVitals: app/utils/monitoring.ts"app/utils/monitoring.ts,lcp: app/utils/monitoring.ts"app/utils/monitoring.ts,d: app/utils/monitoring.ts"app/utils/monitoring.ts,needsImprovement: app/utils/monitoring.ts"app/utils/monitoring.ts,}
    fid: app/utils/monitoring.ts"app/utils/monitoring.ts,d: app/utils/monitoring.ts"app/utils/monitoring.ts,needsImprovement: app/utils/monitoring.ts"app/utils/monitoring.ts,}
    cls: app/utils/monitoring.ts"app/utils/monitoring.ts,d: app/utils/monitoring.ts"app/utils/monitoring.ts,needsImprovement: app/utils/monitoring.ts"app/utils/monitoring.ts,}
    fcp: app/utils/monitoring.ts"app/utils/monitoring.ts,d: app/utils/monitoring.ts"app/utils/monitoring.ts,needsImprovement: app/utils/monitoring.ts"app/utils/monitoring.ts,}
    ttfb: app/utils/monitoring.ts"app/utils/monitoring.ts,d: app/utils/monitoring.ts"app/utils/monitoring.ts,needsImprovement: app/utils/monitoring.ts"app/utils/monitoring.ts,}
    inp: app/utils/monitoring.ts"app/utils/monitoring.ts,d: app/utils/monitoring.ts"app/utils/monitoring.ts,needsImprovement: app/utils/monitoring.ts"app/utils/monitoring.ts,}
  }
}
export interface PerformanceMetrics {

lcp?: app/utils/monitoring.ts;
fid?: app/utils/monitoring.ts;
cls?: app/utils/monitoring.ts;
fcp?: app/utils/monitoring.ts;
ttfb?: app/utils/monitoring.ts;
inp?: app/utils/monitoring.ts;
}
}

}

export interface ErrorReport {

message: app/utils/monitoring.ts"app/utils/monitoring.ts,p: app/utils/monitoring.ts"app/utils/monitoring.ts,userAgent: app/utils/monitoring.ts"app/utils/monitoring.ts,l: app/utils/monitoring.ts"app/utils/monitoring.app/utils/monitoring.ts;
}
}
  }

class MonitoringService{;}
private metrics: app/utils/monitoring.ts"app/utils/monitoring.ts,;}

  private errors: app/utils/monitoring.ts"app/utils/monitoring.ts,r: app/utils/monitoring.ts"app/utils/monitoring.tsundefinedapp/utils/monitoring.ts'app/utils/monitoring.ts,this.initializeMonitoring()
    , , , }
  }
  private initializeMonitoring(): void{// Monitor Web app/utils/monitoring.ts;
this.monitorWebVitals()
    // Monitor Long app/utils/monitoring.ts;
this.monitorLongTasks()
    // Monitor Resource app/utils/monitoring.ts;
this.monitorResourceTiming()
    // Global Error app/utils/monitoring.ts;
this.setupErrorHandling();}
  }
  private monitorWebVitals(): void{
if (app/utils/monitoring.ts'app/utils/monitoring.ts in, window) {
try {
// Largest Contentful app/utils/monitoring.ts;
const lcpObserver = new PerformanceObserver((list) => {
const entries = list.getEntries()
;,}
const lastEntry = entries[entries.length - 1,] as PerformanceEntry & { renderTime?: number; loadTime?: number }
          this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime || app/utils/monitoring.ts;
this.reportMetric(app/utils/monitoring.ts'app/utils/monitoring.ts, this.metrics.lcp)
        })
lcpObserver.observe({ entryTypes: app/utils/monitoring.ts"app/utils/monitoring.tslargest-contentful-paintapp/utils/monitoring.ts'app/utils/monitoring.ts,})
        // First Input app/utils/monitoring.ts;
const fidObserver = new PerformanceObserver((list) => {
const entries = list.getEntries()
          entries.forEach((entry: app/utils/monitoring.ts"app/utils/monitoring.ts,this.metrics.fid = (entry, as, any).processingStart - entry.app/utils/monitoring.ts;
this.reportMetric(app/utils/monitoring.ts'app/utils/monitoring.ts, this.metrics.fid)
          })
        })
fidObserver.observe({ entryTypes: app/utils/monitoring.ts"app/utils/monitoring.tsfirst-inputapp/utils/monitoring.ts'app/utils/monitoring.ts,})
        // Cumulative Layout app/utils/monitoring.ts;
let clsValue = app/utils/monitoring.ts;
const clsObserver = new PerformanceObserver(list => {
)
const entries = list.getEntries()
entries.forEach((entry: app/utils/monitoring.ts"app/utils/monitoring.ts,if (!(entry, as, any).hadRecentInput) {
clsValue += entry.app/utils/monitoring.ts;
this.metrics.cls = app/utils/monitoring.ts;
this.reportMetric(app/utils/monitoring.ts'app/utils/monitoring.ts, clsValue)
}
          })
        })
clsObserver.observe({ entryTypes: app/utils/monitoring.ts"app/utils/monitoring.tslayout-shiftapp/utils/monitoring.ts'app/utils/monitoring.ts,})
        // First Contentful app/utils/monitoring.ts;
const fcpObserver = new PerformanceObserver(list => {
)
const entries = list.getEntries()
entries.forEach(entry => {;)
this.metrics.fcp = entry.startTime)
this.reportMetric(app/utils/monitoring.ts'app/utils/monitoring.ts, entry.startTime)
          
})
        })
fcpObserver.observe({ entryTypes: app/utils/monitoring.ts"app/utils/monitoring.tspaintapp/utils/monitoring.ts'app/utils/monitoring.ts,})
      } catch(error) {   
        , , , }
    }
  }
  private monitorLongTasks(): void{
if(app/utils/monitoring.ts'app/utils/monitoring.ts in window && performanceConfig.monitoring.enableLongTaskDetection) {  
try { 
const longTaskObserver = new PerformanceObserver((list) => {
for (const entry of list.getEntries()) {,, , , ;}
            ;}
        ;}); longTaskObserver.observe({ entryTypes: app/utils/monitoring.ts"app/utils/monitoring.tslongtaskapp/utils/monitoring.ts'app/utils/monitoring.ts,}); } catch(error) {    
  // Long task API might not be, app/utils/monitoring.ts;
, , , , }
    }
  }
  private monitorResourceTiming(): void{
if(app/utils/monitoring.ts'app/utils/monitoring.ts in, window) {  
try { 
const resourceObserver = new PerformanceObserver((list) => {
const entries = list.getEntries()
          entries.forEach((entry: app/utils/monitoring.ts"app/utils/monitoring.ts,if (entry.duration > 1000) {
, , , }
              }
          })
        })
resourceObserver.observe({ entryTypes: app/utils/monitoring.ts"app/utils/monitoring.tsresourceapp/utils/monitoring.ts'app/utils/monitoring.ts,})
      } catch(_error) {   
        , , , }
    }
  }
  private setupErrorHandling(): void{// Global error app/utils/monitoring.ts;
window.addEventListener(app/utils/monitoring.ts'app/utils/monitoring.ts, (event) => {
this.logError({
message: app/utils/monitoring.ts"app/utils/monitoring.ts,stack: app/utils/monitoring.ts"app/utils/monitoring.ts,)
p: app/utils/monitoring.ts"app/utils/monitoring.ts,userAgent: app/utils/monitoring.ts"app/utils/monitoring.ts,}
ur,l: app/utils/monitoring.ts"app/utils/monitoring.ts,})

    })
    // Unhandled promise rejection app/utils/monitoring.ts;
window.addEventListener(app/utils/monitoring.ts'app/utils/monitoring.ts, (event) => {
this.logError({;)
message: app/utils/monitoring.ts"app/utils/monitoring.tsUnhandled Promise Rejectioapp/utils/monitoring.ts"app/utils/monitoring.ts${event.reasonapp/utils/monitoring.ts"app/utils/monitoring.ts)
timestamp: app/utils/monitoring.ts"app/utils/monitoring.ts,userAgent: app/utils/monitoring.ts"app/utils/monitoring.ts,l: app/utils/monitoring.ts"app/utils/monitoring.ts,})

    })
  }
  private reportMetric(name: app/utils/monitoring.ts"app/utils/monitoring.ts,value: app/utils/monitoring.ts"app/utils/monitoring.ts,// Sample app/utils/monitoring.ts;
if (Math.random() > performanceConfig.monitoring.sampleRate) {
return,}
}
    const thresholds = performanceConfig.webVitals[name as keyof typeof performanceConfig.webVitals,]
if (thresholds) {
const rating = value <= thresholds.good ? app/utils/monitoring.ts'app/utils/monitoring.ts : value <= thresholds.needsImprovement ? app/utils/monitoring.ts'app/utils/monitoring.ts : app/utils/monitoring.ts'app/utils/monitoring.app/utils/monitoring.ts;
,}

    // Send to analytics (if, configured)
if (typeof gtag === app/utils/monitoring.ts'app/utils/monitoring.ts) {
gtag(app/utils/monitoring.ts'app/utils/monitoring.ts, name, {)
value: app/utils/monitoring.ts"app/utils/monitoring.tsclsapp/utils/monitoring.ts'app/utils/monitoring.ts,event_category: app/utils/monitoring.ts"app/utils/monitoring.tsWeb Vitalsapp/utils/monitoring.ts'app/utils/monitoring.ts,})
    }

  }

public logError(error: app/utils/monitoring.ts"app/utils/monitoring.ts,this.errors = this.errors.slice(-50);,, , }
    }
    // Send to error tracking service (if, configured)
  }
  public getMetrics(): PerformanceMetrics{;}
return { ...this.metrics }
  ;}
  public getErrors(): ErrorReport[] {
return [...this.errors,]
;}
  public clearErrors(): void{
this.errors = [],;}

}

  public measureMemory(): void{
if (app/utils/monitoring.ts'app/utils/monitoring.ts in performance && performanceConfig.monitoring.enableMemoryMonitoring) {;}
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: app/utils/monitoring.ts"app/utils/monitoring.ts,t: app/utils/monitoring.ts"app/utils/monitoring.ts,} }).app/utils/monitoring.ts;
if (memory) {
this.metrics.memory = {
used: app/utils/monitoring.ts"app/utils/monitoring.ts${Math.round(memory.usedJSHeapSize / 1048576)app/utils/monitoring.ts"app/utils/monitoring.app/utils/monitoring.ts;
total: app/utils/monitoring.ts"app/utils/monitoring.ts${Math.round(memory.totalJSHeapSize / 1048576)app/utils/monitoring.ts"app/utils/monitoring.app/utils/monitoring.ts;
limit: app/utils/monitoring.ts"app/utils/monitoring.ts${Math.round(memory.jsHeapSizeLimit / 1048576)app/utils/monitoring.ts"app/utils/monitoring.app/utils/monitoring.ts;
        }
      }
    }
  }
  public measureNavigationTiming(): void{
if (app/utils/monitoring.ts'app/utils/monitoring.ts in window && app/utils/monitoring.ts'app/utils/monitoring.ts in, performance) {
const navigation = performance.getEntriesByType(app/utils/monitoring.ts'app/utils/monitoring.ts)[0,] as app/utils/monitoring.ts;
if (navigation) {
        // eslint-disable-next-line no-app/utils/monitoring.ts;
console.log(app/utils/monitoring.ts'app/utils/monitoring.tsapp/utils/monitoring.ts'app/utils/monitoring.ts,{)}
          app/utils/monitoring.ts'app/utils/monitoring.ts: app/utils/monitoring.ts`app/utils/monitoring.app/utils/monitoring.ts;
          app/utils/monitoring.ts'app/utils/monitoring.ts: app/utils/monitoring.ts`app/utils/monitoring.app/utils/monitoring.ts;
          app/utils/monitoring.ts'app/utils/monitoring.ts: app/utils/monitoring.ts`app/utils/monitoring.app/utils/monitoring.ts;
          app/utils/monitoring.ts'app/utils/monitoring.ts: app/utils/monitoring.ts`app/utils/monitoring.app/utils/monitoring.ts;
          app/utils/monitoring.ts'app/utils/monitoring.ts: app/utils/monitoring.ts`app/utils/monitoring.app/utils/monitoring.ts;
          app/utils/monitoring.ts'app/utils/monitoring.ts: app/utils/monitoring.ts`app/utils/monitoring.app/utils/monitoring.ts;
          app/utils/monitoring.ts'app/utils/monitoring.ts: app/utils/monitoring.ts`app/utils/monitoring.app/utils/monitoring.ts;
        })
        })
      }
    }
  }
}
// Singleton app/utils/monitoring.ts;
const monitoring = new MonitoringService()
export default app/utils/monitoring.ts;
,}