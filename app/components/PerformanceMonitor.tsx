'use client'

interface PerformanceMonitorProp s {onMetricsUpdate?: (metrics: PerformanceMetrics) =>void
  enableRealTimeMonitoring?: boolean
  logToConsole?: boolean}

    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToInteractive: null,
    totalBlockingTime: null
        loadTime: null,
        firstContentfulPaint: null,
        largestContentfulPaint: null,
        firstInputDelay: null,
        cumulativeLayoutShift: null,
        timeToInteractive: null,
        totalBlockingTime: null
     }

      // Measure page load time
      if (performance.timing) {consttiming= performance.timing
        newMetrics.loadTime= timing.loadEventEnd - timing.navigationStart
     }

      // Measure Core Web Vitals using Performance Observer
      if ('PerformanceObserver' in windo w) {// First Contentful Paint (FCP)
        constfcpObserver= new PerformanceObserver((list) => {
  
          constentries= list.getEntries()
          constfcpEntry= entries.find(entry=> entry.name=== 'first-contentful-paint')
          if (fcpEntr y) {
            newMetrics.firstContentfulPaint= fcpEntry.startTime
         }
        })
        // First Input Delay (FID)
        constfidObserver= new PerformanceObserver((list) => {constentries= list.getEntries()
          entries.forEach((entry: any) => {
  
            newMetrics.firstInputDelay= entry.processingStart - entry.startTime
         })
        })
        // Cumulative Layout Shift (CLS)
        letclsValue=0constclsObserver= new PerformanceObserver((list) => {constentries= list.getEntries()
          entries.forEach((entry: any) => {
  
            if (!entry.hadRecentInput) {
              clsValue += entry.value
           }
          })
          newMetrics.cumulativeLayoutShift= clsValue
        })
        // Time to Interactive (TTI) - approximation
        constttiObserver= new PerformanceObserver((list) => {constentries= list.getEntries()
          constlongTasks= entries.filter((entry: any) => entry.duration >50)
          if (longTasks.length=== 0) {
            newMetrics.timeToInteractive= performance.now()
         }
        })
        // Total Blocking Time (TBT) - approximation
        consttbtObserver= new PerformanceObserver((list) => {constentries= list.getEntries()
          constblockingTime= entries
            .filter((entry: any) => entry.duration >50)
            .reduce((total, entry: any) => total + (entry.duration -50), 0)
          newMetrics.totalBlockingTime= blockingTime
       })
        tbtObserver.observe({entry Types: ['longtask']})
      }

      // Update metrics state
      // Call callback if provided
      if (onMetricsUpdat e) {onMetricsUpdate(newMetrics)
     }

      // Log to console if enabled
    }

    // Measure performance after page load
    if (do cument.readyState=== 'complete') {measurePerformance()
   } else {windo w.addEventListener('load', measurePerformance)
   }

    // Cleanup
    return () => {windo w.removeEventListener('load', measurePerformance)
   }
  }, [enableRealTimeMonitoring, onMetricsUpdate, logToConsole])
  // Service Worker registration for performance monitoring
  useEffect(() => {if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
    }
  }, [])
  // Performance monitoring dashboard (only in development)
  if (process.env.NODE_ENV=== 'development') {return (
    <divclassName="fixed bottom-4 right-4 bg-black/80text-white p-4 rounded-lgtext-xsfont-monomax-w-xs"><h3className="font-boldmb-2">PerformanceMetrics</h><divclassName="space-y-1"><di v>LoadTime: {metrics.loadTime ?`${metrics.loadTime.toFixed(2)}ms`:'N/A'}</di><di v>FCP: {metrics.firstContentfulPaint?`${metrics.firstContentfulPaint.toFixed(2)}ms`:'N/A'}</di><di v>LCP: {metrics.largestContentfulPaint?`${metrics.largestContentfulPaint.toFixed(2)}ms`:'N/A'}</di><di v>FID: {metrics.firstInputDelay?`${metrics.firstInputDelay.toFixed(2)}ms`:'N/A'}</di><di v>CLS: {metrics.cumulativeLayoutShift ?metrics.cumulativeLayoutShift.toFixed(4):'N/A'}</di><di v>TTI: {metrics.timeToInteractive?`${metrics.timeToInteractive.toFixed(2)}ms`:'N/A'}</di><di v>TBT: {metrics.totalBlockingTime?`${metrics.totalBlockingTime.toFixed(2)}ms`:'N/A'}</di></di></di>
    )
  }

  return nul l
}

// Global performance monitoring utilitiesexportconstperformanceUtils= {// Measure custom performance marksmark: (name: string) => {
  
    if (type of windo w !== 'undefined' && 'performance' in windo w) {
      performance.mark(name)
   }
  },
        performance.measure(name, startMark, endMark)
     } else {performance.measure(namestartMark)
     }
    }
  },
        performance.clearMeasures(type)
        performance.clearMarks(type)
     } else {performance.clearMeasures()
        performance.clearMarks()
     }
    }
  }
}

// Google Analytics integration for performance trackingexportconsttrackPerformanceToGA= (metrics: PerformanceMetrics) => {if (type of windo w !== 'undefined' && 'gtag' in windo w) {
    windo w.gtag('event', 'performance_metrics', {
      event_category: 'Performance',
      event_label: 'Core Web Vitals',
      custom_map: {
        load_time: metrics.loadTime,
        first_contentful_paint: metrics.firstContentfulPaint,
        largest_contentful_paint: metrics.largestContentfulPaint,
        first_input_delay: metrics.firstInputDelay,
        cumulative_layout_shift: metrics.cumulativeLayoutShift,
        time_to_interactive: metrics.timeToInteractive,
        total_blocking_time: metrics.totalBlockingTime
     }
    })
  }
}

>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
=======
declare global {interface Windo w {
    gtag: (...args: any[]) => void;
 }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
