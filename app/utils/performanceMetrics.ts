// Utility file: performanceMetrics

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  unit: string;
}

export class PerformanceMetrics {
  private metrics: PerformanceMetric[] = [];

  recordMetric(name: string, value: number, unit: string = 'ms'): void {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      unit
    };

    this.metrics.push(metric);
  }

  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  getMetricByName(name: string): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.name === name);
  }

  getAverageMetric(name: string): number {
    const metrics = this.getMetricByName(name);
    if (metrics.length === 0) return 0;
    
    const sum = metrics.reduce((acc, metric) => acc + metric.value, 0);
    return sum / metrics.length;
  }

  clearMetrics(): void {
    this.metrics = [];
  }

  exportMetrics(): string {
    return JSON.stringify(this.metrics, null, 2);
  }
}

export const performanceMetrics = new PerformanceMetrics();