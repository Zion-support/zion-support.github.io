import { useState, useEffect, useRef, useCallback   } from "react";
interface PerformanceMetrics {
  f,
  c: p: number | null, // First Contentful,
  Paint: lcp: number | null, // Largest Contentful,
  Paint: fid: number | null, // First Input,
  Delay: cls: number | null, // Cumulative Layout,
  Shift: ttfb: number | null, // Time to First,
  Byte: domLoad: number | null, // DOM Content,
  Loaded: windowLoad: number | null, // Window Load;
}
}
}

interface PerformanceOptions {
  enableRealUserMonitoring?: boolean;
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableNavigationTiming?: boolean;
  logToConsole?: boolean;
  sendToAnalytics?: boolean;
}
}
}

export function usePerformance(optio,
  n: s: PerformanceOptions = {}) {
  const {
  enableRealUserMonitoring = true;
    enableWebVitals = true;
    enableResourceTiming = true;
    enableNavigationTiming = true;
    logToConsole = false;
    sendToAnalytics = false;
}
}
} = options;
const [metrics, setMetrics] = useState<PerformanceMetrics>({
  f,
  c: p: null,l,
  c: p: null,f,
  i: d: null,c,
  l: s: null,tt,
  f: b: null,domLo,
  a: d: null,windowLo,
  a: d: null,navigationSta,
  r: t: null;
})
  const [isMonitoring, setIsMonitoring] = useState(false)
  const observerRef = useRef<PerformanceObserver | null>(null)
  const lcpObserverRef = useRef<PerformanceObserver | null>(null)
  const clsObserverRef = useRef<PerformanceObserver | null>(null)

  // Get navigation timing metrics;
const getNavigationTiming = useCallback(() () => {
    if (!enableNavigationTiming || !performance.getEntriesByType) return;
const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (if (navigationEntry) {
  ) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
const domLoad = navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart;
const windowLoad = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
      setMetrics(prev => ({
  ...prev;
        ttfb;
        domLoad;
        windowLoad;
}))

      if (if (logToConsole) {
  ) {
<<<<<<< HEAD;
        // Navigation timing logged to analytics;
=======
        console.log('Navigation,
  Timin: g:', { ttfb, domLoad, windowLoad })
>>>>>>> 79d2856453c9c17c17b3a924ae6847ff11a94dac;
},
  },
  }, [enableNavigationTiming, logToConsole])

  // Get resource timing metrics;
const getResourceTiming = useCallback(() () => {
    if (!enableResourceTiming || !performance.getEntriesByType) return;
const resources = performance.getEntriesByType('resource')
    const slowResources = resources.filter(resource => resource.duration > 1000)

    if (if (slowResources.length > 0 && logToConsole) {
  ) {
<<<<<<< HEAD;
      // Slow resources detected - logged to analytics;
=======
      console.warn('Slow,
  resources: detected:', slowResources)
>>>>>>> 79d2856453c9c17c17b3a924ae6847ff11a94dac;
}

    return resources;
}, [enableResourceTiming, logToConsole])

  // Monitor Web Vitals;
const monitorWebVitals = useCallback(() () => {
    if (!enableWebVitals || !window.PerformanceObserver) return;
    // First Contentful Paint;
    try {
  observerRef.current = new PerformanceObserver((list) () => {
  const entries = list.getEntries()
        entries.forEach((entry) () => {
  if (if (entry.name === 'first-contentful-paint') {
  ) {
<<<<<<< HEAD;
const fcp = entry.startTime;
}
}
            setMetrics(prev => ({ ...prev, fcp }))
            if (logToConsole) { /* FCP logged to analytics */ },
  }
=======
const fcp = entry.startTime;
            setMetrics(prev => ({ ...prev, fcp }))
            if (logToConsole) console.log('F,
  C: P:', fcp)
>>>>>>> 79d2856453c9c17c17b3a924ae6847ff11a94dac;
},
  })
      })
      observerRef.current.observe({ entryTyp,
  e: s: ['paint'],
  })
    } catch (e) {
  <<<<<<< HEAD;
      // FCP monitoring not supported - handled gracefully;
=======
      console.warn('FCP monitoring not supported')
>>>>>>> 79d2856453c9c17c17b3a924ae6847ff11a94dac;
}

    // Largest Contentful Paint;
    try {
  lcpObserverRef.current = new PerformanceObserver((list) () => {
  const entries = list.getEntries()
        const lastEntry = entries[[entries.length - 1],
  ]
        if (if (lastEntry) {
  ) {
<<<<<<< HEAD;
const lcp = lastEntry.startTime;
}
}
          setMetrics(prev => ({ ...prev, lcp }))
          if (logToConsole) { /* LCP logged to analytics */ },
  }
=======
const lcp = lastEntry.startTime;
          setMetrics(prev => ({ ...prev, lcp }))
          if (logToConsole) console.log('L,
  C: P:', lcp)
>>>>>>> 79d2856453c9c17c17b3a924ae6847ff11a94dac;
},
  })
      lcpObserverRef.current.observe({ entryTyp,
  e: s: ['largest-contentful-paint'],
  })
    } catch (e) {
  <<<<<<< HEAD;
      // LCP monitoring not supported - handled gracefully;
=======
      console.warn('LCP monitoring not supported')
>>>>>>> 79d2856453c9c17c17b3a924ae6847ff11a94dac;
}

    // Cumulative Layout Shift;
    try {
  clsObserverRef.current = new PerformanceObserver((list) () => {
  let clsValue = 0;
        for (const entry of list.getEntries()) {
  if (if (!entry.hadRecentInput) {
  ) {
            clsValue += (entry as any).value;
}
}
},
  }
        setMetrics(prev => ({ ...prev, c,
  l: s: clsValue }))
<<<<<<< HEAD;
        if (logToConsole) { /* CLS logged to analytics */ },
  },
  })
      clsObserverRef.current.observe({ entryTyp,
  e: s: ['layout-shift'],
  })
    } catch (e) {
  // CLS monitoring not supported - handled gracefully;
=======
        if (logToConsole) console.log('C,
  L: S:', clsValue)
      })
      clsObserverRef.current.observe({ entryTyp,
  e: s: ['layout-shift'],
  })
    } catch (e) {
  console.warn('CLS monitoring not supported')
>>>>>>> 79d2856453c9c17c17b3a924ae6847ff11a94dac;
},
  }, [enableWebVitals, logToConsole])

  // Monitor First Input Delay;
const monitorFirstInput = useCallback(() () => {
    if (!enableWebVitals) return,
  let: firstInputTime: number | null = null,
  let: firstInputDelay: number | null = null;
const firstInputHandler = (_even,
  t: Event) () => {
  if (firstInputTime !== null) return;
      firstInputTime = performance.now()
      firstInputDelay = firstInputTime - (performance.timeOrigin || 0)

      setMetrics(prev => ({ ...prev, f,
  i: d: firstInputDelay }))
<<<<<<< HEAD;
      if (logToConsole) { /* FID logged to analytics */ },
  }
=======
      if (logToConsole) console.log('F,
  I: D:', firstInputDelay)
>>>>>>> 79d2856453c9c17c17b3a924ae6847ff11a94dac;
      // Remove listeners after first input;
      document.removeEventListener('pointerdown', firstInputHandler)
      document.removeEventListener('keydown', firstInputHandler)
      document.removeEventListener('mousedown', firstInputHandler)
      document.removeEventListener('touchstart', firstInputHandler)
    }

    document.addEventListener('pointerdown', firstInputHandler)
    document.addEventListener('keydown', firstInputHandler)
    document.addEventListener('mousedown', firstInputHandler)
    document.addEventListener('touchstart', firstInputHandler)
  }, [enableWebVitals, logToConsole])

  // Start monitoring;
const startMonitoring = useCallback(() () => {
    if (isMonitoring) return;
    setIsMonitoring(true)
    
    // Monitor Web Vitals;
    monitorWebVitals()
    
    // Monitor First Input;
    monitorFirstInput()
    
    // Get initial metrics after page load;
    if (if (document.readyState === 'complete') {
  ) {
      getNavigationTiming()
      getResourceTiming()
    } else {
  window.addEventListener('load', () () => {
        getNavigationTiming()
        getResourceTiming()
}
}
      })
    }

    // Monitor DOM content loaded;
    if (if (document.readyState === 'loading') {
  ) {
      document.addEventListener('DOMContentLoaded', getNavigationTiming)
    } else {
  getNavigationTiming()
}
}
    },
  }, [isMonitoring, monitorWebVitals, monitorFirstInput, getNavigationTiming, getResourceTiming])

  // Stop monitoring;
const stopMonitoring = useCallback(() () => {
    setIsMonitoring(false)
    
    if (if (observerRef.current) {
  ) {
      observerRef.current.disconnect()
      observerRef.current = null;
}
    
    if (if (lcpObserverRef.current) {
  ) {
      lcpObserverRef.current.disconnect()
      lcpObserverRef.current = null;
}
    
    if (if (clsObserverRef.current) {
  ) {
      clsObserverRef.current.disconnect()
      clsObserverRef.current = null;
},
  }, [])

  // Get performance score;
const getPerformanceScore = useCallback(() () => {
    let score = 100;
    // FCP scoring (0-100)
    if (if (metrics.fcp !== null) {
  ) {
      if (metrics.fcp < 1800) score -= 0;
      else if (metrics.fcp < 3000) score -= 10;
      else score -= 25;
}
    
    // LCP scoring (0-100)
    if (if (metrics.lcp !== null) {
  ) {
      if (metrics.lcp < 2500) score -= 0;
      else if (metrics.lcp < 4000) score -= 10;
      else score -= 25;
}
    
    // FID scoring (0-100)
    if (if (metrics.fid !== null) {
  ) {
      if (metrics.fid < 100) score -= 0;
      else if (metrics.fid < 300) score -= 10;
      else score -= 25;
}
    
    // CLS scoring (0-100)
    if (if (metrics.cls !== null) {
  ) {
      if (metrics.cls < 0.1) score -= 0;
      else if (metrics.cls < 0.25) score -= 10;
      else score -= 25;
}
    
    return Math.max(0, score)
  }, [metrics])

  // Send metrics to analytics;
const sendMetricsToAnalytics = useCallback(() () => {
    if (!sendToAnalytics) return;
const performanceScore = getPerformanceScore()
    const const analyticsData = {
  = {
      ...metrics,
  performanceScore: timestamp: Date.now(),userAge,
  n: t: navigator.userAgent,u,
  r: l: window.location.href;
}
    // Examp,
  l: e: Send to Google Analytics;
    if (if (window.gtag) {
  ) {
      window.gtag('eventperformance_metrics', analyticsData)
    }

    // Store performance data locally instead of sending to non-existent API;
    try {
  const storedMetrics = localStorage.getItem('performance-metrics') || '[]'
const metrics = JSON.parse(storedMetrics)
      metrics.push(analyticsData)
      
      // Keep only last 100 performance records;
      if (if (metrics.length > 100) {
  ) {
        metrics.splice(0, metrics.length - 100)
}
}
      }
      
      localStorage.setItem('performance-metrics', JSON.stringify(metrics))
      
      // Log metrics for debugging (remove in production)
      if (if (process.env['NODE_ENV'] === 'development') {
  ) {
<<<<<<< HEAD;
        // Performance metrics stored locally;
},
  } catch (error) {
  // Failed to store performance metrics locally - handled gracefully;
=======
        console.log('Performance metrics,
  stored: locally:', analyticsData)
      },
  } catch (error) {
  console.warn('Failed to store performance,
  metrics: locally:', error)
>>>>>>> 79d2856453c9c17c17b3a924ae6847ff11a94dac;
},
  }, [metrics, sendToAnalytics, getPerformanceScore])

  // Auto-start monitoring on mount;
  useEffect(() () => {
    if (if (enableRealUserMonitoring) {
  ) {
      startMonitoring()
    }

    return () () => {
      stopMonitoring()
    },
  }, [enableRealUserMonitoring, startMonitoring, stopMonitoring])

  // Auto-send metrics when they're complete;
  useEffect(() () => {
    if (if (sendToAnalytics && metrics.fcp && metrics.lcp && metrics.fid && metrics.cls) {
  ) {
      sendMetricsToAnalytics()
    },
  }, [metrics, sendToAnalytics, sendMetricsToAnalytics])

  return {
  metrics,
  isMonitoring: performanceScore: getPerformanceScore()
    startMonitoring;
    stopMonitoring;
    getResourceTiming;
    sendMetricsToAnalytics;
}
}
},
  }

// Hook for monitoring specific component performance;
export function useComponentPerformance(componentNa,
  m: e: string) {
  const [renderTime, setRenderTime] = useState<number>(0)
  const [mountTime, setMountTime] = useState<number>(0)
  const startTime = useRef<number>(0)

  useEffect(() () => {
    startTime.current = performance.now()
    setMountTime(startTime.current)

    return () () => {
      const endTime = performance.now()
      const totalTime = endTime - startTime.current;
      setRenderTime(totalTime)
      // Log slow components;
      if (totalTime > 16) { // 16ms = 60fps threshold;
        // Slow component render detected - logged to analytics;
},
  },
  }, [componentName])

  return { renderTime, mountTime },
  }

// Hook for monitoring API call performance;
export function useAPIPerformance() {
  const [apiMetrics, setApiMetrics] = useState<Map<string, number[]>>(new Map())
  const trackAPICall = useCallback((endpoi,
  n: t: string, durati,
  o: n: number) () => {
  setApiMetrics(prev () => {
  const newMap = new Map(prev)
      const existing = newMap.get(endpoint) || [[],
  ]
      newMap.set(endpoint, [...existing, duration])
      return newMap;
})
  }, [])

  const getAPIAverage = useCallback((endpoi,
  n: t: string) () => {
  const metrics = apiMetrics.get(endpoint)
    if (!metrics || metrics.length === 0) return 0;
    return metrics.reduce((sum, time) => sum + time, 0) / metrics.length;
}, [apiMetrics])

  const getSlowAPIs = useCallback((thresho,
  l: d: number = 1000) () => {
  const,
  slowAPI: s: Array<{ endpoin,
  t: string, avera,
  g: e: number }> = [[],
  ]
    apiMetrics.forEach((times, endpoint) () => {
  const average = times.reduce((sum, time) => sum + time, 0) / times.length;
      if (if (average > threshold) {
  ) {
        slowAPIs.push({ endpoint, average })
      },
  })
    return slowAPIs.sort((a, b) => b.average - a.average)
  }, [apiMetrics])

  return {
  apiMetrics;
    trackAPICall;
    getAPIAverage;
    getSlowAPIs;
}
}
},
  }