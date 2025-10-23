// Performance monitoring utility
export interface PerformanceMonitoringConfig {
  enabled: boolean
  sampleRate: number
  maxMetrics: number
  trackMemory: boolean
  trackTiming: boolean
  trackNetwork: boolean
}

export interface MonitoringData {
  timestamp: Date
  value: number
  label: string
  category: string
}

export class PerformanceMonitoring {
  private config: PerformanceMonitoringConfig
  private data: MonitoringData[] = []
  private intervalId?: NodeJS.Timeout

  constructor(config: PerformanceMonitoringConfig) {
    this.config = {
      sampleRate: 1.0,
      maxMetrics: 1000,
      trackMemory: true,
      trackTiming: true,
      trackNetwork: true,
      ...config
    }
  }

  start(): void {
    if (!this.config.enabled) return

    this.intervalId = setInterval(() => {
      this.collectData()
    }, 1000) // Collect data every second
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = undefined
    }
  }

  private collectData(): void {
    const timestamp = new Date()

    if (this.config.trackMemory) {
      this.collectMemoryData(timestamp)
    }

    if (this.config.trackTiming) {
      this.collectTimingData(timestamp)
    }

    if (this.config.trackNetwork) {
      this.collectNetworkData(timestamp)
    }

    // Keep only recent data points
    if (this.data.length > this.config.maxMetrics) {
      this.data = this.data.slice(-this.config.maxMetrics)
    }
  }

  private collectMemoryData(timestamp: Date): void {
    if (typeof performance === 'undefined') return

    const memory = (performance as any).memory
    if (memory) {
      this.addDataPoint(timestamp, memory.usedJSHeapSize, 'memory_used', 'memory')
      this.addDataPoint(timestamp, memory.totalJSHeapSize, 'memory_total', 'memory')
      this.addDataPoint(timestamp, memory.jsHeapSizeLimit, 'memory_limit', 'memory')
    }
  }

  private collectTimingData(timestamp: Date): void {
    if (typeof performance === 'undefined') return

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      this.addDataPoint(timestamp, navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart, 'dom_ready', 'timing')
      this.addDataPoint(timestamp, navigation.loadEventEnd - navigation.loadEventStart, 'page_load', 'timing')
    }
  }

  private collectNetworkData(timestamp: Date): void {
    if (typeof performance === 'undefined') return

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
    const totalSize = resources.reduce((sum, resource) => sum + (resource.transferSize || 0), 0)
    
    this.addDataPoint(timestamp, totalSize, 'total_transfer_size', 'network')
    this.addDataPoint(timestamp, resources.length, 'resource_count', 'network')
  }

  private addDataPoint(timestamp: Date, value: number, label: string, category: string): void {
    this.data.push({
      timestamp,
      value,
      label,
      category
    })
  }

  getData(label?: string, category?: string): MonitoringData[] {
    let filtered = [...this.data]

    if (label) {
      filtered = filtered.filter(d => d.label === label)
    }

    if (category) {
      filtered = filtered.filter(d => d.category === category)
    }

    return filtered
  }

  getAverageValue(label: string, category?: string): number | null {
    const filteredData = this.getData(label, category)
    if (filteredData.length === 0) return null

    const sum = filteredData.reduce((acc, d) => acc + d.value, 0)
    return sum / filteredData.length
  }

  getMaxValue(label: string, category?: string): number | null {
    const filteredData = this.getData(label, category)
    if (filteredData.length === 0) return null

    return Math.max(...filteredData.map(d => d.value))
  }

  getMinValue(label: string, category?: string): number | null {
    const filteredData = this.getData(label, category)
    if (filteredData.length === 0) return null

    return Math.min(...filteredData.map(d => d.value))
  }

  getDataByCategory(category: string): MonitoringData[] {
    return this.getData(undefined, category)
  }

  clearData(): void {
    this.data = []
  }

  exportData(): MonitoringData[] {
    return [...this.data]
  }
}

export default PerformanceMonitoring