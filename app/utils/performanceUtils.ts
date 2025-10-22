'use client'

// Performance Utils utility functions
export interface PerformanceConfig {
  enabled: boolean
  debug: boolean
}

export interface PerformanceData {
  name: string
  value: number
  timestamp: number
  type: 'timing' | 'memory' | 'resource'
}

class PerformanceUtils {
  private config: PerformanceConfig
  private data: PerformanceData[] = []

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enabled: true,
      debug: false,
      ...config
    }
  }

  measureTiming(name: string, fn: () => void): any {
    if (!this.config.enabled) return fn()

    const startTime = performance.now()
    const result = fn()
    const endTime = performance.now()
    
    this.trackData(name, endTime - startTime, 'timing')
    return result
  }

  async measureAsyncTiming<T>(name: string, fn: () => Promise<T>): Promise<T> {
    if (!this.config.enabled) return fn()

    const startTime = performance.now()
    const result = await fn()
    const endTime = performance.now()
    
    this.trackData(name, endTime - startTime, 'timing')
    return result
  }

  measureMemory(name: string): void {
    if (!this.config.enabled) return

    if ('memory' in performance) {
      const memory = (performance as any).memory
      const usedMemory = memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      this.trackData(name, usedMemory, 'memory')
    }
  }

  measureResource(name: string, resource: string): void {
    if (!this.config.enabled) return

    const startTime = performance.now()
    
    const img = new Image()
    img.onload = () => {
      const endTime = performance.now()
      this.trackData(name, endTime - startTime, 'resource')
    }
    img.src = resource
  }

  trackData(name: string, value: number, type: 'timing' | 'memory' | 'resource'): void {
    if (!this.config.enabled) return

    const data: PerformanceData = {
      name,
      value,
      timestamp: Date.now(),
      type
    }

    this.data.push(data)

    if (this.config.debug) {
      console.log('Performance data tracked:', data)
    }
  }

  getData(): PerformanceData[] {
    return [...this.data]
  }

  clearData(): void {
    this.data = []
  }
}

// Create default instance
export const performanceUtils = new PerformanceUtils({
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development'
})

export default performanceUtils
