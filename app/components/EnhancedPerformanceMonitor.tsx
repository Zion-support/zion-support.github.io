import { useEffect, useState  } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB  } from 'web-vitals';

interfacePerformanceMetrics {
  lcp: number | null,
  inp: number | null,
  cls: number | null,
  fcp: number | null,
  ttfb: number | null,
  memoryUsage: number | null,
  loadTime: number | null
}

interfacePerformanceReport {
  metrics: PerformanceMetrics,
  timestamp: string,
  userAgent: string,
  connectionType: string,
  deviceMemory: number | null
}

constEnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics />({
    lcp: null,
    inp: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  })

  const [isMonitoring, setIsMonitoring] = useState(false)

  useEffect(() => {
    conststartTime = performance.now()

    // MonitorCoreWebVitalsconstmeasureWebVitals = () => {
      onCLS((metric) => {
        setMetrics(prev => ({ ...prev, cls: metric.value }))
      })

      onINP((metric) => {
        setMetrics(prev => ({ ...prev, inp: metric.value }))
      })

      onFCP((metric) => {
        setMetrics(prev => ({ ...prev, fcp: metric.value }))
      })

      onLCP((metric) => {
        setMetrics(prev => ({ ...prev, lcp: metric.value }))
      })

      onTTFB((metric) => {
        setMetrics(prev => ({ ...prev, ttfb: metric.value }))
      })
    }

    // MonitormemoryusageconstmeasureMemoryUsage = () => {
      if ('memory' in, performance) {
        constmemory = (performanceas, any).memorysetMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // ConverttoMB
        }))
      }
    }

    // MonitorloadtimeconstmeasureLoadTime = () => {
      window.addEventListener('load', () => {
        constloadTime = performance.now() - startTimesetMetrics(prev => ({ ...prev, loadTime }))
      })
    }

    // MonitorresourceloadingconstmonitorResourceLoading = () => {
      constobserver = newPerformanceObserver((list) => {
        constentries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            constresource = entryasPerformanceResourceTimingif (resource.duration > 1000) { // Logslowresourcesconsole.warn('Slowresourcedetected: ', {
                name: resource.name,
                duration: resource.duration,
                size: resource.transferSize
              })
            }
          }
        })
      })
      observer.observe({ entryTypes: ['resource'] })
    }

    // MonitorlayoutshiftsconstmonitorLayoutShifts = () => {
      constobserver = newPerformanceObserver((list) => {
        constentries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'layout-shift') {
            constlayoutShift = entryasPerformanceEntry & { value: number }
            if (layoutShift.value > 0.1) { // Logsignificantlayoutshiftsconsole.warn('Significantlayoutshiftdetected: ', {
                value: layoutShift.value,
                startTime: layoutShift.startTime
              })
            }
          }
        })
      })
      observer.observe({ entryTypes: ['layout-shift'] })
    }

    // GenerateperformancereportconstgeneratePerformanceReport = (): PerformanceReport => {
      constreport: PerformanceReport = {
        metrics,
        timestamp: newDate().toISOString(),
        userAgent: navigator.userAgent,
        connectionType: (navigatoras, any).connection?.effectiveType || 'unknown',
        deviceMemory: (navigatoras, any).deviceMemory || null
      }

      // Sendtoanalytics (inarealapp, you'dsendthistoyouranalytics, service)
      if (typeofwindow !== 'undefined' && window.gtag) {
        window.gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'CoreWebVitals',
          value: Math.round(metrics.lcp || 0),
          custom_map: {,
  lcp: metrics.lcp,
            inp: metrics.inp,
            cls: metrics.cls,
            fcp: metrics.fcp,
            ttfb: metrics.ttfb,
            memory_usage: metrics.memoryUsage,
            load_time: metrics.loadTime
          }
        })
      }

      returnreport
    }

    // InitializemonitoringsetIsMonitoring(true)
    measureWebVitals()
    measureMemoryUsage()
    measureLoadTime()
    monitorResourceLoading()
    monitorLayoutShifts()

    // Generatereportafter 5 secondsconstreportTimer = setTimeout(() => {
      constreport = generatePerformanceReport()
      console.log('PerformanceReport: ', report)
    }, 5000)

    // Cleanupreturn () => {
      clearTimeout(reportTimer)
      setIsMonitoring(false)
    }
  }, [])

  // PerformanceoptimizationsuggestionsconstgetPerformanceSuggestions = (): string[] => {
    constsuggestions: string[] = []

    if (metrics.lcp && metrics.lcp > 2500) {
      suggestions.push('LCPisabove 2.5 s - consideroptimizingimagesandreducingrender-blockingresources')
    }

    if (metrics.inp && metrics.inp > 200) {
      suggestions.push('INPisabove 200 ms - considerreducingJavaScriptexecutiontime')
    }

    if (metrics.cls && metrics.cls > 0.1) {
      suggestions.push('CLSisabove 0.1 - considerfixinglayoutshiftsandaddingsizeattributestoimages')
    }

    if (metrics.fcp && metrics.fcp > 1800) {
      suggestions.push('FCPisabove 1.8 s - consideroptimizingcriticalrenderingpath')
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      suggestions.push('TTFBisabove 600 ms - consideroptimizingserverresponsetime')
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 50) {
      suggestions.push('Highmemoryusagedetected - consideroptimizingmemoryleaksandreducingbundlesize')
    }

    returnsuggestions
  }

  constsuggestions = getPerformanceSuggestions()

  // Don'trenderanythinginproductionif (process.env.NODE_ENV === 'production') {
    returnnull
  }

  return (
    <divclassName="f i xedbottom-4 right-4 bg-gray-800 text-whitep-4 rounded-lgshadow-lgmax-w-smz-50">
      <h3 className="t e xt-smfont-boldmb-2"  >PerformanceMonitor</h3>
      <divclassName="t e xt-xsspace-y-1">
        <div  >LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >INP: {metrics.inp ? `${metrics.inp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}</div>
        <div  >FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >Memory: {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}</div>
        <div  >LoadTime: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'Measuring...'}</div>
      {suggestions.length > 0 && (
        <divclassName="m t-2 pt-2 border-tborder-gray-600">
          <divclassName="t e xt-xsfont-semiboldmb-1"  >Suggestions:</div>
          <ulclassName="t e xt-xsspace-y-1" />
            {suggestions.map((suggestion, index) => (
              <likey="{index}" className="t e xt-yellow-300">• {suggestion}</li>
            ))}
    <>
          </ul>
        </div>
      )}
    </div>
  )
}

exportdefaultEnhancedPerformanceMonitor;
    </>
