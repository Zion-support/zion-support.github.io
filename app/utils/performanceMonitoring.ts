'use client'

// Performance Monitoring utility functions
export interface MonitoringConfig {
  enabled: boolean
  sampleRate: number
  debug: boolean
}

export interface PerformanceData {
  name: string
  value: number
  timestamp: number
  type: 'timing' | 'counter' | 'gauge'
}

class PerformanceMonitoring {
  private config: MonitoringConfig
  private data: PerformanceData[] = []

  constructor(config: Partial<MonitoringConfig> = {}) {
    this.config = {
      enabled: true,
      sampleRate: 1.0,
      debug: false,
      ...config
    }
  }

  track(name: string, value: number, type: 'timing' | 'counter' | 'gauge' = 'gauge'): void {
    if (!this.config.enabled || Math.random() > this.config.sampleRate) return

    const metric: PerformanceData = {
      name,
      value,
      timestamp: Date.now(),
      type
    }

    this.data.push(metric)

    if (this.config.debug) {
      console.log('Performance data tracked:', metric)
    }
  }

  timing(name: string, startTime: number): void {
    const duration = Date.now() - startTime
    this.track(name, duration, 'timing')
  }

  counter(name: string, increment: number = 1): void {
    this.track(name, increment, 'counter')
  }

  gauge(name: string, value: number): void {
    this.track(name, value, 'gauge')
  }

  getData(): PerformanceData[] {
    return [...this.data]
  }

  clearData(): void {
    this.data = []
  }
}

// Create default instance
export const performanceMonitoring = new PerformanceMonitoring({
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development'
})

export default performanceMonitoring
