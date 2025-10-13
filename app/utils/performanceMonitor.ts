// Performance Monitor utility
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  timestamp: Date;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startTiming(label: string): void {
    performance.mark(`${label}-start`);
  }

  endTiming(label: string): number {
    performance.mark(`${label}-end`);
    performance.measure(label, `${label}-start`, `${label}-end`);
    const measure = performance.getEntriesByName(label)[0];
    return measure ? measure.duration : 0;
  }

  recordMetric(metric: Partial<PerformanceMetrics>): void {
    const fullMetric: PerformanceMetrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      timestamp: new Date(),
      ...metric
    };
    this.metrics.push(fullMetric);
  }

  getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  clearMetrics(): void {
    this.metrics = [];
  }
}

export default PerformanceMonitor;