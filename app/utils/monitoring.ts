'use client'

// Monitoring utility functions
export interface MonitoringConfig {
  enabled: boolean
  sampleRate: number
  endpoint: string
  debug: boolean
}

export interface PerformanceMetric {
  name: string
  value: number
  timestamp: number
  tags?: Record<string, string>
}

class Monitoring {
  private config: MonitoringConfig
  private metrics: PerformanceMetric[] = []

  constructor(config: Partial<MonitoringConfig> = {}) {
    this.config = {
      enabled: true,
      sampleRate: 1.0,
      endpoint: '/api/metrics',
      debug: false,
      ...config
    }
  }

  trackMetric(name: string, value: number, tags?: Record<string, string>): void {
    if (!this.config.enabled || Math.random() > this.config.sampleRate) return

    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      tags
    }

    this.metrics.push(metric)

    if (this.config.debug) {
      console.log('Metric tracked:', metric)
    }

    // Send metrics in batches
    if (this.metrics.length >= 10) {
      this.flush()
    }
  }

  trackTiming(name: string, startTime: number, tags?: Record<string, string>): void {
    const duration = Date.now() - startTime
    this.trackMetric(name, duration, tags)
  }

  trackCounter(name: string, increment: number = 1, tags?: Record<string, string>): void {
    this.trackMetric(name, increment, tags)
  }

  private async flush(): Promise<void> {
    if (this.metrics.length === 0) return

    const metricsToSend = [...this.metrics]
    this.metrics = []

    try {
      const response = await fetch(this.config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ metrics: metricsToSend })
      })

      if (!response.ok) {
        throw new Error(`Failed to send metrics: ${response.statusText}`)
      }

      if (this.config.debug) {
        console.log('Metrics sent:', metricsToSend.length)
      }
    } catch (error) {
      console.error('Failed to send metrics:', error)
      // Re-add metrics to queue
      this.metrics.unshift(...metricsToSend)
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
export const monitoring = new Monitoring({
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development'
})

export default monitoring
