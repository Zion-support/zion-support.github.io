'use client';

import { useEffect } from 'react';

// Performance monitoring utilities
export const usePerformanceMonitor = (fn: () => void) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      fn();
    } else {
      fn();
    }
  }, []);
};

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics = new Map<string, number>();

  private constructor() {}

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Measure performance
  measure(name: string, fn: () => void): void {
    const start = performance.now();
    fn();
    const end = performance.now();
    this.metrics.set(name, end - start);
  }

  // Get metrics
  getMetrics(): Map<string, number> {
    return new Map(this.metrics);
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
  }

  // Get performance score
  getPerformanceScore(): number {
    const metrics = Array.from(this.metrics.values());
    if (metrics.length === 0) return 100;

    const average = metrics.reduce((sum, value) => sum + value, 0) / metrics.length;
    return Math.max(0, 100 - average);
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();
export default performanceMonitor;