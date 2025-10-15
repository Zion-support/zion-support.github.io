
interface PerformanceMetrics {}
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = false
}) => {}
  const [metrics, setMetrics] = useState<PerformanceMetrics>({)}
    fcp: null,
    lcp: null,
    fid= null,
    cls: null,
    ttfb: null,
    fmp: null,
    memory: null,

      return
    const newMetrics: PerformanceMetrics  =  {}
      fcp: null,
      lcp: null,
      fid= null,
      cls: null,
      ttfb: null,
      fmp: null,
      memory: null,
    if (fcpEntry) {}
      newMetrics.fcp = fcpEntry.startTime


    // Largest Contentful Paint (LCP)
    if (lcpEntries.length > 0) {}
      newMetrics.lcp = lcpEntries[lcpEntries.length - 1].startTime


    // First Input Delay (FID)
    clsEntries.forEach((entry: any) => {}
      if (!entry.hadRecentInput) {}
        clsValue += entry.value

    })
    newMetrics.cls = clsValue
    // Time to First Byte (TTFB)
    if (navigationEntry) {}
      newMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      newMetrics.navigation = {}
        loadEventEnd: navigationEntry.loadEventEnd,
        domContentLoadedEventEnd: navigationEntry.domContentLoadedEventEnd,
        domContentLoadedEventStart: navigationEntry.domContentLoadedEventStart,
        loadEventStart: navigationEntry.loadEventStart

    }


    // First Meaningful Paint (FMP) - approximated
if (fmpEntry) {}
      newMetrics.fmp = fmpEntry.startTime


    // Memory usage
newMetrics.memory = {}
        usedJSHeapSize: memoryInfo.usedJSHeapSize,
        totalJSHeapSize: memoryInfo.totalJSHeapSize,
        jsHeapSizeLimit: memoryInfo.jsHeapSizeLimit
observer.disconnect()
        clearInterval(interval)
  }, [
    measurePerformance, enableRealTimeMonitoring"
  "
  ])"
  // This component doesn"t render anything visible"
"
"
    if (logToConsole) {}"
      console.log('Performance Metrics:'
          if (entry.entryType === 'largest-contentful-paint'
              entry.entryType === 'first-input'
              entry.entryType === 'layout-shift'
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'
  // This component doesn'