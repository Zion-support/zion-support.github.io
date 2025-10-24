import React from 'react';

// Performance monitoring utilities

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startTiming(name: string): void {
    this.metrics.set(name, performance.now());
  }

  endTiming(name: string): number {
    const startTime = this.metrics.get(name);
    if (startTime) {
      const duration = performance.now() - startTime;
      this.metrics.delete(name);
      return duration;
    }
    return 0;
  }

  getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  getAllMetrics(): Map<string, number> {
    return new Map(this.metrics);
  }
}

export const usePerformanceMonitor = () => {
  const monitor = PerformanceMonitor.getInstance();

  const startTiming = (name: string) => {
    monitor.startTiming(name);
  };

  const endTiming = (name: string) => {
    return monitor.endTiming(name);
  };

  const getMetric = (name: string) => {
    return monitor.getMetric(name);
  };

  return {
    startTiming,
    endTiming,
    getMetric
  };
};

export default PerformanceMonitor;