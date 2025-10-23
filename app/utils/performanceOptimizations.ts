// Performance optimization utility
export interface PerformanceConfig {
  enabled: boolean
  debounceDelay: number
  throttleDelay: number
  maxCacheSize: number
}

export class PerformanceOptimizer {
  private config: PerformanceConfig
  private cache: Map<string, any> = new Map()
  private debounceTimers: Map<string, NodeJS.Timeout> = new Map()
  private throttleTimers: Map<string, NodeJS.Timeout> = new Map()

  constructor(config: PerformanceConfig) {
    this.config = config
  }

  debounce<T extends (...args: any[]) => any>(
    key: string,
    func: T,
    delay?: number
  ): T {
    const actualDelay = delay || this.config.debounceDelay

    return ((...args: Parameters<T>) => {
      // Clear existing timer
      const existingTimer = this.debounceTimers.get(key)
      if (existingTimer) {
        clearTimeout(existingTimer)
      }

      // Set new timer
      const timer = setTimeout(() => {
        func(...args)
        this.debounceTimers.delete(key)
      }, actualDelay)

      this.debounceTimers.set(key, timer)
    }) as T
  }

  throttle<T extends (...args: any[]) => any>(
    key: string,
    func: T,
    delay?: number
  ): T {
    const actualDelay = delay || this.config.throttleDelay

    return ((...args: Parameters<T>) => {
      // If timer exists, don't execute
      if (this.throttleTimers.has(key)) {
        return
      }

      // Execute immediately
      func(...args)

      // Set timer to prevent immediate re-execution
      const timer = setTimeout(() => {
        this.throttleTimers.delete(key)
      }, actualDelay)

      this.throttleTimers.set(key, timer)
    }) as T
  }

  memoize<T extends (...args: any[]) => any>(func: T): T {
    return ((...args: Parameters<T>) => {
      const key = JSON.stringify(args)
      
      if (this.cache.has(key)) {
        return this.cache.get(key)
      }

      const result = func(...args)
      
      // Check cache size limit
      if (this.cache.size >= this.config.maxCacheSize) {
        const firstKey = this.cache.keys().next().value
        this.cache.delete(firstKey)
      }

      this.cache.set(key, result)
      return result
    }) as T
  }

  clearCache(): void {
    this.cache.clear()
  }

  clearTimers(): void {
    this.debounceTimers.forEach(timer => clearTimeout(timer))
    this.throttleTimers.forEach(timer => clearTimeout(timer))
    this.debounceTimers.clear()
    this.throttleTimers.clear()
  }

  cleanup(): void {
    this.clearCache()
    this.clearTimers()
  }
}

export default PerformanceOptimizer