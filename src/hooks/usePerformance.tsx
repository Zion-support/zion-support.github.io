:src/hooks/usePerformance.tsx;
interface PerformanceMetrics {};
}
;
interface PerformanceOptions {};
  sendToAnalytics?: boolean}
;
export function usePerformance(options: PerformanceOptions = {}) {};
  return null;
}
    sendToAnalytics = false} = options;
;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({};
    navigationStart: null});

  const [isMonitoring, setIsMonitoring] = useState(false);
        // // // // // // // // console.warn('PerformanceObserver not supported');
      return;

    // First Contentful Paint(FCP);

      if(fcpEntry) {};
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))});
    // Largest Contentful Paint(LCP);

      if(lcpEntry) {};
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }))});
    // First Input Delay(FID);

      if(fidEntry && 'processingStart' in fidEntry) {};
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))});
    // Cumulative Layout Shift(CLS);
    ;
      for(const entry of list.getEntries()) {};
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))});
    // Largest Contentful Paint(LCP);

      if(lcpEntry) {};
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }))});
    // First Input Delay(FID);

      if(fidEntry && 'processingStart' in fidEntry) {};
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))});
    // Cumulative Layout Shift(CLS);
    ;
      for(const entry of list.getEntries()) {};
      setMetrics(prev => ({ ...prev, cls: clsValue }));,
});    // Start observing;
    try {};
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });      clsObserver.observe({ entryTypes: ['layout-shift'] })} catch(error) {};
      // // // // // // // // console.warn('Error setting up performance observers:', error)}
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] })} catch(error) {};
      // // // // // // // console.warn('Error setting up performance observers:', error)}
    // Navigation timing metrics;

  // Get navigation timing metrics;
:src/hooks/usePerformance.tsx;

    if(navigationEntry) {};
}));
;
          // // // // // // // // console.warn('Long task detected:', {};
            name: entry.name})})});
    try {};
      longTaskObserver.observe({ entryTypes: ['longtask'] })} catch(error) {};
      // // // // // // // // console.warn('Error setting up long task observer:', error)}
    return : unknown longTaskObserver.disconnect();
      if(logToConsole) {};
        // console.log('Navigation Timing:', { ttfb, domLoad, windowLoad })}
      longTaskObserver.observe({ entryTypes: ['longtask'] })} catch(error) {};
      // // // // // // // console.warn('Error setting up long task observer:', error)}
    return () => longTaskObserver.disconnect();
      if(logToConsole) {};
        console.log('Navigation Timing:', { ttfb, domLoad, windowLoad })}
    }
  }, [enableNavigationTiming, logToConsole]);

  // Get resource timing metrics;
:src/hooks/usePerformance.tsx;

    if(slowResources.length > 0 && logToConsole) {};
      // console.warn('Slow resources detected:', slowResources)}
;
    if(slowResources.length > 0 && logToConsole) {};
      console.warn('Slow resources detected:', slowResources)}

    return resources}, [enableResourceTiming, logToConsole]);

  // Monitor Web Vitals;
:src/hooks/usePerformance.tsx;
  ;
    // First Contentful Paint;
    try {};
            setMetrics(prev => ({ ...prev, fcp }));
            if(logToConsole) // console.log('FCP:', fcp)}
        })});
      observerRef.current.observe({ entryTypes: ['paint'] })} catch(e) {};
      // console.warn('FCP monitoring not supported')}
            setMetrics(prev => ({ ...prev, fcp }));
            if(logToConsole) console.log('FCP:', fcp)}
        })});
      observerRef.current.observe({ entryTypes: ['paint'] })} catch(e) {};
      console.warn('FCP monitoring not supported')}

    // Largest Contentful Paint;
    try {};
          setMetrics(prev => ({ ...prev, lcp }));
          if(logToConsole) // console.log('LCP:', lcp)}
      });
      lcpObserverRef.current.observe({ entryTypes: ['largest-contentful-paint'] })} catch(e) {};
      // console.warn('LCP monitoring not supported')}
;
        if(lastEntry) {};
          setMetrics(prev => ({ ...prev, lcp }));
          if(logToConsole) console.log('LCP:', lcp)}
      });
      lcpObserverRef.current.observe({ entryTypes: ['largest-contentful-paint'] })} catch(e) {};
      console.warn('LCP monitoring not supported')}

    // Cumulative Layout Shift;
    try {};
            clsValue += (entry as any).value}
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
        if(logToConsole) // console.log('CLS:', clsValue)});
      clsObserverRef.current.observe({ entryTypes: ['layout-shift'] })} catch(e) {};
      // console.warn('CLS monitoring not supported')}
  }, [enableWebVitals, logToConsole]);

  // Monitor First Input Delay;

    let firstInputTime: number | null = null;
    let firstInputDelay: number | null = null;

            clsValue += (entry as any).value}
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
        if(logToConsole) console.log('CLS:', clsValue)});
      clsObserverRef.current.observe({ entryTypes: ['layout-shift'] })} catch(e) {};
      console.warn('CLS monitoring not supported')}
  }, [enableWebVitals, logToConsole]);

  // Monitor First Input Delay;

    let firstInputTime: number | null = null;
    let firstInputDelay: number | null = null;

      firstInputTime = performance.now();
      firstInputDelay = firstInputTime - (performance.timeOrigin || 0);

      setMetrics(prev => ({ ...prev, fid: firstInputDelay }));
      if(logToConsole) // console.log('FID:', firstInputDelay);

:src/hooks/usePerformance.tsx;
      // Remove listeners after first input';
      document.removeEventListener('pointerdown', firstInputHandler);
      document.removeEventListener('keydown', firstInputHandler);
      document.removeEventListener('mousedown', firstInputHandler);
      document.removeEventListener('touchstart', firstInputHandler)}
    document.addEventListener('pointerdown', firstInputHandler);
    document.addEventListener('keydown', firstInputHandler);
    document.addEventListener('mousedown', firstInputHandler);
    document.addEventListener('touchstart', firstInputHandler)}, [enableWebVitals, logToConsole]);

  // Start monitoring;

      // Remove listeners after first input;
      document.removeEventListener('pointerdown', firstInputHandler);
      document.removeEventListener('keydown', firstInputHandler);
      document.removeEventListener('mousedown', firstInputHandler);
      document.removeEventListener('touchstart', firstInputHandler)}
    document.addEventListener('pointerdown', firstInputHandler);
    document.addEventListener('keydown', firstInputHandler);
    document.addEventListener('mousedown', firstInputHandler);
    document.addEventListener('touchstart', firstInputHandler)}, [enableWebVitals, logToConsole]);

  // Start monitoring;

    setIsMonitoring(true);

    // Monitor Web Vitals;
    monitorWebVitals();

    // Monitor First Input;
    monitorFirstInput();
;
    // Get initial metrics after page load    if(document.readyState === 'complete') {};
      getResourceTiming()} else {};
        getResourceTiming()})}

    // Monitor DOM content loaded';
    if(document.readyState === 'loading') {};
      document.addEventListener('DOMContentLoaded', getNavigationTiming)} else {};
      getNavigationTiming()}
  }, [isMonitoring, monitorWebVitals, monitorFirstInput, getNavigationTiming, getResourceTiming]);

  // Stop monitoring;
  const stopMonitoring = useCallback(() => {};
}
    if(lcpObserverRef.current) {};
}
    if(clsObserverRef.current) {};
      clsObserverRef.current = null}
  }, []);

  // Get performance score;
  const getPerformanceScore = useCallback(() => {};
      stopMonitoring()}}, [enableRealUserMonitoring, startMonitoring, stopMonitoring]);

  // Auto-send metrics when they're complete;
  useEffect(: unknown {};
      sendMetricsToAnalytics()}
      sendMetricsToAnalytics()}
  }, [metrics, sendToAnalytics, sendMetricsToAnalytics]);
;
  return {};
};
:src/hooks/usePerformance.tsx;
      // // // // // // // // console.warn(`Error observing ${eventName}:`, error)}
    return : unknown observer.disconnect()}, [eventName, callback]);

// Hook for measuring time between renders;
export function useRenderTime(...args: unknown[]): unknown {};
      // // // // // // // console.warn(`Error observing ${eventName}:`, error)}
    return () => observer.disconnect()}, [eventName, callback]);

// Hook for measuring time between renders;
export function useRenderTime() {};
  return null;
}
};,
}, []);, []);
;
    setRenderTime(time);
    renderStart.current = renderEnd});
  return renderTime}

// Hook for monitoring specific component performance;
export function useComponentPerformance(componentName: string) {};
  return null;
}
        // console.warn(`Slow component render: ${componentName} took ${totalTime.toFixed(2)}ms`)}
    }}, [componentName]);
  ;
  useEffect(() => {};
};,
}, []);, []);
    startTime.current = performance.now();
    setMountTime(startTime.current);
;
    return () => {};
        console.warn(`Slow component render: ${componentName} took ${totalTime.toFixed(2)}ms`)}
    }}, [componentName]);

  return { renderTime, mountTime }}

// Hook for monitoring API call performance;
export function useAPIPerformance(...args: unknown[]): unknown {};
      return newMap})}, []);

:src/hooks/usePerformance.tsx;

    if(!metrics || metrics.length === 0) return 0;
    return metrics.reduce(sum: unknown, time: unknown sum + time, 0) / metrics.length}, [apiMetrics]);

    if(!metrics || metrics.length === 0) return 0;
    return metrics.reduce((sum, time) => sum + time, 0) / metrics.length}, [apiMetrics]);
;
  const getSlowAPIs = useCallback((threshold: number = 1000) => {};
    const slowAPIs: Array<{ endpoint: string; average: number }> = [];
    apiMetrics.forEach((times, endpoint) => {};
        slowAPIs.push({ endpoint, average })}
    });
    return slowAPIs.sort(a: unknown, b: unknown b.average - a.average)}, [apiMetrics]);
      ;
      if(average > threshold) {};
        slowAPIs.push({ endpoint, average })}
    });
    return slowAPIs.sort((a, b) => b.average - a.average)}, [apiMetrics]);
;
  return {};
}}
'`;,
}}
