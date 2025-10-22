'use client'

// Performance Enhancer utility functions
export interface PerformanceConfig {
  enabled: boolean
  sampleRate: number
  debug: boolean
}

export interface PerformanceMetric {
  name: string
  value: number
  timestamp: number
  type: 'timing' | 'counter' | 'gauge'
}

class PerformanceEnhancer {
  private config: PerformanceConfig
  private metrics: PerformanceMetric[] = []

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enabled: true,
      sampleRate: 1.0,
      debug: false,
      ...config
    }
  }

  measureTiming(name: string, fn: () => void): any {
    if (!this.config.enabled) return fn()

    const startTime = performance.now()
    const result = fn()
    const endTime = performance.now()
    
    this.trackMetric(name, endTime - startTime, 'timing')
    return result
  }

  async measureAsyncTiming<T>(name: string, fn: () => Promise<T>): Promise<T> {
    if (!this.config.enabled) return fn()

    const startTime = performance.now()
    const result = await fn()
    const endTime = performance.now()
    
    this.trackMetric(name, endTime - startTime, 'timing')
    return result
  }

  trackMetric(name: string, value: number, type: 'timing' | 'counter' | 'gauge' = 'gauge'): void {
    if (!this.config.enabled || Math.random() > this.config.sampleRate) return

    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      type
    }

    this.metrics.push(metric)

    if (this.config.debug) {
      console.log('Performance metric:', metric)
    }
  }

  getMetrics(): PerformanceMetric[] {
    return [...this.metrics]
  }

  clearMetrics(): void {
    this.metrics = []
  }
}

// Create default instance
export const performanceEnhancer = new PerformanceEnhancer({
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development'
})

export default performanceEnhancer
