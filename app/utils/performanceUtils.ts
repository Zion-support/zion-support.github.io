// Utility file: performanceUtils

export interface PerformanceData {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

export class PerformanceUtils {
  measureLoadTime(): number {
    if (typeof window === 'undefined') return 0;
    return performance.now();
  }

  measureRenderTime(): Promise<number> {
    return new Promise((resolve) => {
      const start = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - start;
        resolve(renderTime);
      });
    });
  }

  measureMemoryUsage(): number {
    if (typeof window === 'undefined' || !('memory' in performance)) return 0;
    
    const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
    return memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // Convert to MB
  }

  measureNetworkLatency(): Promise<number> {
    return new Promise((resolve) => {
      const start = performance.now();
      fetch('/api/ping', { method: 'HEAD' })
        .then(() => {
          const latency = performance.now() - start;
          resolve(latency);
        })
        .catch(() => {
          resolve(0);
        });
    });
  }

  async getPerformanceData(): Promise<PerformanceData> {
    const [renderTime, networkLatency] = await Promise.all([
      this.measureRenderTime(),
      this.measureNetworkLatency()
    ]);

    return {
      loadTime: this.measureLoadTime(),
      renderTime,
      memoryUsage: this.measureMemoryUsage(),
      networkLatency
    };
  }

  isPerformanceOptimized(data: PerformanceData): boolean {
    return (
      data.loadTime < 1000 && // Load time under 1 second
      data.renderTime < 16 && // Render time under 16ms (60fps)
      data.memoryUsage < 100 && // Memory usage under 100MB
      data.networkLatency < 200 // Network latency under 200ms
    );
  }
}

export const performanceUtils = new PerformanceUtils();