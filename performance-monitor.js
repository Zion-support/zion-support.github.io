// Performance monitoring utility
export class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
  }

  startTiming(name) {
    this.metrics.set(name, { start: performance.now() }
});
  }

  endTiming(name) {
    const metric = this.metrics.get(name);
    if (metric) {
      metric.end = performance.now();
      metric.duration = metric.end - metric.start;
      console.log(`⏱️ ${name}: ${metric.duration.toFixed(2)}ms`);
    }
  }

  getMetrics() {
    return Object.fromEntries(this.metrics);
  }
}

export const performanceMonitor = new PerformanceMonitor();