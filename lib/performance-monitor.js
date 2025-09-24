// Performance monitoring utilities
export const performanceMonitor ={
  // Measure page load time
  measurePageLoad: () => {
    if (typeof globalThis === 'undefined') return 0
    const perf = globalThis.performance
    if (!perf) return 0
    const entries = perf.getEntriesByType('navigation')
    const navigation = entries && entries[0]
    const loadTime = navigation ? (navigation.loadEventEnd - navigation.loadEventStart) : 0
    return loadTime
  },

  // Measure component render time
  measureRender: (componentName = 'Component') => {
    const perfLike = (typeof globalThis !== 'undefined' && globalThis.performance) ? globalThis.performance : Date
    const start = perfLike.now()
    return () => {
      const end = perfLike.now()
      const renderTime = end - start
      // eslint-disable-next-line no-undef
      console.log(`${componentName} render time:`, renderTime, 'ms')
      return renderTime
    }
  },

  // Monitor bundle size
  monitorBundleSize: () => {
    if (typeof globalThis === 'undefined') return 0
    const perf = globalThis.performance
    if (!perf) return 0
    const resources = perf.getEntriesByType('resource')
    const jsResources = resources.filter((r) => typeof r.name === 'string' && r.name.endsWith('.js'))
    const totalSize = jsResources.reduce((sum, r) => sum + (r.transferSize || 0), 0)
    return totalSize
  }
}

export default performanceMonitor
