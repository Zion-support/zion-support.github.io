// Performance monitoring utilities
export interface PerformanceData {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private data: PerformanceData[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  recordPerformance(data: PerformanceData): void {
    this.data.push(data);
  }

  getPerformanceData(): PerformanceData[] {
    return [...this.data];
  }

  clearData(): void {
    this.data = [];
  }

  getAveragePerformance(): PerformanceData {
    if (this.data.length === 0) {
      return { loadTime: 0, renderTime: 0, memoryUsage: 0, networkLatency: 0 };
    }

    const sum = this.data.reduce((acc, curr) => ({
      loadTime: acc.loadTime + curr.loadTime,
      renderTime: acc.renderTime + curr.renderTime,
      memoryUsage: acc.memoryUsage + curr.memoryUsage,
      networkLatency: acc.networkLatency + curr.networkLatency,
    }), { loadTime: 0, renderTime: 0, memoryUsage: 0, networkLatency: 0 });

    const count = this.data.length;
    return {
      loadTime: sum.loadTime / count,
      renderTime: sum.renderTime / count,
      memoryUsage: sum.memoryUsage / count,
      networkLatency: sum.networkLatency / count,
    };
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance();
