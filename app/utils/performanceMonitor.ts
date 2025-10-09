'use client';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  };

  public startTiming(label: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(`${label}-start`);
    }
  }

  public endTiming(label: string): number {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);
      const measure = performance.getEntriesByName(label)[0];
      return measure ? measure.duration : 0;
    }
    return 0;
  }

  public measureLoadTime(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        this.metrics.loadTime = performance.now();
      });
    }
  }

  public measureMemoryUsage(): void {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
    }
  }

  public measureNetworkLatency(): void {
    if (typeof window !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        this.metrics.networkLatency = connection.rtt || 0;
      }
    }
  }

  public reportMetrics(): void {
    this.measureLoadTime();
    this.measureMemoryUsage();
    this.measureNetworkLatency();

    // Log metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', this.metrics);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        load_time: this.metrics.loadTime,
        memory_usage: this.metrics.memoryUsage,
        network_latency: this.metrics.networkLatency
      });
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
}

export const performanceMonitor = new PerformanceMonitor();