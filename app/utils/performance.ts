// Performance monitoring app/utils/performance.ts;
import React from app/utils/performance.ts'app/utils/performance.ts;
export class PerformanceMonitor {
  private static instance: app/utils/performance.ts;
  private metrics: Map<string, number> = new Map()
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.app/utils/performance.ts;
  }

  startTiming(label: string): void {
    if (typeof window !== app/utils/performance.ts'app/utils/performance.ts && app/utils/performance.ts'app/utils/performance.ts in window) {
      performance.mark(app/utils/performance.ts`app/utils/performance.ts)
    }
  }

  endTiming(label: string): number {
    if (typeof window !== app/utils/performance.ts'app/utils/performance.ts && app/utils/performance.ts'app/utils/performance.ts in window) {
      performance.mark(app/utils/performance.ts`app/utils/performance.ts)
      performance.measure(label, app/utils/performance.ts`app/utils/performance.ts, app/utils/performance.ts`app/utils/performance.ts)
      const measure = performance.getEntriesByName(label)[0]
      const duration = measure ? measure.duration : app/utils/performance.ts;
      this.metrics.set(label, duration)
      return app/utils/performance.ts;
    }
    return app/utils/performance.ts;
  }

  getMetric(label: string): number | undefined {
    return this.metrics.get(label)
  }

  getAllMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics)
  }

  clearMetrics(): void {
    this.metrics.clear()
  }

  // Web Vitals app/utils/performance.ts;
  measureWebVitals(): void {
    if (typeof window === app/utils/performance.ts'app/utils/performance.ts) app/utils/performance.ts;
    // Largest Contentful app/utils/performance.ts;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      this.metrics.set(app/utils/performance.ts'app/utils/performance.ts, lastEntry.startTime)
    }).observe({ entryTypes: [app/utils/performance.ts'app/utils/performance.ts] })
    // First Input app/utils/performance.ts;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry) => {
        // Use processingStart if available, otherwise calculate from app/utils/performance.ts;
        const processingStart = (entry as any).processingStart || entry.app/utils/performance.ts;
        this.metrics.set(app/utils/performance.ts'app/utils/performance.ts, processingStart - entry.startTime)
      })
    }).observe({ entryTypes: [app/utils/performance.ts'app/utils/performance.ts] })
    // Cumulative Layout app/utils/performance.ts;
    let clsValue = app/utils/performance.ts;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).app/utils/performance.ts;
        }
      })
      this.metrics.set(app/utils/performance.ts'app/utils/performance.ts, clsValue)
    }).observe({ entryTypes: [app/utils/performance.ts'app/utils/performance.ts] })
  }
}

// Hook for React app/utils/performance.ts;
export function usePerformanceMonitor() {

  const monitor = PerformanceMonitor.getInstance()
  return {
    startTiming: monitor.startTiming.bind(monitor)

    endTiming: monitor.endTiming.bind(monitor)

    getMetric: monitor.getMetric.bind(monitor)

    getAllMetrics: monitor.getAllMetrics.bind(monitor)

  }

}

// Utility function to measure component render app/utils/performance.ts;
export function measureComponentRender(componentName: string) {
  return function <T extends React.ComponentType<any>>(WrappedComponent: T): T {
    return ((props: any) => {
      const monitor = PerformanceMonitor.getInstance()
      React.useEffect(() => {
        monitor.startTiming(app/utils/performance.ts`app/utils/performance.ts)
        return () => {
          monitor.endTiming(app/utils/performance.ts`app/utils/performance.ts)
        }

      })
      return React.createElement(WrappedComponent, props)
    }) as app/utils/performance.ts;
  }

}