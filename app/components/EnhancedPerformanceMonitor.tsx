import { use Effect, use State} from 'react';
import { on CL S, on IN P, on FC P, on LC P, on TT FB} from 'web-vitals';

interface Performance Metrics {
  lcp: number | null,
  inp: number | null,
  cls: number | null,
  fcp: number | null,
  ttfb: number | null,
  memory Usage: number | null,
  load Time: number | null
}

interface Performance Report {
  metrics: Performance Metrics,
  timestamp: string,
  user Agent: string,
  connection Type: string,
  device Memory: number | null
}

const Enhanced PerformanceMonitor: React.F C = () => {
  const [metrics, set Metrics] = use State<P erformance Metrics />({
    lcp: null,
    inp: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memory Usage: null,
    load Time: null
  })

  const [is Monitoring, set Is Monitoring] = use State(false)

  use Effect(() => {
    const start Time = performance.now()

    // Monitor Core Web Vitals
    const measure Web Vitals = () => {
      on CL S((metric) => {
        set Metrics(prev => ({ ...prev, cls: metric.value }))
      })

      on IN P((metric) => {
        set Metrics(prev => ({ ...prev, inp: metric.value }))
      })

      on FC P((metric) => {
        set Metrics(prev => ({ ...prev, fcp: metric.value }))
      })

      on LC P((metric) => {
        set Metrics(prev => ({ ...prev, lcp: metric.value }))
      })

      on TT FB((metric) => {
        set Metrics(prev => ({ ...prev, ttfb: metric.value }))
      })
    }

    // Monitor memory usage
    const measure Memory Usage = () => {
      if ('memory' in, performance) {
        const memory = (performance as, any).memory
        set Metrics(prev => ({ 
          ...prev, 
          memory Usage: memory.used JS Heap Size / 1024 / 1024 // Convert to M B
        }))
      }
    }

    // Monitor load time
    const measure Load Time = () => {
      window.add Event Listener('load', () => {
        const load Time = performance.now() - start Time
        set Metrics(prev => ({ ...prev, load Time }))
      })
    }

    // Monitor resource loading
    const monitor Resource Loading = () => {
      const observer = new Performance Observer((list) => {
        const entries = list.get Entries()
        entries.for Each((entry) => {
          if (entry.entry Type === 'resource') {
            const resource = entry as Performance Resource Timing
            if (resource.duration > 1000) { // Log slow resources
              console.warn('Slow resource detected: ', {
                name: resource.name,
                duration: resource.duration,
                size: resource.transfer Size
              })
            }
          }
        })
      })
      observer.observe({ entry Types: ['resource'] })
    }

    // Monitor layout shifts
    const monitor Layout Shifts = () => {
      const observer = new Performance Observer((list) => {
        const entries = list.get Entries()
        entries.for Each((entry) => {
          if (entry.entry Type === 'layout-shift') {
            const layout Shift = entry as Performance Entry & { value: number }
            if (layout Shift.value > 0.1) { // Log significant layout shifts
              console.warn('Significant layout shift detected: ', {
                value: layout Shift.value,
                start Time: layout Shift.start Time
              })
            }
          }
        })
      })
      observer.observe({ entry Types: ['layout-shift'] })
    }

    // Generate performance report
    const generate Performance Report = (): Performance Report => {
      const report: Performance Report = {
        metrics,
        timestamp: new Date().to IS OString(),
        user Agent: navigator.user Agent,
        connection Type: (navigator as, any).connection?.effective Type || 'unknown',
        device Memory: (navigator as, any).device Memory || null
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
    const report Timer = set Timeout(() => {
      const report = generate Performance Report()
      console.log('Performance Report: ', report)
    }, 5000)

    // Cleanup
    return () => {
      clear Timeout(report Timer)
      set Is Monitoring(false)
    }
  }, [])

  // Performance optimization suggestions
  const get Performance Suggestions = (): string[] => {
    const suggestions: string[] = []

    if (metrics.lcp && metrics.lcp > 2500) {
      suggestions.push('L CP is above 2.5 s - consider optimizing images and reducing render-blocking resources')
    }

    if (metrics.inp && metrics.inp > 200) {
      suggestions.push('I NP is above 200 ms - consider reducing Java Script execution time')
    }

    if (metrics.cls && metrics.cls > 0.1) {
      suggestions.push('C LS is above 0.1 - consider fixing layout shifts and adding size attributes to images')
    }

    if (metrics.fcp && metrics.fcp > 1800) {
      suggestions.push('F CP is above 1.8 s - consider optimizing critical rendering path')
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      suggestions.push('T TF B is above 600 ms - consider optimizing server response time')
    }

    if (metrics.memory Usage && metrics.memory Usage > 50) {
      suggestions.push('High memory usage detected - consider optimizing memory leaks and reducing bundle size')
    }

    return suggestions
  }

  const suggestions = get Performance Suggestions()

  // Don't render anything in production
  if (process.env.N OD E_ EN V === 'production') {
    return null
  }

  return (

    <d iv class Name="f ixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-smz-50">
        </d iv>
      <h3 c lass Name="t ext-sm font-boldmb-2">PerformanceMonitor</h3>
      <d iv class Name="t ext-xsspace-y-1">
        </d iv>
        <d iv>L CP: {metrics.lcp ? `${metrics.lcp.to Fixed(0)}ms` : 'Measuring...'}</d iv>
        <d iv>I NP: {metrics.inp ? `${metrics.inp.to Fixed(0)}ms` : 'Measuring...'}</d iv>
        <d iv>C LS: {metrics.cls ? metrics.cls.to Fixed(3) : 'Measuring...'}</d iv>
        <d iv>F CP: {metrics.fcp ? `${metrics.fcp.to Fixed(0)}ms` : 'Measuring...'}</d iv>
        <d iv>T TF B: {metrics.ttfb ? `${metrics.ttfb.to Fixed(0)}ms` : 'Measuring...'}</d iv>
        <d iv>Memory: {metrics.memory Usage ? `${metrics.memory Usage.to Fixed(1)}M B` : 'N/A'}</d iv>
        <d iv>Load Time: {metrics.load Time ? `${metrics.load Time.to Fixed(0)}ms` : 'Measuring...'}</d iv>
      
      {suggestions.length > 0 && (

        <d iv class Name="m t-2 pt-2 border-tborder-gray-600">
        </d iv>
          <d iv class Name="t ext-xs font-semiboldmb-1">Suggestions:</d iv>
          <u l class Name="t ext-xsspace-y-1" />
            {suggestions.map((suggestion, index) => (
              <l i key="{index}" class Name="t ext-yellow-300">• {suggestion}</l i>
            ))}

          </u l>
        </d iv>
      )}
    </d iv>
  )
}

export default Enhanced PerformanceMonitor;
