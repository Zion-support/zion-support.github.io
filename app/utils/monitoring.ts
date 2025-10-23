// Monitoring utility
export interface MonitoringConfig {
  enabled: boolean
  interval: number
  maxDataPoints: number
}

export interface MonitoringData {
  timestamp: Date
  value: number
  label: string
}

export class Monitoring {
  private config: MonitoringConfig
  private data: MonitoringData[] = []
  private intervalId?: NodeJS.Timeout

  constructor(config: MonitoringConfig) {
    this.config = config
  }

  start(): void {
    if (!this.config.enabled || this.intervalId) return

    this.intervalId = setInterval(() => {
      this.collectData()
    }, this.config.interval)
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = undefined
    }
  }

  private collectData(): void {
    // Collect performance data
    const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0
    const timestamp = new Date()

    this.data.push({
      timestamp,
      value: memoryUsage,
      label: 'memory_usage'
    })

    // Keep only recent data points
    if (this.data.length > this.config.maxDataPoints) {
      this.data = this.data.slice(-this.config.maxDataPoints)
    }
  }

  getData(): MonitoringData[] {
    return [...this.data]
  }

  getAverageValue(label: string): number | null {
    const filteredData = this.data.filter(d => d.label === label)
    if (filteredData.length === 0) return null

    const sum = filteredData.reduce((acc, d) => acc + d.value, 0)
    return sum / filteredData.length
  }

  clearData(): void {
    this.data = []
  }
}

export default Monitoring