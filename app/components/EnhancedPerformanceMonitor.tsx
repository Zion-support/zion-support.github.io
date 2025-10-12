import { useEffect, useState} from 'react', { onCLS, onINP, onFCP, onLCP, onTTFB} from 'web-vitals';

interface PerformanceMetrics {
  lcp: number | null,
  inp: number | null,
  cls: number | null,
  fcp: number | null,
  ttfb: number | null,
  memoryUsage: number | null,
  loadTime: number | null;
}

interface PerformanceReport {
  metrics: PerformanceMetrics,
  timestamp: string,
  userAgent: string,
  connectionType: string,
  deviceMemory: number | null;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics />({
    lcp: null,
    inp: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null;
  })

  const [isMonitoring, setIsMonitoring] = useState(false)

  useEffect(() => {

        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB;
        }))
      }
    }

    // Monitor load time;
    
        setMetrics(prev => ({ ...prev, loadTime }))
      })
    }

    // Monitor resource loading;
    
            if (resource.duration > 1000) { // Log slow resources;
              console.warn('Slow resource detected: ', {
                name: resource.name,
                duration: resource.duration,
                size: resource.transferSize;
              })
            }
          }
        })
      })
      observer.observe({ entryTypes: ['resource'] })
    }

    // Monitor layout shifts;
    
              console.warn('Significant layout shift detected: ', {
                value: layoutShift.value,
                startTime: layoutShift.startTime;
              })
            }
          }
        })
      })
      observer.observe({ entryTypes: ['layout-shift'] })
    }

    // Generate performance report;
    
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
            load_time: metrics.loadTime;
          }
        })
      }

      return report;
    }

    // Initialize monitoring;
    setIsMonitoring(true)
    measureWebVitals()
    measureMemoryUsage()
    measureLoadTime()
    monitorResourceLoading()
    monitorLayoutShifts()

    // Generate report after 5 seconds;
    
    return () => {
      clearTimeout(reportTimer)
      setIsMonitoring(false)
    }
  }, [])

  // Performance optimization suggestions;
  
  }

  if (process.env.NODE_ENV === 'production') {
    return null

export default function EnhancedPerformanceMonitor() {
  return (</PerformanceMetrics>
    <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}</div>
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'Measuring...'}</div>
        <div>Memory: {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}</div>
        <div>Load Time: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'Measuring...'}</div>
      
 0 && (
    
          <div className="text-xs font-semiboldmb-1">Suggestions:</div>

 (
              <li key="{index}" className="text-yellow-300">• {suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

export default EnhancedPerformanceMonitor;

}