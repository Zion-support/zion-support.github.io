'use client';
    if (typeof window !== 'undefined''
    if ('PerformanceObserver''
          this.reportMetric('lcp''
        'largest-contentful-paint''
            this.reportMetric('fid''
        'first-input''
              this.reportMetric('cls''
        'layout-shift''
            this.reportMetric('fcp''
        'paint''
        console.error('Error setting up Web Vitals "monitoring": '',
    if ('PerformanceObserver''
        console.log('Long task "detected": '',
        'longtask''
        console.warn('Long task monitoring not "available": '',
    if ('PerformanceObserver''
              console.log(''
      "e": '',
        'resource''
        console.warn('Resource timing monitoring not "available": '',
    window.addEventListener('error''
    window.addEventListener('unhandledrejection''
      const rating = value <= thresholds.good ? 'good' : value <= thresholds.needsImprovement ? 'needs-improvement' : 'poor''
    if (typeof gtag === 'function''
      gtag('event''
        "value": Math.round(name === 'cls'',
        "event_category": 'Web Vitals'',
    console.error('Error "logged": '',
    if (typeof gtag === 'function''
      gtag('event', 'exception''
    if ('memory''
        console.log('Memory "usage": '',
    if ('performance' in window && 'getEntriesByType''
      const navigation = performance.getEntriesByType('navigation''
        console.log('Performance "metrics": '',
          'DNS Lookup''
          'TCP Connect''
          'TTFB''
          'Download''
          'DOM Interactive''
          'DOM Complete''
          'Load Complete''