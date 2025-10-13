import React from 'react';

interface AdvancedPerformanceMonitorProps {
  className?: string;
}

export default function AdvancedPerformanceMonitor({ className = '' }: AdvancedPerformanceMonitorProps) {
  return (
    <div className={`advanced-performance-monitor ${className}`}>
      <h3>Performance Monitor</h3>
      <p>Advanced performance monitoring component</p>
    </div>
  );
}
const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
'use client';
import React, {useEffect, useState, useCallback}from 'react';
interface PerformanceMetrics {fcp: number | null;,}
  lcp: number | null;,
  fid: number | null;,
  cls: number | null;,
  ttfb: number | null,
  memory: number | null;,}interface PerformanceMonitorProps {onMetricsUpdate?: (metrics: PerformanceMetrics) => void,}
  enableRealTimeMonitoring?: boolean;}const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({,
  onMetricsUpdate,
  enableRealTimeMonitoring = true,}) => {const [metrics, setMetrics] = useState<PerformanceMetrics>({
    memory: null,
  });

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    if (typeof PerformanceObserver === 'undefined') return;

    const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || [];
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;

    memory: null,})
  const measureWebVitals = useCallback(() => {if (typeof window === 'undefined' || !('performance' in window)) return;
  const measureWebVitals = useCallback(() => {;
    if (typeof window === 'undefined' || !('performance' in window)) return;
    if (typeof PerformanceObserver === 'undefined') return;
    const observers: PerformanceObserver[] = [],
      try {const lcpObserver = new PerformanceObserver(list => {)}
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1],
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime ,)}));
        })
        lcpObserver.observe({entryTypes: ['largest-contentful-paint'] ,)})
        observers.push(lcpObserver);
      } catch (error) {// eslint-disable-next-line no-console;}}
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        observers.push(lcpObserver);
    if ('PerformanceObserver' in window) {try {const fidObserver = new PerformanceObserver(list => {)}
        const fidObserver = new PerformanceObserver(list => {;
          const entries = list.getEntries();
          entries.forEach(entry => {)
            if(entry.entryType === 'first-input' &&)
              'processingStart' in entry &&
              'startTime' in entry;
            ) {
              const fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => ({)
                ...prev,
                fid: fidEntry.processingStart - fidEntry.startTime,
              }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        observers.push(fidObserver);
    if ('PerformanceObserver' in window) {try {let clsValue = 0;}
        const clsObserver = new PerformanceObserver(list => {)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver(list => {;
          const entries = list.getEntries();
          entries.forEach(entry => {)
            if(entry.entryType === 'layout-shift' &&)
              'hadRecentInput' in entry &&
              'value' in entry;
                clsValue += clsEntry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        observers.push(clsObserver);
        clsObserver.observe({entryTypes: ['layout-shift'] ,)})
        observers.push(clsObserver);
      } catch (error) {// eslint-disable-next-line no-console;}}
    try {const navigationEntries = performance.getEntriesByType?.('navigation') || []}
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry;
        ? navigationEntry.responseStart - navigationEntry.requestStart;
        : null;
      // Measure Memory Usage;
      const memory =
        (performance as Performance & { memory?: { usedJSHeapSize: number } })
        memory,
      }));
    } catch (error) {
      // eslint-disable-next-line no-console
    }

    // Cleanup observers
    return () => {
      observers.forEach(observer => {
        try {
          observer.disconnect();
        } catch (error) {
          // eslint-disable-next-line no-console
        }
      });
    };
  }, []);

  const measureResourceTiming = useCallback(() => {if (typeof window === 'undefined' || !('performance' in window)) return;
  const measureCoreWebVitals = useCallback(() => {if (typeof window === 'undefined') return;
    // Use web-vitals library if available;
    try {import('web-vitals')}
        .then(webVitals => {)
          const {onCLS, onFCP, onLCP, onTTFB}}= webVitals;
          if (onCLS) {onCLS((metric: { value: number ,)}) =>
              setMetrics(prev => ({...prev, cls: metric.value ,)}))
        'Slow resources detected:',
        slowResources.map((r: PerformanceResourceTiming) => ({
          name: r.name,
          duration: r.duration,
          size: r.transferSize,
        }))
      );
    }
  }, []);

            );
          }
          if (onFCP) {
            onFCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, fcp: metric.value }))
            );
            );
          }
          if (onFCP) {onFCP((metric: { value: number ,)}) =>
              setMetrics(prev => ({...prev, fcp: metric.value ,)}))
            );
          }
          if (onLCP) {onLCP((metric: { value: number ,)}) =>
              setMetrics(prev => ({...prev, lcp: metric.value ,)}))
            );
          }
          if (onTTFB) {onTTFB((metric: { value: number ,)}) =>
              setMetrics(prev => ({...prev, ttfb: metric.value ,)}))
            );
          }
        })
        .catch(() => {// web-vitals not available, continue without it;})
    } catch {// web-vitals not available, continue without it;}}}, []);
  useEffect(() => {if (!enableRealTimeMonitoring) return;
    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();
    // Monitor performance every 5 seconds;
    const interval = setInterval(() => {
      measureResourceTiming()}, 5000);
    return () => {if (cleanup) cleanup();
      clearInterval(interval)}}, [
            );
            );
        });
    } catch {
      // web-vitals not available, continue without it
  const [isVisible, setIsVisible] = useState(false)
  const [isRecording, setIsRecording] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env['NODE_ENV'] !== 'development') return

    const measurePerformance = () => {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }))
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, largestContentfulPaint: entry.startTime }))
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, firstInputDelay: (entry as any).processingStart - entry.startTime }))
          } else if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cumulativeLayoutShift: (entry as any).value }))
          }
        })
      })

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, timeToFirstByte: navigationEntry.responseStart - navigationEntry.requestStart }))
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
      }

      // Measure load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
      })

      // Measure DOM content loaded
      window.addEventListener('DOMContentLoaded', () => {
        const domContentLoaded = performance.now()
        setMetrics(prev => ({ ...prev, domContentLoaded }))
      })

      // Measure Total Blocking Time
      const measureTBT = () => {
        const longTasks = performance.getEntriesByType('longtask')
        const totalBlockingTime = longTasks.reduce((total, task) => {
          return total + (task.duration - 50) // Tasks longer than 50ms contribute to TBT
        }, 0)
        setMetrics(prev => ({ ...prev, totalBlockingTime }))
      }

      // Measure TBT after a delay to capture long tasks
      setTimeout(measureTBT, 5000)

      return () => {
        observer.disconnect()
      }
    }
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();

    // Monitor performance every 5 seconds
    const interval = setInterval(() => {
      measureResourceTiming();
    }, 5000);

        onFCP((metric: any) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }))
          reportMetric('FCP', metric.value)
        })

        onLCP((metric: any) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }))
          reportMetric('LCP', metric.value)
        })

        onTTFB((metric: any) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }))
          reportMetric('TTFB', metric.value)
        })
      } catch (error) {
        }
    }

    // Measure memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        const memoryUsage = (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100
        setMetrics(prev => ({ ...prev, memoryUsage }))
        reportMetric('Memory Usage', memoryUsage)
      }
    }

    // Measure page load time
    const measureLoadTime = () => {
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
        reportMetric('Load Time', loadTime)
      })
    }

    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: name,
          metric_value: Math.round(value),
          metric_delta: Math.round(value)
        })
      }

      // Send to custom analytics
      if (typeof window !== 'undefined' && (window as any).analytics) {
        (window as any).analytics.track('Performance Metric', {
          name,
          value: Math.round(value),
          timestamp: Date.now()
        })
      }

      // Log to console in development
      if (process.env['NODE_ENV'] === 'development') {
        }
    }

    // Monitor resource loading performance
    const monitorResourcePerformance = () => {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart
            
            // Report slow resources
            if (loadTime > 1000) {
              reportMetric('Slow Resource', loadTime)
              }
          }
        })
      })

      observer.observe({ entryTypes: ['resource'] })
    }

    // Monitor long tasks
    const monitorLongTasks = () => {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const longTask = entry as PerformanceEntry
          if (longTask.duration > 50) {
            reportMetric('Long Task', longTask.duration)
            }
        })
      })

      observer.observe({ entryTypes: ['longtask'] })
    }

    // Initialize all monitoring
    measureWebVitals()
    measureMemoryUsage()
    measureLoadTime()
    monitorResourcePerformance()
    monitorLongTasks()

    // Periodic memory monitoring
    const memoryInterval = setInterval(measureMemoryUsage, 30000)

    // Cleanup
    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [
  ]);
  useEffect(() => {if (onMetricsUpdate) {
      onMetricsUpdate(metrics)}}, [metrics, onMetricsUpdate]);
  // Performance recommendations;
  const getPerformanceRecommendations = useCallback(() => {const recommendations: string[] = [],
    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push('First Contentful Paint is slow. Consider optimizing critical rendering path.')
      )}if (metrics.lcp && metrics.lcp > 2500) {recommendations.push('Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.')
      )}if (metrics.fid && metrics.fid > 100) {recommendations.push('First Input Delay is high. Reduce JavaScript execution time.')
      )}if (metrics.cls && metrics.cls > 0.1) {recommendations.push('Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.')
      )}if (metrics.ttfb && metrics.ttfb > 600) {recommendations.push('Time to First Byte is slow. Optimize server response time.')
      )}return recommendations;
  }, [metrics]);
  const _recommendations = getPerformanceRecommendations();
  if (process.env['NODE_ENV'] === 'development') {return(<div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>)</div>
        <h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
        <div className='text-xs space-y-1'>
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A',</div>}</div>
          <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>Memory: {' ',</div>}{metrics.memory;
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Performance recommendations
  const getPerformanceRecommendations = useCallback(() => {
    const recommendations: string[] = [];

    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push(
        'First Contentful Paint is slow. Consider optimizing critical rendering path.'
      );
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push(
        'Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.'
      );
    }

    if (metrics.fid && metrics.fid > 100) {
      recommendations.push(
        'First Input Delay is high. Reduce JavaScript execution time.'
      );
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push(
        'Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.'
      );
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push(
        'Time to First Byte is slow. Optimize server response time.'
      );
    }

    return recommendations;
  }, [metrics]);

  const _recommendations = getPerformanceRecommendations();

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'></div>
        <h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
        <div className='text-xs space-y-1'></div>
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>
            TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
          <div>
            Memory:{' '}
            {metrics.memory
              ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
              : 'N/A'}</div>
        ))
        {_recommendations.length > 0 && (
          <div className='mt-2'></div>
            <h4 className='font-semibold text-xs text-red-600'>
              Recommendations:
            </h4>
            <ul className='text-xs text-red-600'>
              {_recommendations.map((rec, index) => (
                <li key={index}>• {rec}</li>
              ))}
            </ul>
          </li>
        </li>
      </li>
    );
  }

            <h4 className='font-semibold text-xs text-red-600'>
              Recommendations: </h4>,
  return null;
};

    const reportMetric = (name: string, value: number) => {
      console.log(`[Performance] ${name}: ${value}ms`)
    }

    // Track page load time
    const loadTime = performance.now()
    setMetrics(prev => ({ ...prev, loadTime }))
    reportMetric('Load Time', loadTime)

    // Track memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory
      setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
    }

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            reportMetric('FCP', entry.startTime)
          }
        }
      })
      observer.observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        reportMetric('LCP', lastEntry.startTime)
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Time to First Byte
      const ttfbObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const ttfb = entry.responseStart - entry.requestStart
            setMetrics(prev => ({ ...prev, ttfb }))
            reportMetric('TTFB', ttfb)
          }
        }
      })
      ttfbObserver.observe({ entryTypes: ['navigation'] })
    }

    trackWebVitals()

    return () => {
      observer?.disconnect()
      lcpObserver?.disconnect()
      ttfbObserver?.disconnect()
    }
  }, [])

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-500'
    if (value <= thresholds.poor) return 'text-yellow-500'
    return 'text-red-500'
  }

  if (process.env['NODE_ENV'] !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
        aria-label="Toggle performance monitor"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              <span className={`font-mono ${metrics.fcp ? getMetricColor(metrics.fcp, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${metrics.lcp ? getMetricColor(metrics.lcp, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className={`font-mono ${metrics.cls !== null ? getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
                {metrics.cls !== null ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
              <span className={`font-mono ${metrics.ttfb ? getMetricColor(metrics.ttfb, { good: 800, poor: 1800 }) : 'text-gray-400'}`}>
                {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            {metrics.memoryUsage && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Memory:</span>
                <span className="font-mono text-gray-600">
                  {metrics.memoryUsage.toFixed(1)}MB
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdvancedPerformanceMonitor
    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
      // Send to analytics service
      if (typeof gtag !== 'undefined') {
        gtag('event', 'performance_metric', {
          metric_name: name,
          metric_value: value
        })
      }
    }

    // Start performance monitoring
    const cleanup = measurePerformance()

    // Report metrics when they change
    Object.entries(metrics).forEach(([key, value]) => {
      if (value !== null) {
        reportMetric(key, value)
      }
    })

    return cleanup
  }, [metrics])

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A'
    return `${value.toFixed(2)}${unit}`
  }

  const getPerformanceScore = () => {
    let score = 0
    let factors = 0

    // FCP scoring (0-100)
    if (metrics.firstContentfulPaint !== null) {
      if (metrics.firstContentfulPaint <= 1800) score += 25
      else if (metrics.firstContentfulPaint <= 3000) score += 15
      else score += 5
      factors++
    }

    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint !== null) {
      if (metrics.largestContentfulPaint <= 2500) score += 25
      else if (metrics.largestContentfulPaint <= 4000) score += 15
      else score += 5
      factors++
    }

    // FID scoring (0-100)
    if (metrics.firstInputDelay !== null) {
      if (metrics.firstInputDelay <= 100) score += 25
      else if (metrics.firstInputDelay <= 300) score += 15
      else score += 5
      factors++
    }

    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift !== null) {
      if (metrics.cumulativeLayoutShift <= 0.1) score += 25
      else if (metrics.cumulativeLayoutShift <= 0.25) score += 15
      else score += 5
      factors++
    }

    return factors > 0 ? Math.round(score / factors) : 0
  }

  const exportMetrics = () => {
    const data = {
      timestamp: new Date().toISOString(),
      metrics,
      score: getPerformanceScore(),
      userAgent: navigator.userAgent,
      url: window.location.href
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `performance-metrics-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-20 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Show performance monitor"
      >
        📊
      </button>
    )
  }

  const score = getPerformanceScore()
  const scoreColor = score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'

  return (
    <div className="fixed bottom-4 left-20 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border min-w-80 z-50 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`px-2 py-1 rounded text-xs ${
              isRecording 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            {isRecording ? '⏹️' : '⏺️'}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close performance monitor"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">Performance Score:</span>
          <span className={`text-lg font-bold ${scoreColor}`}>{score}/100</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
          <div 
            className={`h-2 rounded-full ${
              score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${score}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">First Contentful Paint:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.firstContentfulPaint)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Largest Contentful Paint:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.largestContentfulPaint)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">First Input Delay:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.firstInputDelay)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Cumulative Layout Shift:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.cumulativeLayoutShift)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Time to First Byte:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.timeToFirstByte)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Memory Usage:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.memoryUsage, 'MB')}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">DOM Content Loaded:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.domContentLoaded)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Total Blocking Time:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.totalBlockingTime)}
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <button
          onClick={exportMetrics}
          className="w-full bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors"
        >
          Export Metrics
        </button>
        <button
          onClick={() => setMetrics({
            loadTime: null,
            firstContentfulPaint: null,
            largestContentfulPaint: null,
            firstInputDelay: null,
            cumulativeLayoutShift: null,
            timeToFirstByte: null,
            memoryUsage: null,
            domContentLoaded: null,
            totalBlockingTime: null
          })}
          className="w-full bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600 transition-colors"
        >
          Reset Metrics
        </button>
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor
