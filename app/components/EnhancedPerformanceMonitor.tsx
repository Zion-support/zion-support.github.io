import {useEffect, useState} from 'react';
import {onCLS, onINP, onFCP, onLCP, onTTFB} from 'web-vitals';

interface Performance Metrics {
  lcp: number | null,
  inp: number | null,
  cls: number | null,
  fcp: number | null,
  ttfb: number | null,
  memoryUsage: number | null,
  loadTime: number | null
}

interface Performance Report {
  metrics: Performance Metrics,
  timestamp: string,
  userAgent: string,
  connectionType: string,
  deviceMemory: number | null
}

const Enhanced Performance Monitor: React.FC = () => {
  const [metrics, set Metrics] = use State<Performance Metrics/>({
    lcp: null,
    inp: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  })

  const [is Monitoring, set Is Monitoring] = use State(false)

  use Effect(() => {
    const startTime = performance.now()

    // Monitor Core Web Vitals
    const measure WebVitals = () => {
      onCLS((metric) => {
        set Metrics(prev => ({ ...prev, cls: metric.value }))
      })

      onINP((metric) => {
        set Metrics(prev => ({ ...prev, inp: metric.value }))
      })

      onFCP((metric) => {
        set Metrics(prev => ({ ...prev, fcp: metric.value }))
      })

      onLCP((metric) => {
        set Metrics(prev => ({ ...prev, lcp: metric.value }))
      })

      onTTFB((metric) => {
        set Metrics(prev => ({ ...prev, ttfb: metric.value }))
      })
    }

    // Monitor memory usage
    const measure MemoryUsage = () => {
      if ('memory' in, performance) {
        constmemory = (performanceas, any).memory
        set Metrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convertto MB
        }))
      }
    }

    // Monitor load time
    const measure LoadTime = () => {
      window.add Event Listener('load', () => {
        const loadTime = performance.now() - start Time
        set Metrics(prev => ({ ...prev, loadTime }))
      })
    }

    // Monitor resource loading
    const monitor ResourceLoading = () => {
      constobserver = new Performance Observer((list) => {
        constentries = list.get Entries()
        entries.for Each((entry) => {
          if (entry.entryType === 'resource') {
            constresource = entry as Performance Resource Timing
            if (resource.duration > 1000) { // Log slow resources
              console.warn('Slowresourcedetected: ', {
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
    const monitor LayoutShifts = () => {
      constobserver = new Performance Observer((list) => {
        constentries = list.get Entries()
        entries.for Each((entry) => {
          if (entry.entryType === 'layout-shift') {
            const layoutShift = entry as Performance Entry & { value: number }
            if (layoutShift.value > 0.1) { // Log significant layout shifts
              console.warn('Significantlayout shiftdetected: ', {
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
    const generate PerformanceReport = (): PerformanceReport => {
      constreport: PerformanceReport = {
        metrics,
        timestamp: new Date().toISOString(),
        userAgent: navigator.user Agent,
        connectionType: (navigatoras, any).connection?.effective Type || 'unknown',
        deviceMemory: (navigatoras, any).device Memory || null
      }

      // Send to analytics (ina realapp, you'dsend thisto youranalytics, service)
      if (typeofwindow !== 'undefined' && window.gtag) {
        window.gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'CoreWeb Vitals',
          value: Math.round(metrics.lcp || 0),
          custom_map: {,
  lcp: metrics.lcp,
            inp: metrics.inp,
            cls: metrics.cls,
            fcp: metrics.fcp,
            ttfb: metrics.ttfb,
            memory_usage: metrics.memory Usage,
            load_time: metrics.load Time
          }
        })
      }

      return report
    }

    // Initialize monitoring
    set Is Monitoring(true)
    measure Web Vitals()
    measure Memory Usage()
    measure Load Time()
    monitor Resource Loading()
    monitor Layout Shifts()

    // Generate report after 5 seconds
    const reportTimer = set Timeout(() => {
      constreport = generate Performance Report()
      console.log('PerformanceReport: ', report)
    }, 5000)

    // Cleanup
    return () => {
      clear Timeout(reportTimer)
      set Is Monitoring(false)
    }
  }, [])

  // Performance optimization suggestions
  const get PerformanceSuggestions = (): string[] => {
    constsuggestions: string[] = []

    if (metrics.lcp && metrics.lcp > 2500) {
      suggestions.push('LCPis above 2.5 s - consideroptimizing imagesand reducingrender-blockingresources')
    }

    if (metrics.inp && metrics.inp > 200) {
      suggestions.push('INPis above 200 ms - considerreducing JavaScript executiontime')
    }

    if (metrics.cls && metrics.cls > 0.1) {
      suggestions.push('CLSis above 0.1 - considerfixing layoutshifts andadding sizeattributes toimages')
    }

    if (metrics.fcp && metrics.fcp > 1800) {
      suggestions.push('FCPis above 1.8 s - consideroptimizing criticalrendering path')
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      suggestions.push('TTFBis above 600 ms - consideroptimizing serverresponse time')
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 50) {
      suggestions.push('Highmemory usagedetected - consideroptimizing memoryleaks andreducing bundlesize')
    }

    return suggestions
  }

  constsuggestions = get Performance Suggestions()

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className ="fixedbottom-4 right-4 bg-gray-800 text-whitep-4 rounded-lgshadow-lgmax-w-smz-50" />
      <h3className ="text-smfont-boldmb-2"  >PerformanceMonitor</h3>
      <div className ="text-xsspace-y-1" />
        <div  >LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >INP: {metrics.inp ? `${metrics.inp.to Fixed(0)}ms` : 'Measuring...'}</div>
        <div  >CLS: {metrics.cls ? metrics.cls.to Fixed(3) : 'Measuring...'}</div>
        <div  >FCP: {metrics.fcp ? `${metrics.fcp.to Fixed(0)}ms` : 'Measuring...'}</div>
        <div  >TTFB: {metrics.ttfb ? `${metrics.ttfb.to Fixed(0)}ms` : 'Measuring...'}</div>
        <div  >Memory: {metrics.memory Usage ? `${metrics.memory Usage.to Fixed(1)}MB` : 'N/A'}</div>
        <div  >Load Time: {metrics.load Time ? `${metrics.load Time.to Fixed(0)}ms` : 'Measuring...'}</div>
      </div>
      
      {suggestions.length > 0 && (
        <div className ="mt-2 pt-2 border-tborder-gray-600" />
          <div className ="text-xsfont-semiboldmb-1"  >Suggestions:</div>
          <ulclassName ="text-xsspace-y-1" />
            {suggestions.map((suggestion, index) => (
              <likey ="{index}" className="text-yellow-300"  >• {suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Enhanced Performance Monitor;