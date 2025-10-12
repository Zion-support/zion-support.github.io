import { useEffect, useState} from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB} from 'web-vitals';

interface PerformanceMetrics {
  lcp: number | null,
  inp: number | null,
  cls: number | null,
  fcp: number | null,
  ttfb: number | null,
  memoryUsage: number | null,
  loadTime: number | null
}

interface PerformanceReport {
  metrics: PerformanceMetrics,
  timestamp: string,
  userAgent: string,
  connectionType: string,
  deviceMemory: number | null
}

const EnhancedPerformanceMonitor: React.FC = () => {
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
    const startTime = performance.now()

    // Monitor Core Web Vitals
    const measureWebVitals = () => {
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

    // Monitor memory usage
    const measureMemoryUsage = () => {
      if ('memory' in, performance) {
        const memory = (performance as, any).memory
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }))
      }
    }

    // Monitor load time
    const measureLoadTime = () => {
      window.addEventListener('load', () => {
        const loadTime = performance.now() - startTime
        setMetrics(prev => ({ ...prev, loadTime }))
      })
    }

    // Monitor resource loading
    const monitorResourceLoading = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming
            if (resource.duration > 1000) { // Log slow resources
              console.warn('Slow resource detected: ', {
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

    // Monitor layout shifts
    const monitorLayoutShifts = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'layout-shift') {
            const layoutShift = entry as PerformanceEntry & { value: number }
            if (layoutShift.value > 0.1) { // Log significant layout shifts
              console.warn('Significant layout shift detected: ', {
                value: layoutShift.value,
                startTime: layoutShift.startTime
              })
            }
          }
        })
      })
      observer.observe({ entryTypes: ['layout-shift'] })
    }

    // Generate performance report
    const generatePerformanceReport = (): PerformanceReport => {
      const report: PerformanceReport = {
        metrics,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        connectionType: (navigator as, any).connection?.effectiveType || 'unknown',
        deviceMemory: (navigator as, any).deviceMemory || null
      }

      // Send to analytics (in a real app, you'd send this to your analytics, service)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
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

      return report
    }

    // Initialize monitoring
    setIsMonitoring(true)
    measureWebVitals()
    measureMemoryUsage()
    measureLoadTime()
    monitorResourceLoading()
    monitorLayoutShifts()

    // Generate report after 5 seconds
    const reportTimer = setTimeout(() => {
      const report = generatePerformanceReport()
      console.log('Performance Report: ', report)
    }, 5000)

    // Cleanup
    return () => {
      clearTimeout(reportTimer)
      setIsMonitoring(false)
    }
  }, [])

  // Performance optimization suggestions
  const getPerformanceSuggestions = (): string[] => {
    const suggestions: string[] = []

    if (metrics.lcp && metrics.lcp > 2500) {
      suggestions.push('LCP is above 2.5 s - consider optimizing images and reducing render-blocking resources')
    }

    if (metrics.inp && metrics.inp > 200) {
      suggestions.push('INP is above 200 ms - consider reducing JavaScript execution time')
    }

    if (metrics.cls && metrics.cls > 0.1) {
      suggestions.push('CLS is above 0.1 - consider fixing layout shifts and adding size attributes to images')
    }

    if (metrics.fcp && metrics.fcp > 1800) {
      suggestions.push('FCP is above 1.8 s - consider optimizing critical rendering path')
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      suggestions.push('TTFB is above 600 ms - consider optimizing server response time')
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 50) {
      suggestions.push('High memory usage detected - consider optimizing memory leaks and reducing bundle size')
    }

    return suggestions
  }

  const suggestions = getPerformanceSuggestions()

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <h3 className="text-sm font-boldmb-2"  >Performance Monitor</h3>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div  >LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >INP: {metrics.inp ? `${metrics.inp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}</div>
        <div  >FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >Memory: {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}</div>
        <div  >Load Time: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'Measuring...'}</div>
      
      {suggestions.length > 0 && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="text-xs font-semiboldmb-1"  >Suggestions:</div>
          <ul className="w-5h-5ml-2" />
            {suggestions.map((suggestion, index) => (
              <li key="{index}" className="text-yellow-300"  >• {suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default EnhancedPerformanceMonitor;