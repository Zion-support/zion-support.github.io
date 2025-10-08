import React from 'react';
/**
 * Advanced Performance Optimizer
 * Generated: 2025-10-08T02:06:22.084Z
 */

export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number[]>;

  private constructor() {
    this.metrics = new Map();
  }

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  /**
   * Measure function execution time
   */
  measurePerformance<T>(
    name: string,
    fn: () => T | Promise<T>
  ): T | Promise<T> {
    const start = performance.now();
    
    try {
      const result = fn();
      
      if (result instanceof Promise) {
        return result.then((res) => {
          const duration = performance.now() - start;
          this.recordMetric(name, duration);
          return res;
        });
      } else {
        const duration = performance.now() - start;
        this.recordMetric(name, duration);
        return result;
      }
    } catch (error) {
      const duration = performance.now() - start;
      this.recordMetric(`${name}_error`, duration);
      throw error;
    }
  }

  /**
   * Record a performance metric
   */
  recordMetric(name: string, value: number): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    
    const values = this.metrics.get(name)!;
    values.push(value);
    
    // Keep only the last 100 measurements
    if (values.length > 100) {
      values.shift();
    }
  }

  /**
   * Get average performance for a metric
   */
  getAverageMetric(name: string): number {
    const values = this.metrics.get(name);
    if (!values || values.length === 0) return 0;
    
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  }

  /**
   * Get all metrics
   */
  getAllMetrics(): Map<string, number[]> {
    return new Map(this.metrics);
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics.clear();
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary(): Record<string, { average: number; count: number; min: number; max: number }> {
    const summary: Record<string, { average: number; count: number; min: number; max: number }> = {};
    
    this.metrics.forEach((values, name) => {
      if (values.length > 0) {
        const average = values.reduce((acc, val) => acc + val, 0) / values.length;
        const min = Math.min(...values);
        const max = Math.max(...values);
        
        summary[name] = {
          average,
          count: values.length,
          min,
          max
        };
      }
    });
    
    return summary;
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();