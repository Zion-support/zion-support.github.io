'use client'

// Performance Metrics utility functions
export interface MetricData {
  name: string
  value: number
  timestamp: number
  tags?: Record<string, string>
}

export interface PerformanceConfig {
  enabled: boolean
  sampleRate: number
  debug: boolean
}

class PerformanceMetrics {
  private config: PerformanceConfig
  private metrics: MetricData[] = []

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enabled: true,
      sampleRate: 1.0,
      debug: false,
      ...config
    }
  }

  track(name: string, value: number, tags?: Record<string, string>): void {
    if (!this.config.enabled || Math.random() > this.config.sampleRate) return

    const metric: MetricData = {
      name,
      value,
      timestamp: Date.now(),
      tags
    }

    this.metrics.push(metric)

    if (this.config.debug) {
      console.log('Performance metric tracked:', metric)
    }
  }

  timing(name: string, startTime: number, tags?: Record<string, string>): void {
    const duration = Date.now() - startTime
    this.track(name, duration, tags)
  }

  counter(name: string, increment: number = 1, tags?: Record<string, string>): void {
    this.track(name, increment, tags)
  }

  gauge(name: string, value: number, tags?: Record<string, string>): void {
    this.track(name, value, tags)
  }

  getMetrics(): MetricData[] {
    return [...this.metrics]
  }

  clearMetrics(): void {
    this.metrics = []
  }
}

// Create default instance
export const performanceMetrics = new PerformanceMetrics({
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development'
})

export default performanceMetrics
