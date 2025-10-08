/**
 * Observability & Monitoring Utilities
 * Generated: October 8, 2025
 * 
 * Comprehensive monitoring, metrics, and observability features
 */

import { logger } from './enhancedLogger';

export interface Metric {
  name: string;
  value: number;
  timestamp: number;
  tags?: Record<string, string>;
}

export interface Trace {
  id: string;
  name: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  status: 'pending' | 'success' | 'error';
  metadata?: Record<string, any>;
}

export class ObservabilityManager {
  private static instance: ObservabilityManager;
  private metrics: Metric[];
  private traces: Map<string, Trace>;
  private maxMetrics: number;

  private constructor() {
    this.metrics = [];
    this.traces = new Map();
    this.maxMetrics = 10000;
  }

  static getInstance(): ObservabilityManager {
    if (!ObservabilityManager.instance) {
      ObservabilityManager.instance = new ObservabilityManager();
    }
    return ObservabilityManager.instance;
  }

  /**
   * Record a metric
   */
  recordMetric(
    name: string,
    value: number,
    tags?: Record<string, string>
  ): void {
    const metric: Metric = {
      name,
      value,
      timestamp: Date.now(),
      tags,
    };

    this.metrics.push(metric);

    // Limit metric storage
    if (this.metrics.length > this.maxMetrics) {
      this.metrics.shift();
    }

    logger.debug('Metric recorded', { name, value });
  }

  /**
   * Start a trace
   */
  startTrace(name: string, metadata?: Record<string, any>): string {
    const traceId = this.generateTraceId();
    const trace: Trace = {
      id: traceId,
      name,
      startTime: Date.now(),
      status: 'pending',
      metadata,
    };

    this.traces.set(traceId, trace);
    logger.debug('Trace started', { traceId, name });

    return traceId;
  }

  /**
   * End a trace
   */
  endTrace(traceId: string, status: 'success' | 'error' = 'success'): void {
    const trace = this.traces.get(traceId);
    if (!trace) {
      logger.warn('Trace not found', { traceId });
      return;
    }

    trace.endTime = Date.now();
    trace.duration = trace.endTime - trace.startTime;
    trace.status = status;

    logger.info('Trace completed', {
      traceId,
      name: trace.name,
      duration: trace.duration,
      status,
    });

    // Record as metric
    this.recordMetric(`trace.${trace.name}.duration`, trace.duration, {
      status,
    });
  }

  /**
   * Measure execution time
   */
  async measure<T>(
    name: string,
    fn: () => T | Promise<T>,
    metadata?: Record<string, any>
  ): Promise<T> {
    const traceId = this.startTrace(name, metadata);

    try {
      const result = await Promise.resolve(fn());
      this.endTrace(traceId, 'success');
      return result;
    } catch (error) {
      this.endTrace(traceId, 'error');
      throw error;
    }
  }

  /**
   * Get metrics by name
   */
  getMetrics(name: string, limit: number = 100): Metric[] {
    return this.metrics
      .filter((m) => m.name === name)
      .slice(-limit);
  }

  /**
   * Get metric statistics
   */
  getMetricStats(name: string): {
    count: number;
    avg: number;
    min: number;
    max: number;
    latest: number;
  } | null {
    const metrics = this.getMetrics(name);

    if (metrics.length === 0) {
      return null;
    }

    const values = metrics.map((m) => m.value);
    const sum = values.reduce((a, b) => a + b, 0);

    return {
      count: values.length,
      avg: sum / values.length,
      min: Math.min(...values),
      max: Math.max(...values),
      latest: values[values.length - 1],
    };
  }

  /**
   * Get all traces
   */
  getTraces(limit: number = 100): Trace[] {
    return Array.from(this.traces.values()).slice(-limit);
  }

  /**
   * Get trace by ID
   */
  getTrace(traceId: string): Trace | undefined {
    return this.traces.get(traceId);
  }

  /**
   * Generate unique trace ID
   */
  private generateTraceId(): string {
    return `trace-${Date.now()}-${Math.random().toString(36).substring(7)}`;
  }

  /**
   * Export metrics for analysis
   */
  exportMetrics(): Metric[] {
    return [...this.metrics];
  }

  /**
   * Clear old traces
   */
  clearOldTraces(maxAge: number = 3600000): number {
    const cutoff = Date.now() - maxAge;
    let cleared = 0;

    this.traces.forEach((trace, id) => {
      if (trace.startTime < cutoff) {
        this.traces.delete(id);
        cleared++;
      }
    });

    if (cleared > 0) {
      logger.info('Cleared old traces', { count: cleared });
    }

    return cleared;
  }

  /**
   * Get summary dashboard
   */
  getDashboard(): {
    metrics: { total: number; unique: number };
    traces: { total: number; pending: number; success: number; error: number };
    topMetrics: Array<{ name: string; count: number }>;
  } {
    const uniqueMetrics = new Set(this.metrics.map((m) => m.name));
    const metricCounts = new Map<string, number>();

    this.metrics.forEach((m) => {
      metricCounts.set(m.name, (metricCounts.get(m.name) || 0) + 1);
    });

    const topMetrics = Array.from(metricCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([name, count]) => ({ name, count }));

    const traceCounts = {
      total: this.traces.size,
      pending: 0,
      success: 0,
      error: 0,
    };

    this.traces.forEach((trace) => {
      traceCounts[trace.status]++;
    });

    return {
      metrics: {
        total: this.metrics.length,
        unique: uniqueMetrics.size,
      },
      traces: traceCounts,
      topMetrics,
    };
  }
}

// Export singleton instance
export const observability = ObservabilityManager.getInstance();

export default observability;
