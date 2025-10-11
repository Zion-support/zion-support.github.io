<<<<<<< HEAD
'use client';
import React from 'react';
import React, { useEffect, useState, useCallback } from 'react';


interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
=======
<<<<<<< HEAD
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
=======
'use client'
import React, { useEffect, useState, useCallback } from 'react'
interface PerformanceMetrics {
    fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null,
  memory: number | null
  }
interface PerformanceMonitorProps {
    onMetricsUpdate?: (metrics: PerformanceMetrics) => void,
  enableRealTimeMonitoring?: boolean
  }
const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ()
}) => {
  const [metrics, setMetrics] = useState</PerformanceMonitorProps><PerformanceMetrics>({
>>>>>>> origin/main
>>>>>>> origin/main
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
<<<<<<< HEAD
    memory: null,
  });

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    if (typeof PerformanceObserver === 'undefined') return;

    const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || [];
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;

=======
<<<<<<< HEAD
    memory: null,})
  const measureWebVitals = useCallback(() => {if (typeof window === 'undefined' || !('performance' in window)) return;
=======
    memory: null,
  })
<<<<<<< HEAD
  const measureWebVitals = useCallback(() => {;
    if (typeof window === 'undefined' || !('performance' in window)) return;
>>>>>>> origin/main
    if (typeof PerformanceObserver === 'undefined') return;
    const observers: PerformanceObserver[] = [],
=======
  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    if (typeof PerformanceObserver === 'undefined') return
  })
  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    if (typeof PerformanceObserver === 'undefined') return
    const observers: PerformanceObserver[] = []
>>>>>>> origin/main
    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || []
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;
>>>>>>> origin/main
    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
<<<<<<< HEAD
      try {const lcpObserver = new PerformanceObserver(list => {)}
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1],
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime ,)}));
        })
        lcpObserver.observe({entryTypes: ['largest-contentful-paint'] ,)})
        observers.push(lcpObserver);
      } catch (error) {// eslint-disable-next-line no-console;}}
=======
      try {
<<<<<<< HEAD
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        observers.push(lcpObserver);
=======
        const lcpObserver = new PerformanceObserver()
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1],
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        observers.push(lcpObserver)
>>>>>>> origin/main
      } catch (error) {
        // eslint-disable-next-line no-console
      }
    }
>>>>>>> origin/main
    // Measure First Input Delay (FID)
<<<<<<< HEAD
    if ('PerformanceObserver' in window) {try {const fidObserver = new PerformanceObserver(list => {)}
=======
    if ('PerformanceObserver' in window) {
      try {
<<<<<<< HEAD
        const fidObserver = new PerformanceObserver(list => {;
>>>>>>> origin/main
          const entries = list.getEntries();
          entries.forEach(entry => {)
            if(entry.entryType === 'first-input' &&)
              'processingStart' in entry &&
              'startTime' in entry;
            ) {
              const fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => ({)
                ...prev,
<<<<<<< HEAD
                fid: fidEntry.processingStart - fidEntry.startTime,
              }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        observers.push(fidObserver);
=======
                fid: fidEntry.processingStart - fidEntry.startTime,}));
            }
          })
        })
        fidObserver.observe({entryTypes: ['first-input'] ,)})
        observers.push(fidObserver);
      } catch (error) {// eslint-disable-next-line no-console;}}
=======
        const fidObserver = new PerformanceObserver()
          const entries = list.getEntries()
          entries.forEach()
            ) {
              const fidEntry = entry as PerformanceEventTiming
              setMetrics()
              }))
            }
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })
        observers.push(fidObserver)
>>>>>>> origin/main
      } catch (error) {
        // eslint-disable-next-line no-console
      }
    }
>>>>>>> origin/main
    // Measure Cumulative Layout Shift (CLS)
<<<<<<< HEAD
    if ('PerformanceObserver' in window) {try {let clsValue = 0;}
        const clsObserver = new PerformanceObserver(list => {)
=======
    if ('PerformanceObserver' in window) {
      try {
<<<<<<< HEAD
        let clsValue = 0;
        const clsObserver = new PerformanceObserver(list => {;
>>>>>>> origin/main
          const entries = list.getEntries();
          entries.forEach(entry => {)
            if(entry.entryType === 'layout-shift' &&)
              'hadRecentInput' in entry &&
              'value' in entry;
=======
        let clsValue = 0
        const clsObserver = new PerformanceObserver()
          const entries = list.getEntries()
          entries.forEach()
>>>>>>> origin/main
            ) {
              const clsEntry = entry as LayoutShift
              if (!clsEntry.hadRecentInput) {
<<<<<<< HEAD
                clsValue += clsEntry.value;
<<<<<<< HEAD
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        observers.push(clsObserver);
=======
                setMetrics(prev => ({ ...prev, cls: clsValue ,)}));
=======
                clsValue += clsEntry.value
                setMetrics(prev => ({ ...prev, cls: clsValue }))
>>>>>>> origin/main
              }
            }
          })
        })
<<<<<<< HEAD
        clsObserver.observe({entryTypes: ['layout-shift'] ,)})
        observers.push(clsObserver);
      } catch (error) {// eslint-disable-next-line no-console;}}
=======
        clsObserver.observe({ entryTypes: ['layout-shift'] })
        observers.push(clsObserver)
>>>>>>> origin/main
      } catch (error) {
        // eslint-disable-next-line no-console
      }
    }
>>>>>>> origin/main
    // Measure Time to First Byte (TTFB)
<<<<<<< HEAD
    try {const navigationEntries = performance.getEntriesByType?.('navigation') || []}
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry;
=======
    try {
      const navigationEntries = performance.getEntriesByType?.('navigation') || []
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming
      const ttfb = navigationEntry
<<<<<<< HEAD
>>>>>>> origin/main
        ? navigationEntry.responseStart - navigationEntry.requestStart;
        : null;
      // Measure Memory Usage;
      const memory =
<<<<<<< HEAD
        (performance as Performance & { memory?: { usedJSHeapSize: number } })
=======
        (performance as Performance & { memory?: { usedJSHeapSize: number ,}})
>>>>>>> origin/main
          .memory?.usedJSHeapSize || null;
      setMetrics(prev => ({)
        ...prev,
        fcp,
        ttfb,
<<<<<<< HEAD
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

=======
        memory,}));
    } catch (error) {// eslint-disable-next-line no-console;}// Cleanup observers;
    return () => {observers.forEach(observer => {)
        try {observer.disconnect()}}catch (error) {// eslint-disable-next-line no-console;}})
    }
  }, []);
<<<<<<< HEAD
  const measureResourceTiming = useCallback(() => {if (typeof window === 'undefined' || !('performance' in window)) return;
=======
  const measureResourceTiming = useCallback(() => {;
    if (typeof window === 'undefined' || !('performance' in window)) return;
>>>>>>> origin/main
    const resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter()
      (resource: PerformanceResourceTiming) => resource.duration > 1000;,
    ),
    if (slowResources.length > 0) {
      // eslint-disable-next-line no-console;
      console.log('Slow resources detected:',)
        slowResources.map((r: PerformanceResourceTiming) => ({,
          name: r.name,
          duration: r.duration,
          size: r.transferSize,}))
      );
    }
  }, []);
<<<<<<< HEAD
  const measureCoreWebVitals = useCallback(() => {if (typeof window === 'undefined') return;
    // Use web-vitals library if available;
    try {import('web-vitals')}
        .then(webVitals => {)
          const {onCLS, onFCP, onLCP, onTTFB}}= webVitals;
          if (onCLS) {onCLS((metric: { value: number ,)}) =>
              setMetrics(prev => ({...prev, cls: metric.value ,)}))
=======
  const measureCoreWebVitals = useCallback(() => {;
    if (typeof window === 'undefined') return;
=======
        ? navigationEntry.responseStart - navigationEntry.requestStart
        : null
      // Measure Memory Usage
      const memory =
        (performance as Performance & { memory?: { usedJSHeapSize: number } })
          .memory?.usedJSHeapSize || null
      setMetrics()
      }))
    } catch (error) {
      // eslint-disable-next-line no-console
    }
    // Cleanup observers
    return () => {
    observers.forEach()
          observer.disconnect()
  } catch (error) {
          // eslint-disable-next-line no-console
        }
      })
    }
  }, [])
>>>>>>> origin/main
  const measureResourceTiming = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    const resources = performance.getEntriesByType('resource')
    const slowResources = resources.filter()
      (resource: PerformanceResourceTiming) => resource.duration > 1000
    ),
    if (slowResources.length > 0) {
      // eslint-disable-next-line no-console
<<<<<<< HEAD
        'Slow resources detected:',
        slowResources.map((r: PerformanceResourceTiming) => ({
          name: r.name,
          duration: r.duration,
          size: r.transferSize,
        }))
      );
    }
  }, []);

=======
      console.log()
        slowResources.map((r: PerformanceResourceTiming) => ()
        }))
    }
  }, [])
>>>>>>> origin/main
  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return
>>>>>>> origin/main
    // Use web-vitals library if available
    try {
      import('web-vitals')
        .then()
          if (onCLS) {
            onCLS((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, cls: metric.value }))
<<<<<<< HEAD
            );
          }
          if (onFCP) {
            onFCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, fcp: metric.value }))
            );
=======
<<<<<<< HEAD
>>>>>>> origin/main
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
=======
            )
          }
          if (onFCP) {
            onFCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, fcp: metric.value }))
            )
>>>>>>> origin/main
          }
          if (onLCP) {
            onLCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, lcp: metric.value }))
<<<<<<< HEAD
            );
=======
            )
>>>>>>> origin/main
          }
          if (onTTFB) {
            onTTFB((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, ttfb: metric.value }))
<<<<<<< HEAD
            );
=======
            )
>>>>>>> origin/main
          }
        })
        .catch(() => {
          // web-vitals not available, continue without it
<<<<<<< HEAD
        });
    } catch {
      // web-vitals not available, continue without it
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

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [
=======
        })
    } catch {
      // web-vitals not available, continue without it
    }
  }, [])
  useEffect(() => {
    if (!enableRealTimeMonitoring) return
    const cleanup = measureWebVitals()
    measureResourceTiming()
    measureCoreWebVitals()
    // Monitor performance every 5 seconds
    const interval = setInterval(() => {
      measureResourceTiming()
  }, 5000)
    return () => {
    if (cleanup) cleanup()
      clearInterval(interval)
  }
  }, [
>>>>>>> origin/main
>>>>>>> origin/main
    enableRealTimeMonitoring,
    measureWebVitals,
    measureResourceTiming,
    measureCoreWebVitals,
<<<<<<< HEAD
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
  if (process.env.NODE_ENV === 'development') {return(<div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>)</div>
        <h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
        <div className='text-xs space-y-1'>
<<<<<<< HEAD
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A',</div>}</div>
          <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>Memory: {' ',</div>}{metrics.memory;
=======
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
=======
  ])
  useEffect(() => {
    if (onMetricsUpdate) {
<<<<<<< HEAD
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

=======
      onMetricsUpdate(metrics)
  }
  }, [metrics, onMetricsUpdate])
  // Performance recommendations
  const getPerformanceRecommendations = useCallback(() => {
    const recommendations: string[] = [],
    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push()
      )
  }
    if (metrics.lcp && metrics.lcp > 2500) {
    recommendations.push()
      )
  }
    if (metrics.fid && metrics.fid > 100) {
    recommendations.push()
      )
  }
    if (metrics.cls && metrics.cls > 0.1) {
    recommendations.push()
      )
  }
    if (metrics.ttfb && metrics.ttfb > 600) {
    recommendations.push()
      )
  }
    return recommendations
  }, [metrics])
  const _recommendations = getPerformanceRecommendations()
  if (process.env.NODE_ENV === 'development') {
    return (
      </PerformanceMetrics><div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>
        </div><h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
        <div className='text-xs space-y-1'>
          </div><div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
>>>>>>> origin/main
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
          <div></div>
            Memory:{' '},
    {metrics.memory
>>>>>>> origin/main
              ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
              : 'N/A'}
          </div>
        </div>
        {_recommendations.length > 0 && (
          <div className='mt-2'>
<<<<<<< HEAD
            <h4 className='font-semibold text-xs text-red-600'>
              Recommendations: </h4>,
=======
            </div><h4 className='font-semibold text-xs text-red-600'>
              Recommendations:
>>>>>>> origin/main
            <ul className='text-xs text-red-600'>
              {_recommendations.map((rec, index) => (
                </ul><li key={index}>• {rec}</li>
                <li key={index}>• {rec}
              ))}
        )}
    )
  }
<<<<<<< HEAD
>>>>>>> origin/main
  return null;
};

export default AdvancedPerformanceMonitor;
<<<<<<< HEAD
=======
=======
  return null
}
export default AdvancedPerformanceMonitor
>>>>>>> origin/main
  </PerformanceMetrics>
  </PerformanceMonitorProps>
</h4></li>
>>>>>>> origin/main
