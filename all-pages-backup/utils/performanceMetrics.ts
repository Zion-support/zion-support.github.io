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
