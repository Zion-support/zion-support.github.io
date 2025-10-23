// Performance metrics utility
export interface PerformanceMetric {
  name: string
  value: number
  timestamp: Date
  unit?: string
  category?: string
}

export interface PerformanceConfig {
  enabled: boolean
  sampleRate: number
  maxMetrics: number
  categories: string[]
}

export class PerformanceMetrics {
  private config: PerformanceConfig
  private metrics: PerformanceMetric[] = []

  constructor(config: PerformanceConfig) {
    this.config = config
  }

  recordMetric(name: string, value: number, unit?: string, category?: string): void {
    if (!this.config.enabled) return

    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: new Date(),
      unit,
      category: category || 'default'
    }

    this.metrics.push(metric)

    // Keep only the most recent metrics
    if (this.metrics.length > this.config.maxMetrics) {
      this.metrics = this.metrics.slice(-this.config.maxMetrics)
    }
  }

  getMetrics(name?: string, category?: string): PerformanceMetric[] {
    let filtered = [...this.metrics]

    if (name) {
      filtered = filtered.filter(m => m.name === name)
    }

    if (category) {
      filtered = filtered.filter(m => m.category === category)
    }

    return filtered
  }

  getAverageMetric(name: string, category?: string): number | null {
    const metrics = this.getMetrics(name, category)
    if (metrics.length === 0) return null

    const sum = metrics.reduce((acc, metric) => acc + metric.value, 0)
    return sum / metrics.length
  }

  getMaxMetric(name: string, category?: string): number | null {
    const metrics = this.getMetrics(name, category)
    if (metrics.length === 0) return null

    return Math.max(...metrics.map(m => m.value))
  }

  getMinMetric(name: string, category?: string): number | null {
    const metrics = this.getMetrics(name, category)
    if (metrics.length === 0) return null

    return Math.min(...metrics.map(m => m.value))
  }

  getMetricsByCategory(category: string): PerformanceMetric[] {
    return this.getMetrics(undefined, category)
  }

  clearMetrics(): void {
    this.metrics = []
  }

  exportMetrics(): PerformanceMetric[] {
    return [...this.metrics]
  }
}

export default PerformanceMetrics