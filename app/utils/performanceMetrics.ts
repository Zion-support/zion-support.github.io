// Performance metrics collection utilities
export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  category: 'navigation' | 'paint' | 'layout' | 'script' | 'network';
}

export class PerformanceMetricsCollector {
  private metrics: PerformanceMetric[] = [];

  collectMetric(name: string, value: number, category: PerformanceMetric['category']): void {
    this.metrics.push({
      name,
      value,
      timestamp: Date.now(),
      category,
    });
  }

  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  clearMetrics(): void {
    this.metrics = [];
  }

  getMetricsByCategory(category: PerformanceMetric['category']): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.category === category);
  }
}

export const performanceMetricsCollector = new PerformanceMetricsCollector();
