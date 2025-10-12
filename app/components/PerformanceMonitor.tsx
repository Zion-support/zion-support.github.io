ursor/analyze-improve-and-deploy-application-c354

      // Measure Time to First Byte (TTFB)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }))
            }
          }
        })
        observer.observe({ entryTypes: ['navigation'] })
      }
    }

    // Start measuring after a short delay to ensure page is loaded
    const timeoutId = setTimeout(measurePerformance, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  // Send metrics to analytics (if available)
  useEffect(() => {
    if (Object.keys(metrics).length > 0 && typeof window !== 'undefined') {
      // Send to Google Analytics or other analytics service
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: Math.round(metrics.lcp || 0),
          custom_map: {
            fcp: metrics.fcp,
            lcp: metrics.lcp,
            fid: metrics.fid,
            cls: metrics.cls,
            ttfb: metrics.ttfb
          }
        })
      }
    }
  }, [metrics])

  // Don't render anything visible
  return null
}

export default PerformanceMonitor
