<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/utils/performanceMetrics.ts
                name: name,
  value: navEntry.loadEventEnd - navEntry.fetchStart,
  unit: unit,
  timestamp: new Date()
                category: category,
  metadata: {
                  domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.fetchStart,
  domInteractive: navEntry.domInteractive - navEntry.fetchStart
<<<<<<< HEAD:all-pages-backup/utils/performanceMetrics.ts
                name: name,
  value: entry.startTime,
  unit: unit,
  timestamp: new Date()
<<<<<<< HEAD:all-pages-backup/utils/performanceMetrics.ts
              name: name,
  value: lastEntry.startTime,
  unit: unit,
  timestamp: new Date()
<<<<<<< HEAD:all-pages-backup/utils/performanceMetrics.ts
            name: name,
  value: clsValue,
  unit: unit,
  timestamp: new Date()
<<<<<<< HEAD:all-pages-backup/utils/performanceMetrics.ts
      name: name,
  value: pageLoadTime,
  unit: unit,
  timestamp: new Date()
      category: category,
  metadata: {
        dnsLookup: perfData.domainLookupEnd - perfData.domainLookupStart,
  tcpConnection: perfData.connectEnd - perfData.connectStart,
  serverResponse: perfData.responseEnd - perfData.requestStart,
  domParsing: perfData.domComplete - perfData.domLoading
<<<<<<< HEAD:all-pages-backup/utils/performanceMetrics.ts
      name: name,
  value: duration,
  unit: unit,
  timestamp: new Date()
      category: category,
  metadata: {
<<<<<<< HEAD:all-pages-backup/utils/performanceMetrics.ts
      name: name,
  value: memory.usedJSHeapSize,
  unit: unit,
  timestamp: new Date()
      category: category,
  metadata: {
        total: memory.totalJSHeapSize,
  limit: memory.jsHeapSizeLimit,
  percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
<<<<<<< HEAD:all-pages-backup/utils/performanceMetrics.ts
      name: name,
  value: endTime - startTime,
  unit: unit,
  timestamp: new Date()
<<<<<<< HEAD:all-pages-backup/utils/performanceMetrics.ts
      name: name,
  value: endTime - startTime,
  unit: unit,
  timestamp: new Date()
<<<<<<< HEAD:all-pages-backup/utils/performanceMetrics.ts
        avgLoadTime,
  totalMetrics: this.metrics.length,
  performanceScore: this.calculatePerformanceScore()
<<<<<<< HEAD:all-pages-backup/utils/performanceMetrics.ts
export const performanceMetrics = PerformanceMetrics.getInstance();
export default PerformanceMetrics
=======
'use client'
  "category": 'load' | 'runtime' | 'network' | 'memory' | 'custom',
    if (typeof window !== 'undefined'
    if ('PerformanceObserver'
            if (entry.entryType === 'navigation'
        navObserver.observe({ "entryTypes": ['navigation');
            if (entry.name === 'first-contentful-paint'
                "category": 'load',
        paintObserver.observe({ "entryTypes": ['paint');
              "category": 'load',
        lcpObserver.observe({ "entryTypes": ['largest-contentful-paint');
            "category": 'runtime',
        clsObserver.observe({ "entryTypes": ['layout-shift');
        console.error('Failed to initialize performance "observers": ');
    if (typeof window === 'undefined'
    if (typeof window === 'undefined'
      "category": 'runtime',
      "category": 'runtime',
  getMetricsByCategory("category": PerformanceMetric['category');
      recommendations.push('Optimize First Contentful Paint (FCP) - consider reducing render-blocking resources'
      recommendations.push('Improve Largest Contentful Paint (LCP) - optimize largest element loading'
      recommendations.push('Reduce Cumulative Layout Shift (CLS) - add size attributes to images and embeds'
      recommendations.push('Reduce First Input Delay (FID) - optimize JavaScript execution'
    const networkMetrics = this.getMetricsByCategory('network'
      recommendations.push('Optimize network requests - consider caching and reducing payload sizes'}
    const loadMetrics = this.getMetricsByCategory('load'
>>>>>>> origin/main
