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
        return result.finally(() => {
          this.recordMetric(name, performance.now() - start);
        }) as Promise<T>;
      } else {
        this.recordMetric(name, performance.now() - start);
        return result;
      }
    } catch (error) {
      this.recordMetric(name, performance.now() - start);
      throw error;
    }
  }

  /**
   * Record performance metric
   */
  private recordMetric(name: string, duration: number): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    
    const metrics = this.metrics.get(name)!;
    metrics.push(duration);
    
    // Keep only last 100 measurements
    if (metrics.length > 100) {
      metrics.shift();
    }
  }

  /**
   * Get average performance metric
   */
  getAverageMetric(name: string): number {
    const metrics = this.metrics.get(name);
    if (!metrics || metrics.length === 0) {
      return 0;
    }
    
    const sum = metrics.reduce((acc, val) => acc + val, 0);
    return sum / metrics.length;
  }

  /**
   * Implement debounce for performance
   */
  debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;
    
    return (...args: Parameters<T>) => {
      if (timeout) {
        clearTimeout(timeout);
      }
      
      timeout = setTimeout(() => {
        func(...args);
      }, wait);
    };
  }

  /**
   * Implement throttle for performance
   */
  throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  /**
   * Get all metrics
   */
  getAllMetrics(): Record<string, number[]> {
    const result: Record<string, number[]> = {};
    this.metrics.forEach((value, key) => {
      result[key] = [...value];
    });
    return result;
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
export default performanceOptimizer;